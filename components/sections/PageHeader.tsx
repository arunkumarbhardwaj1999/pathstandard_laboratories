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
    <section className="border-b border-ps-slate-100 bg-ps-slate-50">
      <Container>
        <div className="max-w-3xl py-16 md:py-20">
          <p className="text-eyebrow">{eyebrow}</p>
          <h1 className="text-section-title mt-3">{title}</h1>
          <p className="text-lead mt-5">{description}</p>
        </div>
      </Container>
    </section>
  );
}
