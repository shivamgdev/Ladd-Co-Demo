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
          className="mx-auto max-w-[1180px] border-x border-line-soft bg-paper-white"
        >
          <div className="grid min-h-[520px] grid-cols-1 lg:grid-cols-[46px_1fr_340px] gap-0 ">
            <div className="hidden border-r border-line-soft lg:flex lg:items-start lg:pl-3 lg:pt-12">
              <span className="h-[5px] w-[5px] bg-clementine lg:ml-2" />
            </div>

            <div className="border-r border-line-soft px-6 py-8 lg:px-8 lg:py-8">
              <h1 className="max-w-[760px] font-serif text-[36px] leading-[1.02] tracking-[-0.012em] text-coffee sm:text-[50px] md:text-[60px] md:leading-[0.96]">
                <span className="block">Advisory and execution for</span>
                <span className="block italic">
                  families, principals, and private
                </span>
                <span className="block">institutions with interests that</span>
                <span className="block">demand discretion.</span>
              </h1>
              <p className="mt-7 max-w-[450px] text-[13px] leading-[1.65] text-coffee/66">
                Ladd &amp; Co. is a private advisory practice. We represent
                clients across transactions, capital strategy, structuring, and
                the management of sensitive matters across jurisdictions.
              </p>
            </div>

            <div className="lg:pb-0 lg:p-0 lg:mb-8">
              {/* Desktop image */}
              <Image
                src="/images/1.png"
                alt="Modern architecture"
                width={340}
                height={520}
                className="hidden sm:block h-[340px] max-w-[340px] w-full object-cover lg:h-full"
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
            <div className="grid lg:grid-cols-[46px_1fr] relative">
              <div className="hidden lg:block absolute top-4 left-5">
                        
                <Image
                  src="/images/Frame14.png"
                  alt="line"
                  width={3.8}
                  height={2}
                />
                      
              </div>
              <div className="hidden border-r border-line-soft lg:block" />
              <div className="px-6 py-8 lg:px-8 lg:py-9">
                <div className="block sm:hidden mx-auto w-full max-w-[320px] flex flex-col items-start"></div>
                <div>
                  <p className="max-w-[1080px] font-serif text-[22px] leading-[1.24] text-coffee/92 md:text-[28px] lg:text-[32px] lg:leading-[1.08]">
                    We operate as an extension of our clients&apos; interests -
                    advising, coordinating, and executing where the complexity
                    demands a single, trusted point of contact.
                  </p>
                  <p className="mt-4 max-w-[450px] text-[12px] leading-[1.6] text-coffee/68 lg:text-[13px]">
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

        <section className="mx-auto grid w-full max-w-[1180px] gap-[10px] px-0 py-8 sm:px-6 md:grid-cols-[360px_1fr] md:px-7 md:py-0">
          {/* Desktop image with left lines */}
          <div className="hidden sm:flex relative h-[420px] md:h-[700px] w-full max-w-[320px] md:max-w-[420px] ml-8">
            {/* Left vertical lines - centered and lighter */}
            <div
              className="absolute left-[-36px] top-0 h-full flex flex-col items-center justify-center"
              style={{ width: "28px", pointerEvents: "none" }}
            >
              <div
                style={{
                  width: "1px",
                  height: "700px",
                  background: "#e5e1d8",
                  borderRadius: "1px",
                  marginBottom: "0",
                  marginRight: "75px",
                }}
              ></div>
              {/* Right vertical line image, fit to image height */}
              <div
                className="hidden lg:block absolute right-[25px] top-15 h-full"
                style={{ width: "4px", zIndex: 2 }}
              >
                <span className="h-[6px] w-[6px] bg-clementine block mr-1" />
                <span className="text-[13px] font-mono text-coffee/90 ">
                  01
                </span>
                <Image
                  src="/images/Frame15.png"
                  alt="line"
                  width={4}
                  height={300}
                  style={{
                    height: "80%",
                    width: "100%",
                    marginBottom: "10%",
                    marginTop: "10px",
                  }}
                />
              </div>
              <div
                style={{
                  width: "1px",
                  height: "100%",
                  background: "#e5e1d8",
                  borderRadius: "1px",
                  marginLeft: "6px",
                  position: "absolute",
                  left: "16px",
                  top: 0,
                }}
              ></div>
            </div>
            <Image
              src="/images/2.png"
              alt="Sculptural architecture"
              width={320}
              height={500}
              className="h-[700px] w-full object-cover md:pt-8 md:pb-8"
            />
          </div>
          {/* Mobile number count and image */}
          <div className="block sm:hidden mx-auto w-full max-w-[320px] flex flex-col items-start">
            <div className="mb-2 block sm:hidden mx-auto w-full max-w-[320px] flex flex-col items-start mt-1">
              <div
                className="flex items-center mt-0 mb-[18px] w-full px-4"
                style={{ height: "13px", border: "none" }}
              >
                <span className="h-[6px] w-[6px] bg-clementine block mr-1" />
                <span className="text-[13px] font-mono text-coffee/90 mr-1">
                  01
                </span>
                <span
                  style={{
                    flex: 1,
                    height: "13px",
                    display: "block",
                    background:
                      "url(/images/numbercount1.png) repeat-x left center",
                    backgroundSize: "13px 13px",
                  }}
                />
                <span
                  className="text-[10px] uppercase tracking-[0.2em] text-coffee/45 ml-2"
                  style={{ whiteSpace: "nowrap" }}
                ></span>
              </div>
            </div>
            <Image
              src="/images/mobileview2.png"
              alt="Sculptural architecture mobile"
              width={320}
              height={420}
              className="block h-[420px] w-full max-w-[320px] object-cover"
            />
          </div>
          <div className="relative grid min-h-[560px] grid-rows-[auto_1fr] pl-4 pr-4 md:pl-8 md:ml-8 md:pt-14">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-coffee/45">
                About the Firm
              </p>
              <p className="mt-3 max-w-[760px] font-serif text-[34px] leading-[1.04] text-coffee/92 md:text-[50px] md:leading-[1.02] mr-2">
                We advise where the stakes are highest and the margin for error
                is smallest.
              </p>
            </div>
            <div className="mt-10 pb-1">
              <div className="ml-auto max-w-[500px] space-y-4 text-[16px] leading-[1.78] text-coffee/68">
                <p>
                 Our clients are individuals and families with significant wealth, complex international structures, and affairs that span multiple jurisdictions, advisors, and asset classes.
                </p>
                <p>
                  We do not manage assets. We do not sell financial products. We provide independent counsel and hands-on execution across the full spectrum of our clients' private affairs — from capital deployment and M&A to international structuring and the resolution of distressed or disputed matters.
                </p>
                <p>
                 We work alongside our clients' existing professional teams — their lawyers, accountants, bankers, and investment managers — ensuring alignment, identifying gaps, and resolving issues that fall between the cracks.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="mx-auto w-full max-w-[1180px] px-4 py-8 sm:px-6 md:px-7 md:py-0"
        >
          {/* Mobile count bar for 02 SERVICES */}
          <div className="block sm:hidden mx-auto w-full max-w-[320px] flex flex-col items-start">
            <div
              className="flex items-center mt-0 mb-[22px] w-full"
              style={{ height: "13px", border: "none" }}
            >
              <span className="h-[6px] w-[6px] bg-clementine block mr-1" />
              <span className="text-[13px] font-mono text-coffee/90 mr-1">
                02
              </span>
              <span
                style={{
                  flex: 1,
                  height: "13px",
                  display: "block",
                  background:
                    "url(/images/numbercount1.png) repeat-x left center",
                  backgroundSize: "13px 13px",
                }}
              />
              <span
                className="text-[10px] uppercase tracking-[0.2em] text-coffee/45 ml-2"
                style={{ whiteSpace: "nowrap" }}
              >
                Services
              </span>
            </div>
          </div>
          <div className="pl-0">
            <div className="grid gap-6 md:grid-cols-[46px_1fr_620px] md:items-start">
              {/* Double vertical lines for desktop, side by side with gap and dot above */}
              <div className="hidden md:flex flex-col items-center pt-0 pr-4">
                <div className="flex flex-row items-start gap-3.5">
                  <div className="w-[1px] h-[120px] md:h-[480px] bg-line-soft ml-6" />
                  <span className="text-[13px] font-mono text-coffee/90 mt-16">
                    02
                  </span>
                  <div className="w-[1px] h-[120px] md:h-[480px] bg-line-soft mr-16" />
                </div>
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-[0.2em] text-coffee/45 md:mt-12">SERVICES</p>
                <h2 className="mt-2 font-serif text-[46px] leading-[1.02] text-coffee md:text-[64px] md:mt-4">
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
                  height={420}
                  className="hidden sm:block h-[240px] w-full object-cover md:h-[420px] md:mt-12"
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
            <div className="mt-10">
              {/* Top: 2 columns x 2 rows (Roman sections) */}
              <div className="grid grid-cols-1 md:grid-cols-2 border-line-soft rounded-t-xl overflow-hidden">
                {[0, 1, 2, 3].map((idx) => {
                  const block = serviceBlocks[idx];
                  const romanNumerals = ["I", "II", "III", "IV"];
                  return (
                    <div
                      key={block.title}
                      className={`p-8 min-h-[180px] border-b border-line-soft ${idx % 2 === 0 ? "md:border-r" : ""}`}
                    >
                      <p className="text-[20px] font-serif font-semibold tracking-[0.22em] text-clementine/95 mb-1">
                        {romanNumerals[idx]}
                      </p>
                      <h3 className="mt-2 text-coffee/84 font-serif text-[26px] leading-[1.4]">
                        {block.title}
                      </h3>
                      <p className="mt-1 text-[15px] leading-[1.7] text-coffee/68">
                        {Array.isArray(block.description)
                          ? block.description[0]
                          : block.description}
                      </p>
                    </div>
                  );
                })}
              </div>
              {/* Bottom: 3 columns x 2 rows (small sections) */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-line-soft rounded-b-xl overflow-hidden">
                {[4, 5, 6, 7, 8, 9].map((idx) => {
                  const block = serviceBlocks[idx];
                  if (!block) return null;
                  return (
                    <div
                      key={block.title}
                      className={`p-6 min-h-[140px] ${idx % 3 !== 2}`}
                    >
                      <h4 className="font-semibold text-coffee/84 text-[17px] mb-1">
                        {block.title}
                      </h4>
                      <p className="text-[14px] leading-[1.7] text-coffee/68">
                        {Array.isArray(block.description)
                          ? block.description[0]
                          : block.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        {/* CLIENTS number count bar - mobile only */}
        <div className="block sm:hidden mx-auto w-full max-w-[280px] flex flex-col items-start mt-8">
          <div
            className="flex items-center mt-0 mb-[22px] w-full"
            style={{ height: "13px", border: "none" }}
          >
            <span className="h-[6px] w-[6px] bg-clementine block mr-1" />
            <span className="text-[13px] font-mono text-coffee/90 mr-1">
              03
            </span>
            <span
              style={{
                flex: 1,
                height: "13px",
                display: "block",
                background:
                  "url(/images/numbercount1.png) repeat-x left center",
                backgroundSize: "13px 13px",
              }}
            />
            <span
              className="text-[10px] uppercase tracking-[0.2em] text-coffee/45 ml-2"
              style={{ whiteSpace: "nowrap" }}
            >
              WHO WE SERVE
            </span>
          </div>
        </div>

        <section
          id="clients"
          className="mx-auto w-full max-w-[1180px] px-0 py-8 sm:px-6 md:px-8 md:py-10"
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
                width={402}
                height={408}
                className="block sm:hidden object-cover border-l border-r border-line-soft opacity-100 p-[1px]"
                style={{
                  width: "402px",
                  height: "408px",
                  opacity: 1,
                }}
              />
            </div>

            <div className="px-4 sm:px-0 border-line-soft md:grid md:grid-rows-[340px_auto] md:pl-8">
              <div className="flex flex-col justify-center">
                <p className="text-[12px] uppercase tracking-[0.2em] text-coffee/45">WHO WE SERVE</p>
                <p className="mt-3 max-w-[760px] font-serif text-[34px] leading-[1.1] text-coffee/90 md:text-[46px] md:leading-[1.08]">
                  <span
                    style={{
                      fontFamily: "PP Eiko, serif",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontSize: "22px",
                      lineHeight: "130%",
                      letterSpacing: "0px",
                    }}
                  >
                    Our clients are{" "}
                    <span className="italic">entrepreneurs,</span>
                    <br />
                    <span className="italic">
                      principals, and multi-generational
                    </span>
                    <br />
                    <span className="italic">
                      families managing significant private
                    </span>
                    <br />
                    wealth across multiple jurisdictions.
                  </span>
                </p>
              </div>

              <div className="mt-6 border-t border-line-soft pt-6 md:mt-10 md:pt-8 md:-ml-6">
                <div className="block sm:hidden mx-auto w-full max-w-[280px] flex flex-col items-start mt-8">
                  <div
                    className="flex items-center mt-0 mb-[26px] w-full"
                    style={{ height: "13px", border: "none" }}
                  >
                    <span />
                    <span className="text-[13px] font-mono text-coffee/90 mr-1"></span>
                    <span
                      style={{
                        flex: 1,
                        height: "13px",
                        display: "block",
                        background:
                          "url(/images/numbercount1.png) repeat-x left center",
                        backgroundSize: "13px 13px",
                      }}
                    />
                    <span
                      className="text-[10px] uppercase tracking-[0.2em] text-coffee/45 ml-2"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      CLIENTS
                    </span>
                  </div>
                </div>
                <div className="max-w-[560px] space-y-4 text-[16px] leading-[1.85] text-coffee/66 md:max-w-[520px]">
                  <p>
                    Many have complex holding structures, diverse asset
                    portfolios, and professional teams that require a senior
                    point of coordination.
                  </p>
                  <p>
                    We also act for institutional investors, sovereign entities,
                    and private offices requiring independent advisory on
                    specific transactions or matters.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 sm:px-0 mt-8 grid border-t border-line-soft md:mt-10 md:grid-cols-2">
            {clientCategories.map((item, idx) => (
              <div
                key={item}
                className={[
                  "flex flex-col border-b border-line-soft py-4 text-[20px] text-coffee/84 font-serif",
                  idx % 2 === 0 ? "md:pr-8" : "md:pl-8",
                ].join(" ")}
              >
                <span
                  className="mb-2 h-[1px] w-8 bg-clementine block"
                  style={{ opacity: 0.8 }}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-muted-olive/80">
          <div className="mx-auto grid w-full max-w-[1180px] gap-[10px] px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr] md:px-8 md:py-12">
            <div className="pl-0 md:border-l/60">
              <p className="font-serif text-[32px] italic leading-[1.02] text-coffee md:text-[62px]">
                Discretion is not a policy.
              </p>
              <p className="font-serif text-[32px] italic leading-[1.02] text-coffee md:text-[62px]">
                It is the nature of the work.
              </p>
            </div>
            <div className="self-end">
              <p className="text-[16px] leading-[1.85] text-coffee/72">
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

        {/* INDUSTRIES number count bar - mobile only */}
        <div className="block sm:hidden mx-auto w-full max-w-[280px] flex flex-col items-start mt-8">
          <div
            className="flex items-center mt-0 mb-[22px] w-full"
            style={{ height: "13px", border: "none" }}
          >
            <span className="h-[6px] w-[6px] bg-clementine block mr-1" />
            <span className="text-[13px] font-mono text-coffee/90 mr-1">
              04
            </span>
            <span
              style={{
                flex: 1,
                height: "13px",
                display: "block",
                background:
                  "url(/images/numbercount1.png) repeat-x left center",
                backgroundSize: "13px 13px",
              }}
            />
            <span
              className="text-[10px] uppercase tracking-[0.2em] text-coffee/45 ml-2"
              style={{ whiteSpace: "nowrap" }}
            >
              INDUSTRIES
            </span>
          </div>
        </div>

        <section
          id="industries"
          className="mx-auto w-full max-w-[1180px] border-b border-line-soft px-4 py-6 sm:px-6 md:px-8 md:py-12"
        >
         <span
              className="text-[10px] uppercase tracking-[0.2em] text-coffee/45"
              style={{ whiteSpace: "nowrap", marginBottom: "20px" }}
            >
             INDUSTRIES
            </span>
          <div className="mt-2 grid gap-x-10 gap-y-4 md:grid-cols-3 lg:grid-cols-4">
            {industries.map((industry) => (
              <p
                key={industry}
                className="border-b border-line-soft pb-3 text-[14px] text-coffee/75"
              >
                {industry}
              </p>
            ))}
          </div>
        </section>

        {/* PRESENCE number count bar - mobile only */}
        <div className="block sm:hidden mx-auto w-full max-w-[280px] flex flex-col items-start mt-8">
          <div
            className="flex items-center mt-0 mb-[22px] w-full"
            style={{ height: "13px", border: "none" }}
          >
            <span className="h-[6px] w-[6px] bg-clementine block mr-1" />
            <span className="text-[13px] font-mono text-coffee/90 mr-1">
              05
            </span>
            <span
              style={{
                flex: 1,
                height: "13px",
                display: "block",
                background:
                  "url(/images/numbercount1.png) repeat-x left center",
                backgroundSize: "13px 13px",
              }}
            />
            <span
              className="text-[10px] uppercase tracking-[0.2em] text-coffee/45 ml-2"
              style={{ whiteSpace: "nowrap" }}
            >
              PRESENCE
            </span>
          </div>
        </div>

        <section
          id="presence"
          className="mx-auto w-full max-w-[1180px] px-4 py-6 sm:px-6 md:px-8 md:py-12"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-coffee/55 hidden md:block">
            Presence
          </p>
          <div className="mt-0 grid gap-x-12 gap-y-6 md:grid-cols-3">
            {officeDetails.map((office, idx) => (
              <div key={office.city}>
                {/* Mobile-only number count */}

                <p className="font-serif text-[30px] leading-none text-coffee">
                  {office.city}
                </p>
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
