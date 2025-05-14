import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Youtube, Twitter, Facebook, Github } from "lucide-react";
import "../styles/Footer.css";
import Logo_Alien_Net from "../assets/Logo.png"
const Footer = () => {
  return (
    <footer className="cyber-footer">
      <div className="terminal-glitch-top"></div>

      <div className="cyber-footer-content">
        <div className="cyber-footer-top">
          <div className="cyber-footer-logo">
            <Link to="/" className="cyber-footer-logo-link">
              <img
                src={Logo_Alien_Net}
                alt="Logo Alien Net"
                className="header-logo" 
              />
            </Link>
            <p className="cyber-footer-tagline">
              <span className="terminal-prompt">&gt;</span> ¡SOBREVIVE EN EL
              ESCRITORIO!
            </p>
          </div>

          <div className="cyber-footer-social">
            <a
              href="https://discord.gg/aliennet"
              className="cyber-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://twitter.com/aliennet"
              className="cyber-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://instagram.com/aliennet"
              className="cyber-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div className="cyber-footer-bottom">
          <div className="cyber-copyright">
            <span className="terminal-prompt">&gt;</span> © 2025 ALIENNET //
            TODOS LOS DERECHOS RESERVADOS
          </div>

          <div className="cyber-footer-warning">
            <span className="warning-icon">⚠</span>
            <span className="warning-text">v1.0</span>
            <span className="warning-icon">⚠</span>
          </div>
        </div>
      </div>

      <div className="terminal-glitch-bottom"></div>
    </footer>
  );
};

export default Footer;
