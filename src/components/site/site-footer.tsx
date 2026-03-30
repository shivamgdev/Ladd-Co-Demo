import Link from "next/link";

import { offices } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer>
      <div className="border-y border-coffee/12 bg-[linear-gradient(90deg,#c7cca9_0%,#b4b993_20%,#8a886f_42%,#575245_62%,#312d26_80%,#18150f_100%)]">
        <div className="mx-auto flex h-10 w-full max-w-[1728px] items-center gap-4 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 2xl:px-[200px]">
          <span className="h-[4px] w-[4px] rounded-full bg-clementine" />
          <Link href="/contact" className="text-[12px] font-serif font-medium tracking-[0.01em] text-coffee/95">
            Request an Introduction +
          </Link>
        </div>
      </div>

      <div className="bg-[linear-gradient(90deg,#28231d_0%,#221f1a_55%,#1f1c18_100%)] text-paper-white/78">
        <div className="mx-auto w-full max-w-[1728px] px-4 pt-8 sm:px-6 md:px-10 md:pt-10 lg:px-14 xl:px-20 2xl:px-[200px]">
          <div className="grid border-b border-paper-white/10 pb-8 md:grid-cols-[1.45fr_0.55fr_0.85fr] md:pb-10">
            <div className="md:border-r md:border-paper-white/8 md:pr-10">
              <div className="flex items-center gap-4">
                <span className="inline-flex items-end gap-[2px] opacity-95">
                  <span className="h-3 w-[2px] bg-paper-white/85" />
                  <span className="h-4 w-[2px] bg-paper-white/85" />
                  <span className="h-5 w-[2px] bg-paper-white/85" />
                  <span className="h-4 w-[2px] bg-paper-white/85" />
                  <span className="h-3 w-[2px] bg-paper-white/85" />
                </span>
                <p className="font-serif text-[33px] leading-none text-paper-white">Ladd &amp; Co.</p>
              </div>

              <p className="mt-5 max-w-[460px] text-[9px] uppercase leading-[2] tracking-[0.17em] text-clementine/95">
                Advisory and execution for families, principals, and private
                institutions with interests that demand discretion.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-block text-[10px] uppercase tracking-[0.2em] text-paper-white/65"
              >
                Client Login
              </Link>

              <div className="mt-16 flex items-center gap-5 text-[11px] uppercase tracking-[0.2em] text-paper-white/72">
                <span>X</span>
                <span>in</span>
              </div>
            </div>

            <div className="mt-8 md:mt-0 md:border-r md:border-paper-white/8 md:px-8">
              <p className="text-[9px] uppercase tracking-[0.22em] text-paper-white/48">Firm</p>
              <ul className="mt-3 space-y-2 text-[13px] text-paper-white/76">
                <li><Link href="/">About</Link></li>
                <li><Link href="/">Services</Link></li>
                <li><Link href="/">Clients</Link></li>
                <li><Link href="/">Industries</Link></li>
                <li><Link href="/">Presence</Link></li>
                <li><Link href="/legal">Legal</Link></li>
              </ul>
            </div>

            <div className="mt-8 md:mt-0 md:pl-8">
              <p className="text-[9px] uppercase tracking-[0.22em] text-paper-white/48">Contact</p>
              <p className="mt-3 text-[13px] text-paper-white/76">office@laddco.com</p>
              <p className="mt-5 text-[9px] uppercase tracking-[0.22em] text-paper-white/48">Offices</p>
              <ul className="mt-2 space-y-1.5 text-[12px] text-paper-white/66">
                {offices.map((office) => (
                  <li key={office}>{office}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-b border-paper-white/6 py-4 text-[8px] uppercase tracking-[0.2em] text-paper-white/38 md:flex-row md:items-center md:justify-between">
            <span>Copyright © 2026 Ladd &amp; Co. . All Rights Reserved.</span>
            <Link href="/legal" className="hover:text-paper-white/60">
              Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
