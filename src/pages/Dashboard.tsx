import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown, 
  Wallet, 
  BarChart3, 
  PieChart,
  Activity,
  DollarSign,
  Target
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RechartsPieChart, Cell } from "recharts";

const Dashboard = () => {
  // Mock portfolio data
  const portfolioData = [
    { name: "Jan", value: 25000 },
    { name: "Feb", value: 28000 },
    { name: "Mar", value: 32000 },
    { name: "Apr", value: 29000 },
    { name: "May", value: 35000 },
    { name: "Jun", value: 38000 },
  ];

  const assetAllocation = [
    { name: "Copper", value: 45, color: "#3B82F6" },
    { name: "Wheat", value: 30, color: "#F59E0B" },
    { name: "Gold", value: 15, color: "#EF4444" },
    { name: "Silver", value: 10, color: "#8B5CF6" },
  ];

  const holdings = [
    {
      symbol: "CU-A",
      name: "Copper Grade A",
      tokens: 150,
      value: 14775,
      change: 2.45,
      allocation: 38.5,
    },
    {
      symbol: "WHEAT-W",
      name: "Winter Wheat",
      tokens: 75,
      value: 21375,
      change: -1.2,
      allocation: 55.7,
    },
    {
      symbol: "CU-B",
      name: "Copper Grade B", 
      tokens: 25,
      value: 2300,
      change: 1.8,
      allocation: 6.0,
    },
  ];

  const recentTransactions = [
    {
      type: "buy",
      symbol: "CU-A",
      amount: 50,
      price: 9850,
      time: "2 hours ago",
    },
    {
      type: "sell",
      symbol: "WHEAT-W",
      amount: 25,
      price: 285,
      time: "1 day ago",
    },
    {
      type: "buy",
      symbol: "CU-B",
      amount: 25,
      price: 9200,
      time: "2 days ago",
    },
  ];

  const totalPortfolioValue = holdings.reduce((sum, holding) => sum + holding.value, 0);
  const totalPnL = 2847; // Mock P&L
  const totalPnLPercent = 8.2;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Portfolio Dashboard</h1>
            <p className="text-lg text-muted-foreground">
              Track your tokenized commodity investments
            </p>
          </div>

          {/* Portfolio Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wallet className="h-5 w-5 mr-2" />
                  Total Portfolio Value
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline space-x-3">
                  <span className="text-3xl font-bold">${totalPortfolioValue.toLocaleString()}</span>
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 text-success mr-1" />
                    <span className="text-success font-medium">
                      +${totalPnL.toLocaleString()} ({totalPnLPercent}%)
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  All-time performance
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="h-5 w-5 mr-2" />
                  24h Change
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <TrendingUp className="h-4 w-4 text-success mr-1" />
                  <span className="text-xl font-bold text-success">+$1,247</span>
                </div>
                <p className="text-sm text-muted-foreground">+3.2%</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Active Positions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <span className="text-2xl font-bold">{holdings.length}</span>
                <p className="text-sm text-muted-foreground">Diversified assets</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Portfolio Performance Chart */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Portfolio Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={portfolioData}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip 
                        formatter={(value) => [`$${value.toLocaleString()}`, "Portfolio Value"]}
                        labelFormatter={(label) => `Month: ${label}`}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={3}
                        dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Asset Allocation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="h-5 w-5 mr-2" />
                  Asset Allocation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <RechartsPieChart data={assetAllocation} cx="50%" cy="50%" outerRadius={80} dataKey="value">
                        {assetAllocation.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </RechartsPieChart>
                      <Tooltip formatter={(value) => [`${value}%`, "Allocation"]} />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-2 mt-4">
                  {assetAllocation.map((asset, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-full mr-2" 
                          style={{ backgroundColor: asset.color }}
                        />
                        <span className="text-sm">{asset.name}</span>
                      </div>
                      <span className="text-sm font-medium">{asset.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Current Holdings */}
            <Card>
              <CardHeader>
                <CardTitle>Current Holdings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {holdings.map((holding, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div>
                        <p className="font-medium">{holding.symbol}</p>
                        <p className="text-sm text-muted-foreground">{holding.name}</p>
                        <p className="text-sm">
                          {holding.tokens} tokens • {holding.allocation}% of portfolio
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${holding.value.toLocaleString()}</p>
                        <div className="flex items-center">
                          {holding.change >= 0 ? (
                            <TrendingUp className="h-3 w-3 text-success mr-1" />
                          ) : (
                            <TrendingDown className="h-3 w-3 text-destructive mr-1" />
                          )}
                          <span className={`text-sm ${holding.change >= 0 ? 'text-success' : 'text-destructive'}`}>
                            {holding.change >= 0 ? '+' : ''}{holding.change}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Transactions */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.map((tx, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Badge variant={tx.type === 'buy' ? 'default' : 'destructive'}>
                          {tx.type.toUpperCase()}
                        </Badge>
                        <div>
                          <p className="font-medium">{tx.symbol}</p>
                          <p className="text-sm text-muted-foreground">{tx.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{tx.amount} tokens</p>
                        <p className="text-sm text-muted-foreground">
                          @ ${tx.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Transactions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;