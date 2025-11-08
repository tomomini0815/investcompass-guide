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

interface FXCompany {
  name: string;
  spread: string;
  minInvestment: string;
  currencyPairs: string;
  swapPoint: boolean;
  scalping: boolean;
  rating: number;
  affiliateUrl: string;
  isDomestic: boolean;
  features: string; // 各FX業者の特徴を追加
}

const FXComparisonTable = () => {
  const [sortBy, setSortBy] = useState<keyof FXCompany | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [showDomestic, setShowDomestic] = useState<boolean>(true);

  const companies: FXCompany[] = [
    // 国内FX業者（人気ランキング順）
    {
      name: "GMOクリック証券",
      spread: "0.2銭",
      minInvestment: "1,000通貨",
      currencyPairs: "30種類（ラージ銘柄含む）",
      swapPoint: true,
      scalping: true,
      rating: 5,
      affiliateUrl: "https://click.gmo-jp.com/",
      isDomestic: true,
      features: "GMOグループ傘下で信頼性が高く、スプレッドが非常に狭い。スキャルピングも可能で、初心者から上級者まで利用可能。",
    },
    {
      name: "DMMfx",
      spread: "0.3銭",
      minInvestment: "1,000通貨",
      currencyPairs: "34種類",
      swapPoint: true,
      scalping: true,
      rating: 4,
      affiliateUrl: "https://fx.dmm.com/",
      isDomestic: true,
      features: "DMMグループ傘下のFX業者。スプレッドが適度に狭く、スキャルピングも可能。独自の取引ツール「DMM FX Viewer」が特徴。",
    },
    {
      name: "みんなのFX",
      spread: "0.2銭",
      minInvestment: "1,000通貨",
      currencyPairs: "51種類",
      swapPoint: true,
      scalping: false,
      rating: 4,
      affiliateUrl: "https://fx.gmo-jp.com/",
      isDomestic: true,
      features: "GMOクリック証券の姉妹サービス。通貨ペア数が多く、スワップポイントも充実。スキャルピングは不可。",
    },
    {
      name: "外為どっとコム",
      spread: "0.2銭",
      minInvestment: "1,000通貨",
      currencyPairs: "30種類",
      swapPoint: false,
      scalping: true,
      rating: 4,
      affiliateUrl: "https://www.gaitame.com/",
      isDomestic: true,
      features: "業界最大手の老舗FX業者。スキャルピングが可能で、取引ツールが充実。スワップポイントは提供していない。",
    },
    {
      name: "ヒロセ通商",
      spread: "0.2銭",
      minInvestment: "1,000通貨",
      currencyPairs: "54種類",
      swapPoint: false,
      scalping: true,
      rating: 4,
      affiliateUrl: "https://www.hirose-fx.co.jp/",
      isDomestic: true,
      features: "通貨ペア数が非常に多く、スキャルピングも可能。独自の取引ツール「ヒロセ君」が特徴。スワップポイントは提供していない。",
    },
    {
      name: "LIGHT FX",
      spread: "0.2銭",
      minInvestment: "1,000通貨",
      currencyPairs: "51種類",
      swapPoint: true,
      scalping: false,
      rating: 4,
      affiliateUrl: "https://light-fx.jp/",
      isDomestic: true,
      features: "スワップポイントが非常に高く、長期保有向き。通貨ペア数も多く、初心者に人気。スキャルピングは不可。",
    },
    // 海外FX業者（人気ランキング順）
    {
      name: "Interactive Brokers",
      spread: "$0.5/100株",
      minInvestment: "$0",
      currencyPairs: "80種類以上",
      swapPoint: true,
      scalping: true,
      rating: 5,
      affiliateUrl: "https://www.interactivebrokers.com/",
      isDomestic: false,
      features: "世界中の市場にアクセス可能で、手数料が非常に安い。プロ向けの高度な取引ツールを提供。スキャルピングも可能。",
    },
    {
      name: "IG証券",
      spread: "取引画面で確認",
      minInvestment: "1万通貨",
      currencyPairs: "約100種類",
      swapPoint: true,
      scalping: true,
      rating: 4,
      affiliateUrl: "https://www.ig.com/jp",
      isDomestic: false,
      features: "日本語対応が充実し、初心者にも使いやすい。通貨ペア数が多く、スキャルピングも可能。教育コンテンツも豊富。",
    },
    {
      name: "XM",
      spread: "0.0 pips",
      minInvestment: "$5",
      currencyPairs: "50種類以上",
      swapPoint: true,
      scalping: true,
      rating: 4,
      affiliateUrl: "https://www.xm.com/",
      isDomestic: false,
      features: "ゼロスプレッドプランが人気。最低取引単位が小さく、初心者にも使いやすい。スキャルピングも可能。",
    },
    {
      name: "Pepperstone",
      spread: "0.0 pips",
      minInvestment: "$200",
      currencyPairs: "60種類以上",
      swapPoint: true,
      scalping: true,
      rating: 4,
      affiliateUrl: "https://pepperstone.com/",
      isDomestic: false,
      features: "オーストラリアのFX業者で、信頼性が高い。スキャルピングが可能で、取引ツールが充実。教育コンテンツも豊富。",
    },
    {
      name: "OANDA",
      spread: "0.0 pips",
      minInvestment: "$0",
      currencyPairs: "70種類以上",
      swapPoint: true,
      scalping: true,
      rating: 4,
      affiliateUrl: "https://www.oanda.com/",
      isDomestic: false,
      features: "信頼性が高く、初心者から上級者まで利用可能。通貨ペア数が多く、スキャルピングも可能。教育コンテンツも充実。",
    },
  ];

  // 表示するFX業者をフィルタリング
  const filteredCompanies = companies.filter(company => 
    showDomestic ? company.isDomestic : !company.isDomestic
  );

  const handleSort = (key: keyof FXCompany) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };

  const sortedCompanies = [...filteredCompanies].sort((a, b) => {
    if (!sortBy) {
      // デフォルトでは評価順にソート
      if (b.rating !== a.rating) {
        return b.rating - a.rating;
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
  const MobileCompanyCard = ({ company }: { company: FXCompany }) => (
    <Card className="mb-4 shadow-md border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold flex justify-between items-center">
          <span>{company.name}</span>
          <Badge variant="secondary" className="text-xs">
            {company.currencyPairs}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-muted-foreground text-xs">スプレッド</p>
            <p className="font-semibold">{company.spread}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs">最低取引単位</p>
            <p className="font-semibold">{company.minInvestment}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-xs">スワップポイント</span>
            {company.swapPoint ? (
              <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100">
                <Check className="h-3 w-3 text-green-600" />
              </div>
            ) : (
              <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-100">
                <X className="h-3 w-3 text-red-600" />
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-xs">スキャルピング</span>
            {company.scalping ? (
              <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100">
                <Check className="h-3 w-3 text-green-600" />
              </div>
            ) : (
              <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-100">
                <X className="h-3 w-3 text-red-600" />
              </div>
            )}
          </div>
        </div>
        
        <div>
          <p className="text-muted-foreground text-xs mb-1">評価</p>
          <RatingStars rating={company.rating} />
        </div>
        
        {/* 特徴を追加 */}
        <div>
          <p className="text-muted-foreground text-xs mb-1">特徴</p>
          <p className="text-sm">{company.features}</p>
        </div>
        
        <Button 
          size="sm" 
          className="w-full text-xs py-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-md hover:shadow-lg transition-all duration-300"
          asChild
        >
          <a 
            href={company.affiliateUrl} 
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
        <CardTitle className="text-xl sm:text-2xl font-bold text-center">FX業者詳細比較表</CardTitle>
        <p className="text-sm text-muted-foreground text-center mt-4">
          各FX業者のスプレッド、最低取引単位、通貨ペア数、スワップポイント、スキャルピング可否、評価などの情報を比較できます
        </p>
        {/* 国内/国外切り替えボタン */}
        <div className="flex justify-center mt-8 space-x-4">
          <Button 
            variant={showDomestic ? "default" : "outline"} 
            onClick={() => setShowDomestic(true)}
            className="px-6 py-2"
          >
            国内FX業者
          </Button>
          <Button 
            variant={!showDomestic ? "default" : "outline"} 
            onClick={() => setShowDomestic(false)}
            className="px-6 py-2"
          >
            海外FX業者
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {/* モバイル向け表示 - 768px未満で表示 */}
        <div className="md:hidden px-4 py-2">
          {sortedCompanies.map((company) => (
            <MobileCompanyCard key={company.name} company={company} />
          ))}
        </div>
        
        {/* デスクトップ向け表示 - 768px以上で表示 */}
        <div className="hidden md:block">
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="inline-block min-w-full align-middle px-4 sm:px-6">
              <Table className="min-w-[700px]">
                <TableHeader>
                  <TableRow className="hover:bg-muted/50 border-b-2 border-primary/20">
                    <TableHead className="min-w-[120px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap">FX業者</TableHead>
                    <TableHead className="min-w-[80px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap">スプレッド</TableHead>
                    <TableHead className="min-w-[90px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap">最低取引単位</TableHead>
                    <TableHead className="min-w-[120px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap">通貨ペア</TableHead>
                    <TableHead className="text-center min-w-[60px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap">スワップポイント</TableHead>
                    <TableHead className="text-center min-w-[60px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap">スキャルピング</TableHead>
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
                  {sortedCompanies.map((company) => (
                    <TableRow 
                      key={company.name} 
                      className="hover:bg-primary/5 transition-colors duration-200 border-b border-muted"
                    >
                      <TableCell className="font-semibold text-xs sm:text-sm py-3">{company.name}</TableCell>
                      <TableCell className="text-xs sm:text-sm py-3">{company.spread}</TableCell>
                      <TableCell className="text-xs sm:text-sm py-3">{company.minInvestment}</TableCell>
                      <TableCell className="text-xs sm:text-sm py-3">{company.currencyPairs}</TableCell>
                      <TableCell className="text-center py-3">
                        {company.swapPoint ? (
                          <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                            <Check className="h-4 w-4 text-green-600" />
                          </div>
                        ) : (
                          <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100">
                            <X className="h-4 w-4 text-red-600" />
                          </div>
                        )}
                      </TableCell>
                      <TableCell className="text-center py-3">
                        {company.scalping ? (
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
                        <RatingStars rating={company.rating} />
                      </TableCell>
                      <TableCell className="text-xs sm:text-sm py-3 break-words">{company.features}</TableCell>
                      <TableCell className="text-center py-3">
                        <Button 
                          size="sm" 
                          className="whitespace-nowrap text-xs px-3 py-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-md hover:shadow-lg transition-all duration-300 min-w-[100px]"
                          asChild
                        >
                          <a 
                            href={company.affiliateUrl} 
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

export default FXComparisonTable;