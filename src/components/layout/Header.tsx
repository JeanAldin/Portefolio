"use client";

import { navItems } from "@/lib/navigation";
import Link from "next/link";
import { Menu, UserCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow] duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-slate-950/85 shadow-lg shadow-black/20 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="#accueil"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white sm:text-base"
          onClick={() => setOpen(false)}
        >
          <UserCircle className="h-6 w-6 text-teal-400" aria-hidden />
          J.A. <span className="text-teal-400">Rojondrianarivola</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                href={item.href}
                className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                <Icon className="h-4 w-4 shrink-0 text-teal-500/80" aria-hidden />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-slate-200 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <X className="h-6 w-6" aria-hidden />
          ) : (
            <Menu className="h-6 w-6" aria-hidden />
          )}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          className="border-t border-white/5 bg-slate-950/95 px-4 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 rounded-lg px-3 py-3 text-slate-200 hover:bg-white/5"
                    onClick={() => setOpen(false)}
                  >
                    <Icon className="h-5 w-5 text-teal-400" aria-hidden />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
