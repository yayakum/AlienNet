import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import CuerpoAzul from "../assets/Perfil_azul.png";
import CuerpoAmarillo from "../assets/Perfil_amarillo.png";
import CuerpoVerde from "../assets/Perfil_verde.png";
import CuerpoRosa from "../assets/Perfil_rosa.png";
import CuerpoMorado from "../assets/Perfil_morado.png";
import CuerpoGris from "../assets/Perfil_gris.png";
// Añade estos imports al principio del archivo junto a los demás imports
import { 
  FaKeyboard, FaGamepad, FaPlaystation, FaXbox,
  FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight 
} from 'react-icons/fa';
import { 
  BiJoystick, BiShieldQuarter 
} from 'react-icons/bi';
import { 
  TbKeyboardShow, TbSpace, TbLetterE, TbLetterQ, 
  TbLetterA, TbLetterB, TbLetterX, TbLetterY,
  TbSquare, TbTriangle, TbCircle
} from 'react-icons/tb';
import { GiAmmoBox } from 'react-icons/gi';
import "../styles/Blog.css";

const Blog = () => {
  return (
    <div className="app">
      <Header />
      <div className="alien-container">
        <main className="blog-content">
          <div className="terminal-window">
            {/* <div className="terminal-header">
              <span className="terminal-title">
                // BLOG :: DOCUMENTACIÓN DEL JUEGO
              </span>
              <div className="terminal-controls">
                <span className="terminal-control"></span>
                <span className="terminal-control"></span>
                <span className="terminal-control"></span>
              </div>
            </div> */}

            <div className="terminal-body">
              <section className="blog-section">
                <div className="section-header">
                  <div className="warning-icon">⚠</div>
                  <h2>DESCRIPCIÓN DEL JUEGO</h2>
                  <div className="warning-icon">⚠</div>
                </div>
                <div className="section-content">
                  <p>
                    <span className="highlight"> ALIEN NET</span> es un juego
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
                      <div className="progress" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                  <div className="tech-item">
                    <h3>RENDERIZADO</h3>
                    <p>
                      Gráficos optimizados para una experiencia fluida con
                      efectos visuales de neón.
                    </p>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                  <div className="tech-item">
                    <h3>NETWORKING</h3>
                    <p>
                      Sistema de partidas en línea con bajo tiempo de latencia.
                    </p>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: "100%" }}></div>
                    </div>
                    <div>
                    </div>
                  </div>
                    {/* <p>Realizado con UE 5</p> */}
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
                    <div className="feature-icon"></div>
                    <h3>MULTIJUGADOR</h3>
                    <ul className="feature-list">
                      <li>Hasta 4 jugadores en local</li>
                      <li>Partidas en línea</li>
                    </ul>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon"></div>
                    <h3>MODOS DE JUEGO</h3>
                    <ul className="feature-list">
                      <li>Batalla Campal</li>
                      
                    </ul>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon"></div>
                    <h3>PERSONALIZACIÓN</h3>
                    <ul className="feature-list">
                      <li>Skins para alienígenas</li>
                      <li>Efectos visuales personalizados</li>
                      
                    </ul>
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
                    <div className="weapon-icon"></div>
                    <div className="weapon-info">
                      <h3>RAYO REPULSOR</h3>
                      <p>
                        Arma la cual sirve para empujar a los
                        enemigos fuera del escritorio
                      </p>
                      <div className="weapon-stats">
                        <span>PRINCIPAL</span>
                      </div>
                    </div>
                  </div>
                  <div className="weapon-card">
                    <div className="weapon-icon"></div>
                    <div className="weapon-info">
                      <h3>RAYO DE GRAVEDAD</h3>
                      <p>
                        Arma que al golpear a tu oponente lo vuelve más lento
                      </p>
                      <div className="weapon-stats">
                        <span>SECUDNARIA</span>
                      </div>
                    </div>
                  </div>
                  <div className="weapon-card">
                    <div className="weapon-icon"></div>
                    <div className="weapon-info">
                      <h3>SUPER DISPARO</h3>
                      <p>Realiza un disparo con mayor diametro y fuerza de empuje</p>
                      <div className="weapon-stats">
                        <span>POWER-UP</span>
                        
                        
                      </div>
                    </div>
                  </div>
                  <div className="weapon-card">
                    <div className="weapon-icon"></div>
                    <div className="weapon-info">
                      <h3>SUPER VELOCIDAD</h3>
                      <p>Realiza un sprint a una velocidad del 20% más de lo normal</p>
                      <div className="weapon-stats">
                        <span>POWER-UP</span>
                        <span>Duración: 4s</span>
                        
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
                      
                      <div className="character-skill">
                        <span className="skill-title">
                          XD
                        </span>
                        <p>
                          LORE DEL PERSONAJE
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
                      <div className="character-skill">
                        <span className="skill-title">
                          XD
                        </span>
                        <p>
                          LORE DEL PERSONAJE
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
                      <div className="character-skill">
                        <span className="skill-title">
                          XD
                        </span>
                        <p>
                          LORE DEL PERSONAJE
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="character-card">
                    <div
                      className="character-image"
                      style={{ backgroundColor: "#9c4d89" }}
                    >
                      <img src={CuerpoRosa} alt="Zax" />
                    </div>
                    <div className="character-data">
                      <h3>
                        ZAX<span className="id-tag">#A2</span>
                      </h3>
                      <div className="character-skill">
                        <span className="skill-title">
                          XD
                        </span>
                        <p>
                          LORE DEL PERSONAJE
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="character-card">
                    <div
                      className="character-image"
                      style={{ backgroundColor: "#883fe0" }}
                    >
                      <img src={ CuerpoMorado} alt="Zax" />
                    </div>
                    <div className="character-data">
                      <h3>
                        ZAX<span className="id-tag">#A2</span>
                      </h3>
                      <div className="character-skill">
                        <span className="skill-title">
                          XD
                        </span>
                        <p>
                          LORE DEL PERSONAJE
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="character-card">
                    <div
                      className="character-image"
                      style={{ backgroundColor: "#b4b4b4" }}
                    >
                      <img src={CuerpoGris} alt="Zax" />
                    </div>
                    <div className="character-data">
                      <h3>
                        ZAX<span className="id-tag">#A2</span>
                      </h3>
                      <div className="character-skill">
                        <span className="skill-title">
                          XD
                        </span>
                        <p>
                          LORE DEL PERSONAJE
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
                            <td className="key">CLIC DERECHO</td>
                            <td>APUNTAR</td>
                          </tr>
                          <tr>
                            <td className="key">CLIC IZQUIERDO</td>
                            <td>DISPARAR</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="control-group">
                      <h3>MANDO</h3>
                      <table className="control-table">
                        <tbody>
                          <tr>
                            <td className="key"></td>
                            <td>MOVIMIENTO</td>
                          </tr>
                          <tr>
                            <td className="key"></td>
                            <td>SALTAR</td>
                          </tr>
                          <tr>
                            <td className="key"></td>
                            <td>APUNTAR</td>
                          </tr>
                          <tr>
                            <td className="key"></td>
                            <td>DISPARAR</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
