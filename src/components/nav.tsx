"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Nav() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isHackathonsPage = mounted && pathname === "/hackathons";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-bg-default/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo_lifi_dark.png"
            alt="LI.FI"
            width={28}
            height={28}
            className="w-7 h-7"
          />
          <span className="text-xl font-bold text-text-primary tracking-tight">LI.FI</span>
          <span className="text-xs font-semibold text-pink bg-pink/15 px-2 py-1 rounded-md">Builders</span>
        </Link>
        <div className="hidden md:flex gap-8">
          <Link 
            href="/#benefits" 
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            Benefits
          </Link>
          <Link 
            href="/#how-it-works" 
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            How it Works
          </Link>
          <Link 
            href="/#showcase" 
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            Showcase
          </Link>
          <Link 
            href="/hackathons" 
            className={`text-sm font-medium transition-colors ${
              isHackathonsPage ? "text-pink" : "text-text-secondary hover:text-text-primary"
            }`}
          >
            Hackathons
          </Link>
        </div>
      </div>
    </nav>
  );
}
