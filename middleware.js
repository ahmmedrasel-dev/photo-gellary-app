import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
let locales = ["en", "bn"];
let defaultLocale = "en";

function getLocale(request) {
  // Get the language from the request headers
  const acceptLanguage = request.headers.get("accept-language") ?? undefined;
  // Make headers object with the accept-language key
  let headers = { "accept-language": acceptLanguage };
  // Get the language array from browser using Negotiator
  let languages = new Negotiator({ headers }).languages();
  // Return the matched language
  return match(languages, locales, defaultLocale);
}

export function middleware(request) {
  // Read path name from the request object.
  const pathName = request.nextUrl.pathname;
  const pathNameIsMissingLocale = locales.every(
    (local) => !pathName.startsWith(`/${local}`) && pathName !== `/${local}`
  );

  if (pathNameIsMissingLocale) {
    const locale = getLocale(request);
    // Redirect to the same path with the locale prefix.
    return NextResponse.redirect(
      new URL(`/${locale}/${pathName}`, request.nextUrl)
    );
  }
}
