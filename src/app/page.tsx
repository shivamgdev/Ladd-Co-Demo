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
    <div className="mx-auto w-full max-w-[1180px] bg-paper-white text-coffee">
      <SiteHeader activePath="/" />

      <main>
        <section
          id="about"
          className="mx-auto w-full max-w-[1180px] border-x border-line-soft bg-paper-white"
        >
          <div className="grid min-h-[520px] grid-cols-1 lg:grid-cols-[46px_1fr_340px]">
            <div className="hidden border-r border-line-soft lg:flex lg:items-start lg:pl-3 lg:pt-12">
              <span className="h-[4px] w-[4px] rounded-full bg-clementine" />
            </div>

            <div className="border-r border-line-soft px-6 py-8 lg:px-8 lg:py-12">
              <h1 className="max-w-[760px] font-serif text-[36px] leading-[1.02] tracking-[-0.012em] text-coffee sm:text-[50px] md:text-[60px] md:leading-[0.96]">
                <span className="block">Advisory and execution for</span>
                <span className="block italic">families, principals, and private</span>
                <span className="block">institutions with interests that</span>
                <span className="block">demand discretion.</span>
              </h1>
              <p className="mt-7 max-w-[560px] text-[13px] leading-[1.65] text-coffee/66">
                Ladd &amp; Co. is a private advisory practice. We represent clients
                across transactions, capital strategy, structuring, and the
                management of sensitive matters across jurisdictions.
              </p>
            </div>

            <div className="px-6 pb-8 lg:p-0">
              {/* Desktop image */}
              <Image
                src="/images/1.png"
                alt="Modern architecture"
                width={340}
                height={520}
                className="hidden sm:block h-[320px] w-full object-cover lg:h-full"
                priority
              />
              {/* Mobile image */}
              <Image
                src="/images/mobileview1.png"
                alt="Modern architecture mobile"
                width={340}
                height={320}
                className="block sm:hidden h-[320px] w-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="border-t border-coffee/6 bg-muted-olive/80">
            <div className="grid lg:grid-cols-[46px_1fr]">
              <div className="hidden border-r border-line-soft lg:block" />
              <div className="px-6 py-8 lg:px-8 lg:py-9">
                <div className="border-l border-clementine/60 pl-4 lg:pl-5">
                  <p className="max-w-[1080px] font-serif text-[22px] leading-[1.24] text-coffee/92 md:text-[28px] lg:text-[40px] lg:leading-[1.08]">
                    We operate as an extension of our clients&apos; interests -
                    advising, coordinating, and executing where the complexity
                    demands a single, trusted point of contact.
                  </p>
                  <p className="mt-4 max-w-[980px] text-[12px] leading-[1.6] text-coffee/68 lg:text-[13px]">
                    Whether the matter concerns a transaction, a restructure, a
                    dispute, or an opportunity - our role is to ensure the
                    outcome is resolved efficiently, discreetly, and in the
                    client&apos;s favour.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[1180px] gap-[10px] px-4 py-8 sm:px-6 md:grid-cols-[360px_1fr] md:px-8 md:py-10">
          {/* Desktop image */}
          <Image
            src="/images/2.png"
            alt="Sculptural architecture"
            width={320}
            height={500}
            className="hidden sm:block mx-auto h-[420px] w-full max-w-[320px] object-cover md:h-[560px] md:max-w-[420px]"
          />
          {/* Mobile image */}
          <Image
            src="/images/mobileview2.png"
            alt="Sculptural architecture mobile"
            width={320}
            height={420}
            className="block sm:hidden mx-auto h-[420px] w-full max-w-[320px] object-cover"
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
          className="mx-auto w-full max-w-[1180px] px-4 py-8 sm:px-6 md:px-8 md:py-10"
        >
          <div className="pl-5 md:border-l md:border-clementine/60">
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
                {/* Desktop image */}
                <Image
                  src="/images/3.png"
                  alt="Stone plaza"
                  width={620}
                  height={330}
                  className="hidden sm:block h-[240px] w-full object-cover md:h-[330px]"
                />
                {/* Mobile image */}
                <Image
                  src="/images/mobileview3.png"
                  alt="Stone plaza mobile"
                  width={620}
                  height={240}
                  className="block sm:hidden h-[240px] w-full object-cover"
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
          className="mx-auto w-full max-w-[1180px] px-4 py-8 sm:px-6 md:px-8 md:py-10"
        >
          <div className="grid border-t border-line-soft md:grid-cols-[460px_1fr]">
            <div className="pt-6 md:pr-6">
              {/* Desktop image */}
              <Image
                src="/images/4.png"
                alt="Architectural columns"
                width={460}
                height={340}
                className="hidden sm:block h-[250px] w-full object-cover md:h-[340px]"
              />
              {/* Mobile image */}
              <Image
                src="/images/mobileview4.png"
                alt="Architectural columns mobile"
                width={460}
                height={250}
                className="block sm:hidden h-[250px] w-full object-cover"
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
          <div className="mx-auto grid w-full max-w-[1180px] gap-[10px] px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr] md:px-8 md:py-12">
            <div className="pl-5 md:border-l md:border-clementine/60">
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
          className="mx-auto w-full max-w-[1180px] border-b border-line-soft px-4 py-10 sm:px-6 md:px-8 md:py-12"
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
          className="mx-auto w-full max-w-[1180px] px-4 py-10 sm:px-6 md:px-8 md:py-12"
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
