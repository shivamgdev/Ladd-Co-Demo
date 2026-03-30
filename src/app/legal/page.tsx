import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

const legalParagraph =
  "By accessing this website, you acknowledge that the material is provided for informational purposes only and does not constitute legal, tax, or investment advice. Nothing contained herein should be construed as an offer, solicitation, or recommendation to engage in any transaction. Any reliance placed on the content is strictly at your own discretion.";

export default function LegalPage() {
  return (
    <div className="bg-paper-white text-coffee">
      <SiteHeader activePath="/legal" />

      <main className="mx-auto w-full max-w-[1180px] px-6 py-10 md:px-8 md:py-12">
        <article className="mx-auto max-w-[620px] border-l border-line-soft pl-8">
          <h1 className="font-serif text-[44px] leading-none text-coffee md:text-[56px]">Legal</h1>
          <h2 className="mt-8 font-serif text-[22px] leading-tight">Business Continuity Plan</h2>
          <div className="mt-3 space-y-4 text-[13px] leading-[1.9] text-coffee/75">
            {Array.from({ length: 8 }).map((_, idx) => (
              <p key={idx}>{legalParagraph}</p>
            ))}
          </div>

          <h2 className="mt-10 font-serif text-[22px] leading-tight">Legal Entity Disclosure</h2>
          <div className="mt-3 space-y-4 text-[13px] leading-[1.9] text-coffee/75">
            {Array.from({ length: 10 }).map((_, idx) => (
              <p key={idx}>{legalParagraph}</p>
            ))}
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
