import type { Metadata } from "next";
import { ApplicationForm } from "@/components/application-form";

export const metadata: Metadata = {
  title: "Apply | LI.FI Builders Program",
  description: "Apply to the LI.FI Builders Program. Get funding, mentorship, and support to turn your cross-chain project into a sustainable business.",
};

export default function ApplyPage() {
  return (
    <div className="max-w-[720px] mx-auto px-6 py-16 sm:py-24">
      {/* Header with gradient glow */}
      <div className="relative text-center mb-16">
        {/* Background glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-gradient-to-r from-pink/10 via-pink/5 to-pink/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-pink bg-pink/10 px-4 py-2 rounded-full mb-8 uppercase tracking-wider border border-pink/20">
            <span className="w-1.5 h-1.5 bg-pink rounded-full animate-pulse-slow" />
            Application
          </div>
          
          {/* Title */}
          <h1 className="font-mono text-3xl sm:text-4xl font-bold text-text-primary mb-4 tracking-tight">
            Apply to the{" "}
            <span className="text-pink">
              Builders Program
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-text-secondary max-w-[500px] mx-auto leading-relaxed">
            Tell us about your project and how you&apos;re using LI.FI. We review applications on a rolling basis and will get back to you within{" "}
            <span className="font-mono text-text-primary">2 weeks</span>.
          </p>
        </div>
      </div>
      
      {/* Form */}
      <ApplicationForm />
    </div>
  );
}
