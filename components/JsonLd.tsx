// Renders a JSON-LD structured-data script. Helps Google understand the site
// and can produce rich results (FAQ dropdowns, organization knowledge panel).
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
