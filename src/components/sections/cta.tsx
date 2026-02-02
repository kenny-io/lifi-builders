import { Button } from "@/components/button";
import { ChevronRight } from "@/components/icons";

export function CTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-bg-default to-bg-elevated text-center border-t border-border">
      <div className="max-w-[600px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to turn your idea into a business?
        </h2>
        <p className="text-[17px] text-text-secondary mb-8">
          Apply to the Builders Program and get the funding, mentorship, and support you need to succeed. Next showcase applications close soon.
        </p>
        <div className="flex gap-4 justify-center flex-col sm:flex-row">
          <Button href="/apply">
            Apply Now
            <ChevronRight />
          </Button>
          <Button href="https://t.me/+42B6vxDV70QyNGI0" variant="secondary" external>
            Join Telegram
          </Button>
        </div>
      </div>
    </section>
  );
}
