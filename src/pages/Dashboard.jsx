import React from "react";
import HeaderNeon from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import CuerpoAzul from "../assets/Cuerpo_azul.png";
import CuerpoAmarillo from "../assets/Cuerpo_amarillo.png";
import CuerpoVerde from "../assets/Cuerpo_verde.png";
import { Link } from "react-router-dom";

import "../styles/App.css";

const Hero = () => {
  return (
    <section className="cyber-hero">
      <div className="grid-overlay"></div>
      <div className="scan-line"></div>

      <div className="hero-content">
        <div className="glitch-container">
          <h2
            className="cyber-title glitch"
            data-text="¡SOBREVIVE EN EL ESCRITORIO!"
          >
            ¡SOBREVIVE EN EL ESCRITORIO!
          </h2>
        </div>
        <p className="cyber-subtitle">
          <span className="terminal-prompt">&gt;</span> Un juego de disparos
          donde alienígenas luchan por no caer al vacío
        </p>
      </div>

      <div className="corner-decoration top-left"></div>
      <div className="corner-decoration top-right"></div>
      <div className="corner-decoration bottom-left"></div>
      <div className="corner-decoration bottom-right"></div>
    </section>
  );
};

const GameFeatures = () => {
  return (
    <section className="cyber-features">
      <div className="section-header">
        <div className="warning-icon">⚠</div>
        <h2>CARACTERÍSTICAS DEL JUEGO</h2>
        <div className="warning-icon">⚠</div>
      </div>

      <div className="features-container">
        <div className="cyber-feature">
          <div className="feature-icon-container">
            <div className="feature-icon">🛸</div>
            <div className="icon-glow"></div>
          </div>
          <div className="cyber-divider"></div>
          <div className="feature-content">
            <h3>BATALLA ALIENÍGENA</h3>
            <p>Empuja a tus rivales fuera del escritorio para ganar</p>
            <div className="cyber-data">
              <span className="data-item">MODO: PVP</span>
              <span className="data-item">DIFICULTAD: ALTA</span>
            </div>
          </div>
        </div>

        <div className="cyber-feature">
          <div className="feature-icon-container">
            <div className="feature-icon">❤️</div>
            <div className="icon-glow"></div>
          </div>
          <div className="cyber-divider"></div>
          <div className="feature-content">
            <h3>3 VIDAS</h3>
            <p>Cada jugador tiene tres oportunidades para sobrevivir</p>
            <div className="cyber-data">
              <span className="data-item">REGEN: NO</span>
              <span className="data-item">EXTRA: RARAS</span>
            </div>
          </div>
        </div>

        <div className="cyber-feature">
          <div className="feature-icon-container">
            <div className="feature-icon">🎮</div>
            <div className="icon-glow"></div>
          </div>
          <div className="cyber-divider"></div>
          <div className="feature-content">
            <h3>CONTROLES INTUITIVOS</h3>
            <p>Fácil de aprender, difícil de dominar</p>
            <div className="cyber-data">
              <span className="data-item">TIPO: WASD+MOUSE</span>
              <span className="data-item">CONFIG: CUSTOM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Download = () => {
  return (
    <section className="cyber-cta">
      <div className="cta-overlay"></div>

      <div className="terminal-container">
        <div className="terminal-header">
          <span className="terminal-title">
            // SISTEMA :: DESCARGA_ALIEN_NET
          </span>
          <div className="terminal-controls">
            <span className="terminal-control"></span>
            <span className="terminal-control"></span>
            <span className="terminal-control"></span>
          </div>
        </div>

        <div className="terminal-body">
          <div className="terminal-text">
            <p className="type-line">
              <span className="prompt">&gt;</span> Inicializando protocolo de
              descarga...
            </p>
            <p className="type-line">
              <span className="prompt">&gt;</span> Conectando con servidor
              principal...
            </p>
            <p className="type-line">
              <span className="prompt">&gt;</span> Verificando versión más
              reciente: v0.7.3
            </p>
            <p className="type-line">
              <span className="prompt">&gt;</span> ¡Únete a la Batalla
              Alienígena!
            </p>
            <p className="type-line">
              <span className="prompt">&gt;</span> Descarga ahora y comienza a
              jugar con tus amigos
            </p>
            <p className="type-line">
              <span className="prompt">&gt;</span> ¿Iniciar descarga? [Y/N]
            </p>
            <p className="type-line cursor">
              <span className="prompt">&gt;</span>{" "}
              <span className="cursor-blink">_</span>
            </p>
          </div>

          <button className="download-button">
            DESCARGAR JUEGO
            <div className="download-icon">↓</div>
          </button>
        </div>
      </div>

      <div className="corner-decoration top-left"></div>
      <div className="corner-decoration top-right"></div>
      <div className="corner-decoration bottom-left"></div>
      <div className="corner-decoration bottom-right"></div>
    </section>
  );
};

const Dashboard = () => {
  return (
    <div className="cyber-app">
      <HeaderNeon />
      <main className="cyber-main">
        <Hero />
        <GameFeatures />
        <Download />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
