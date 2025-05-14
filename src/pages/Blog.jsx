import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import CuerpoAzul from "../assets/Cuerpo_azul.png";
import CuerpoAmarillo from "../assets/Cuerpo_amarillo.png";
import CuerpoVerde from "../assets/Cuerpo_verde.png";
import { Link } from "react-router-dom";

import "../styles/Blog.css"; // Nuevo archivo CSS para el blog

// Componente principal Blog
const Blog = () => {
  return (
    <div className="app">
      <Header />
      <div className="alien-container">
        <main className="blog-content">
          <div className="terminal-window">
            <div className="terminal-header">
              <span className="terminal-title">
                // BLOG :: DOCUMENTACIÓN DEL JUEGO
              </span>
              <div className="terminal-controls">
                <span className="terminal-control"></span>
                <span className="terminal-control"></span>
                <span className="terminal-control"></span>
              </div>
            </div>

            <div className="terminal-body">
              <section className="blog-section">
                <div className="section-header">
                  <div className="warning-icon">⚠</div>
                  <h2>DESCRIPCIÓN DEL JUEGO</h2>
                  <div className="warning-icon">⚠</div>
                </div>
                <div className="section-content">
                  <p>
                    <span className="highlight">> ALIEN NET</span> es un juego
                    de batallas alienígenas en el escritorio donde debes ser el
                    último en sobrevivir.
                  </p>
                  <p>
                    Controla a tu alienígena, usa tus armas y habilidades
                    estratégicamente para empujar a los oponentes fuera del
                    escritorio mientras evitas caer al vacío.
                  </p>
                  <p>
                    <span className="code-comment">
                      // Cada jugador tiene 3 vidas antes de ser eliminado
                      definitivamente.
                    </span>
                  </p>
                </div>
              </section>

              <section className="blog-section">
                <div className="section-header">
                  <div className="warning-icon">⚠</div>
                  <h2>MOTOR DEL JUEGO</h2>
                  <div className="warning-icon">⚠</div>
                </div>
                <div className="section-content tech-specs">
                  <div className="tech-item">
                    <h3>SISTEMA DE FÍSICA</h3>
                    <p>
                      Motor personalizado con cálculos de colisiones precisas y
                      rebotes realistas.
                    </p>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div className="tech-item">
                    <h3>RENDERIZADO</h3>
                    <p>
                      Gráficos optimizados para una experiencia fluida con
                      efectos visuales de neón.
                    </p>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                  <div className="tech-item">
                    <h3>NETWORKING</h3>
                    <p>
                      Sistema de partidas en línea con bajo tiempo de latencia.
                    </p>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: "78%" }}></div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="blog-section">
                <div className="section-header">
                  <div className="warning-icon">⚠</div>
                  <h2>ARSENAL ALIENÍGENA</h2>
                  <div className="warning-icon">⚠</div>
                </div>
                <div className="section-content weapon-grid">
                  <div className="weapon-card">
                    <div className="weapon-icon">💥</div>
                    <div className="weapon-info">
                      <h3>RAYO REPULSOR</h3>
                      <p>
                        Empuja a enemigos con fuerza proporcional a la carga
                      </p>
                      <div className="weapon-stats">
                        <span>DAÑO: 65</span>
                        <span>ALCANCE: 40</span>
                        <span>RECARGA: 3s</span>
                      </div>
                    </div>
                  </div>
                  <div className="weapon-card">
                    <div className="weapon-icon">🌀</div>
                    <div className="weapon-info">
                      <h3>BOMBA DE GRAVEDAD</h3>
                      <p>
                        Crea una zona que atrae o repele según configuración
                      </p>
                      <div className="weapon-stats">
                        <span>RADIO: 75</span>
                        <span>FUERZA: 50</span>
                        <span>DURACIÓN: 4s</span>
                      </div>
                    </div>
                  </div>
                  <div className="weapon-card">
                    <div className="weapon-icon">🛡️</div>
                    <div className="weapon-info">
                      <h3>ESCUDO DEFLECTOR</h3>
                      <p>Protege temporalmente y refleja proyectiles</p>
                      <div className="weapon-stats">
                        <span>RESISTENCIA: 120</span>
                        <span>REFLEJO: 80%</span>
                        <span>DURACIÓN: 5s</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="blog-section">
                <div className="section-header">
                  <div className="warning-icon">⚠</div>
                  <h2>PERSONAJES ALIENÍGENAS</h2>
                  <div className="warning-icon">⚠</div>
                </div>
                <div className="section-content character-profiles">
                  <div className="character-card">
                    <div
                      className="character-image"
                      style={{ backgroundColor: "#3498db" }}
                    >
                      <img src={CuerpoAzul} alt="Blurp" />
                    </div>
                    <div className="character-data">
                      <h3>
                        BLURP<span className="id-tag">#A1</span>
                      </h3>
                      <div className="character-stats">
                        <div className="stat">
                          <span className="stat-name">VELOCIDAD</span>
                          <div className="stat-bar">
                            <div
                              className="stat-fill"
                              style={{ width: "65%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="stat">
                          <span className="stat-name">FUERZA</span>
                          <div className="stat-bar">
                            <div
                              className="stat-fill"
                              style={{ width: "70%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="stat">
                          <span className="stat-name">DEFENSA</span>
                          <div className="stat-bar">
                            <div
                              className="stat-fill"
                              style={{ width: "55%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="character-skill">
                        <span className="skill-title">
                          HABILIDAD: SALTO CUÁNTICO
                        </span>
                        <p>
                          Teletransporta al jugador a corta distancia, útil para
                          evitar caídas
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="character-card">
                    <div
                      className="character-image"
                      style={{ backgroundColor: "#f9ff31" }}
                    >
                      <img src={CuerpoAmarillo} alt="Zax" />
                    </div>
                    <div className="character-data">
                      <h3>
                        ZAX<span className="id-tag">#A2</span>
                      </h3>
                      <div className="character-stats">
                        <div className="stat">
                          <span className="stat-name">VELOCIDAD</span>
                          <div className="stat-bar">
                            <div
                              className="stat-fill"
                              style={{ width: "85%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="stat">
                          <span className="stat-name">FUERZA</span>
                          <div className="stat-bar">
                            <div
                              className="stat-fill"
                              style={{ width: "50%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="stat">
                          <span className="stat-name">DEFENSA</span>
                          <div className="stat-bar">
                            <div
                              className="stat-fill"
                              style={{ width: "45%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="character-skill">
                        <span className="skill-title">
                          HABILIDAD: EMBESTIDA ESTELAR
                        </span>
                        <p>
                          Carga hacia adelante a gran velocidad, arrastrando
                          enemigos
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="character-card">
                    <div
                      className="character-image"
                      style={{ backgroundColor: "#2ecc71" }}
                    >
                      <img src={CuerpoVerde} alt="Gloop" />
                    </div>
                    <div className="character-data">
                      <h3>
                        GLOOP<span className="id-tag">#A3</span>
                      </h3>
                      <div className="character-stats">
                        <div className="stat">
                          <span className="stat-name">VELOCIDAD</span>
                          <div className="stat-bar">
                            <div
                              className="stat-fill"
                              style={{ width: "45%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="stat">
                          <span className="stat-name">FUERZA</span>
                          <div className="stat-bar">
                            <div
                              className="stat-fill"
                              style={{ width: "75%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="stat">
                          <span className="stat-name">DEFENSA</span>
                          <div className="stat-bar">
                            <div
                              className="stat-fill"
                              style={{ width: "80%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="character-skill">
                        <span className="skill-title">
                          HABILIDAD: REBOTE GRAVITACIONAL
                        </span>
                        <p>
                          Crea un impulso que lanza a todos los jugadores
                          cercanos
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="blog-section">
                <div className="section-header">
                  <div className="warning-icon">⚠</div>
                  <h2>CONTROLES</h2>
                  <div className="warning-icon">⚠</div>
                </div>
                <div className="section-content">
                  <div className="controls-diagram">
                    <div className="control-group">
                      <h3>TECLADO</h3>
                      <table className="control-table">
                        <tbody>
                          <tr>
                            <td className="key">W</td>
                            <td>MOVER ARRIBA</td>
                          </tr>
                          <tr>
                            <td className="key">A</td>
                            <td>MOVER IZQUIERDA</td>
                          </tr>
                          <tr>
                            <td className="key">S</td>
                            <td>MOVER ABAJO</td>
                          </tr>
                          <tr>
                            <td className="key">D</td>
                            <td>MOVER DERECHA</td>
                          </tr>
                          <tr>
                            <td className="key">ESPACIO</td>
                            <td>SALTAR</td>
                          </tr>
                          <tr>
                            <td className="key">E</td>
                            <td>USAR ARMA/HABILIDAD</td>
                          </tr>
                          <tr>
                            <td className="key">Q</td>
                            <td>ACTIVAR ESCUDO</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="control-group">
                      <h3>MANDO</h3>
                      <table className="control-table">
                        <tbody>
                          <tr>
                            <td className="key">JOYSTICK</td>
                            <td>MOVIMIENTO</td>
                          </tr>
                          <tr>
                            <td className="key">A / X</td>
                            <td>SALTAR</td>
                          </tr>
                          <tr>
                            <td className="key">B / ○</td>
                            <td>USAR ARMA/HABILIDAD</td>
                          </tr>
                          <tr>
                            <td className="key">X / □</td>
                            <td>ACTIVAR ESCUDO</td>
                          </tr>
                          <tr>
                            <td className="key">Y / △</td>
                            <td>CAMBIAR ARMA</td>
                          </tr>
                          <tr>
                            <td className="key">LB / L1</td>
                            <td>EMOTE 1</td>
                          </tr>
                          <tr>
                            <td className="key">RB / R1</td>
                            <td>EMOTE 2</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>

              <section className="blog-section">
                <div className="section-header">
                  <div className="warning-icon">⚠</div>
                  <h2>FUNCIONALIDAD</h2>
                  <div className="warning-icon">⚠</div>
                </div>
                <div className="section-content features-grid">
                  <div className="feature-item">
                    <div className="feature-icon">🎮</div>
                    <h3>MULTIJUGADOR</h3>
                    <ul className="feature-list">
                      <li>Hasta 4 jugadores en local</li>
                      <li>Partidas en línea con salas personalizadas</li>
                      <li>Emparejamiento por habilidad</li>
                    </ul>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">🏆</div>
                    <h3>COMPETITIVO</h3>
                    <ul className="feature-list">
                      <li>Sistema de rangos</li>
                      <li>Temporadas competitivas</li>
                      <li>Torneos automáticos cada hora</li>
                    </ul>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">🎲</div>
                    <h3>MODOS DE JUEGO</h3>
                    <ul className="feature-list">
                      <li>Batalla Real</li>
                      <li>Captura la Bandera</li>
                      <li>Supervivencia por Equipos</li>
                    </ul>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">🔧</div>
                    <h3>PERSONALIZACIÓN</h3>
                    <ul className="feature-list">
                      <li>Skins para alienígenas</li>
                      <li>Efectos visuales personalizados</li>
                      <li>Emotes y gestos</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
