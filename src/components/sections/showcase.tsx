import Link from "next/link";
import { Button } from "@/components/button";
import { GlobeIcon, GitHubIcon, ChevronRight } from "@/components/icons";

interface ShowcaseProject {
  title: string;
  description: string;
  integration: string;
  website?: string;
  github?: string;
  gradientClass: string;
  accentGradient: string;
  hoverBorder: string;
  hoverShadow: string;
}

const projects: ShowcaseProject[] = [
  {
    title: "Mina",
    description: "A complete Hyperliquid onboarding platform that takes users from any blockchain to actively trading in one seamless flow. Includes a published SDK, mobile-first web app, and terminal CLI.",
    integration: "Uses LI.FI routing to bridge assets from 40+ EVM chains with 15+ bridge protocols including Stargate, Across, and Celer.",
    website: "https://usemina.co",
    github: "https://github.com/SiphoYawe/mina",
    gradientClass: "bg-gradient-to-br from-blue/[0.08] to-transparent",
    accentGradient: "bg-gradient-to-r from-blue to-purple-500",
    hoverBorder: "hover:border-pink",
    hoverShadow: "hover:shadow-blue/20",
  },
  {
    title: "HyperGate",
    description: "An embeddable React widget enabling atomic, one-click onboarding from any chain directly into Hyperliquid L1 trading accounts. Packaged as a plug-and-play npm library.",
    integration: "Wraps LI.FI routing logic with a custom 'Auto-Forward' engine for seamless cross-chain deposits.",
    website: "https://hypergate-pi.vercel.app",
    github: "https://github.com/0-robert/Hyperliquid",
    gradientClass: "bg-gradient-to-br from-teal-500/[0.08] to-transparent",
    accentGradient: "bg-gradient-to-r from-teal-500 to-cyan-500",
    hoverBorder: "hover:border-teal-500",
    hoverShadow: "hover:shadow-teal-500/20",
  },
  {
    title: "Delta0",
    description: "Turn any asset into a stablecoin. Executes on-chain cash-and-carry strategies (long spot + short perp) on Hyperliquid, providing funding rate yields to users.",
    integration: "Uses LI.FI bridge to make bridging and trading tokens into the protocol accessible from all chains in just three clicks.",
    website: "https://www.delta0.xyz",
    github: "https://github.com/HaroldRobson/Delta0",
    gradientClass: "bg-gradient-to-br from-amber-500/[0.08] to-transparent",
    accentGradient: "bg-gradient-to-r from-amber-500 to-orange-500",
    hoverBorder: "hover:border-amber-500",
    hoverShadow: "hover:shadow-amber-500/20",
  },
  {
    title: "TAGO Leap",
    description: "Trade ideas, not tokens. A narrative-first trading terminal where users describe market theses in plain English and the platform generates hedged pair trades via Pear Protocol.",
    integration: "Powers 14+ chain bridging with route optimization, real-time quotes, and fee calculation for one-click onboarding.",
    website: "https://tago-leap-frontend.vercel.app",
    github: "https://github.com/RealKevinApetrei/tago-leap",
    gradientClass: "bg-gradient-to-br from-pink-500/[0.08] to-transparent",
    accentGradient: "bg-gradient-to-r from-pink-500 to-rose-400",
    hoverBorder: "hover:border-pink-500",
    hoverShadow: "hover:shadow-pink-500/20",
  },
  {
    title: "onLiq",
    description: "A mobile-first React Native app that onboards crypto-native users and beginners into Hyperliquid in one flow, with theme and pair trading via Pear Execution API.",
    integration: "Removes friction from bridging as part of the onboarding flow, enabling users to go from email to funded account seamlessly.",
    github: "https://github.com/Sahid-m/onLiq",
    gradientClass: "bg-gradient-to-br from-emerald-500/[0.08] to-transparent",
    accentGradient: "bg-gradient-to-r from-emerald-500 to-green-400",
    hoverBorder: "hover:border-emerald-500",
    hoverShadow: "hover:shadow-emerald-500/20",
  },
];

export function Showcase() {
  return (
    <section id="showcase" className="py-24 px-6 bg-bg-paper">
      <div className="text-center max-w-[600px] mx-auto mb-12">
        <span className="inline-block text-xs font-semibold text-pink uppercase tracking-widest mb-4">
          Past Winners
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Showcase Alumni
        </h2>
        <p className="text-[17px] text-text-secondary">
          Projects that competed in our quarterly showcases and are now building sustainable businesses on LI.FI.
        </p>
      </div>
      
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${project.gradientClass} bg-bg-card rounded-xl border border-border p-8 flex flex-col text-left transition-all duration-200 relative overflow-hidden ${project.hoverBorder} hover:-translate-y-0.5 hover:shadow-[0_8px_30px] ${project.hoverShadow} group`}
          >
            {/* Top accent line */}
            <div className={`absolute top-0 left-0 right-0 h-[3px] opacity-80 group-hover:opacity-100 transition-opacity ${project.accentGradient}`} />
            
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>
            
            <div className="bg-bg-elevated rounded-lg p-4 mt-auto">
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-pink mb-1">
                LI.FI Integration
              </span>
              <p className="text-[13px] text-text-secondary leading-relaxed">
                {project.integration}
              </p>
            </div>
            
            <div className="flex gap-4 mt-6 pt-4 border-t border-border">
              {project.website && (
                <Link
                  href={project.website}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-[13px] font-medium text-text-secondary hover:text-pink transition-colors"
                >
                  <GlobeIcon className="opacity-70 group-hover:opacity-100" />
                  Website
                </Link>
              )}
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-[13px] font-medium text-text-secondary hover:text-pink transition-colors"
                >
                  <GitHubIcon className="opacity-70 group-hover:opacity-100" />
                  GitHub
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-10">
        <Button href="/hackathons" variant="secondary">
          View Hackathons & Events
          <ChevronRight />
        </Button>
      </div>
    </section>
  );
}
