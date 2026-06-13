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
        alt="PathStandard Technologies"
        width={Math.round(height * 2.73)}
        height={height}
        className="object-contain"
        style={{ height, width: "auto" }}
        priority
      />
    </Link>
  );
}
