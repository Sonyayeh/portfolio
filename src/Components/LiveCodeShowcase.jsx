import { useState, useEffect } from 'react';
import { tokenize } from './highlight';

/**
 * LiveCodeShowcase
 * ─────────────────────────────────────────────────────────────────────
 * Unlike CodeShowcase/AppShowcase (which take code/media you pass in
 * directly), this one fetches everything itself at runtime:
 *  - the file list + source code, straight from GitHub's public API
 *  - a real, live <iframe> pointed at your deployed web build
 *
 * Usage:
 *   <LiveCodeShowcase
 *     repo="Sonyayeh/boardwalk-boutique-app"
 *     branch="main"
 *     folderPath="boardwalk-boutique"
 *     demoUrl="https://your-deployed-demo-url.vercel.app"
 *   />
 *
 * Requirements / limits worth knowing:
 *  - `repo` must be public (GitHub's unauthenticated API can't read
 *    private repos from the browser).
 *  - `folderPath` is read ONE LEVEL DEEP only — it lists files
 *    directly inside that folder, not subfolders. If your real source
 *    lives nested deeper (e.g. boardwalk-boutique/screens/), point
 *    `folderPath` at that exact folder instead.
 *  - Unauthenticated GitHub API calls are capped at 60/hour per
 *    visitor IP. Fine for normal portfolio traffic; if you ever hit
 *    the limit, GitHub's API will return a 403 and this component
 *    will show the error state below rather than crash.
 *  - `demoUrl` only works if the host allows being embedded in an
 *    iframe (most hosts, including Vercel, do by default — but if you
 *    ever add custom security headers, make sure X-Frame-Options /
 *    CSP frame-ancestors doesn't block it).
 *
 * Layout: below the `md` breakpoint, only one pane shows at a time —
 * a "Phone" / "Code" pill switcher toggles between them. At `md` and
 * up, the switcher disappears and both panes show side by side.
 */

const TOKEN_CLASSES = {
  keyword: 'text-[#00D3FF]',
  string: 'text-[#B0FF00]',
  tag: 'text-[#86d6ff]',
  attr: 'text-[#b8a6ff]',
  comment: 'text-[#635d7a] italic',
  number: 'text-[#86ffcf]',
  func: 'text-[#86d6ff]',
  selector: 'text-[#86d6ff] font-semibold',
  punct: 'text-[#F700FF]',
  plain: 'text-[#F700FF]',
  property: 'text-[#b8a6ff]',
};

const EXTENSION_LANGUAGE = {
  '.js': 'jsx',
  '.jsx': 'jsx',
  '.ts': 'jsx',
  '.tsx': 'jsx',
  '.css': 'css',
  '.json': 'jsx',
};

function getExtension(name) {
  const dot = name.lastIndexOf('.');
  return dot === -1 ? '' : name.slice(dot);
}

