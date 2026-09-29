import { useState } from 'react';
import { tokenize } from './highlight';

/**
 * AppShowcase
 * ─────────────────────────────────────────────────────────────────────
 * For projects that don't run in a browser (React Native on an Android
 * emulator, in this case). Code on the left, running result on the
 * right — side by side.
 *
 * Each "screen" bundles its source code AND its matching video/
 * screenshot. The right side shows all screens as a tilted 3D
 * coverflow — the active one large and centered, neighbors receding
 * and rotated to the sides — with a floating prev/next + dot control
 * bar underneath. Clicking any tab, or any screen (even a tilted side
 * one), updates both sides together.
 *
 * The code panel has a fixed max-height and scrolls internally, so a
 * large source file doesn't balloon the page — it just scrolls inside
 * its own box.
 *
 * No dependencies beyond React — the tilt effect is plain CSS
 * transforms, and the arrow icons are inline SVG.
 *
 * Usage:
 *   <AppShowcase
 *     screens={[
 *       {
 *         name: 'HomeScreen.js',
 *         language: 'jsx',
 *         code: homeScreenSource,          // import '...?raw' from Vite, or paste
 *         media: { type: 'video', src: '/media/boardwalk-home.mp4' },
 *       },
 *       {
 *         name: 'CartScreen.js',
 *         language: 'jsx',
 *         code: cartScreenSource,
 *         media: { type: 'image', src: '/media/boardwalk-cart.png' },
 *       },
 *     ]}
 *   />
 *
 * `media.type` is 'video' (autoplaying, muted, looped — good for a
 * screen recording) or 'image' (a static screenshot).
 */

const TOKEN_CLASSES = {
  keyword: 'text-[#ff86c8]',
  string: 'text-[#ffcf86]',
  tag: 'text-[#86d6ff]',
  attr: 'text-[#b8a6ff]',
  comment: 'text-[#635d7a] italic',
  number: 'text-[#86ffcf]',
  func: 'text-[#86d6ff]',
  selector: 'text-[#86d6ff] font-semibold',
  property: 'text-[#b8a6ff]',
  punct: 'text-[#a29bc2]',
  plain: 'text-[#d8d3ec]',
};

export default function AppShowcase({ screens }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeScreen = screens[activeIndex];
  const lines = activeScreen.code.replace(/^\n/, '').split('\n');

  const goTo = (i) => setActiveIndex((i + screens.length) % screens.length);

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#2e2a3d] border border-[#2e2a3d]
                 rounded-xl overflow-hidden font-mono max-w-full
                 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
    >
      {/* ── Code panel (left) ── */}
      <div className="bg-[#14121c] flex flex-col min-w-0">
        <div
          className="flex bg-[#1b1826] border-b border-[#2e2a3d] overflow-x-auto
                     [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {screens.map((screen, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={screen.name}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`flex items-center gap-2 px-4 py-2.5 text-[0.8rem] whitespace-nowrap
                            border-r border-[#2e2a3d] transition-colors
                            ${isActive
                              ? 'text-[#f1eefc] bg-[#211e2e] shadow-[inset_0_-2px_0_#b8a6ff]'
                              : 'text-[#8a84a3] hover:text-[#d8d3ec]'}`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full bg-current
                              ${isActive ? 'opacity-100 !bg-[#b8a6ff]' : 'opacity-40'}`}
                />
                {screen.name}
              </button>
            );
          })}
        </div>

        {/* Fixed-height, internally-scrolling — a large file just scrolls here */}
        <div className="flex-1 overflow-auto min-h-[420px] max-h-[560px]">
          <div className="grid grid-cols-[auto_1fr] text-[0.8rem] leading-[1.65] py-4">
            {lines.map((line, i) => (
              <HighlightedLine
                key={i}
                lineNumber={i + 1}
                line={line}
                language={activeScreen.language}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Tilted carousel preview (right) ── */}
      <div className="bg-[#1b1826] relative flex flex-col items-center justify-center gap-6 py-10 px-4 overflow-hidden">
        <div
          className="flex items-center justify-center"
          style={{ perspective: '1200px' }}
        >
          {screens.map((screen, i) => {
            const offset = i - activeIndex;
            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= 3;
            return (
              <button
                key={screen.name}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show ${screen.name}`}
                className="shrink-0 -mx-6 transition-[transform,opacity] duration-500 ease-out"
                style={{
                  transform: `translateX(${offset * -34}px) rotateY(${offset * -32}deg) scale(${isActive ? 1 : 0.8})`,
                  zIndex: screens.length - Math.abs(offset),
                  opacity: isVisible ? (isActive ? 1 : 0.55) : 0,
                  pointerEvents: isVisible ? 'auto' : 'none',
                }}
              >
                <PhoneThumb media={screen.media} label={screen.name} isActive={isActive} />
              </button>
            );
          })}
        </div>

        {/* floating control pill */}
        <div className="flex items-center gap-4 px-4 py-2 rounded-full bg-[#14121c]/70 backdrop-blur border border-[#2e2a3d]">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Previous screen"
            className="p-1 text-[#8a84a3] hover:text-[#f1eefc] transition-colors"
          >
            <ChevronIcon direction="left" />
          </button>

          <div className="flex items-center gap-1.5">
            {screens.map((_, i) => (
              <span
                key={i}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full cursor-pointer transition-all duration-300
                            ${i === activeIndex ? 'w-6 bg-[#b8a6ff]' : 'w-1.5 bg-[#4a4560]'}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            aria-label="Next screen"
            className="p-1 text-[#8a84a3] hover:text-[#f1eefc] transition-colors"
          >
            <ChevronIcon direction="right" />
          </button>
        </div>

        <div className="text-[0.7rem] text-[#8a84a3] text-center">{activeScreen.name}</div>
      </div>
    </div>
  );
}

function PhoneThumb({ media, label, isActive }) {
  return (
    <div
      className={`w-[130px] aspect-[9/19.5] rounded-[1.5rem] border-[5px] border-[#2e2a3d]
                  bg-black overflow-hidden
                  ${isActive
                    ? 'shadow-[0_15px_40px_-8px_rgba(184,166,255,0.45)]'
                    : 'shadow-[0_10px_25px_-10px_rgba(0,0,0,0.6)]'}`}
    >
      {media?.type === 'video' ? (
        <video
          key={media.src}
          src={media.src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      ) : media?.type === 'image' ? (
        <img key={media.src} src={media.src} alt={label} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-[#4a4560] text-[0.6rem] px-2 text-center">
          No media
        </div>
      )}
    </div>
  );
}

function ChevronIcon({ direction }) {
  const d = direction === 'left' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6';
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}

function HighlightedLine({ lineNumber, line, language }) {
  const tokens = tokenize(line, language);
  return (
    <>
      <div className="text-[#4a4560] text-right px-4 select-none">{lineNumber}</div>
      <div className="pr-6 whitespace-pre">
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