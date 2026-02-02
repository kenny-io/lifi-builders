import { DollarIcon, LayersIcon, CheckCircleIcon, UsersIcon } from "@/components/icons";

const benefits = [
  {
    icon: DollarIcon,
    title: "Funding & Prizes",
    items: [
      "$5k cash prize for quarterly showcase winners",
      "Milestone-based support and resources",
      "Path to additional investment opportunities",
    ],
    gradient: "from-blue/20 to-purple-500/15",
    color: "text-pink",
    hoverBorder: "hover:border-pink",
    hoverShadow: "hover:shadow-blue/15",
  },
  {
    icon: LayersIcon,
    title: "Technical Support",
    items: [
      "1:1 mentorship from LI.FI engineers",
      "Early access to new LI.FI products and features",
      "Higher rate limits and priority support",
    ],
    gradient: "from-teal-500/20 to-cyan-500/15",
    color: "text-teal-500",
    hoverBorder: "hover:border-teal-500",
    hoverShadow: "hover:shadow-teal-500/15",
  },
  {
    icon: CheckCircleIcon,
    title: "Distribution & Credibility",
    items: [
      "Featured on Built on LI.FI showcase",
      "LI.FI Builder badge and brand assets",
      "Co-marketing and launch support",
    ],
    gradient: "from-amber-500/20 to-orange-500/15",
    color: "text-amber-500",
    hoverBorder: "hover:border-amber-500",
    hoverShadow: "hover:shadow-amber-500/15",
  },
  {
    icon: UsersIcon,
    title: "Network & Opportunities",
    items: [
      "Introductions to partners and investors",
      "Private builder community and peer learning",
      "Pathway to full-time roles or acquisition",
    ],
    gradient: "from-pink-500/20 to-rose-400/15",
    color: "text-pink-500",
    hoverBorder: "hover:border-pink-500",
    hoverShadow: "hover:shadow-pink-500/15",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24 px-6 bg-bg-paper">
      <div className="text-center max-w-[600px] mx-auto mb-12">
        <span className="inline-block text-xs font-semibold text-pink uppercase tracking-widest mb-4">
          Benefits
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Everything you need to succeed
        </h2>
        <p className="text-[17px] text-text-secondary">
          We invest in your growth with funding, mentorship, and the resources to turn your project into a business.
        </p>
      </div>
      
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`bg-bg-card p-8 rounded-xl border border-border transition-all duration-200 relative overflow-hidden ${benefit.hoverBorder} hover:-translate-y-0.5 hover:shadow-[0_8px_30px] ${benefit.hoverShadow} group`}
          >
            <div className={`absolute top-0 right-0 w-[120px] h-[120px] rounded-full blur-[40px] opacity-15 group-hover:opacity-25 transition-opacity bg-gradient-to-br ${benefit.gradient}`} />
            
            <div className={`w-12 h-12 flex items-center justify-center rounded-lg mb-6 bg-gradient-to-br ${benefit.gradient} ${benefit.color}`}>
              <benefit.icon />
            </div>
            
            <h3 className="text-[17px] font-semibold mb-4">{benefit.title}</h3>
            
            <ul className="space-y-2">
              {benefit.items.map((item, i) => (
                <li key={i} className="text-sm text-text-secondary pl-4 relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-pink before:rounded-full">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
