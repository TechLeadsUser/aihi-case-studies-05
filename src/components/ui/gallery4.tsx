import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export type Gallery4Item = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
};

export type Gallery4Props = {
  title: string;
  description: string;
  items: Gallery4Item[];
};

export function Gallery4({ title, description, items }: Gallery4Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, items.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, items.length - 2)) % Math.max(1, items.length - 2));
  };

  const visibleItems = items.slice(currentIndex, currentIndex + 3);

  return (
    <section className="min-h-screen bg-consulting-dark relative overflow-hidden py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-consulting-primary/5 via-transparent to-consulting-accent/5"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-consulting-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-consulting-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-consulting-text mb-8 leading-tight">
            <span className="gradient-text">{title}</span>
          </h1>
          <p className="text-xl text-consulting-text-muted max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className="relative animate-fade-in">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-12">
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                disabled={items.length <= 3}
                className="glass-card text-consulting-text hover:text-consulting-accent border-consulting-border hover:border-consulting-accent/50 disabled:opacity-30 transition-all duration-300 hover:scale-105"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                disabled={items.length <= 3}
                className="glass-card text-consulting-text hover:text-consulting-accent border-consulting-border hover:border-consulting-accent/50 disabled:opacity-30 transition-all duration-300 hover:scale-105"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="text-consulting-text-muted text-sm font-medium">
              {currentIndex + 1} - {Math.min(currentIndex + 3, items.length)} of {items.length}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="group glass-card hover-lift border-consulting-border hover:border-consulting-accent/30 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-56 object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-consulting-dark/80 via-consulting-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 rounded-full bg-consulting-accent/20 backdrop-blur-sm flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-consulting-accent" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-consulting-text mb-4 line-clamp-2 group-hover:text-consulting-accent transition-colors duration-300 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-consulting-text-muted text-sm leading-relaxed mb-8 line-clamp-3">
                      {item.description}
                    </p>
                    
                    <Link to={item.href} className="animated-underline">
                      <Button 
                        variant="ghost" 
                        className="text-consulting-accent hover:text-consulting-accent hover:bg-consulting-accent/10 p-0 h-auto font-semibold group/btn transition-all duration-300"
                      >
                        Learn More 
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Indicators */}
          {items.length > 3 && (
            <div className="flex justify-center mt-12 gap-3">
              {Array.from({ length: Math.max(1, items.length - 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 hover:scale-110 ${
                    index === currentIndex
                      ? "bg-consulting-accent w-8 shadow-accent-glow"
                      : "bg-consulting-border w-2 hover:bg-consulting-border-light"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}