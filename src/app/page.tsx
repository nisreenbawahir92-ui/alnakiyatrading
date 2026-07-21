import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroCarousel } from "@/components/hero-carousel";
import { HomeEffects } from "@/components/home-effects";
import { ProductCard } from "@/components/product-card";
import { TiltCard } from "@/components/tilt-card";
import { getProducts } from "@/lib/products";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Industrial Tools & Hardware UAE",
  description:
    "Buy industrial tools, power tools, hand tools, electrical accessories and hardware from Al Nakiya Trading in Sharjah, UAE. Quality brands with fast delivery.",
  path: "/",
  image: "/uploads/2025/10/hand4-1.jpg",
  keywords: [
    "industrial tools UAE",
    "hardware Sharjah",
    "Al Nakiya Trading",
    "power tools UAE",
  ],
});

export default async function Home() {
  const products = await getProducts();
  const mostSoldSlugs = [
    "demoltion-hammer",
    "demoltion-hammer-2",
    "rotary-hammer-2",
    "multifunction-bar-bending-tool",
  ];
  const backInStockSlugs = [
    "cable-cutter",
    "mini-bolt-cutter-2",
    "aviation-tin-snip-straight",
    "hacksaw-frame-with-blade",
  ];
  const mostSold = mostSoldSlugs
    .map((slug) => products.find((product) => product.slug === slug))
    .filter((product) => product !== undefined);
  const backInStock = backInStockSlugs
    .map((slug) => products.find((product) => product.slug === slug))
    .filter((product) => product !== undefined);
  return (
    <main className="home-page flex-1 bg-white">
      <HomeEffects />
      <HeroCarousel />

      <section className="font-sans">
        <h2 className="bg-white px-4 pb-6 pt-7 text-center text-3xl font-bold text-[#800517] sm:px-0 sm:py-12 sm:text-5xl">
          Our Categories
        </h2>
        <div className="flex flex-col">
          {[
            {
              title: "Hand Tools",
              slug: "hardware-tool-accessories",
              image: "/uploads/2025/10/hand4-1.jpg",
              color: "bg-[#0B3954]",
              copy: "Discover versatile accessories that seamlessly enhance both functionality and style, perfectly complementing your hardware and tools.",
              imageFirst: false,
            },
            {
              title: "Power Tools",
              slug: "power-tool",
              image: "/uploads/2025/10/Nakiya-post-1-1-scaled.jpg",
              color: "bg-[#800517]",
              copy: "Explore our extensive range of high-quality hardware, designed to meet all your architectural and construction needs with durability and precision.",
              imageFirst: true,
            },
            {
              title: "Electrical Accessories",
              slug: "electrical-accessories",
              image: "/uploads/2025/10/e1-1.jpg",
              color: "bg-[#126782]",
              copy: "Power up your spaces with our innovative electrical accessories, offering exceptional quality, safety, and modern design for every application.",
              imageFirst: false,
            },
          ].map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="group flex min-h-[360px] flex-col overflow-hidden md:min-h-[420px] md:flex-row"
            >
              <div
                className={`relative min-h-[260px] flex-1 overflow-hidden sm:min-h-[320px] md:min-h-full ${
                  category.imageFirst ? "md:order-1" : "md:order-2"
                }`}
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition duration-500 group-hover:scale-105"
                />
              </div>
              <div
                className={`${category.color} flex flex-1 flex-col justify-center p-7 text-white sm:p-10 md:order-1 md:p-14`}
              >
                <span className="mb-3 text-xs font-semibold uppercase tracking-wider">
                  Explore the features
                </span>
                <h3 className="text-3xl font-bold sm:text-4xl">
                  {category.title}
                </h3>
                <p className="mt-4 max-w-xl leading-7 text-white">
                  {category.copy}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-7">
        <div className="mx-auto grid max-w-[1400px] gap-6 px-4 home-stagger sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {[
            [
              "/uploads/2023/02/Icon-6.svg",
              "4.9 / 5 TrustScore",
              "Rated “Excellent” on Trustpilot",
            ],
            [
              "/uploads/2023/02/Icon-1-2.svg",
              "Free Delivery",
              "Free Delivery for orders",
            ],
            [
              "/uploads/2023/02/Icon-2-2.svg",
              "Your trusted partner",
              "Driven by integrity and care.",
            ],
            [
              "/uploads/2023/02/Icon-3-1.svg",
              "We Only Stock",
              "Top brands stocked here.",
            ],
          ].map(([icon, title, copy]) => (
            <div
              key={title}
              className="home-float flex items-start gap-5 rounded-xl border border-zinc-100 bg-white px-3 py-5 shadow-[0_8px_24px_rgba(11,57,84,0.06)]"
            >
              <Image src={icon} alt="" width={48} height={48} className="h-12 w-12" />
              <div>
                <div className="text-[19px] font-medium text-[#0B3954]">{title}</div>
                <div className="mt-1 text-base font-light text-[#5C676D]">{copy}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 sm:py-16">
        <h2 className="text-center text-3xl font-semibold text-[#800517] sm:text-5xl">
          Brands We Deal With
        </h2>
        <div className="mt-10 grid grid-cols-2 items-center gap-5 home-stagger sm:grid-cols-4 sm:gap-6">
          {[
            ["/uploads/2025/09/3.png", "BERENT"],
            ["/uploads/2025/09/2.png", "EMERALD"],
            ["/uploads/2025/09/4.png", "SENSH"],
            ["/uploads/2025/09/1.png", "MGC"],
          ].map(([image, brand]) => (
            <TiltCard key={brand} maxTilt={10}>
              <div className="flex h-32 items-center justify-center border border-zinc-200 bg-white p-5 shadow-[0_10px_30px_rgba(11,57,84,0.08)]">
                <Image
                  src={image}
                  alt={`${brand} logo`}
                  width={230}
                  height={95}
                  className="max-h-24 w-auto object-contain"
                />
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 sm:py-14">
        <div className="border-b border-zinc-200 pb-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#800517]">
            Featured
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#800517] sm:text-3xl">
            Most sold this week
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-[#800517]/80">
            Popular tools with next-day UAE delivery options.
          </p>
          <Link
            href="/shop"
            className="mt-4 inline-block text-sm font-semibold text-[#800517] underline-offset-4 hover:underline"
          >
            View catalog
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 home-stagger min-[420px]:grid-cols-2 md:grid-cols-4 md:gap-5">
          {mostSold.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-[#f7f8f9]">
        <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 sm:py-14">
          <div className="border-b border-zinc-200 pb-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#800517]">
              Restocked
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#800517] sm:text-3xl">
              Back in stock this week
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-[#800517]/80">
              Fast-selling products available again.
            </p>
            <Link
              href="/shop"
              className="mt-4 inline-block text-sm font-semibold text-[#800517] underline-offset-4 hover:underline"
            >
              View all products
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 home-stagger min-[420px]:grid-cols-2 md:grid-cols-4 md:gap-5">
            {backInStock.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-12">
        <h2 className="mb-7 text-center text-4xl font-semibold text-[#800517]">
          Our best seller
        </h2>
        <div className="relative aspect-video overflow-hidden rounded-[20px] bg-black shadow-[0_25px_60px_rgba(11,57,84,0.28)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_35px_70px_rgba(128,5,23,0.28)] lg:h-[80vh] lg:aspect-auto">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source
              src="/uploads/2025/10/WhatsApp-Video-2025-09-07-at-12.06.20_199960d1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 py-12 text-center sm:px-6 sm:py-16">
        <h2 className="text-3xl font-semibold text-[#800517] sm:text-4xl">
          Why Choose AL Nakiya Trading?
        </h2>
        <div className="mt-11 grid grid-cols-2 gap-8 home-stagger md:grid-cols-4">
          {[
            ["/uploads/2025/10/image-1.svg", "Quality Products"],
            ["/uploads/2025/10/image-2.svg", "Wide Range of Tools From The Top Brands"],
            ["/uploads/2025/10/image-3.svg", "Delivery On Time"],
            ["/uploads/2025/10/image-4.svg", "24×7 Support"],
          ].map(([image, title]) => (
            <TiltCard key={title} maxTilt={12}>
              <div className="flex flex-col items-center rounded-2xl border border-zinc-100 bg-white px-4 py-6 shadow-[0_12px_30px_rgba(11,57,84,0.08)]">
                <Image
                  src={image}
                  alt=""
                  width={110}
                  height={100}
                  className="h-[100px] w-auto object-contain"
                />
                <h3 className="mt-5 text-sm font-semibold uppercase text-red-600 sm:text-xl">
                  {title}
                </h3>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      <section className="bg-[#f8f9fa] px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-[#800517]">
            What Our Clients Say?
          </p>
          <h2 className="mt-2 text-center text-3xl font-semibold text-[#0B3954] sm:text-4xl">
            Testimonials
          </h2>
          <div className="mt-10 grid gap-5 home-stagger md:grid-cols-3">
            {[
              [
                "/uploads/2025/10/user1.jpg",
                "Good and friendly place to purchase marine hardware.",
                "PRASHANT GUPTA",
              ],
              [
                "/uploads/2025/10/user2.jpg",
                "Always best price n best quality.",
                "GR SHK",
              ],
              [
                "/uploads/2025/10/user6.jpg",
                "Excellent customer service.",
                "DERIK XAVIOUR",
              ],
              [
                "/uploads/2025/10/user3.jpg",
                "Highly recommend for quality and service.",
                "ANITA ROSS",
              ],
              [
                "/uploads/2025/10/user5.jpg",
                "Friendly staff and very reliable.",
                "MICHAEL LEE",
              ],
            ].map(([image, quote, name]) => (
              <TiltCard key={name} maxTilt={6}>
                <article className="flex h-full flex-col justify-between rounded-xl bg-white p-7 shadow-[0_14px_34px_rgba(11,57,84,0.1)]">
                  <div>
                    <div className="text-[#FFB128]">★★★★★</div>
                    <p className="mt-4 leading-7 text-[#5C676D]">{quote}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <Image
                      src={image}
                      alt={name}
                      width={52}
                      height={52}
                      className="h-13 w-13 rounded-full object-cover"
                    />
                    <h3 className="font-semibold text-[#0B3954]">{name}</h3>
                  </div>
                </article>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
        {[
          "1.jpg",
          "2.jpg",
          "3.jpg",
          "4.jpg",
          "5.jpg",
          "6.jpg",
          "7.jpg",
        ].map((image) => (
          <a
            key={image}
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="group relative aspect-square overflow-hidden"
          >
            <Image
              src={`/uploads/2025/10/${image}`}
              alt="Al Nakiya Trading on Instagram"
              fill
              sizes="(max-width: 768px) 50vw, 15vw"
              className="object-cover transition duration-500 group-hover:scale-110"
            />
            <span className="absolute inset-0 grid place-items-center bg-black/0 text-2xl text-white opacity-0 transition group-hover:bg-black/40 group-hover:opacity-100">
              View
            </span>
          </a>
        ))}
      </section>
    </main>
  );
}
