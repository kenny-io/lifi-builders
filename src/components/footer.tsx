import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-bg-paper text-text-primary py-16 px-6 border-t border-border">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/images/logo_lifi_dark.png"
              alt="LI.FI"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-2xl font-bold">LI.FI</span>
          </div>
          <p className="text-text-secondary text-[15px]">The cross-chain execution layer.</p>
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h4 className="text-sm font-semibold mb-6 text-text-primary">Product</h4>
            <div className="flex flex-col gap-3">
              <Link href="https://li.fi" target="_blank" className="text-sm text-[#B8BFC9] hover:text-pink transition-colors">
                Website
              </Link>
              <Link href="https://docs.li.fi" target="_blank" className="text-sm text-[#B8BFC9] hover:text-pink transition-colors">
                Documentation
              </Link>
              <Link href="https://jumper.exchange" target="_blank" className="text-sm text-[#B8BFC9] hover:text-pink transition-colors">
                Jumper Exchange
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-6 text-text-primary">Developers</h4>
            <div className="flex flex-col gap-3">
              <Link href="https://docs.li.fi/integrate-li.fi-sdk" target="_blank" className="text-sm text-[#B8BFC9] hover:text-pink transition-colors">
                SDK
              </Link>
              <Link href="https://docs.li.fi/li.fi-api" target="_blank" className="text-sm text-[#B8BFC9] hover:text-pink transition-colors">
                API
              </Link>
              <Link href="https://github.com/lifinance" target="_blank" className="text-sm text-[#B8BFC9] hover:text-pink transition-colors">
                GitHub
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-6 text-text-primary">Community</h4>
            <div className="flex flex-col gap-3">
              <Link href="https://discord.gg/lifi" target="_blank" className="text-sm text-[#B8BFC9] hover:text-pink transition-colors">
                Discord
              </Link>
              <Link href="https://twitter.com/laborxlifi" target="_blank" className="text-sm text-[#B8BFC9] hover:text-pink transition-colors">
                Twitter
              </Link>
              <Link href="https://blog.li.fi" target="_blank" className="text-sm text-[#B8BFC9] hover:text-pink transition-colors">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-border">
        <p className="text-[13px] text-text-secondary">&copy; 2026 LI.FI. All rights reserved.</p>
      </div>
    </footer>
  );
}
