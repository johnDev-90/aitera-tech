"use client";

import React, { useEffect } from "react";

import { useTranslations } from "next-intl";
import LanguageSwitcher from "./components/ui/LanguageSwitcher";

type Step = { title: string; desc: string };
type ServiceCard = { title: string; desc: string; items: string[] };
type AboutCell = { eyebrow: string; title: string; desc: string };
type ContactInfo = { title: string; desc: string };

const SERVICE_ICON_PATHS = [
  <React.Fragment key="websites">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18" />
  </React.Fragment>,
  <path key="webapps" d="M9 3v18M15 3v18M3 9h18M3 15h18" />,
  <React.Fragment key="integrations">
    <circle cx="6" cy="6" r="3" />
    <circle cx="18" cy="18" r="3" />
    <path d="M8.5 7.5L15.5 16.5" />
  </React.Fragment>,
  <path
    key="design"
    d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z"
  />,
];

const CONTACT_ICON_PATHS = [
  <path
    key="call"
    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
  />,
  <React.Fragment key="whatsapp">
    <path d="M3 12a9 9 0 1 0 9-9 9 9 0 0 0-9 9z" />
    <path d="M8 13a4 4 0 0 0 8 0" />
  </React.Fragment>,
  <React.Fragment key="email">
    <path d="M4 4h16v16H4z" />
    <path d="M4 6l8 7 8-7" />
  </React.Fragment>,
];

const CONTACT_LINKS = [
  { href: "tel:+50360244779", label: "+(503) 6024-4779" },
  { href: "", label: "+(503) 6024-4779" },
  { href: "mailto:info@aiteratech.com", label: "info@aiteratech.com" },
];

