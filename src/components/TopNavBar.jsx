import React, { useState } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

const TopNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="bg-blue-500 text-white flex justify-end items-center p-4">
      <div className="relative">
        <button className="relative mr-4">
          <FaBell className="w-8 h-8" />
        </button>
      </div>

      <div className="dropdown dropdown-end ">
        <div tabIndex={0} role="button" onClick={toggleMenu}>
          <FaUserCircle className="w-8 h-8" />
        </div>
        {menuOpen && (
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        )}
      </div>
      {/* Close menu when clicking outside */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-10"
          onClick={closeMenu}
          onKeyDown={closeMenu}
          tabIndex={0}
        ></div>
      )}
    </div>
  );
};

export default TopNavBar;
