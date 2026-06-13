import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  // "light" = white logo for dark backgrounds; "dark" = navy logo for light backgrounds
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
  const src = variant === "light" ? "/images/logo-reversed.png" : "/images/logo.png";

  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center transition-opacity hover:opacity-90"
      aria-label="PathStandard Technologies — Home"
    >
      <Image
        src={src}
        alt="CERTUS PathStandard Technologies"
        width={Math.round(height * 2.73)}
        height={height}
        className="object-contain"
        style={{ height, width: "auto" }}
        priority
      />
    </Link>
  );
}
