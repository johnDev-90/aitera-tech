"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

const LOCALES = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
] as const;

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  const changeLocale = (next: string) => {
    if (next === locale) return;
    document.cookie = `NEXT_LOCALE=${next};path=/;max-age=${60 * 60 * 24 * 365}`;
    router.refresh();
  };

  return (
    <div className="lang-switcher" role="group" aria-label="Language">
      {LOCALES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          className={`lang-btn${locale === code ? " active" : ""}`}
          onClick={() => changeLocale(code)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
