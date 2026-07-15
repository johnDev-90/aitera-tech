"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const header = document.getElementById("siteHeader");
    const handleScroll = () => {
      header?.classList.toggle("scrolled", window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const handleMenuToggle = () => navLinks?.classList.toggle("open");
    menuToggle?.addEventListener("click", handleMenuToggle);
    navLinks?.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => navLinks.classList.remove("open"))
    );

    const revealEls = document.querySelectorAll(".reveal, .process-item");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => io.observe(el));

    const bgGlow = document.getElementById("bgGlow");
    const handlePointerMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      bgGlow?.style.setProperty("--mx", x + "%");
      bgGlow?.style.setProperty("--my", y + "%");
    };
    window.addEventListener("pointermove", handlePointerMove as EventListener);

    const tiltDevice = document.getElementById("tiltDevice");
    let handleTiltMove: ((e: PointerEvent) => void) | null = null;
    let handleTiltLeave: (() => void) | null = null;
    if (tiltDevice) {
      handleTiltMove = (e: PointerEvent) => {
        const r = tiltDevice.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        tiltDevice.style.transform = `perspective(1000px) rotateX(${-py * 10 + 4}deg) rotateY(${px * 14 - 6}deg)`;
      };
      handleTiltLeave = () => {
        tiltDevice.style.transform =
          "perspective(1000px) rotateX(4deg) rotateY(-6deg)";
      };
      tiltDevice.addEventListener(
        "pointermove",
        handleTiltMove as EventListener
      );
      tiltDevice.addEventListener("pointerleave", handleTiltLeave);
    }

    const cardHandlers: Array<{ card: Element; handler: EventListener }> = [];
    document.querySelectorAll(".card").forEach((card) => {
      const handler = (e: Event) => {
        const pe = e as PointerEvent;
        const r = (card as HTMLElement).getBoundingClientRect();
        (card as HTMLElement).style.setProperty(
          "--px",
          pe.clientX - r.left + "px"
        );
        (card as HTMLElement).style.setProperty(
          "--py",
          pe.clientY - r.top + "px"
        );
      };
      card.addEventListener("pointermove", handler);
      cardHandlers.push({ card, handler });
    });

    const form = document.getElementById("contactForm") as HTMLFormElement | null;
    const handleSubmit = (e: Event) => {
      e.preventDefault();
      const btn = form?.querySelector("button") as HTMLButtonElement | null;
      if (!btn) return;
      const original = btn.textContent;
      btn.textContent = "¡Mensaje enviado!";
      btn.style.opacity = "0.85";
      setTimeout(() => {
        btn.textContent = original;
        btn.style.opacity = "1";
        form?.reset();
      }, 2600);
    };
    form?.addEventListener("submit", handleSubmit);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener(
        "pointermove",
        handlePointerMove as EventListener
      );
      menuToggle?.removeEventListener("click", handleMenuToggle);
      if (tiltDevice && handleTiltMove)
        tiltDevice.removeEventListener(
          "pointermove",
          handleTiltMove as EventListener
        );
      if (tiltDevice && handleTiltLeave)
        tiltDevice.removeEventListener("pointerleave", handleTiltLeave);
      cardHandlers.forEach(({ card, handler }) =>
        card.removeEventListener("pointermove", handler)
      );
      form?.removeEventListener("submit", handleSubmit);
      io.disconnect();
    };
  }, []);

  return (
    <>
      <div className="bg-grid"></div>
      <div className="bg-glow" id="bgGlow"></div>

      <header id="siteHeader">
        <nav>
          <a href="#home" className="logo">
            <span className="logo-mark">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
            aitera<small style={{ marginLeft: "4px" }}>TECH</small>
          </a>
          <ul className="navlinks" id="navLinks">
            <li>
              <a href="#home">Inicio</a>
            </li>
            <li>
              <a href="#solutions">Proceso</a>
            </li>
            <li>
              <a href="#services">Servicios</a>
            </li>
            <li>
              <a href="#nosotros">Nosotros</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
            <li>
              <a
                href="https://wa.me/50360244779?text=Hola%20quisiera%20más%20información"
                className="btn btn-primary"
              >
                Hablemos
              </a>
            </li>
          </ul>
          <button
            className="menu-toggle"
            id="menuToggle"
            aria-label="Abrir menú"
          >
            ☰
          </button>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="wrap hero-grid">
            <div className="hero-copy reveal">
              <span className="eyebrow">Estudio de software · El Salvador</span>
              <h1>
                Convertimos <span className="grad-text">ideas</span> en producto
                digital que funciona.
              </h1>
              <p>
                Diseñamos y programamos sitios, apps y automatizaciones a la
                medida de tu operación. Sin vueltas, sin retrasos: una señal
                clara desde el primer llamado hasta el último deploy.
              </p>
              <div className="hero-ctas">
                <a href="#contact" className="btn btn-primary">
                  Cotiza gratis →
                </a>
                <a
                  href="https://wa.me/50360244779?text=Hola%20quisiera%20más%20información"
                  className="btn btn-ghost"
                >
                  Escribir por WhatsApp
                </a>
              </div>
              <div className="hero-tags">
                <span className="tag">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  Diseño a medida
                </span>
                <span className="tag">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  Prototipo en 5 pasos
                </span>
                <span className="tag">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  Soporte cercano
                </span>
              </div>
            </div>

            <div className="hero-visual reveal">
              <div className="device" id="tiltDevice">
                <div className="device-bar">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="device-body">
                  <div className="waveform-wrap">
                    <svg viewBox="0 0 420 110" preserveAspectRatio="none">
                      <defs>
                        <linearGradient
                          id="gradSignal"
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="0"
                        >
                          <stop offset="0%" stopColor="#7c5cff" />
                          <stop offset="50%" stopColor="#5b8dff" />
                          <stop offset="100%" stopColor="#3ddc97" />
                        </linearGradient>
                      </defs>
                      <path
                        className="path-idea"
                        d="M0,55 C 30,10 60,100 90,55 C 120,10 150,100 180,55 C 210,10 240,100 270,55 C 300,10 330,100 360,55 C 380,30 400,70 420,55"
                      />
                      <path
                        className="path-signal"
                        d="M0,55 C 30,10 60,100 90,55 C 120,10 150,100 180,55 C 210,10 240,100 270,55 C 300,10 330,100 360,55 C 380,30 400,70 420,55"
                      />
                    </svg>
                  </div>
                  <div className="code-line">
                    <span className="dim">01</span> idea
                    <span className="dim">.</span>
                    <b>definir</b>(objetivo)
                  </div>
                  <div className="code-line">
                    <span className="dim">02</span> alcance
                    <span className="dim">.</span>
                    <b>construir</b>(prototipo)
                  </div>
                  <div className="code-line">
                    <span className="dim">03</span> producto
                    <span className="dim">.</span>
                    <b>lanzar</b>()
                    <span className="cursor-blink"></span>
                  </div>
                </div>
                <div className="float-chip a">
                  <span className="dot"></span>Deploy listo
                </div>
                <div className="float-chip b">
                  <span className="dot"></span>UX validado
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="signal-divider">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,60 L1200,60"
              stroke="#242a38"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* PROCESO */}
        <section className="process" id="solutions">
          <div className="wrap">
            <div className="process-head reveal">
              <div>
                <span className="eyebrow">Cómo trabajamos</span>
                <h2 className="section-title">
                  De la idea al prototipo, en cinco pasos y sin ruido de fondo.
                </h2>
              </div>
              <p className="section-sub">
                Cada proyecto sigue la misma señal: clara, medible y sin
                discusiones innecesarias que retrasen el lanzamiento.
              </p>
            </div>

            <div className="process-list">
              <div className="process-item reveal">
                <div className="process-num">01</div>
                <div className="process-body">
                  <h3>Llamada inicial</h3>
                  <p>
                    Escuchamos tu visión y traducimos el problema real de
                    negocio en un objetivo concreto.
                  </p>
                </div>
              </div>
              <div className="process-item reveal">
                <div className="process-num">02</div>
                <div className="process-body">
                  <h3>Mapa de funcionalidades</h3>
                  <p>
                    Convertimos esa visión en un alcance claro: qué incluye el
                    proyecto y qué queda fuera.
                  </p>
                </div>
              </div>
              <div className="process-item reveal">
                <div className="process-num">03</div>
                <div className="process-body">
                  <h3>Dirección visual</h3>
                  <p>
                    Moodboard, tono y estilo: el lenguaje visual que tu marca
                    necesita para verse como se siente.
                  </p>
                </div>
              </div>
              <div className="process-item reveal">
                <div className="process-num">04</div>
                <div className="process-body">
                  <h3>Arquitectura de experiencia</h3>
                  <p>
                    Diseñamos cada pantalla y cada decisión del usuario, paso a
                    paso, sin cabos sueltos.
                  </p>
                </div>
              </div>
              <div className="process-item reveal">
                <div className="process-num">05</div>
                <div className="process-body">
                  <h3>Prototipo interactivo</h3>
                  <p>
                    Tu idea toma forma real: algo que se toca, se prueba y se
                    aprueba antes de construir a fondo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section className="services" id="services">
          <div className="wrap">
            <div className="reveal">
              <span className="eyebrow">Servicios</span>
              <h2 className="section-title">
                Todo lo que tu presencia digital necesita, en un solo equipo.
              </h2>
              <p className="section-sub">
                Desarrollo, diseño e integración trabajando como un mismo
                sistema, no como piezas sueltas.
              </p>
            </div>

            <div className="services-grid">
              <div className="card reveal">
                <div className="card-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M3 9h18" />
                  </svg>
                </div>
                <h3>Sitios web</h3>
                <p>
                  Sitios que cargan rápido, rankean bien y convierten visitas en
                  clientes. Diseño responsive de punta a punta.
                </p>
                <ul>
                  <li>Creación desde cero</li>
                  <li>Rediseño de sitios existentes</li>
                  <li>Optimización de velocidad y SEO</li>
                  <li>Diseño 100% responsive</li>
                </ul>
              </div>

              <div className="card reveal">
                <div className="card-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
                  </svg>
                </div>
                <h3>Web apps a la medida</h3>
                <p>
                  Software hecho para tu operación real: paneles internos,
                  portales de clientes y flujos que hoy haces a mano.
                </p>
                <ul>
                  <li>Apps internas de gestión</li>
                  <li>Portales para clientes finales</li>
                  <li>Funcionalidades a medida</li>
                  <li>Arquitectura pensada para escalar</li>
                </ul>
              </div>

              <div className="card reveal">
                <div className="card-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <circle cx="6" cy="6" r="3" />
                    <circle cx="18" cy="18" r="3" />
                    <path d="M8.5 7.5L15.5 16.5" />
                  </svg>
                </div>
                <h3>Integraciones</h3>
                <p>
                  Conectamos las herramientas que ya usas para que trabajen como
                  un solo sistema, sin fricción.
                </p>
                <ul>
                  <li>Facturación electrónica</li>
                  <li>Conexión con Shopify</li>
                  <li>APIs externas</li>
                  <li>Sincronización entre sistemas</li>
                </ul>
              </div>

              <div className="card reveal">
                <div className="card-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
                  </svg>
                </div>
                <h3>Diseño y estrategia</h3>
                <p>
                  UX/UI, estrategia de conversión y consultoría digital para que
                  cada decisión tenga un propósito.
                </p>
                <ul>
                  <li>Diseño gráfico y UX/UI</li>
                  <li>Optimización de marketing</li>
                  <li>Estrategias de conversión</li>
                  <li>Consultoría digital</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* NOSOTROS */}
        <section className="about" id="nosotros">
          <div className="wrap">
            <div className="about-top reveal">
              <span className="eyebrow">Quiénes somos</span>
              <h2 className="section-title">
                La tecnología debería ser una aliada, no una barrera.
              </h2>
              <p className="section-sub">
                Creamos soluciones digitales pensadas para simplificar procesos,
                mejorar la productividad y llevar a las empresas a su siguiente
                nivel — con visión estratégica y un enfoque humano.
              </p>
            </div>

            <div className="about-grid reveal">
              <div className="about-cell">
                <span className="eyebrow">Nuestra misión</span>
                <h3>Herramientas que de verdad se usan</h3>
                <p>
                  Desarrollamos tecnología accesible, segura y escalable que
                  ayuda a nuestros clientes a crecer, con atención al detalle en
                  cada entrega.
                </p>
              </div>
              <div className="about-cell">
                <span className="eyebrow">Cómo trabajamos</span>
                <h3>Contigo, de principio a fin</h3>
                <p>
                  Construimos relaciones a largo plazo basadas en confianza.
                  Metodologías ágiles y comunicación constante, desde la idea
                  hasta la implementación.
                </p>
              </div>
              <div className="about-cell">
                <span className="eyebrow">Nuestra visión</span>
                <h3>Un referente regional</h3>
                <p>
                  Queremos ser un referente en soluciones digitales innovadoras,
                  con la transparencia y la excelencia técnica como pilares de
                  cada proyecto.
                </p>
              </div>
              <div className="about-cell">
                <span className="eyebrow">Nuestros valores</span>
                <h3>Diseño que inspira, código que funciona</h3>
                <p>
                  Nuestro compromiso es ayudarte a crecer en el mundo digital
                  con tecnología sólida y diseño que se siente hecho a tu
                  medida.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section className="contact" id="contact">
          <div className="wrap">
            <div className="reveal">
              <span className="eyebrow">Hablemos 🚀</span>
              <h2 className="section-title">
                Cuéntanos qué quieres construir.
              </h2>
              <p className="section-sub">
                Déjanos un mensaje y te respondemos lo antes posible para
                conversar sobre cómo llevar tu proyecto adelante.
              </p>
            </div>

            <div className="contact-grid">
              <form className="form-panel reveal" id="contactForm">
                <div className="field">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="¿Cómo te llamas?"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Correo</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="tu@correo.com"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Cuéntanos brevemente tu proyecto..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Enviar mensaje
                </button>
              </form>

              <div className="contact-info reveal">
                <div className="info-card">
                  <div className="card-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h4>Llámanos</h4>
                    <p>Habla directamente con nuestro equipo.</p>
                    <a href="tel:+50360244779">+(503) 6024-4779</a>
                  </div>
                </div>
                <div className="info-card">
                  <div className="card-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M3 12a9 9 0 1 0 9-9 9 9 0 0 0-9 9z" />
                      <path d="M8 13a4 4 0 0 0 8 0" />
                    </svg>
                  </div>
                  <div>
                    <h4>WhatsApp</h4>
                    <p>Respuesta rápida para cotizaciones.</p>
                    <a href="https://wa.me/50360244779?text=Hola%20quisiera%20más%20información">
                      +(503) 6024-4779
                    </a>
                  </div>
                </div>
                <div className="info-card">
                  <div className="card-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M4 4h16v16H4z" />
                      <path d="M4 6l8 7 8-7" />
                    </svg>
                  </div>
                  <div>
                    <h4>Escríbenos</h4>
                    <p>Para preguntas generales y cotizaciones.</p>
                    <a href="mailto:info@aiteratech.com">info@aiteratech.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer-row">
          <a href="#home" className="logo">
            <span className="logo-mark">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
            aitera<small style={{ marginLeft: "4px" }}>TECH</small>
          </a>
          <p>© 2024 Aitera Tech. Todos los derechos reservados.</p>
        </div>
      </footer>

      <a
        className="wa-float"
        href="https://wa.me/50360244779?text=Hola%20quisiera%20más%20información"
        aria-label="Chatear por WhatsApp"
      >
        <svg viewBox="0 0 24 24">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2zm5.8 14.08c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.34-.14-.19-1.17-1.56-1.17-2.97 0-1.41.74-2.1 1-2.39.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.15.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.16-.29.36-.42.49-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.27.36-.22.6-.13.24.09 1.53.72 1.79.85.26.13.43.19.5.3.06.11.06.62-.18 1.3z" />
        </svg>
      </a>
    </>
  );
}
