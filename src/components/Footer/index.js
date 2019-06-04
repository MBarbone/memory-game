import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer text-center">
          <a
            id="footer-text"
            href="https://github.com/MBarbone"
            target="_blank"
            rel="noopener noreferrer"
            alt="Github Link"
          >
            <i className="fa fa-github fa-3x" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
