import { ChevronRight } from "lucide-react";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Button } from "@/components/ui/button";

const selectLikeFields = [
  "Preferred Method of Contact*",
  "How did you hear about us?*",
  "To help us assess your needs, can you share a range for your investable assets?*",
];

export default function ContactPage() {
  return (
    <div className="bg-paper-white text-coffee">
      <SiteHeader activePath="/contact" />

      <main>
        <section className="mx-auto grid w-full max-w-[1180px] gap-10 border-x border-line-soft px-4 py-10 sm:px-6 md:grid-cols-[1fr_1fr] md:gap-0 md:px-8 md:py-12">
          <div className="md:border-r md:border-line-soft md:pr-12">
            <span className="inline-block h-[4px] w-[4px] rounded-full bg-clementine" />
            <h1 className="mt-3 font-serif text-[46px] leading-[0.95] text-coffee md:text-[62px]">
              Request an
              <br />
              Introduction
            </h1>
            <p className="mt-5 max-w-[360px] text-[12px] leading-[1.65] text-coffee/62">
              We can connect you with the experts that can help guide you toward
              achieving your unique goals.
            </p>
          </div>

          <form className="grid grid-cols-1 gap-3 text-[9px] uppercase tracking-[0.16em] text-coffee/66 md:pl-8">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <label className="space-y-1.5">
                <span>First Name*</span>
                <input
                  defaultValue="John Doe"
                  className="h-8 w-full border border-line-soft bg-transparent px-2 text-[12px] normal-case tracking-normal outline-none"
                />
              </label>

              <label className="space-y-1.5">
                <span>Last Name*</span>
                <input
                  defaultValue="John Doe"
                  className="h-8 w-full border border-line-soft bg-transparent px-2 text-[12px] normal-case tracking-normal outline-none"
                />
              </label>
            </div>

            <label className="space-y-1.5">
              <span>Email*</span>
              <input className="h-8 w-full border border-line-soft bg-transparent px-2 text-[12px] normal-case tracking-normal outline-none" />
            </label>

            <label className="space-y-2">
              <span>Mobile Number</span>
              <input className="h-8 w-full border border-line-soft bg-transparent px-2 text-[12px] normal-case tracking-normal outline-none" />
            </label>

            <label className="space-y-2">
              <span>Country</span>
              <input className="h-8 w-full border border-line-soft bg-transparent px-2 text-[12px] normal-case tracking-normal outline-none" />
            </label>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <label className="space-y-1.5">
                <span>State</span>
                <input className="h-8 w-full border border-line-soft bg-transparent px-2 text-[12px] normal-case tracking-normal outline-none" />
              </label>
              <label className="space-y-1.5">
                <span>City</span>
                <input className="h-8 w-full border border-line-soft bg-transparent px-2 text-[12px] normal-case tracking-normal outline-none" />
              </label>
            </div>

            {selectLikeFields.map((label) => (
              <label key={label} className="space-y-1.5">
                <span>{label}</span>
                <input
                  defaultValue="Please Select"
                  className="h-8 w-full border border-line-soft bg-transparent px-2 text-[12px] normal-case tracking-normal text-coffee/45 outline-none"
                />
              </label>
            ))}

            <label className="space-y-1.5">
              <span>Message</span>
              <textarea className="h-20 w-full border border-line-soft bg-transparent px-2 py-2 text-[12px] normal-case tracking-normal outline-none" />
            </label>

            <div className="pt-2">
              <Button type="button" className="h-10 w-full rounded-none bg-coffee px-5 text-[10px] uppercase tracking-[0.18em] text-paper-white hover:bg-earth">
                Submit Request
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </section>

        <section className="mx-auto bg-muted-olive/75">
          <div className="mx-auto grid w-full max-w-[1180px] gap-8 border-x border-line-soft px-4 py-10 sm:px-6 md:grid-cols-[1.1fr_1fr] md:px-8 md:py-14">
            <div className="border-l border-clementine/55 pl-6">
              <p className="font-serif text-[39px] italic leading-[1.03] md:text-[55px]">
                Discretion is not a policy.
              </p>
              <p className="font-serif text-[39px] italic leading-[1.03] md:text-[55px]">
                It is the nature of the work.
              </p>
            </div>
            <div className="self-end text-[12px] leading-[1.8] text-coffee/74">
              Our clients engage us because the matters they face are too
              consequential for rigid institutional processes and too complex
              for any single advisor. We operate with a permanent obligation of
              confidentiality and purpose-built execution.
              <p className="mt-5 text-[10px] uppercase tracking-[0.22em] text-clementine">
                This is not a feature of our service.
              </p>
              <p className="text-[10px] uppercase tracking-[0.22em] text-clementine">
                It is the foundation of it.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
