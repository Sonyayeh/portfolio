import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MENU_WIDTH = 260;
const MENU_HEIGHT = 290;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shouldRenderMenu, setShouldRenderMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 26, y: 110 });
  const [isDragging, setIsDragging] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const closeTimerRef = useRef(null);
  const openingTimerRef = useRef(null);
  const location = useLocation();

  const getDefaultMenuPosition = () => {
    if (!buttonRef.current) {
      return { x: 22, y: 110 };
    }

    const rect = buttonRef.current.getBoundingClientRect();

    let x = rect.left - 6;
    let y = rect.bottom + 10;

    const maxX = window.innerWidth - MENU_WIDTH - 8;
    const maxY = window.innerHeight - MENU_HEIGHT - 8;

    x = Math.max(8, Math.min(x, maxX));
    y = Math.max(8, Math.min(y, maxY));

    return { x, y };
  };

  const openMenu = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    if (openingTimerRef.current) {
      clearTimeout(openingTimerRef.current);
      openingTimerRef.current = null;
    }

    setMenuPosition(getDefaultMenuPosition());
    setShouldRenderMenu(true);
    setIsOpening(true);

    requestAnimationFrame(() => {
      setIsMenuOpen(true);
    });

    openingTimerRef.current = setTimeout(() => {
      setIsOpening(false);
      openingTimerRef.current = null;
    }, 380);
  };

  const closeMenu = () => {
    setIsOpening(false);
    setIsMenuOpen(false);

    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }

    closeTimerRef.current = setTimeout(() => {
      setShouldRenderMenu(false);
      closeTimerRef.current = null;
    }, 220);
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const getCheck = (path) => {
    return location.pathname === path ? "[✓]" : "[ ]";
  };

  const handleNavClick = () => {
    window.scrollTo(0, 0);
    closeMenu();
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!isDragging) return;

      const maxX = window.innerWidth - MENU_WIDTH - 8;
      const maxY = window.innerHeight - MENU_HEIGHT - 8;

      const nextX = event.clientX - dragOffsetRef.current.x;
      const nextY = event.clientY - dragOffsetRef.current.y;

      setMenuPosition({
        x: Math.max(8, Math.min(nextX, maxX)),
        y: Math.max(8, Math.min(nextY, maxY)),
      });
    };

    const handleTouchMove = (event) => {
      if (!isDragging) return;

      event.preventDefault();

      const touch = event.touches[0];
      if (!touch) return;

      const maxX = window.innerWidth - MENU_WIDTH - 8;
      const maxY = window.innerHeight - MENU_HEIGHT - 8;

      const nextX = touch.clientX - dragOffsetRef.current.x;
      const nextY = touch.clientY - dragOffsetRef.current.y;

      setMenuPosition({
        x: Math.max(8, Math.min(nextX, maxX)),
        y: Math.max(8, Math.min(nextY, maxY)),
      });
    };

    const stopDragging = () => {
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", stopDragging);
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", stopDragging);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", stopDragging);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", stopDragging);
    };
  }, [isDragging]);

  useEffect(() => {
    const handleResize = () => {
      if (!isMenuOpen || isDragging) return;
      setMenuPosition(getDefaultMenuPosition());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen, isDragging]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
      if (openingTimerRef.current) clearTimeout(openingTimerRef.current);
    };
  }, []);

  const startDragging = (event) => {
    if (!menuRef.current) return;

    const rect = menuRef.current.getBoundingClientRect();
    dragOffsetRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
    setIsDragging(true);
  };

  const startTouchDragging = (event) => {
    if (!menuRef.current) return;

    const touch = event.touches[0];
    if (!touch) return;

    const rect = menuRef.current.getBoundingClientRect();
    dragOffsetRef.current = {
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    };
    setIsDragging(true);
  };

  return (
    <div className="relative">
      {/* Logo */}
      <div
        className="flex relative justify-center items-center 
        sm:justify-end md:justify-end lp:justify-start
        sm:w-[25rem] md:w-auto lg:w-auto lp:py-6 lg:pt-[3rem]
        "
      >
        <Link onClick={handleNavClick} to="/">
          <img
            src="/logo1.svg"
            alt="Logo1"
            className=" 
            sm:h-[5rem] 
            md:h-[8rem]
            lg:px-[4rem]
            lp:px-[3rem]
            "
          />
        </Link>
      {/* Desktop Navbar */}
      <nav
        className="hidden text-blue-300  justify-center font-Dos sticky top-0 z-[150] bg-white
        lg:flex lg:text-[4.5rem]lg:pb-[2rem]
        lp:flex lp:text-[2.8rem] "
      >
        <Link to="/" className="px-5 hover:text-blue-300 hover:underline">
          Home
        </Link>
        <Link to="/projects" className="px-5 hover:text-blue-300 hover:underline">
          Projects
        </Link>
        <Link to="/about" className="px-5 hover:text-blue-300 hover:underline">
          About
        </Link>
        <Link to="/contact" className="px-5 hover:text-blue-300 hover:underline">
          Contact
        </Link>
        <Link to="/cases" className="px-5 hover:text-blue-300 hover:underline">
          Cases
        </Link>
      </nav>
      </div>


      {/* Memo nav only on sm + md */}
      <div className="lg:hidden lp:hidden">
        {/* Paperclip button */}
        <button
          ref={buttonRef}
          type="button"
          onClick={toggleMenu}
          aria-label="Open memo navigation"
          className="fixed left-[24px] top-[54px] z-[200] transition hover:scale-105"
        >
          <svg
            viewBox="0 0 24 24"
            className={`h-[2.8rem] w-[2.8rem] stroke-[#c9acf7] fill-none stroke-[1.8] transition-transform duration-500 ease-in-out hover:drop-shadow-[0_0_10px_#d8b4fe] ${
              isMenuOpen ? "rotate-[18deg]" : "rotate-[0deg]"
            }`}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 7.5v8.2a3 3 0 1 0 6 0V6.8a4.3 4.3 0 1 0-8.6 0v9.4a5.6 5.6 0 1 0 11.2 0V8.3" />
          </svg>
        </button>

        {shouldRenderMenu && (
          <div
            ref={menuRef}
            style={{
              left: `${menuPosition.x}px`,
              top: `${menuPosition.y}px`,
            }}
            className={`fixed z-[220] w-[16.25rem] rounded-[0.35rem] border border-[#96deeb] bg-[#d0faff] shadow-[6px_6px_0_#69bac3] ${
              isDragging ? "select-none" : ""
            } ${
              isMenuOpen
                ? isOpening
                  ? "animate-[memoSlideIn_0.38s_ease-out_forwards]"
                  : "opacity-100"
                : "opacity-0 transition-opacity duration-200"
            }`}
          >
            {/* memo top strip / drag handle */}
            <div
              onMouseDown={startDragging}
              onTouchStart={startTouchDragging}
              className="flex cursor-grab touch-none items-center justify-between rounded-t-[0.2rem] border-b border-[#96deeb] bg-[#d0faff] px-3 py-2 active:cursor-grabbing"
            >
              <div className="flex items-center gap-2">
                <span className="text-[0.95rem]">📎</span>
                <p className="font-Dos text-[0.78rem] text-[#001e8b]">
                  Menu
                </p>
              </div>
            </div>

            {/* sticky note body */}
            <div className="relative bg-[#d0faff] px-4 mb-4">
              <div className="flex justify-center items-center text-center">
                <p className="font-mono text-[0.68rem] text-[#4d7a82] tracking-wide text-center pt-4">
                  ✦•……๑⋆｡‧˚ʚ ✦ ɞ˚‧｡⋆๑……·✦
                </p>
              </div>

              <p className="mb-3 font-Dos text-[0.85rem] text-[#001e8b] pt-2">
                Things to open:
              </p>

              <div className="flex flex-col gap-2">
                <Link
                  to="/"
                  onClick={handleNavClick}
                  className="font-vcr text-[0.95rem] text-[#001e8b] hover:text-[#8b44fc]"
                >
                  {getCheck("/")} Home
                </Link>

                <Link
                  to="/projects"
                  onClick={handleNavClick}
                  className="font-vcr text-[0.95rem] text-[#001e8b] hover:text-[#8b44fc]"
                >
                  {getCheck("/projects")} Projects
                </Link>

                <Link
                  to="/about"
                  onClick={handleNavClick}
                  className="font-vcr text-[0.95rem] text-[#001e8b] hover:text-[#8b44fc]"
                >
                  {getCheck("/about")} About
                </Link>

                <Link
                  to="/contact"
                  onClick={handleNavClick}
                  className="font-vcr text-[0.95rem] text-[#001e8b] hover:text-[#8b44fc]"
                >
                  {getCheck("/contact")} Contact
                </Link>

                <Link
                  to="/cases"
                  onClick={handleNavClick}
                  className="font-vcr text-[0.95rem] text-[#001e8b] hover:text-[#8b44fc]"
                >
                  {getCheck("/cases")} Cases
                </Link>
              </div>

              <div className="flex justify-center items-center text-center">
                <p className="font-mono text-[0.68rem] text-[#4d7a82] tracking-wide text-center pt-4">
                  ✦•……๑⋆｡‧˚ʚ ✦ ɞ˚‧｡⋆๑……·✦
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes memoSlideIn {
            0% {
              opacity: 0;
              transform: translateX(-24px) translateY(6px);
            }
            100% {
              opacity: 1;
              transform: translateX(0) translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Header;