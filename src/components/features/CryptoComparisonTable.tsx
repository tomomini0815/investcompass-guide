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
  features: string; // 各取引所の特徴を追加
}

const CryptoComparisonTable = () => {
  const [sortBy, setSortBy] = useState<keyof CryptoExchange | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [showDomestic, setShowDomestic] = useState<boolean>(true); // 国内/国外切り替えの状態

  const exchanges: CryptoExchange[] = [
    // 国内取引所（人気ランキング順）
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
      features: "日本最大手の暗号資産取引所で信頼性が高い。日本円入出金に対応し、初心者にも使いやすい。JASA認定を取得。",
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
      features: "GMOインターネットグループ傘下で安定性が高い。手数料が比較的安価で、取扱暗号資産も豊富。",
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
      features: "DMMグループ傘下の取引所。レバレッジ取引に対応しており、暗号資産の売買だけでなく多様な取引が可能。",
    },
    {
      name: "Coincheck",
      tradingFee: "0.10%",
      withdrawalFee: "0円〜",
      supportedCoins: 25,
      security: "JASA認定・コールドウォレット対応",
      japaneseSupport: true,
      rating: 4,
      affiliateUrl: "https://coincheck.com/",
      isDomestic: true,
      features: "国内で最も利用されている取引所の一つ。初心者に優しいインターフェースと、日本円入出金の便利さが特徴。",
    },
    {
      name: "ZAIF",
      tradingFee: "0.10%",
      withdrawalFee: "0円〜",
      supportedCoins: 30,
      security: "コールドウォレット対応",
      japaneseSupport: true,
      rating: 3,
      affiliateUrl: "https://zaif.jp/",
      isDomestic: true,
      features: "国内で長く運営されている取引所。取扱暗号資産数が多く、独自のポイント制度を導入。",
    },
    {
      name: "QUOINE",
      tradingFee: "0.05%",
      withdrawalFee: "0円〜",
      supportedCoins: 20,
      security: "JASA認定・コールドウォレット対応",
      japaneseSupport: true,
      rating: 4,
      affiliateUrl: "https://quoine.com/jp/",
      isDomestic: true,
      features: "世界に進出している日本の取引所。低手数料と高流動性が特徴で、プロトレーダーにも人気。",
    },
    // 国外取引所（人気ランキング順）
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
      features: "世界最大手の暗号資産取引所。取扱暗号資産が非常に多く、手数料も安価。高度な取引機能も充実。",
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
      features: "アメリカ最大手の暗号資産取引所。セキュリティ対策が手厚く、初心者に優しいインターフェース。",
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
      features: "長きにわたって運営されている老舗取引所。セキュリティ対策が手厚く、上級者向けの機能も充実。",
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
      features: "Winklevoss兄弟が設立した信頼性の高い取引所。米国で厳格な規制を満たしており、セキュリティが高い。",
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
      features: "-copy trading-機能が特徴で、他のトレーダーの取引をコピーできる。手数料が非常に安価で、多様な取引機能を提供。",
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
      features: "アジアを中心に人気の取引所。レバレッジ取引が充実しており、初心者から上級者まで利用可能。",
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
      features: "-copy trading-機能が特徴で、他のトレーダーの取引をコピーできる。手数料が安価で、多様な取引機能を提供。",
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
      // 国内取引所の場合は人気ランキング順（配列の順序を維持）
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
        
        {/* 特徴を追加 */}
        <div>
          <p className="text-muted-foreground text-xs mb-1">特徴</p>
          <p className="text-sm">{exchange.features}</p>
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
            公式サイト
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
        <p className="text-sm text-muted-foreground text-center mt-4">
          各暗号資産取引所の取引手数料、出金手数料、取扱暗号資産数、セキュリティ対策、評価などの情報を比較できます
        </p>
        {/* 国内/国外切り替えボタン */}
        <div className="flex justify-center mt-8 space-x-4">
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
              <Table className="min-w-[700px]">
                <TableHeader>
                  <TableRow className="hover:bg-muted/50 border-b-2 border-primary/20">
                    <TableHead className="min-w-[120px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap">取引所</TableHead>
                    <TableHead className="min-w-[80px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap">取引手数料</TableHead>
                    <TableHead className="min-w-[90px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap">出金手数料</TableHead>
                    <TableHead 
                      className="cursor-pointer hover:bg-muted/50 min-w-[80px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap"
                      onClick={() => handleSort("supportedCoins")}
                    >
                      <div className="flex items-center gap-1">
                        取扱暗号資産
                        {sortBy === "supportedCoins" && (
                          sortOrder === "asc" ? <ChevronUp className="h-3 w-3 sm:h-4 sm:w-4" /> : <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                        )}
                      </div>
                    </TableHead>
                    <TableHead className="min-w-[120px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap">セキュリティ</TableHead>
                    <TableHead className="text-center min-w-[60px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap">日本語対応</TableHead>
                    <TableHead 
                      className="cursor-pointer hover:bg-muted/50 min-w-[60px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap"
                      onClick={() => handleSort("rating")}
                    >
                      <div className="flex items-center gap-1">
                        評価
                        {sortBy === "rating" && (
                          sortOrder === "asc" ? <ChevronUp className="h-3 w-3 sm:h-4 sm:w-4" /> : <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                        )}
                      </div>
                    </TableHead>
                    <TableHead className="min-w-[120px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap">特徴</TableHead>
                    <TableHead className="text-center min-w-[120px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap">公式サイト</TableHead>
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
                      <TableCell className="text-xs sm:text-sm py-3 break-words">{exchange.features}</TableCell>
                      <TableCell className="text-center py-3">
                        <Button 
                          size="sm" 
                          className="whitespace-nowrap text-xs px-3 py-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-md hover:shadow-lg transition-all duration-300 min-w-[100px]"
                          asChild
                        >
                          <a 
                            href={exchange.affiliateUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            公式サイト
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