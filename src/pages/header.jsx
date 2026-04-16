import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const MENU_WIDTH = 256;
const MENU_HEIGHT = 320;
const CLOSE_ANIMATION_MS = 250;

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

  const getDefaultMenuPosition = () => {
    if (!buttonRef.current) {
      return { x: 26, y: 110 };
    }

    const rect = buttonRef.current.getBoundingClientRect();

    let x = rect.left - 4;
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
    }, 500);
  };

  const closeMenu = () => {
    if (openingTimerRef.current) {
      clearTimeout(openingTimerRef.current);
      openingTimerRef.current = null;
    }

    setIsOpening(false);
    setIsMenuOpen(false);

    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }

    closeTimerRef.current = setTimeout(() => {
      setShouldRenderMenu(false);
      closeTimerRef.current = null;
    }, CLOSE_ANIMATION_MS);
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
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

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
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

  return (
    <div className="relative">
      {/* Logo */}
      <div
        className="grid justify-center items-center 
        sm:w-[25rem] lg:w-auto lp:w-auto lp:ml-[-102rem]"
      >
        <Link onClick={handleNavClick} to="/">
          <img
            src="/logo1.svg"
            alt="Logo1"
            className="h-16 
            sm:h-[5rem] sm:pl-[19rem]
            md:ml-[40rem] md:mt-[1rem] md:h-[8rem]
            lg:mt-[5rem] lg:mb-[5rem] lg:h-[9rem]
            lp:ml-[15rem] lp:mt-[3rem] lp:mb-[7rem] lp:h-[8rem]"
          />
        </Link>
      </div>

      {/* Desktop Navbar */}
      <nav
        className="hidden font-Micro text-blue-300 justify-center
        lg:flex lg:text-[4.5rem] lg:mt-[-15rem] lg:pb-[2rem]
        lp:ml-[10rem] lp:flex lp:text-[4.5rem] lp:w-[68rem] lp:mt-[-15rem] lp:pb-[2rem]"
      >
        <Link to="/" className="px-10 hover:text-blue-300 hover:underline">
          Home
        </Link>
        <Link to="/projects" className="px-10 hover:text-blue-300 hover:underline">
          Projects
        </Link>
        <Link to="/about" className="px-10 hover:text-blue-300 hover:underline">
          About
        </Link>
        <Link to="/contact" className="px-10 hover:text-blue-300 hover:underline">
          Contact
        </Link>
        <Link to="/cases" className="px-10 hover:text-blue-300 hover:underline">
          Cases
        </Link>
      </nav>

      {/* Mobile / Tablet Menu */}
      <div className="lg:hidden lp:hidden">
        <button
          ref={buttonRef}
          type="button"
          onClick={toggleMenu}
          aria-label="Open navigation menu"
          className="fixed left-[26px] top-[56px] z-[200] transition"
        >
          <svg
            viewBox="0 0 24 24"
            className={`h-[3rem] w-[3rem] fill-[#c4b5fd] transition-transform duration-500 ease-in-out hover:drop-shadow-[0_0_10px_#c4b5fd] ${
              isMenuOpen ? "rotate-[180deg]" : "rotate-[0deg]"
            }`}
          >
            <path d="M12 3.5C12.4 3.5 12.7 3.7 12.9 4.1L14.6 8.3C14.7 8.6 15 8.8 15.3 8.8L19.8 9.2C20.6 9.3 20.9 10.2 20.3 10.7L16.9 13.6C16.6 13.8 16.5 14.2 16.6 14.5L17.6 18.8C17.8 19.6 17 20.2 16.3 19.8L12.4 17.5C12.1 17.3 11.7 17.3 11.4 17.5L7.5 19.8C6.8 20.2 6 19.6 6.2 18.8L7.2 14.5C7.3 14.2 7.2 13.8 6.9 13.6L3.5 10.7C2.9 10.2 3.2 9.3 4 9.2L8.5 8.8C8.8 8.8 9.1 8.6 9.2 8.3L10.9 4.1C11.1 3.7 11.4 3.5 12 3.5Z" />
          </svg>
        </button>

        {shouldRenderMenu && (
          <div
            ref={menuRef}
            style={{
              left: `${menuPosition.x}px`,
              top: `${menuPosition.y}px`,
            }}
            className={`fixed z-[220] w-[16rem] overflow-hidden border-2 border-dashed border-blue-200 bg-[#eee6f6] shadow-[4px_4px_0_#d6ccf5] ${
              isDragging ? "select-none" : ""
            } ${
              isMenuOpen
                ? isOpening
                  ? "animate-[menuSlideIn_0.45s_ease-out_forwards,floatMenu_3.2s_ease-in-out_0.45s_infinite]"
                  : "opacity-100 animate-[floatMenu_3.2s_ease-in-out_infinite]"
                : "opacity-0 transition-opacity duration-250"
            }`}
          >
            <div
              onMouseDown={startDragging}
              className="flex cursor-grab items-center justify-between border-b-2 border-blue-200 bg-blue-300 px-3 py-2 active:cursor-grabbing"
            >
              <h5 className="font-Micro text-[1rem] text-white">
                navigation.exe
              </h5>

              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close navigation menu"
                className="flex h-6 w-6 items-center justify-center border border-blue-200 bg-[#f8f4ff] text-[0.8rem] text-blue-400 shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#dcd3f7] hover:bg-red-300 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="bg-[#f8f4ff] p-3">
              <div className="flex flex-col gap-2">
                <Link
                  to="/"
                  onClick={handleNavClick}
                  className="border border-blue-200 bg-[#eee6f6] px-3 py-2 font-Dos text-[0.9rem] text-blue-500 shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#ddd5f7] hover:bg-[#e4dbfa]"
                >
                  Home.exe
                </Link>

                <Link
                  to="/projects"
                  onClick={handleNavClick}
                  className="border border-blue-200 bg-[#eee6f6] px-3 py-2 font-Dos text-[0.9rem] text-blue-500 shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#ddd5f7] hover:bg-[#e4dbfa]"
                >
                  Projects.exe
                </Link>

                <Link
                  to="/about"
                  onClick={handleNavClick}
                  className="border border-blue-200 bg-[#eee6f6] px-3 py-2 font-Dos text-[0.9rem] text-blue-500 shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#ddd5f7] hover:bg-[#e4dbfa]"
                >
                  About.exe
                </Link>

                <Link
                  to="/contact"
                  onClick={handleNavClick}
                  className="border border-blue-200 bg-[#eee6f6] px-3 py-2 font-Dos text-[0.9rem] text-blue-500 shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#ddd5f7] hover:bg-[#e4dbfa]"
                >
                  Contact.exe
                </Link>

                <Link
                  to="/cases"
                  onClick={handleNavClick}
                  className="border border-blue-200 bg-[#eee6f6] px-3 py-2 font-Dos text-[0.9rem] text-blue-500 shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#ddd5f7] hover:bg-[#e4dbfa]"
                >
                  Cases.exe
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes menuSlideIn {
            0% {
              opacity: 0;
              transform: translateX(-40px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes floatMenu {
            0% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default Header;