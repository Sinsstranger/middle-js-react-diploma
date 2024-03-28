import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => (
    <footer className="footer">
      <div className="container footer__row">
        <div className="footer__copy">
          Portfolio © sinstranger · {new Date().getFullYear()}
        </div>
        <div className="footer__links">
          <div className="main-banner__socials">
            <Link
              to="https://www.linkedin.com/in/sinstranger/"
              className="main-banner__social"
            >
              <img src="/images/icons/linkedin.svg" alt="#" />
            </Link>
            <Link
              to="https://github.com/Sinsstranger"
              className="main-banner__social"
            >
              <img src="/images/icons/github.svg" alt="#" />
            </Link>
            {/* <Link to="#" className="main-banner__social">
              <img src="/images/icons/behance.svg" alt="#" />
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
export default Footer;
