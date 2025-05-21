import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import CuerpoAzul from "../assets/Perfil_azul.png";
import CuerpoAmarillo from "../assets/Perfil_amarillo.png";
import CuerpoVerde from "../assets/Perfil_verde.png";
import CuerpoRosa from "../assets/Perfil_rosa.png";
import CuerpoMorado from "../assets/Perfil_morado.png";
import CuerpoGris from "../assets/Perfil_gris.png";
import powerupempuje from "../assets/powerupempuje.png";
import powerupsprint from "../assets/powerupsprint.png";
import arma1 from "../assets/arma1.png";
import arma2 from "../assets/arma2.png";

import "../styles/Blog.css";

const Blog = () => {
  return (
    <div className="app">
      <Header />
      <div className="alien-container">
        <main className="blog-content">
          <div className="terminal-window">
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
                    <div className="weapon-icon">
                        <img src={arma1} alt="Principal" className="powerup-icon" />
                    </div>
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
                    <div className="weapon-icon">
                        <img src={arma2} alt="Secundaria" className="powerup-icon" />
                    </div>
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
                    <div className="weapon-icon">
                      <img src={powerupsprint} alt="Super Disparo" className="powerup-icon" />
                    </div>
                    <div className="weapon-info">
                      <h3>SUPER DISPARO</h3>
                      <p>Realiza un disparo con mayor diametro y fuerza de empuje</p>
                      <div className="weapon-stats">
                        <span>POWER-UP</span>
                      </div>
                    </div>
                  </div>

                  <div className="weapon-card">
                    <div className="weapon-icon">
                      <img src={powerupempuje} alt="Super Velocidad" className="powerup-icon" />
                    </div>
                    <div className="weapon-info">
                      <h3>SUPER VELOCIDAD</h3>
                      <p>Realiza un sprint a una velocidad del 20% más de lo normal</p>
                      <div className="weapon-stats">
                        <span>POWER-UP</span>
                        <span>Duración: 2s</span>
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
                        NUBLOK<span className="id-tag">#A1</span>
                      </h3>
                      
                      <div className="character-skill">
                        <span className="skill-title">
                          XD
                        </span>
                        <p>
                          Nublok es un ingeniero galáctico que habita en los cielos eternamente nublados del planeta Cirrus-9. Domina la manipulación del clima con su tecnología de condensación cuántica. Es callado, reflexivo, y su risa suena como un trueno tímido.
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
                          Zax es el infame pirata estelar del cinturón Nova Krix. Con su cicatriz como prueba de mil batallas, Zax comanda una nave con IA rebelde y una tripulación de androides que lo veneran como un dios. Su lema: "Si lo ves venir… ya es tarde."
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
                          Ya establecido como el nombre oficial de este gelatinoso alienígena, Gloop es un ser travieso y brillante del pantano radiactivo de Slurmia. Tiene la capacidad de dividirse en clones más pequeños, pero ninguno puede resistirse a una buena fiesta galáctica.
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
                        MUBU<span className="id-tag">#A2</span>
                      </h3>
                      <div className="character-skill">
                        <span className="skill-title">
                          XD
                        </span>
                        <p>
                          Mubu es el resultado de un experimento de amor interestelar fallido. Aunque parece tierno, es una fuerza imparable en combate emocional. Su especialidad: desarmar a sus enemigos con frases motivacionales y abrazos devastadores (literalmente, puede romper huesos).
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
                        KLYXX<span className="id-tag">#A2</span>
                      </h3>
                      <div className="character-skill">
                        <span className="skill-title">
                          XD
                        </span>
                        <p>
                          Klyxx es el profeta de Nebulark, un planeta donde el tiempo fluye hacia atrás. Puede hablar en idiomas olvidados y escribir en el aire con sus pensamientos. Se rumorea que puede predecir el pasado y recordar el futuro. ¿Confuso? Exactamente.
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
                        DRYXX<span className="id-tag">#A2</span>
                      </h3>
                      <div className="character-skill">
                        <span className="skill-title">
                          XD
                        </span>
                        <p>
                          Dryxx es un agente encubierto de la Orden Silenciosa. Nacido sin cuerdas vocales ni sombra, es el mejor infiltrado del universo. Cada paso que da está calculado, cada mirada, una amenaza. Aparece donde no lo esperas y desaparece antes de que entiendas por qué viniste.
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
                            <td className="key">JOYSTICK</td>
                            <td>MOVIMIENTO</td>
                          </tr>
                          <tr>
                            <td className="key">A</td>
                            <td>SALTAR</td>
                          </tr>
                          <tr>
                            <td className="key">LT</td>
                            <td>APUNTAR</td>
                          </tr>
                          <tr>
                            <td className="key">RT</td>
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
