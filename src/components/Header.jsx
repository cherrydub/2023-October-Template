import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header flex justify-between">
      <div className="header-left">logo</div>
      <div className="header-middle">
        Simple template made by <code className="terminal">GitGremlin</code>+
        <code className="terminal">CherryDub</code>
      </div>
      <div className="header-right">
        <ul className="flex flex-row">
          <li>
            <button>
              <Link to="/">Home</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/info">Info</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/about">About</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/contact">Contact</Link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
