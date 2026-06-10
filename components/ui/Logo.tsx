import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

const heights = {
  sm: 52,
  md: 60,
  lg: 76,
};

export default function Logo({ variant = "dark", size = "md" }: LogoProps) {
  const height = heights[size];

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center transition-opacity hover:opacity-90 ${
        variant === "light" ? "rounded-md bg-white p-2" : ""
      }`}
      aria-label="PathStandard Technologies — Home"
    >
      <Image
        src="/images/logo.png"
        alt="CERTUS PathStandard Technologies"
        width={Math.round(height * 4.2)}
        height={height}
        className="h-auto w-auto object-contain"
        style={{ height, width: "auto", maxWidth: "none" }}
        priority
      />
    </Link>
  );
}
