import Image from "next/image";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import {
  clientCategories,
  industries,
  officeDetails,
  serviceBlocks,
} from "@/lib/site-data";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[1728px] bg-paper-white text-coffee">
      <SiteHeader activePath="/" />

      <main>
        <section
          id="about"
          className="mx-auto grid w-full max-w-[1728px] gap-[10px] bg-paper-white px-4 py-8 sm:px-6 md:grid-cols-[1fr_380px] md:px-14 md:py-10 lg:min-h-[666px] lg:px-20"
        >
          <div className="border-l border-line-soft pl-7 md:self-center md:pl-9 lg:pt-3">
            <span className="mb-4 inline-block h-[4px] w-[4px] rounded-full bg-clementine" />
            <h1 className="max-w-[760px] font-serif text-[44px] leading-[0.98] text-coffee sm:text-[54px] md:text-[64px] md:leading-[0.96]">
              <span className="block">Advisory and execution for</span>
              <span className="block italic">families, principals, and private</span>
              <span className="block">institutions with interests that</span>
              <span className="block">demand discretion.</span>
            </h1>
            <p className="mt-7 max-w-[560px] text-[13px] leading-[1.6] text-coffee/66 md:text-[13px] md:leading-[1.6]">
              Ladd &amp; Co. is a private advisory practice. We represent clients
              across transactions, capital strategy, structuring, and the
              management of sensitive matters across jurisdictions.
            </p>
          </div>
          <Image
            src="/images/1.png"
            alt="Modern architecture"
            width={300}
            height={360}
            className="mx-auto h-[320px] w-full max-w-[320px] object-cover md:h-[560px] md:max-w-[380px] md:self-end"
            priority
          />
          <div className="mt-[10px] border-t border-coffee/6 bg-paper-white md:col-span-2 lg:h-[320px]">
            <div className="h-full w-full bg-muted-olive px-6 py-7 md:px-8 lg:px-10 lg:py-8">
              <div className="border-l border-clementine/60 pl-4 md:pl-5">
                <p className="max-w-[1380px] font-serif text-[22px] leading-[1.24] text-coffee/92 md:text-[28px] md:leading-[1.2] lg:text-[40px] lg:leading-[1.08]">
                  We operate as an extension of our clients&apos; interests -
                  advising, coordinating, and executing where the complexity
                  demands a single, trusted point of contact.
                </p>
                <p className="mt-4 max-w-[980px] text-[12px] leading-[1.6] text-coffee/68 lg:text-[13px] lg:leading-[1.6]">
                  Whether the matter concerns a transaction, a restructure, a
                  dispute, or an opportunity - our role is to ensure the
                  outcome is resolved efficiently, discreetly, and in the
                  client&apos;s favour.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[1728px] gap-[10px] px-4 py-8 sm:px-6 md:grid-cols-[420px_1fr] md:px-10 md:py-10 lg:px-14 xl:px-20 2xl:px-[200px]">
          <Image
            src="/images/2.png"
            alt="Sculptural architecture"
            width={320}
            height={500}
            className="mx-auto h-[420px] w-full max-w-[320px] object-cover md:h-[560px] md:max-w-[420px]"
          />
          <div className="grid min-h-[560px] grid-rows-[auto_1fr] border-l border-line-soft pl-6 md:pl-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-coffee/45">About the Firm</p>
              <p className="mt-3 max-w-[760px] font-serif text-[42px] leading-[1.04] text-coffee/92 md:text-[60px] md:leading-[1.02]">
              We advise where the stakes are highest and the margin for error is smallest.
              </p>
            </div>
            <div className="self-end pb-1">
              <div className="ml-auto max-w-[500px] space-y-4 text-[12px] leading-[1.78] text-coffee/68">
              <p>
                Our clients are individuals and families with significant
                wealth, complex international structures, and affairs that span
                multiple jurisdictions, advisors, and asset classes.
              </p>
              <p>
                We do not manage assets. We do not sell financial products. We
                provide independent counsel and hands-on execution across the
                full spectrum of our clients&apos; private affairs.
              </p>
              <p>
                We work alongside our clients&apos; existing professional teams,
                identifying gaps, and resolving issues that fall between the
                cracks.
              </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="mx-auto w-full max-w-[1728px] px-4 py-8 sm:px-6 md:px-10 md:py-10 lg:px-14 xl:px-20 2xl:px-[200px]"
        >
          <div className="border-l border-clementine/60 pl-5">
            <div className="grid gap-6 md:grid-cols-[1fr_620px] md:items-start">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-coffee/45">Services</p>
                <h2 className="mt-2 font-serif text-[52px] leading-[1.02] text-coffee md:text-[64px]">
                  Advisory
                  <br />
                  &amp; Execution
                </h2>
              </div>
              <div className="md:pt-1">
                <Image
                  src="/images/3.png"
                  alt="Stone plaza"
                  width={620}
                  height={330}
                  className="h-[240px] w-full object-cover md:h-[330px]"
                />
              </div>
            </div>
            <div className="mt-10 grid gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
              {serviceBlocks.map((item, index) => (
                <article
                  key={item}
                  className="border-t border-line-soft pt-3 transition-colors hover:border-clementine"
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-clementine/95">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-[13px] leading-[1.5] text-coffee/84">
                    {item}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="clients"
          className="mx-auto w-full max-w-[1728px] px-4 py-8 sm:px-6 md:px-10 md:py-10 lg:px-14 xl:px-20 2xl:px-[200px]"
        >
          <div className="grid border-t border-line-soft md:grid-cols-[460px_1fr]">
            <div className="pt-6 md:pr-6">
              <Image
                src="/images/4.png"
                alt="Architectural columns"
                width={460}
                height={340}
                className="h-[250px] w-full object-cover md:h-[340px]"
              />
            </div>

            <div className="border-l border-line-soft md:grid md:grid-rows-[340px_auto] md:pl-8">
              <div className="flex flex-col justify-center">
                <p className="text-[10px] uppercase tracking-[0.2em] text-coffee/45">Who We Serve</p>
                <p className="mt-3 max-w-[760px] font-serif text-[34px] leading-[1.1] text-coffee/90 md:text-[46px] md:leading-[1.08]">
                  Our clients are <span className="italic">entrepreneurs,</span>
                  <br />
                  <span className="italic">principals, and multi-generational</span>
                  <br />
                  <span className="italic">families managing significant private</span>
                  <br />
                  wealth across multiple jurisdictions.
                </p>
              </div>

              <div className="mt-6 border-t border-line-soft pt-6 md:mt-0 md:pt-8">
                <div className="max-w-[560px] space-y-4 text-[12px] leading-[1.85] text-coffee/66 md:max-w-[520px]">
                  <p>
                    Many have complex holding structures, diverse asset
                    portfolios, and professional teams that require a senior
                    point of coordination.
                  </p>
                  <p>
                    We also act for institutional investors, sovereign
                    entities, and private offices requiring independent advisory
                    on specific transactions or matters.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid border-t border-line-soft md:mt-10 md:grid-cols-2">
            {clientCategories.map((item, idx) => (
              <div
                key={item}
                className={[
                  "flex items-center gap-4 border-b border-line-soft py-4 text-[14px] text-coffee/84",
                  idx % 2 === 0 ? "md:pr-8" : "md:pl-8",
                ].join(" ")}
              >
                <span className="h-px w-5 bg-clementine/80" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-muted-olive/80">
          <div className="mx-auto grid w-full max-w-[1728px] gap-[10px] px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr] md:px-10 md:py-12 lg:px-14 xl:px-20 2xl:px-[200px]">
            <div className="border-l border-clementine/60 pl-5">
              <p className="font-serif text-[46px] italic leading-[1.02] text-coffee md:text-[62px]">
                Discretion is not a policy.
              </p>
              <p className="font-serif text-[46px] italic leading-[1.02] text-coffee md:text-[62px]">
                It is the nature of the work.
              </p>
            </div>
            <div className="self-end">
              <p className="text-[12px] leading-[1.85] text-coffee/72">
                Our clients engage us because the matters they face are too
                consequential for fragmented processes and too complex for any
                single advisor. We operate with judgment, direct communication,
                and continuity in moments where trust is the only margin.
              </p>
              <p className="mt-5 text-[10px] uppercase tracking-[0.22em] text-clementine">
                There is not a formula
              </p>
              <p className="text-[10px] uppercase tracking-[0.22em] text-clementine">
                for this. It is the foundation.
              </p>
            </div>
          </div>
        </section>

        <section
          id="industries"
          className="mx-auto w-full max-w-[1728px] border-b border-line-soft px-4 py-10 sm:px-6 md:px-10 md:py-12 lg:px-14 xl:px-20 2xl:px-[200px]"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-coffee/55">Industries</p>
          <div className="mt-6 grid gap-x-10 gap-y-4 md:grid-cols-3 lg:grid-cols-4">
            {industries.map((industry) => (
              <p key={industry} className="border-b border-line-soft pb-3 text-[12px] text-coffee/75">
                {industry}
              </p>
            ))}
          </div>
        </section>

        <section
          id="presence"
          className="mx-auto w-full max-w-[1728px] px-4 py-10 sm:px-6 md:px-10 md:py-12 lg:px-14 xl:px-20 2xl:px-[200px]"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-coffee/55">Presence</p>
          <div className="mt-6 grid gap-x-12 gap-y-6 md:grid-cols-3">
            {officeDetails.map((office) => (
              <div key={office.city}>
                <p className="font-serif text-[30px] leading-none text-coffee">{office.city}</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.19em] text-clementine/95">
                  {office.region}
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}
