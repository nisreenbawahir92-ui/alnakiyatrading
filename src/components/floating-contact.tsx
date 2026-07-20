"use client";

import { usePathname } from "next/navigation";

function productNameFromPath(pathname: string) {
  if (!pathname.startsWith("/product/")) return null;
  const slug = pathname.split("/")[2];
  if (!slug) return null;
  return decodeURIComponent(slug)
    .replace(/-\d+$/, "")
    .replaceAll("-", " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

export function FloatingContact() {
  const pathname = usePathname();
  if (
    pathname === "/cart" ||
    pathname === "/contact-us" ||
    pathname === "/login"
  ) {
    return null;
  }
  const productName = productNameFromPath(pathname);
  const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://alnakiyatrading.com"}${pathname}`;
  const message = productName
    ? `Hello, I am interested in ${productName}.\nProduct: ${pageUrl}`
    : `Hello Al Nakiya Trading, I would like more information.\nPage: ${pageUrl}`;

  return (
    <div className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-3 z-[60] flex flex-col items-end gap-2 sm:bottom-7 sm:right-6 sm:gap-3">
      <a
        href="tel:+971506859158"
        aria-label="Call Al Nakiya Trading"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-[#800517] text-white shadow-[0_6px_20px_rgba(0,0,0,0.25)] hover:scale-105 sm:h-14 sm:w-14"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5 fill-current sm:h-6 sm:w-6"
        >
          <path d="M6.6 10.8a15.7 15.7 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 3.8c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.7.1.4 0 .8-.2 1.1l-2.3 2.2Z" />
        </svg>
      </a>
      <a
        href={`https://wa.me/971506859158?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-13 w-13 items-center justify-center overflow-visible rounded-full border-2 border-white bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.38)] hover:scale-105 sm:h-16 sm:w-16"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-20 [animation-duration:2.2s]" />
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          className="h-7 w-7 fill-current sm:h-8 sm:w-8"
        >
          <path d="M16 3A13 13 0 0 0 4.7 22.4L3 29l6.8-1.6A13 13 0 1 0 16 3Zm0 23.7a10.7 10.7 0 0 1-5.5-1.5l-.4-.2-4 .9 1-3.9-.3-.4A10.7 10.7 0 1 1 16 26.7Zm5.9-8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.3-.4.3-.7.1-1.9-.9-3.2-1.7-4.5-3.9-.3-.6.3-.6.9-1.9.1-.2 0-.4 0-.6l-1-2.5c-.3-.7-.6-.6-.9-.6h-.7c-.2 0-.6.1-.9.4-1 1-1.4 2.1-1.4 3.5 0 2.1 1.5 4.1 1.7 4.4.2.3 3 4.6 7.4 6.4 2.8 1.2 3.9 1.3 5.3 1.1.8-.1 2.6-1.1 2.9-2.1.4-1 .4-1.9.3-2.1-.1-.2-.3-.3-.6-.4Z" />
        </svg>
      </a>
    </div>
  );
}
