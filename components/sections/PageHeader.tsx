import Container from "@/components/ui/Container";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

// Reusable page intro: provides the single <h1> (key SEO signal) plus a
// keyword-rich lead paragraph, matching the clean & clinical layout.
export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-ps-navy-deep text-white">
      <div className="absolute -right-24 -top-24 h-[360px] w-[360px] rounded-full bg-ps-teal/15 blur-[110px]" aria-hidden />
      <Container>
        <div className="relative mx-auto max-w-3xl py-16 text-center md:py-20">
          <p className="text-eyebrow !text-ps-teal-light">{eyebrow}</p>
          <h1 className="text-section-title mt-3 text-white">{title}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{description}</p>
        </div>
      </Container>
    </section>
  );
}
