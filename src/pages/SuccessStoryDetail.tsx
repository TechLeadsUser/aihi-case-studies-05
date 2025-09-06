import { useParams } from "react-router-dom";
import { successStories } from "@/data/success-stories";
import { Target, Puzzle, CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export default function SuccessStoryDetail() {
  const {
    slug
  } = useParams<{
    slug: string;
  }>();
  const story = successStories.find(s => s.slug === slug);
  if (!story) {
    return <div className="min-h-screen bg-consulting-dark text-consulting-text flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Story Not Found</h1>
          <p className="text-consulting-text-muted mb-8">The success story you're looking for doesn't exist.</p>
          <Link to="/success-stories">
            <Button variant="outline" className="glass-card text-consulting-text hover:text-consulting-accent border-consulting-border hover:border-consulting-accent/50">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Stories
            </Button>
          </Link>
        </div>
      </div>;
  }
  const {
    title,
    industry,
    customerOverview,
    hero,
    techStackVersion,
    modules,
    sections
  } = story;
  return <article className="bg-consulting-dark text-white">
      {/* Hero Section */}
      <section className="relative">
        {hero ? <div className="relative">
            <img src={hero} alt={title} className="h-72 w-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-t from-consulting-dark via-consulting-dark/50 to-transparent" />
          </div> : <div className="h-40 w-full bg-gradient-to-r from-consulting-primary/30 to-consulting-accent/30" />}
        
        <div className="container relative mx-auto max-w-7xl px-6 py-16">
          <Link to="/success-stories">
            <Button variant="ghost" className="text-white/70 hover:text-white mb-6 p-0 h-auto px-[12px] py-[12px]">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Success Stories
            </Button>
          </Link>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight max-w-4xl">
            {title}
          </h1>

          <div className="inline-flex rounded-full border border-consulting-accent/40 bg-consulting-accent/10 px-4 py-2 text-sm font-semibold text-consulting-accent mb-4">
            {industry}
          </div>

          {(techStackVersion || modules && modules.length) && <div className="flex flex-wrap gap-3 text-sm text-white/80 mb-6">
              {techStackVersion && <span className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 backdrop-blur-sm">
                  Tech Stack: {techStackVersion}
                </span>}
              {modules?.map(m => <span key={m} className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 backdrop-blur-sm">
                  {m}
                </span>)}
            </div>}

          {customerOverview && <p className="text-lg text-white/80 max-w-4xl leading-relaxed">
              {customerOverview}
            </p>}
        </div>
      </section>

      {/* Three Column Content */}
      <section className="container mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-3 lg:divide-x lg:divide-white/20">
          {/* Business Requirements */}
          <div className="lg:pr-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-purple-500/20 text-purple-300">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-semibold">Business Requirements</h2>
            </div>
            <ul className="space-y-4 text-white/80">
              {sections.businessRequirements.map((req, i) => <li key={i} className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-purple-300" />
                  <span>{req}</span>
                </li>)}
            </ul>
          </div>

          {/* Our Solution */}
          <div className="lg:px-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-consulting-accent/20 text-consulting-accent">
                <Puzzle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-semibold">Our Solution</h2>
            </div>
            <ul className="space-y-4 text-white/80">
              {sections.solutions.map((solution, i) => <li key={i} className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-consulting-accent" />
                  <span>{solution}</span>
                </li>)}
            </ul>
          </div>

          {/* Key Benefits */}
          <div className="lg:pl-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-teal-500/20 text-teal-300">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-semibold">Key Benefits</h2>
            </div>
            <ul className="space-y-4 text-white/80">
              {sections.benefits.map((benefit, i) => <li key={i} className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-300" />
                  <span>{benefit}</span>
                </li>)}
            </ul>
          </div>
        </div>
      </section>
    </article>;
}