import { useState } from "react";
import Navbar from "@/components/Navbar";
import CommodityCard from "@/components/CommodityCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, TrendingUp, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import copperIcon from "@/assets/copper-icon.png";
import wheatIcon from "@/assets/wheat-icon.png";

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("price");
  const [filterBy, setFilterBy] = useState("all");

  // Mock data for commodities
  const commodities = [
    {
      id: "copper-batch-001",
      name: "Copper Grade A",
      symbol: "CU-A",
      icon: copperIcon,
      price: 9850,
      change24h: 2.45,
      totalValue: 2450000,
      availableTokens: 1250,
      totalTokens: 2500,
      location: "Chile",
      lastUpdated: "2 hours ago",
      grade: "Premium",
    },
    {
      id: "wheat-batch-001",
      name: "Winter Wheat",
      symbol: "WHEAT-W",
      icon: wheatIcon,
      price: 285,
      change24h: -1.2,
      totalValue: 850000,
      availableTokens: 890,
      totalTokens: 3000,
      location: "Kansas, USA",
      lastUpdated: "1 hour ago",
      grade: "Standard",
    },
    {
      id: "copper-batch-002",
      name: "Copper Grade B",
      symbol: "CU-B",
      icon: copperIcon,
      price: 9200,
      change24h: 1.8,
      totalValue: 1840000,
      availableTokens: 500,
      totalTokens: 2000,
      location: "Peru",
      lastUpdated: "3 hours ago",
      grade: "Standard",
    },
  ];

  const handleTrade = (commodityId: string) => {
    console.log("Trading commodity:", commodityId);
    // Navigate to trading interface
  };

  const filteredCommodities = commodities.filter((commodity) => {
    const matchesSearch = commodity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         commodity.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterBy === "all" || 
                         (filterBy === "metals" && commodity.symbol.startsWith("CU")) ||
                         (filterBy === "grains" && commodity.symbol.startsWith("WHEAT"));
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  Commodity Marketplace
                </h1>
                <p className="text-lg text-muted-foreground">
                  Trade tokenized real-world assets with AI-powered insights
                </p>
              </div>
              <div className="flex items-center space-x-2 mt-4 md:mt-0">
                <Badge variant="outline" className="text-success border-success">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Live Markets
                </Badge>
                <Badge variant="outline" className="text-accent border-accent">
                  <Zap className="h-3 w-3 mr-1" />
                  AI Powered
                </Badge>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 md:items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search commodities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-2">
                <Select value={filterBy} onValueChange={setFilterBy}>
                  <SelectTrigger className="w-40">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="metals">Metals</SelectItem>
                    <SelectItem value="grains">Grains</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price">Price</SelectItem>
                    <SelectItem value="change">24h Change</SelectItem>
                    <SelectItem value="volume">Volume</SelectItem>
                    <SelectItem value="availability">Availability</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Market Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Total Market Cap</h3>
              <p className="text-2xl font-bold text-foreground">$5.14B</p>
              <p className="text-sm text-success">+12.5%</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-1">24h Volume</h3>
              <p className="text-2xl font-bold text-foreground">$847M</p>
              <p className="text-sm text-success">+8.2%</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Active Assets</h3>
              <p className="text-2xl font-bold text-foreground">1,247</p>
              <p className="text-sm text-accent">+15 today</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Total Traders</h3>
              <p className="text-2xl font-bold text-foreground">28,943</p>
              <p className="text-sm text-success">+156 today</p>
            </div>
          </div>

          {/* Commodities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCommodities.map((commodity) => (
              <CommodityCard
                key={commodity.id}
                {...commodity}
                onTrade={handleTrade}
              />
            ))}
          </div>

          {filteredCommodities.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">
                No commodities found matching your criteria
              </p>
              <Button variant="outline" onClick={() => {
                setSearchTerm("");
                setFilterBy("all");
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Marketplace;