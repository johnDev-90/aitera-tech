"use client";

import React from "react";

type Props = {
  message?: string; // mensaje por defecto (se URI-encodea)
  size?: number; // tamaño del icono en px
  className?: string; // clases tailwind extra si quieres
};

export default function WhatsAppFloating({
  message = "Hola%20quisiera%20más%20información", // ya URI-encoded por defecto
  size = 56,
  className = "",
}: Props) {
  // Lee número desde env público
  const phone = process.env.NEXT_PUBLIC_WHATSAPP ?? "";

  // Si no hay número, no renderizamos nada (evita enlaces rotos)
  if (!phone) return null;

  // Construye URL segura
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir chat de WhatsApp"
      className={`fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-50 flex items-center gap-3 ${className}`}
    >
      {/* Botón circular */}
      <div
        className="bg-[#25D366] hover:brightness-90 active:scale-95 transition-transform duration-150 shadow-lg rounded-full flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        {/* Icono WhatsApp */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          width={Math.round(size * 0.55)}
          height={Math.round(size * 0.55)}
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 .02 5.373.02 12.001c0 2.116.554 4.186 1.607 6.015L0 24l6.276-1.613A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-11.999 0-3.195-1.246-6.197-3.48-8.522zM12 21.5c-1.826 0-3.606-.518-5.136-1.49l-.367-.225L4.5 20.5l1.717-2.004-.232-.376A9.453 9.453 0 012.5 12c0-5.247 4.253-9.5 9.5-9.5 5.247 0 9.5 4.253 9.5 9.5S17.247 21.5 12 21.5z" />
          <path d="M17.18 14.01c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15s-.78.98-.95 1.18c-.17.2-.34.22-.63.07-.3-.15-1.27-.47-2.41-1.48-.89-.78-1.49-1.74-1.66-2.04-.17-.29-.02-.44.13-.59.13-.13.3-.34.45-.51.15-.17.19-.28.28-.47.09-.19.04-.36-.02-.5-.06-.14-.68-1.63-.93-2.23-.24-.58-.48-.5-.66-.51-.17 0-.37-.01-.57-.01s-.5.07-.76.36c-.26.29-.99.97-.99 2.37s1.02 2.75 1.16 2.95c.14.22 2.02 3.08 4.9 4.31 3.02 1.27 3.02.85 3.56.8.54-.05 1.78-.72 2.03-1.42.24-.7.24-1.3.17-1.42-.07-.12-.28-.17-.58-.31z" />
        </svg>
      </div>

      {/* Etiqueta (solo en pantallas md+) */}
      <span className="hidden md:inline-block text-white bg-white/90 dark:bg-slate-900/85 px-4 py-2 rounded-full text-sm shadow-sm border border-white/40 dark:border-transparent">
        Chatear por WhatsApp
      </span>
    </a>
  );
}
