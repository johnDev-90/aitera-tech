import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans, Crimson_Text } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  variable: "--font-dm-sans",
});

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson-text",
});

export const metadata: Metadata = {
  title: "Aitera Tech",
  description:
    "Creamos soluciones digitales personalizadas: desarrollo web, apps, diseño UX/UI y automatización. Aumenta la eficiencia y escala tu negocio con tecnología.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${crimsonText.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
