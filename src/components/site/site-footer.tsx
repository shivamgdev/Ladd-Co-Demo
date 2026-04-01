
import Link from "next/link";
import Image from "next/image";

import { offices } from "@/lib/site-data";
 const requestRailClass = "flex h-[60px] min-w-[272px] items-center border-r border-coffee/6 pl-0 pr-8";

export function SiteFooter() {
  return (
    <>
      {/* Top bar with red dot and Request an Introduction link */}
      
      <div className="border-y border-coffee/12 bg-[linear-gradient(90deg,#c7cca9_0%,#b4b993_20%,#8a886f_42%,#575245_62%,#312d26_80%,#18150f_100%)]">
        <div className="mx-auto flex h-[60px] w-full max-w-[1180px] items-center border-x border-line-soft px-4 sm:px-6 md:px-8">
          <div className={requestRailClass}>
            <span className="-ml-[8px] h-[5px] w-[5px] shrink-0 rounded-full bg-clementine" />
            <span className="h-[32px] w-px bg-coffee/6 mx-4" />
            <Link href="/contact" className="font-serif font-bold text-[15px] leading-none text-coffee">
              Request an Introduction →
            </Link>
          </div>
        </div>
      </div>
      <footer>
        <div className="bg-[linear-gradient(90deg,#28231d_0%,#221f1a_55%,#1f1c18_100%)] text-paper-white/78">
          <div className="mx-auto w-full max-w-[1728px] px-4 pt-8 sm:px-6 md:px-10 md:pt-10 lg:px-14 xl:px-20 2xl:px-[200px]">
            <div className="grid border-b border-paper-white/10 pb-8 md:grid-cols-[1.45fr_0.55fr_0.85fr] md:pb-10">
              <div className="md:border-r md:border-paper-white/8 md:pr-10 mr-12">
                <div className="flex flex-row items-center gap-[12px] mb-2 ml-2 sm:ml-2 md:ml-0 lg:-ml-45">
                  <Image
                    src="/images/footerlogo.png"
                    alt="Ladd & Co. Footer Logo"
                    width={32}
                    height={32}
                    className="h-[18px] w-[18px] sm:h-[18px] sm:w-[18px] md:h-[24px] md:w-[24px] lg:h-[32px] lg:w-[32px] object-contain object-center"
                    priority={false}
                  />
                  <span className="font-serif font-bold text-[15px] leading-none text-paper-white md:text-[16px] ml-12">Ladd &amp; Co.</span>
                </div>
                <p className="mt-5 max-w-[460px] text-[9px] uppercase leading-[2] tracking-[0.17em] text-clementine/95 xl:ml-[-90px]">
                  Advisory and execution for families, principals, and private institutions with interests that demand discretion.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-block text-[10px] uppercase tracking-[0.2em] text-paper-white/65 xl:ml-[-90px]"
                >
                  CLIENT LOGIN
                </Link>
                <div className="mt-16 flex items-center gap-5 text-[11px] uppercase tracking-[0.2em] text-paper-white/72 xl:ml-[-90px]">
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
    </>
  );
}
