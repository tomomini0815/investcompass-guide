import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Check } from "lucide-react";

interface RankingCardProps {
  rank: number;
  name: string;
  logo?: string;
  features: string[];
  // 証券会社用プロパティ
  commission?: string;
  minInvestment?: string;
  nisaSupport?: boolean;
  ipoCount?: number;
  foreignStocks?: boolean;
  points?: string;
  // FX業者用プロパティ
  spread?: string;
  minTradeUnit?: string;
  currencyPairs?: number;
  swapPoints?: string;
  scalping?: string;
  // 暗号資産取引所用プロパティ
  tradingFee?: string;
  withdrawalFee?: string;
  supportedCoins?: number;
  security?: string;
  // 共通プロパティ
  rating?: number;
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
  ipoCount,
  foreignStocks,
  points,
  spread,
  minTradeUnit,
  currencyPairs,
  swapPoints,
  scalping,
  tradingFee,
  withdrawalFee,
  supportedCoins,
  security,
  rating,
  highlight,
  affiliateUrl,
}: RankingCardProps) => {
  const rankColors = {
    1: "gradient-primary text-white",
    2: "bg-secondary text-secondary-foreground",
    3: "bg-accent/20 text-accent",
  };

  const rankClass = rankColors[rank as keyof typeof rankColors] || "bg-muted";

  // 表示する項目を決定
  let firstItemLabel = "";
  let firstItemValue = "";
  let secondItemLabel = "";
  let secondItemValue = "";

  // 証券会社の場合
  if (commission !== undefined && minInvestment !== undefined) {
    firstItemLabel = "手数料";
    firstItemValue = commission;
    secondItemLabel = "最低購入株数";
    secondItemValue = minInvestment;
  }
  // FX業者の場合
  else if (spread !== undefined && minTradeUnit !== undefined) {
    firstItemLabel = "スプレッド";
    firstItemValue = spread;
    secondItemLabel = "最低取引単位";
    secondItemValue = minTradeUnit;
  }
  // 暗号資産取引所の場合
  else if (tradingFee !== undefined && withdrawalFee !== undefined) {
    firstItemLabel = "取引手数料";
    firstItemValue = tradingFee;
    secondItemLabel = "入出金手数料";
    secondItemValue = withdrawalFee;
  }

  return (
    <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
            <p className="text-muted-foreground mb-1">{firstItemLabel}</p>
            <p className="font-semibold">{firstItemValue}</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1">{secondItemLabel}</p>
            <p className="font-semibold whitespace-pre-line">{secondItemValue}</p>
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

        {nisaSupport !== undefined && nisaSupport && (
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