export default function Home() {
  const tNav = useTranslations("Nav");
  const tWa = useTranslations("Whatsapp");
  const tHero = useTranslations("Hero");
  const tProcess = useTranslations("Process");
  const tServices = useTranslations("Services");
  const tAbout = useTranslations("About");
  const tContact = useTranslations("Contact");
  const tFooter = useTranslations("Footer");

  const waHref = `https://wa.me/50360244779?text=${encodeURIComponent(tWa("message"))}`;
  const processSteps = tProcess.raw("steps") as Step[];
  const serviceCards = tServices.raw("cards") as ServiceCard[];
  const aboutCells = tAbout.raw("cells") as AboutCell[];
  const contactInfo = tContact.raw("info") as ContactInfo[];

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
      btn.textContent = tContact("form.submitted");
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              <a href="#home">{tNav("home")}</a>
            </li>
            <li>
              <a href="#solutions">{tNav("process")}</a>
            </li>
            <li>
              <a href="#services">{tNav("services")}</a>
            </li>
            <li>
              <a href="#nosotros">{tNav("about")}</a>
            </li>
            <li>
              <a href="#contact">{tNav("contact")}</a>
            </li>
            <li>
              <a href={waHref} className="btn btn-primary">
                {tNav("cta")}
              </a>
            </li>
          </ul>
          <div className="nav-right">
            <LanguageSwitcher />
            <button
              className="menu-toggle"
              id="menuToggle"
              aria-label={tNav("menuAriaLabel")}
            >
              ☰
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="wrap hero-grid">
            <div className="hero-copy reveal">
              <span className="eyebrow">{tHero("location")}</span>
              <h1>
                {tHero("titlePart1")}{" "}
                <span className="grad-text">{tHero("titleHighlight")}</span>{" "}
                {tHero("titlePart2")}
              </h1>
              <p>{tHero("description")}</p>
              <div className="hero-ctas">
                <a href="#contact" className="btn btn-primary">
                  {tHero("ctaPrimary")}
                </a>
                <a href={waHref} className="btn btn-ghost">
                  {tHero("ctaWhatsapp")}
                </a>
              </div>
              <div className="hero-tags">
                <span className="tag">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {tHero("tag1")}
                </span>
                <span className="tag">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {tHero("tag2")}
                </span>
                <span className="tag">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {tHero("tag3")}
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
                    <span className="dim">01</span> {tHero("code.line1Label")}
                    <span className="dim">.</span>
                    <b>{tHero("code.line1Method")}</b>({tHero("code.line1Arg")})
                  </div>
                  <div className="code-line">
                    <span className="dim">02</span> {tHero("code.line2Label")}
                    <span className="dim">.</span>
                    <b>{tHero("code.line2Method")}</b>({tHero("code.line2Arg")})
                  </div>
                  <div className="code-line">
                    <span className="dim">03</span> {tHero("code.line3Label")}
                    <span className="dim">.</span>
                    <b>{tHero("code.line3Method")}</b>()
                    <span className="cursor-blink"></span>
                  </div>
                </div>
                <div className="float-chip a">
                  <span className="dot"></span>
                  {tHero("code.chipA")}
                </div>
                <div className="float-chip b">
                  <span className="dot"></span>
                  {tHero("code.chipB")}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="signal-divider">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 L1200,60" stroke="#242a38" strokeWidth="1" />
          </svg>
        </div>

        {/* PROCESO */}
        <section className="process" id="solutions">
          <div className="wrap">
            <div className="process-head reveal">
              <div>
                <span className="eyebrow">{tProcess("eyebrow")}</span>
                <h2 className="section-title">{tProcess("title")}</h2>
              </div>
              <p className="section-sub">{tProcess("subtitle")}</p>
            </div>

            <div className="process-list">
              {processSteps.map((step, i) => (
                <div className="process-item reveal" key={step.title}>
                  <div className="process-num">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="process-body">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section className="services" id="services">
          <div className="wrap">
            <div className="reveal">
              <span className="eyebrow">{tServices("eyebrow")}</span>
              <h2 className="section-title">{tServices("title")}</h2>
              <p className="section-sub">{tServices("subtitle")}</p>
            </div>

            <div className="services-grid">
              {serviceCards.map((card, i) => (
                <div className="card reveal" key={card.title}>
                  <div className="card-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      {SERVICE_ICON_PATHS[i]}
                    </svg>
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <ul>
                    {card.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NOSOTROS */}
        <section className="about" id="nosotros">
          <div className="wrap">
            <div className="about-top reveal">
              <span className="eyebrow">{tAbout("eyebrow")}</span>
              <h2 className="section-title">{tAbout("title")}</h2>
              <p className="section-sub">{tAbout("subtitle")}</p>
            </div>

            <div className="about-grid reveal">
              {aboutCells.map((cell) => (
                <div className="about-cell" key={cell.title}>
                  <span className="eyebrow">{cell.eyebrow}</span>
                  <h3>{cell.title}</h3>
                  <p>{cell.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section className="contact" id="contact">
          <div className="wrap">
            <div className="reveal">
              <span className="eyebrow">{tContact("eyebrow")}</span>
              <h2 className="section-title">{tContact("title")}</h2>
              <p className="section-sub">{tContact("subtitle")}</p>
            </div>

            <div className="contact-grid">
              <form className="form-panel reveal" id="contactForm">
                <div className="field">
                  <label htmlFor="name">{tContact("form.nameLabel")}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={tContact("form.namePlaceholder")}
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">{tContact("form.emailLabel")}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={tContact("form.emailPlaceholder")}
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="message">
                    {tContact("form.messageLabel")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder={tContact("form.messagePlaceholder")}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  {tContact("form.submit")}
                </button>
              </form>

              <div className="contact-info reveal">
                {contactInfo.map((info, i) => (
                  <div className="info-card" key={info.title}>
                    <div className="card-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        {CONTACT_ICON_PATHS[i]}
                      </svg>
                    </div>
                    <div>
                      <h4>{info.title}</h4>
                      <p>{info.desc}</p>
                      <a href={CONTACT_LINKS[i].href || waHref}>
                        {CONTACT_LINKS[i].label}
                      </a>
                    </div>
                  </div>
                ))}
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
          <p>
            {tFooter("rights")}{" "}
            <span
              className="mono"
              style={{ fontSize: "0.75rem", color: "var(--muted)" }}
            >
              v1.0
            </span>
          </p>
        </div>
      </footer>

      <a className="wa-float" href={waHref} aria-label={tWa("chatAriaLabel")}>
        <svg viewBox="0 0 24 24">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2zm5.8 14.08c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.34-.14-.19-1.17-1.56-1.17-2.97 0-1.41.74-2.1 1-2.39.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.15.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.16-.29.36-.42.49-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.27.36-.22.6-.13.24.09 1.53.72 1.79.85.26.13.43.19.5.3.06.11.06.62-.18 1.3z" />
        </svg>
      </a>
    </>
  );
}
