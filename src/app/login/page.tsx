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
    <main className="flex flex-1 items-center bg-gradient-to-br from-slate-50 via-white to-red-50 px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto grid min-h-[620px] w-full max-w-6xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl md:grid-cols-[1.05fr_0.95fr]">
        <section className="relative min-h-[260px] overflow-hidden md:min-h-full">
          <Image
            src="/uploads/2025/08/samuel-cruz-o8C5SxNCGaw-unsplash-scaled.jpg"
            alt="Industrial tools from Al Nakiya Trading"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 55vw"
            className="object-cover brightness-[0.82] saturate-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B3954]/95 via-[#0B3954]/35 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-9 lg:p-12">
            <span className="inline-flex rounded-full bg-[#ffb128] px-3 py-1 text-xs font-bold uppercase tracking-wider text-zinc-950">
              Secure Administration
            </span>
            <h1 className="mt-4 max-w-lg text-3xl font-bold leading-tight sm:text-4xl">
              Manage your complete product catalog in one place.
            </h1>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/85 sm:text-base">
              Update products, organize categories, and manage your Al Nakiya
              Trading website securely.
            </p>
          </div>
        </section>

        <section className="flex items-center p-6 sm:p-10 lg:p-12">
          <div className="w-full">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-zinc-200 bg-white shadow-sm">
                <Image
                  src="/uploads/2025/08/WhatsApp_Image_2025-08-13_at_16.51.18-removebg-preview.png"
                  alt="Al Nakiya Trading"
                  width={44}
                  height={44}
                  className="h-11 w-11 object-contain"
                />
              </span>
              <span>
                <strong className="block text-sm text-[#0B3954]">
                  Al Nakiya Trading
                </strong>
                <span className="text-xs text-zinc-500">Store Admin</span>
              </span>
            </Link>

            <h2 className="mt-8 text-3xl font-bold text-zinc-950">
              Welcome back
            </h2>
            <p className="mt-2 text-sm text-zinc-500">
              Sign in with your administrator account.
            </p>

            {error && (
              <div className="mt-5 rounded-lg border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-800">
                {error === "config"
                  ? "Supabase configuration is missing. Contact the site owner."
                  : "Invalid admin email or password."}
              </div>
            )}

            <form action={login} className="mt-6 grid gap-5">
              <label className="grid gap-2 text-sm font-semibold text-zinc-700">
                Email address
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="admin@example.com"
                  className="h-12 rounded-lg border border-zinc-300 bg-white px-4 font-normal outline-none transition focus:border-[#800517] focus:ring-2 focus:ring-[#800517]/10"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-zinc-700">
                Password
                <input
                  required
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  minLength={8}
                  placeholder="Enter your password"
                  className="h-12 rounded-lg border border-zinc-300 bg-white px-4 font-normal outline-none transition focus:border-[#800517] focus:ring-2 focus:ring-[#800517]/10"
                />
              </label>
              <button className="mt-1 rounded-lg bg-gradient-to-r from-[#800517] to-[#a70722] px-6 py-3.5 font-bold text-white shadow-md hover:shadow-lg">
                Sign In to Dashboard
              </button>
            </form>

            <Link
              href="/"
              className="mt-6 block text-center text-sm font-semibold text-[#2271b1]"
            >
              Return to website
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
