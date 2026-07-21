import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { login } from "./actions";

export const metadata: Metadata = {
  title: "Admin Login",
  description: "Secure administrator sign-in for Al Nakiya Trading.",
  robots: { index: false, follow: false, nocache: true },
};

type LoginPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { error } = await searchParams;
  const supabase = await createClient();
  if (supabase) {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user?.app_metadata?.role === "admin") {
      redirect("/dashboard");
    }
  }

  return (
    <main className="flex-1 bg-[#f7f8f9]">
      <section className="relative flex min-h-[240px] items-center overflow-hidden px-4 py-12 text-white sm:min-h-[280px] sm:px-6 sm:py-16">
        <Image
          src="/uploads/2025/08/samuel-cruz-o8C5SxNCGaw-unsplash-scaled.jpg"
          alt="Industrial tools from Al Nakiya Trading"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.78] saturate-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#800517]/95 via-[#800517]/88 to-[#0B3954]/75" />
        <div className="relative mx-auto w-full max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ffb128]">
            Secure Administration
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
            Admin Sign In
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/90 sm:text-base">
            Manage products, categories, and your Al Nakiya Trading catalog
            from one secure dashboard.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-lg px-4 py-12 sm:px-6 sm:py-16 lg:max-w-xl">
        <div className="text-center">
          <Image
            src="/uploads/2025/08/WhatsApp_Image_2025-08-13_at_16.51.18-removebg-preview.png"
            alt="Al Nakiya Trading"
            width={72}
            height={72}
            className="mx-auto h-16 w-16 rounded-full border-2 border-white bg-white object-contain p-1 shadow-sm"
          />
          <h2 className="mt-5 text-2xl font-bold text-[#0B3954] sm:text-3xl">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-zinc-600">
            Sign in with your administrator account to continue.
          </p>
        </div>

        {error && (
          <div className="mt-8 border border-red-200 bg-red-50 px-4 py-3 text-center text-sm font-semibold text-red-800">
            {error === "config"
              ? "Supabase configuration is missing. Contact the site owner."
              : "Invalid admin email or password."}
          </div>
        )}

        <form action={login} className="mt-10 grid gap-7">
          <label className="grid gap-2.5 text-sm font-semibold text-[#0B3954]">
            Email address
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              placeholder="admin@alnakiyatrading.com"
              className="h-14 border border-zinc-300 bg-white px-4 font-normal text-zinc-800 outline-none transition focus:border-[#800517] focus:ring-2 focus:ring-[#800517]/10"
            />
          </label>
          <label className="grid gap-2.5 text-sm font-semibold text-[#0B3954]">
            Password
            <input
              required
              type="password"
              name="password"
              autoComplete="current-password"
              minLength={8}
              placeholder="Enter your password"
              className="h-14 border border-zinc-300 bg-white px-4 font-normal text-zinc-800 outline-none transition focus:border-[#800517] focus:ring-2 focus:ring-[#800517]/10"
            />
          </label>
          <button
            type="submit"
            className="mt-2 h-14 bg-gradient-to-r from-[#800517] to-[#a70722] text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:brightness-110"
          >
            Sign in to dashboard
          </button>
        </form>

        <p className="mt-10 border-t border-zinc-300 pt-8 text-center text-sm text-zinc-600">
          Not an administrator?{" "}
          <Link
            href="/"
            className="font-semibold text-[#800517] hover:underline"
          >
            Return to website
          </Link>
        </p>
      </section>
    </main>
  );
}
