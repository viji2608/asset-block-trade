import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, MapPin, Calendar } from "lucide-react";

interface CommodityCardProps {
  id: string;
  name: string;
  symbol: string;
  icon: string;
  price: number;
  change24h: number;
  totalValue: number;
  availableTokens: number;
  totalTokens: number;
  location: string;
  lastUpdated: string;
  grade: string;
  onTrade: (id: string) => void;
}

const CommodityCard = ({
  id,
  name,
  symbol,
  icon,
  price,
  change24h,
  totalValue,
  availableTokens,
  totalTokens,
  location,
  lastUpdated,
  grade,
  onTrade,
}: CommodityCardProps) => {
  const isPositive = change24h >= 0;
  const progressPercentage = ((totalTokens - availableTokens) / totalTokens) * 100;

  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-border bg-card">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <img src={icon} alt={name} className="w-12 h-12 rounded-lg" />
            <div>
              <CardTitle className="text-lg font-semibold">{name}</CardTitle>
              <p className="text-sm text-muted-foreground">{symbol}</p>
            </div>
          </div>
          <Badge variant={grade === "Premium" ? "default" : "secondary"}>
            {grade}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold">${price.toLocaleString()}</p>
            <div className="flex items-center space-x-1">
              {isPositive ? (
                <TrendingUp className="h-4 w-4 text-success" />
              ) : (
                <TrendingDown className="h-4 w-4 text-destructive" />
              )}
              <span
                className={`text-sm font-medium ${
                  isPositive ? "text-success" : "text-destructive"
                }`}
              >
                {isPositive ? "+" : ""}{change24h.toFixed(2)}%
              </span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Total Value</p>
            <p className="text-lg font-semibold">${totalValue.toLocaleString()}</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Available Tokens</span>
            <span className="font-medium">
              {availableTokens.toLocaleString()} / {totalTokens.toLocaleString()}
            </span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div
              className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(progressPercentage, 100)}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{lastUpdated}</span>
          </div>
        </div>

        <Button
          onClick={() => onTrade(id)}
          variant="premium"
          className="w-full"
        >
          Trade Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default CommodityCard;