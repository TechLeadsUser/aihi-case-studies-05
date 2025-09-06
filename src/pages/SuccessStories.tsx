import { successStories } from "@/data/success-stories";
import { Gallery4, type Gallery4Item } from "@/components/ui/gallery4";

export default function SuccessStoriesPage() {
  const items: Gallery4Item[] = successStories.map((s) => ({
    id: s.slug,
    title: s.title,
    description: s.excerpt,
    href: `/success-stories/${s.slug}`,
    image: s.thumbnail,
  }));

  return (
    <main>
      <Gallery4
        title="AIHI Success Stories"
        description="Real outcomes from AIHI consulting—accelerated delivery, resilient platforms, and measurable business impact."
        items={items}
      />
    </main>
  );
}