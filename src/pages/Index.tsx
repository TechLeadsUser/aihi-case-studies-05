import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Award, TrendingUp, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-consulting-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-consulting-primary/5 via-transparent to-consulting-accent/5"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-consulting-primary/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-consulting-accent/10 to-transparent blur-3xl"></div>
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 max-w-7xl relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-consulting-accent/30 bg-consulting-accent/10 px-6 py-3 text-sm font-semibold text-consulting-accent mb-8 animate-fade-in backdrop-blur-sm">
            <Sparkles className="w-4 h-4 animate-glow" />
            Oracle Implementation Specialists
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-consulting-text mb-8 leading-tight animate-fade-in">
            Enterprise Solutions That <br />
            <span className="gradient-text animate-glow">
              Drive Results
            </span>
          </h1>
          
          <p className="text-xl text-consulting-text-muted max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in">
            AIHI delivers proven Oracle implementations, modernizations, and support services. 
            From legacy consolidation to cloud transformation, we accelerate your digital journey with measurable impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
            <Link to="/success-stories">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-consulting-primary to-consulting-primary-dark hover:from-consulting-primary-dark hover:to-consulting-primary text-white px-10 py-4 text-lg font-semibold shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                View Success Stories
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-card text-consulting-text hover:text-consulting-accent border-consulting-border hover:border-consulting-accent/50 px-10 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-20 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group text-center p-10 rounded-3xl glass-card hover-lift animate-fade-in">
            <div className="relative">
              <Building2 className="w-16 h-16 text-consulting-accent mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-consulting-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="text-4xl font-bold text-consulting-text mb-3 gradient-text">50+</div>
            <div className="text-consulting-text-muted font-medium">Enterprise Implementations</div>
          </div>
          
          <div className="group text-center p-10 rounded-3xl glass-card hover-lift animate-fade-in">
            <div className="relative">
              <TrendingUp className="w-16 h-16 text-consulting-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-consulting-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="text-4xl font-bold text-consulting-text mb-3 gradient-text">$50M+</div>
            <div className="text-consulting-text-muted font-medium">Operational Savings Delivered</div>
          </div>
          
          <div className="group text-center p-10 rounded-3xl glass-card hover-lift animate-fade-in">
            <div className="relative">
              <Award className="w-16 h-16 text-purple-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="text-4xl font-bold text-consulting-text mb-3 gradient-text">15+</div>
            <div className="text-consulting-text-muted font-medium">Years of Oracle Expertise</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
