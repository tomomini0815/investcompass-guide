import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Check } from "lucide-react";

interface RankingCardProps {
  rank: number;
  name: string;
  logo?: string;
  features: string[];
  commission: string;
  minInvestment: string;
  nisaSupport: boolean;
  highlight?: string;
  affiliateUrl: string;
}

const RankingCard = ({
  rank,
  name,
  features,
  commission,
  minInvestment,
  nisaSupport,
  highlight,
  affiliateUrl,
}: RankingCardProps) => {
  const rankColors = {
    1: "gradient-primary text-white",
    2: "bg-secondary text-secondary-foreground",
    3: "bg-accent/20 text-accent",
  };

  const rankClass = rankColors[rank as keyof typeof rankColors] || "bg-muted";

  return (
    <Card className="hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="relative pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-full ${rankClass} flex items-center justify-center font-bold text-lg`}>
              {rank}
            </div>
            <div>
              <h3 className="font-bold text-xl">{name}</h3>
              {highlight && (
                <Badge variant="secondary" className="mt-1">
                  {highlight}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground mb-1">手数料</p>
            <p className="font-semibold">{commission}</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1">最低投資額</p>
            <p className="font-semibold">{minInvestment}</p>
          </div>
        </div>

        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2 text-sm">
              <Check className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {nisaSupport && (
          <Badge variant="outline" className="border-secondary text-secondary">
            NISA・つみたてNISA対応
          </Badge>
        )}

        <Button 
          className="w-full" 
          size="lg"
          asChild
        >
          <a 
            href={affiliateUrl} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            口座開設はこちら
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default RankingCard;
