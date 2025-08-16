import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3, 
  Users,
  ArrowRight,
  CheckCircle,
  Sparkles
} from "lucide-react";
import heroImage from "@/assets/hero-commodities.jpg";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Asset-backed tokens secured by smart contracts and verified commodity batches",
    },
    {
      icon: Zap,
      title: "AI-Powered Insights",
      description: "Advanced ML models for demand forecasting, quality grading, and market sentiment analysis",
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Trade verified commodities from suppliers worldwide with transparent settlement",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Live market data, portfolio tracking, and automated revenue distribution",
    },
  ];

  const stats = [
    { label: "Total Assets Tokenized", value: "$5.14B", change: "+12.5%" },
    { label: "Active Traders", value: "28,943", change: "+156 today" },
    { label: "Commodities Available", value: "1,247", change: "+15 today" },
    { label: "Global Suppliers", value: "847", change: "+23 this week" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="text-accent border-accent">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Democratizing Commodity Markets
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Trade Real-World
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {" "}Assets{" "}
                  </span>
                  on Blockchain
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Fractional ownership of verified commodities like metals, grains, and raw materials. 
                  Powered by AI insights and automated smart contracts.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="premium" size="lg" asChild>
                  <Link to="/marketplace">
                    Explore Marketplace
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/dashboard">
                    View Dashboard
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-success mr-2" />
                  Verified Assets
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-success mr-2" />
                  AI-Powered
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-success mr-2" />
                  Global Access
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Commodity Trading Platform" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-success" />
                  <div>
                    <p className="text-sm font-medium">Live Trading</p>
                    <p className="text-xs text-muted-foreground">24/7 Markets</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm font-medium">28.9k+</p>
                    <p className="text-xs text-muted-foreground">Active Traders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-3xl font-bold text-foreground mb-2">{stat.value}</h3>
                <p className="text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-sm text-success">{stat.change}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Revolutionizing Commodity Trading
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform combines blockchain technology, AI insights, and global supply chains 
              to make commodity investing accessible to everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-border">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Trading?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of traders already investing in tokenized commodities. 
            Start with verified assets and AI-powered insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/marketplace">
                Start Trading Now
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
