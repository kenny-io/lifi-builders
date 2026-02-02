import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
  external?: boolean;
  className?: string;
}

export function Button({ href, variant = "primary", children, external = false, className = "" }: ButtonProps) {
  const baseStyles = "inline-flex items-center gap-2 px-6 py-4 text-[15px] font-semibold rounded-lg transition-all duration-200 cursor-pointer";
  
  const variants = {
    primary: "bg-pink text-bg-default font-bold hover:bg-pink-hover hover:-translate-y-0.5",
    secondary: "bg-transparent text-text-primary border border-border hover:border-pink hover:text-pink",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClassName}>
      {children}
    </Link>
  );
}
