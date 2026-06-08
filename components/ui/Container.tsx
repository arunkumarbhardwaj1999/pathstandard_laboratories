export default function Container({
  children,
  className = "",
  wide = false,
}: {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`mx-auto w-full px-6 sm:px-8 lg:px-12 ${
        wide ? "max-w-[1440px]" : "max-w-[1280px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}
