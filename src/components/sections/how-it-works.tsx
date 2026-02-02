import { ActivityIcon, ClipboardIcon } from "@/components/icons";

const steps = [
  {
    number: "01",
    title: "Apply & Build",
    description: "Apply with your LI.FI-powered project idea. We look for creative, innovative use cases that extend the cross-chain ecosystem.",
  },
  {
    number: "02",
    title: "Get Supported",
    description: "Accepted builders get mentorship, technical support, and resources to develop their project throughout the quarter.",
  },
  {
    number: "03",
    title: "Present & Compete",
    description: "Showcase your project at our quarterly demo day. Winners receive $5k to continue development and grow their business.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="text-center max-w-[600px] mx-auto mb-12">
        <span className="inline-block text-xs font-semibold text-pink uppercase tracking-widest mb-4">
          Process
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          How it works
        </h2>
        <p className="text-[17px] text-text-secondary">
          A structured program designed to take you from early-stage project to sustainable business.
        </p>
      </div>
      
      <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {steps.map((step, index) => (
          <div key={index} className="text-center p-8">
            <div className="font-mono text-sm font-semibold text-pink mb-4">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
            <p className="text-[15px] text-text-secondary">{step.description}</p>
          </div>
        ))}
      </div>
      
      {/* Expectations */}
      <div className="max-w-[800px] mx-auto bg-bg-card rounded-2xl p-10 border border-border">
        <h3 className="text-xl font-semibold mb-8 text-center">Our commitment</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex gap-6">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-pink/15 text-pink shrink-0">
              <ActivityIcon />
            </div>
            <div>
              <h4 className="text-[15px] font-semibold mb-2">From LI.FI</h4>
              <ul className="space-y-1">
                <li className="text-sm text-text-secondary">Dedicated mentorship and technical guidance</li>
                <li className="text-sm text-text-secondary">Funding for showcase winners ($5k/quarter)</li>
                <li className="text-sm text-text-secondary">Help building a path to profitability</li>
              </ul>
            </div>
          </div>
          
          <div className="flex gap-6">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-pink/20 text-pink shrink-0">
              <ClipboardIcon />
            </div>
            <div>
              <h4 className="text-[15px] font-semibold mb-2">From Builders</h4>
              <ul className="space-y-1">
                <li className="text-sm text-text-secondary">Build and ship using LI.FI infrastructure</li>
                <li className="text-sm text-text-secondary">Commit to growing a sustainable product</li>
                <li className="text-sm text-text-secondary">Present progress at quarterly showcase</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
