import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, ExternalLink, ChevronDown, ChevronUp, Star } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface CryptoExchange {
  name: string;
  tradingFee: string;
  withdrawalFee: string;
  supportedCoins: number;
  security: string;
  japaneseSupport: boolean;
  rating: number;
  affiliateUrl: string;
  isDomestic: boolean; // 国内取引所かどうかを示すフラグを追加
}

const CryptoComparisonTable = () => {
  const [sortBy, setSortBy] = useState<keyof CryptoExchange | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [showDomestic, setShowDomestic] = useState<boolean>(true); // 国内/国外切り替えの状態

  const exchanges: CryptoExchange[] = [
    {
      name: "bitFlyer",
      tradingFee: "0.12%",
      withdrawalFee: "0円〜",
      supportedCoins: 20,
      security: "JASA認定・コールドウォレット対応",
      japaneseSupport: true,
      rating: 5,
      affiliateUrl: "https://bitflyer.com/",
      isDomestic: true,
    },
    {
      name: "GMOコイン",
      tradingFee: "0.10%",
      withdrawalFee: "0円〜",
      supportedCoins: 35,
      security: "JASA認定・コールドウォレット98%保管",
      japaneseSupport: true,
      rating: 5,
      affiliateUrl: "https://coin.z.com/jp/",
      isDomestic: true,
    },
    {
      name: "DMM Bitcoin",
      tradingFee: "0.15%",
      withdrawalFee: "0円〜",
      supportedCoins: 15,
      security: "JASA認定・コールドウォレット95%保管",
      japaneseSupport: true,
      rating: 4,
      affiliateUrl: "https://bitcoin.dmm.com/",
      isDomestic: true,
    },
    {
      name: "Coinbase",
      tradingFee: "0.50%",
      withdrawalFee: "$10〜",
      supportedCoins: 200,
      security: "コールドウォレット対応・$2.55億保険",
      japaneseSupport: true,
      rating: 4,
      affiliateUrl: "https://www.coinbase.com/",
      isDomestic: false,
    },
    {
      name: "Binance",
      tradingFee: "0.10%",
      withdrawalFee: "0.0005〜",
      supportedCoins: 400,
      security: "コールドウォレット対応・SAFU基金",
      japaneseSupport: true,
      rating: 4,
      affiliateUrl: "https://www.binance.com/",
      isDomestic: false,
    },
    {
      name: "Kraken",
      tradingFee: "0.26%",
      withdrawalFee: "$5〜",
      supportedCoins: 250,
      security: "コールドウォレット対応・保険対応",
      japaneseSupport: false,
      rating: 4,
      affiliateUrl: "https://www.kraken.com/",
      isDomestic: false,
    },
    {
      name: "Gemini",
      tradingFee: "0.40%",
      withdrawalFee: "$5〜",
      supportedCoins: 80,
      security: "コールドウォレット対応・保険対応",
      japaneseSupport: false,
      rating: 4,
      affiliateUrl: "https://www.gemini.com/",
      isDomestic: false,
    },
    {
      name: "FTX",
      tradingFee: "0.07%",
      withdrawalFee: "$5〜",
      supportedCoins: 200,
      security: "コールドウォレット対応",
      japaneseSupport: false,
      rating: 3,
      affiliateUrl: "https://ftx.com/",
      isDomestic: false,
    },
    {
      name: "Bybit",
      tradingFee: "0.10%",
      withdrawalFee: "0.0005〜",
      supportedCoins: 300,
      security: "コールドウォレット対応・保険対応",
      japaneseSupport: true,
      rating: 4,
      affiliateUrl: "https://www.bybit.com/",
      isDomestic: false,
    },
    {
      name: "Bitget",
      tradingFee: "0.10%",
      withdrawalFee: "0.0005〜",
      supportedCoins: 250,
      security: "コールドウォレット対応",
      japaneseSupport: true,
      rating: 4,
      affiliateUrl: "https://www.bitget.com/",
      isDomestic: false,
    },
  ];

  // 表示する取引所をフィルタリング
  const filteredExchanges = exchanges.filter(exchange => 
    showDomestic ? exchange.isDomestic : !exchange.isDomestic
  );

  const handleSort = (key: keyof CryptoExchange) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };

  const sortedExchanges = [...filteredExchanges].sort((a, b) => {
    if (!sortBy) {
      // デフォルトでは国外取引所の場合評価順にソート
      if (!showDomestic) {
        if (b.rating !== a.rating) {
          return b.rating - a.rating;
        }
        // 評価が同じ場合は取扱暗号資産数でソート
        return b.supportedCoins - a.supportedCoins;
      }
      return 0;
    }
    
    const aValue = a[sortBy];
    const bValue = b[sortBy];
    
    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
    }
    
    return 0;
  });

  // 評価を星アイコンで表示するコンポーネント
  const RatingStars = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );

  // モバイル向けカードコンポーネント
  const MobileExchangeCard = ({ exchange }: { exchange: CryptoExchange }) => (
    <Card className="mb-4 shadow-md border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold flex justify-between items-center">
          <span>{exchange.name}</span>
          <Badge variant="secondary" className="text-xs">
            {exchange.supportedCoins}種対応
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-muted-foreground text-xs">取引手数料</p>
            <p className="font-semibold">{exchange.tradingFee}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs">出金手数料</p>
            <p className="font-semibold">{exchange.withdrawalFee}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-xs">日本語対応</span>
            {exchange.japaneseSupport ? (
              <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100">
                <Check className="h-3 w-3 text-green-600" />
              </div>
            ) : (
              <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-100">
                <X className="h-3 w-3 text-red-600" />
              </div>
            )}
          </div>
          <div>
            <p className="text-muted-foreground text-xs">セキュリティ</p>
            <p className="text-xs">{exchange.security}</p>
          </div>
        </div>
        
        <div>
          <p className="text-muted-foreground text-xs mb-1">評価</p>
          <RatingStars rating={exchange.rating} />
        </div>
        
        <Button 
          size="sm" 
          className="w-full text-xs py-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-md hover:shadow-lg transition-all duration-300"
          asChild
        >
          <a 
            href={exchange.affiliateUrl} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            詳細を見る
            <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <CardHeader className="px-4 sm:px-6 pb-4">
        <CardTitle className="text-xl sm:text-2xl font-bold text-center">暗号資産取引所詳細比較表</CardTitle>
        {/* 国内/国外切り替えボタン */}
        <div className="flex justify-center mt-4 space-x-4">
          <Button 
            variant={showDomestic ? "default" : "outline"} 
            onClick={() => setShowDomestic(true)}
            className="px-6 py-2"
          >
            国内取引所
          </Button>
          <Button 
            variant={!showDomestic ? "default" : "outline"} 
            onClick={() => setShowDomestic(false)}
            className="px-6 py-2"
          >
            国外取引所
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {/* モバイル向け表示 - 768px未満で表示 */}
        <div className="md:hidden px-4 py-2">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-center mb-2">
              {showDomestic ? "国内" : "国外"}暗号資産取引所詳細比較
            </h3>
            <p className="text-sm text-muted-foreground text-center">
              各{showDomestic ? "国内" : "国外"}暗号資産取引所の詳細情報を比較できます
            </p>
          </div>
          {sortedExchanges.map((exchange) => (
            <MobileExchangeCard key={exchange.name} exchange={exchange} />
          ))}
        </div>
        
        {/* デスクトップ向け表示 - 768px以上で表示 */}
        <div className="hidden md:block">
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="inline-block min-w-full align-middle px-4 sm:px-6">
              <Table className="min-w-[800px]">
                <TableHeader>
                  <TableRow className="hover:bg-muted/50 border-b-2 border-primary/20">
                    <TableHead className="min-w-[140px] sm:min-w-[180px] text-xs sm:text-sm font-bold text-primary">取引所</TableHead>
                    <TableHead className="min-w-[80px] sm:min-w-[100px] text-xs sm:text-sm font-bold text-primary">取引手数料</TableHead>
                    <TableHead className="min-w-[90px] sm:min-w-[110px] text-xs sm:text-sm font-bold text-primary">出金手数料</TableHead>
                    <TableHead 
                      className="cursor-pointer hover:bg-muted/50 min-w-[90px] sm:min-w-[110px] text-xs sm:text-sm font-bold text-primary"
                      onClick={() => handleSort("supportedCoins")}
                    >
                      <div className="flex items-center gap-1">
                        取扱暗号資産
                        {sortBy === "supportedCoins" && (
                          sortOrder === "asc" ? <ChevronUp className="h-3 w-3 sm:h-4 sm:w-4" /> : <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                        )}
                      </div>
                    </TableHead>
                    <TableHead className="min-w-[120px] sm:min-w-[140px] text-xs sm:text-sm font-bold text-primary">セキュリティ</TableHead>
                    <TableHead className="text-center min-w-[90px] sm:min-w-[110px] text-xs sm:text-sm font-bold text-primary">日本語対応</TableHead>
                    <TableHead 
                      className="cursor-pointer hover:bg-muted/50 min-w-[70px] sm:min-w-[80px] text-xs sm:text-sm font-bold text-primary"
                      onClick={() => handleSort("rating")}
                    >
                      <div className="flex items-center gap-1">
                        評価
                        {sortBy === "rating" && (
                          sortOrder === "asc" ? <ChevronUp className="h-3 w-3 sm:h-4 sm:w-4" /> : <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                        )}
                      </div>
                    </TableHead>
                    <TableHead className="text-center min-w-[100px] sm:min-w-[120px] text-xs sm:text-sm font-bold text-primary">口座開設</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedExchanges.map((exchange) => (
                    <TableRow 
                      key={exchange.name} 
                      className="hover:bg-primary/5 transition-colors duration-200 border-b border-muted"
                    >
                      <TableCell className="font-semibold text-xs sm:text-sm py-3">{exchange.name}</TableCell>
                      <TableCell className="text-xs sm:text-sm py-3">{exchange.tradingFee}</TableCell>
                      <TableCell className="text-xs sm:text-sm py-3">{exchange.withdrawalFee}</TableCell>
                      <TableCell className="text-center py-3">
                        <Badge variant="secondary" className="text-xs px-2 py-1">
                          {exchange.supportedCoins}種対応
                        </Badge>
                      </TableCell>
                      <TableCell className="text-xs sm:text-sm py-3 break-words max-w-xs">{exchange.security}</TableCell>
                      <TableCell className="text-center py-3">
                        {exchange.japaneseSupport ? (
                          <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                            <Check className="h-4 w-4 text-green-600" />
                          </div>
                        ) : (
                          <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100">
                            <X className="h-4 w-4 text-red-600" />
                          </div>
                        )}
                      </TableCell>
                      <TableCell className="py-3">
                        <RatingStars rating={exchange.rating} />
                      </TableCell>
                      <TableCell className="text-center py-3">
                        <Button 
                          size="sm" 
                          className="whitespace-nowrap text-xs px-3 py-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-md hover:shadow-lg transition-all duration-300"
                          asChild
                        >
                          <a 
                            href={exchange.affiliateUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <span className="hidden sm:inline">詳細を見る</span>
                            <span className="sm:hidden">詳細</span>
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4 px-4 sm:hidden">
            ← 横にスクロールして全項目を確認できます →
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CryptoComparisonTable;