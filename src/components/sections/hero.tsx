import { Button } from "@/components/button";
import { ChevronRight } from "@/components/icons";

export function Hero() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-80px)]">
      <div className="animate-hero-fade-in lg:text-left text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-pink bg-pink/10 px-4 py-2 rounded-full mb-6 uppercase tracking-wider border border-pink/20">
          <span className="w-1.5 h-1.5 bg-pink rounded-full animate-pulse-slow" />
          Accelerator Program
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.3] tracking-tight mb-6 font-mono">
          <span className="text-text-secondary">{"{"}</span>
          <span className="text-text-primary">yourIdea</span>
          <span className="text-pink"> + </span>
          <span className="text-text-primary">ourSupport</span>
          <span className="text-blue"> === </span>
          <span className="text-emerald-400">profitableBusiness</span>
          <span className="text-text-secondary">{"}"}</span>
        </h1>
        
        <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-[480px] lg:mx-0 mx-auto">
          We support early-stage builders using LI.FI in creative and innovative ways. Every builder gets an opportunity to present at our quarterly showcase and stands a chance to win a $5k bounty and continued support.
        </p>
        
        <div className="flex gap-4 mb-12 flex-col sm:flex-row lg:justify-start justify-center">
          <Button href="/apply">
            Apply Now
            <ChevronRight />
          </Button>
          <Button href="https://docs.li.fi" variant="secondary" external>
            Read the Docs
          </Button>
        </div>
        
        <div className="flex items-center gap-8 flex-col sm:flex-row lg:justify-start justify-center">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-text-primary">$5k</span>
            <span className="text-sm text-text-secondary">Quarterly Prize</span>
          </div>
          <div className="w-px h-10 bg-border hidden sm:block" />
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-text-primary">4x</span>
            <span className="text-sm text-text-secondary">Showcases/Year</span>
          </div>
          <div className="w-px h-10 bg-border hidden sm:block" />
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-text-primary">1:1</span>
            <span className="text-sm text-text-secondary">Mentorship</span>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center animate-hero-fade-in [animation-delay:0.3s]">
        <div className="w-full max-w-[520px] bg-bg-card rounded-xl overflow-hidden border border-border shadow-lg transition-all duration-200 hover:border-pink hover:-translate-y-0.5">
          <div className="flex items-center gap-4 px-6 py-4 bg-white/[0.03] border-b border-border">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27CA40]" />
            </div>
            <span className="font-mono text-xs text-text-secondary">routes.ts</span>
          </div>
          <pre className="p-6 overflow-x-auto">
            <code className="font-mono text-sm leading-[1.8] text-[#E4E4E7]">
              <span className="code-keyword">import</span> {"{"} getRoutes {"}"} <span className="code-keyword">from</span> <span className="code-string">&apos;@lifi/sdk&apos;</span>{"\n\n"}
              <span className="code-keyword">const</span> routesRequest: <span className="code-function">RoutesRequest</span> = {"{"}{"\n"}
              {"  "}<span className="code-property">fromChainId</span>: <span className="code-string">42161</span>,{"\n"}
              {"  "}<span className="code-property">toChainId</span>: <span className="code-string">10</span>,{"\n"}
              {"  "}<span className="code-property">fromTokenAddress</span>: <span className="code-string">&apos;USDC&apos;</span>,{"\n"}
              {"  "}<span className="code-property">toTokenAddress</span>: <span className="code-string">&apos;DAI&apos;</span>,{"\n"}
              {"  "}<span className="code-property">fromAmount</span>: <span className="code-string">&apos;10000000&apos;</span>{"\n"}
              {"}"}{"\n\n"}
              <span className="code-keyword">const</span> result = <span className="code-keyword">await</span> <span className="code-function">getRoutes</span>(routesRequest){"\n"}
              <span className="code-keyword">const</span> routes = result.<span className="code-property">routes</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
