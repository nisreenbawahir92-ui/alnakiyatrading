import Image from "next/image";
import Link from "next/link";
import { ContactIcon } from "@/components/contact-icon";

const quickLinks = [
  ["/", "Home"],
  ["/shop", "Shop All Products"],
  ["/about-us", "About Al Nakiya"],
  ["/contact-us", "Contact Us"],
  ["/blog", "Industry Blog"],
];

const categoryLinks = [
  ["/category/cutting-tools", "Cutting Tools"],
  ["/category/power-tool", "Power Tools"],
  ["/category/electrical-accessories", "Electrical Accessories"],
  ["/category/safety-products", "Safety Products"],
  ["/category/hardware-tool-accessories", "Hardware Accessories"],
];

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between border-b border-white/10 py-2.5 text-sm text-zinc-300 hover:border-[#ffb128]/50 hover:text-white"
    >
      <span>{label}</span>
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto overflow-hidden bg-[#082f49] text-zinc-200">
      <div className="bg-gradient-to-r from-[#800517] to-[#a70722]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-4 py-7 sm:px-6 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-100">
              Need help finding the right product?
            </p>
            <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">
              Speak with our tools and hardware team.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+971506859158"
              className="flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
            >
              <ContactIcon name="phone" className="h-4 w-4" />
              Call +971 50 685 9158
            </a>
            <a
              href="https://wa.me/971506859158"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-lg hover:bg-[#20bd5a]"
            >
              <ContactIcon name="whatsapp" className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#0B3954] to-[#06283d]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.25fr_0.8fr_1fr_1.15fr] lg:py-16">
          <div>
            <Link href="/" className="inline-flex items-center gap-4">
              <span className="grid h-18 w-18 place-items-center rounded-full bg-white p-1 shadow-lg">
                <Image
                  src="/uploads/2025/08/WhatsApp_Image_2025-08-13_at_16.51.18-removebg-preview.png"
                  alt="Al Nakiya Trading"
                  width={68}
                  height={68}
                  className="h-16 w-16 object-contain"
                />
              </span>
              <span>
                <strong className="block text-lg text-white">
                  Al Nakiya Trading
                </strong>
                <span className="text-xs uppercase tracking-wider text-[#ffb128]">
                  Tools | Hardware | Supplies
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-300">
              Your trusted UAE partner for industrial tools, hardware,
              electrical accessories, plumbing supplies, and safety products.
            </p>
            <div className="mt-6 flex gap-2">
              {["f", "in", "ig"].map((label) => (
                <a
                  key={label}
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Social media"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-sm font-bold hover:border-[#ffb128] hover:bg-[#ffb128] hover:text-[#0B3954]"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-base font-bold text-white">Quick Links</h2>
            <div className="mt-4">
              {quickLinks.map(([href, label]) => (
                <FooterLink key={href} href={href} label={label} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-base font-bold text-white">
              Popular Categories
            </h2>
            <div className="mt-4">
              {categoryLinks.map(([href, label]) => (
                <FooterLink key={href} href={href} label={label} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-base font-bold text-white">Contact Details</h2>
            <div className="mt-4 grid gap-3 text-sm">
              <a
                href="tel:+971506859158"
                className="border-b border-white/15 py-3 hover:border-[#ffb128]/60"
              >
                <span className="flex items-center gap-2 text-xs uppercase text-[#ffb128]">
                  <ContactIcon name="phone" className="h-4 w-4" />
                  Phone
                </span>
                <strong className="mt-1 block text-white">
                  +971 50 685 9158
                </strong>
              </a>
              <a
                href="mailto:info@alnakiyatrading.com"
                className="min-w-0 border-b border-white/15 py-3 hover:border-[#ffb128]/60"
              >
                <span className="flex items-center gap-2 text-xs uppercase text-[#ffb128]">
                  <ContactIcon name="email" className="h-4 w-4" />
                  Email
                </span>
                <strong className="mt-1 block break-all text-white">
                  info@alnakiyatrading.com
                </strong>
              </a>
              <div className="py-3">
                <span className="flex items-center gap-2 text-xs uppercase text-[#ffb128]">
                  <ContactIcon name="location" className="h-4 w-4" />
                  Location
                </span>
                <strong className="mt-1 block text-white">
                  Sharjah, United Arab Emirates
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#06283d]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-center text-xs text-zinc-400 sm:px-6 md:flex-row md:justify-between md:text-left">
          <span>
            © {new Date().getFullYear()} Al Nakiya Trading LLC. All rights
            reserved.
          </span>
          <span>Industrial tools and hardware supplier in the UAE</span>
        </div>
      </div>
    </footer>
  );
}
