import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  pill?: boolean;
  disabled?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-ps-teal text-white hover:bg-ps-teal-dark shadow-sm",
  secondary: "bg-ps-navy text-white hover:bg-ps-navy-light",
  outline: "border border-ps-slate-300 text-ps-slate-800 hover:border-ps-slate-400 bg-white",
  ghost: "border border-white/60 text-white hover:bg-white/10 bg-transparent",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  pill = true,
  disabled = false,
}: ButtonProps) {
  const shape = pill ? "rounded-full" : "rounded-lg";
  const base = `inline-flex items-center justify-center ${shape} px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60`;

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