export default function LiveCodeShowcase({ repo, branch = 'main', folderPath = '', demoUrl }) {
  const [files, setFiles] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [codeCache, setCodeCache] = useState({});
  const [status, setStatus] = useState('loading'); // 'loading' | 'ready' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [activePane, setActivePane] = useState('phone'); // 'phone' | 'code' — mobile-only switcher

  // Fetch the file listing once, whenever repo/branch/folderPath change
  useEffect(() => {
    let cancelled = false;
    setStatus('loading');

    const apiUrl = `https://api.github.com/repos/${repo}/contents/${folderPath}?ref=${branch}`;

    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API returned ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        const codeFiles = (Array.isArray(data) ? data : []).filter(
          (item) => item.type === 'file' && EXTENSION_LANGUAGE[getExtension(item.name)]
        );
        if (codeFiles.length === 0) {
          setStatus('error');
          setErrorMessage('No code files found directly in that folder (subfolders are not searched).');
          return;
        }
        setFiles(codeFiles);
        setActiveIndex(0);
        setStatus('ready');
      })
      .catch((err) => {
        if (cancelled) return;
        setStatus('error');
        setErrorMessage(err.message);
      });

    return () => {
      cancelled = true;
    };
  }, [repo, branch, folderPath]);

  // Lazily fetch each file's raw source the first time its tab is opened
  useEffect(() => {
    if (status !== 'ready' || files.length === 0) return;
    const file = files[activeIndex];
    if (!file || codeCache[file.path] !== undefined) return;

    fetch(file.download_url)
      .then((res) => res.text())
      .then((text) => {
        setCodeCache((prev) => ({ ...prev, [file.path]: text }));
      })
      .catch(() => {
        setCodeCache((prev) => ({ ...prev, [file.path]: '// Failed to load this file from GitHub.' }));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, files, activeIndex]);

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center bg-[#14121c] border border-[#2e2a3d] rounded-xl min-h-[420px] font-mono text-[#8a84a3] text-sm">
        Loading code from GitHub…
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="flex flex-col items-center justify-center gap-2 bg-[#14121c] border border-[#2e2a3d] rounded-xl min-h-[420px] font-mono text-[#00D3FF] text-sm px-6 text-center">
        <div>Couldn't load code from GitHub.</div>
        <div className="text-[#8a84a3] text-xs">{errorMessage}</div>
      </div>
    );
  }

  const activeFile = files[activeIndex];
  const code = codeCache[activeFile.path] ?? '';
  const language = EXTENSION_LANGUAGE[getExtension(activeFile.name)] ?? 'jsx';
  const lines = code.replace(/^\n/, '').split('\n');

  return (
    <div
      className="flex flex-col gap-6 md:flex-row md:gap-8 bg-[#f8f4ff] border border-orange-200 sm:w-[22rem] md:w-[45rem] lp:w-[65rem] lg:w-[78rem] mx-auto
                 rounded-xl overflow-hidden font-mono max-w-full p-4 sm:p-2 md:p-8
                 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)]"
    >
      {/* ── Mobile-only Phone/Code switcher — hidden at md and up ── */}
      <div className="flex md:hidden gap-2 justify-center">
        <button
          type="button"
          onClick={() => setActivePane('phone')}
          className={`px-4 py-1.5 rounded-full text-[0.8rem] font-semibold transition-colors ${
            activePane === 'phone'
              ? 'bg-[#A42FFF] text-white'
              : 'bg-white text-[#A42FFF] border border-[#A42FFF]/40'
          }`}
        >
          Phone
        </button>
        <button
          type="button"
          onClick={() => setActivePane('code')}
          className={`px-4 py-1.5 rounded-full text-[0.8rem] font-semibold transition-colors ${
            activePane === 'code'
              ? 'bg-[#A42FFF] text-white'
              : 'bg-white text-[#A42FFF] border border-[#A42FFF]/40'
          }`}
        >
          Code
        </button>
      </div>

      {/* ── Phone-frame preview — shown on mobile only when activePane === 'phone' ── */}
      <div
        className={`${activePane === 'phone' ? 'flex' : 'hidden'} md:flex flex-col items-center gap-3 shrink-0 mx-auto md:mx-0`}
      >
        <div
          className="relative w-[240px] sm:w-[280px] md:w-[300px] aspect-[9/19.5] rounded-[2.2rem] border-[5px] border-purple-300
                     bg-black overflow-hidden shadow-[0_25px_60px_-15px_rgba(184,166,255,0.35)]"
        >
          {/* notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#2e2a3d] rounded-b-2xl z-10" />

          {demoUrl ? (
            <iframe
              src={demoUrl}
              title="Live demo"
              className="w-full h-full border-0 bg-white"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#1b1826] text-[#4a4560] text-xs px-6 text-center">
              Pass a demoUrl once your app is deployed
            </div>
          )}
        </div>
        <div className="text-[0.7rem] text-[#8a84a3] align-center text-center max-w-[300px] truncate">
          {demoUrl || 'No demo URL set'}
        </div>
      </div>

      {/* ── Code pane — shown on mobile only when activePane === 'code' ── */}
      <div
        className={`${activePane === 'code' ? 'flex' : 'hidden'} md:flex flex-1 min-w-0 bg-[#001C47] border border-[#2e2a3d] rounded-lg flex-col md:h-[40rem] lp:h-[40rem]`}
      >
        <div
          className="flex bg-[#211e2e] border-b border-[#2e2a3d] overflow-x-auto rounded-t-lg
                     [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {files.map((file, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={file.path}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 text-[0.75rem] sm:text-[0.8rem] whitespace-nowrap
                            border-r border-[#2e2a3d] transition-colors
                            ${isActive
                              ? 'text-[#2b5548] bg-[#64ffce] shadow-[inset_0_-2px_0_#b8a6ff]'
                              : 'text-[#FCFF00] hover:text-[#ffffff]'}`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full bg-current
                              ${isActive ? 'opacity-100 !bg-[#b8a6ff]' : 'opacity-40'}`}
                />
                {file.name}
              </button>
            );
          })}
        </div>

        <div className="flex-1 overflow-y-auto overflow-x-hidden min-h-[320px] sm:min-h-[420px] md:min-h-[480px] max-h-[520px] md:max-h-[640px]">
          {code === '' ? (
            <div className="p-4 text-[#8a84a3] text-sm">Loading file…</div>
          ) : (
            <div className="grid grid-cols-[auto_1fr] text-[0.75rem] sm:text-[0.5rem] lp:text-[1rem] lg:text-[0.9rem] leading-[1.65] py-4">
              {lines.map((line, i) => (
                <HighlightedLine key={i} lineNumber={i + 1} line={line} language={language} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function HighlightedLine({ lineNumber, line, language }) {
  const tokens = tokenize(line, language);
  return (
    <>
      <div className="text-[#4a4560] text-right px-4 select-none">{lineNumber}</div>
      <div className="pr-8 whitespace-pre-wrap break-words">
        {tokens.length === 0
          ? '\u00A0'
          : tokens.map((t, i) => (
              <span key={i} className={TOKEN_CLASSES[t.type] ?? TOKEN_CLASSES.plain}>
                {t.text}
              </span>
            ))}
      </div>
    </>
  );
}