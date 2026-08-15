import { NextRequest, NextResponse } from "next/server";

const LOCALE_COOKIE = "NEXT_LOCALE";

const SPANISH_SPEAKING_COUNTRIES = new Set([
  "AR", "BO", "CL", "CO", "CR", "CU", "DO", "EC", "SV", "GQ",
  "GT", "HN", "MX", "NI", "PA", "PY", "PE", "PR", "ES", "UY", "VE",
]);

async function detectCountry(request: NextRequest): Promise<string | null> {
  const geoCountry = request.headers.get("x-vercel-ip-country");
  if (geoCountry) return geoCountry;

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip");

  if (!ip || ip === "127.0.0.1" || ip === "::1") return null;

  try {
    const res = await fetch(`https://ipapi.co/${ip}/country/`, {
      signal: AbortSignal.timeout(1500),
    });
    if (!res.ok) return null;
    const country = (await res.text()).trim();
    return /^[A-Z]{2}$/.test(country) ? country : null;
  } catch {
    return null;
  }
}

export async function proxy(request: NextRequest) {
  const response = NextResponse.next();

  if (request.cookies.has(LOCALE_COOKIE)) {
    return response;
  }

  const country = await detectCountry(request);
  const locale = country && SPANISH_SPEAKING_COUNTRIES.has(country) ? "es" : "en";

  response.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });

  return response;
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
