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

interface SecurityCompany {
  name: string;
  commission: string;
  minInvestment: string;
  nisaSupport: boolean;
  tsumitateNisa: boolean;
  ipoCount: number;
  foreignStocks: boolean;
  points: string;
  rating: number;
  affiliateUrl: string;
  isDomestic: boolean; // 国内証券会社かどうかを示すフラグを追加
  features: string; // 各証券会社の特徴を追加
}

const ComparisonTable = () => {
  const [sortBy, setSortBy] = useState<keyof SecurityCompany | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [showDomestic, setShowDomestic] = useState<boolean>(true); // 国内/海外切り替えの状態

  const companies: SecurityCompany[] = [
    // 国内証券会社（人気ランキング順）
    {
      name: "SBI証券",
      commission: "スタンダードプラン: 55円〜(現物取引 5万円以下) アクティブプラン: 約定代金合計100万円まで0円",
      minInvestment: "原則100株 単元未満株(「S株」)1株〜可",
      nisaSupport: true,
      tsumitateNisa: true,
      ipoCount: 80,
      foreignStocks: true,
      points: "Tポイント・Vポイントなどを連携可能",
      rating: 5,
      affiliateUrl: "https://www.sbisec.co.jp/",
      isDomestic: true,
      features: "口座数トップクラス 多彩な投資商品 IPO取扱件数が業界最多クラス",
    },
    {
      name: "楽天証券",
      commission: "超割コース: 55円〜(現物取引 5万円以下) いちにち定額コース: 0円〜",
      minInvestment: "原則100株 単元未満株(「いちかぶ」)1株〜可",
      nisaSupport: true,
      tsumitateNisa: true,
      ipoCount: 70,
      foreignStocks: true,
      points: "楽天ポイントの獲得・利用可",
      rating: 5,
      affiliateUrl: "https://www.rakuten-sec.co.jp/",
      isDomestic: true,
      features: "楽天ポイントと連携可 投資信託積立でもポイント獲得 利便性の高いトレーディングツール",
    },
    {
      name: "マネックス証券",
      commission: "取引毎手数料: 99円〜(現物取引 10万円以下) 一日定額手数料コース: 0円〜",
      minInvestment: "原則100株 単元未満株(「ワン株」)1株〜可",
      nisaSupport: true,
      tsumitateNisa: true,
      ipoCount: 50,
      foreignStocks: true,
      points: "独自のマネックスポイント",
      rating: 4,
      affiliateUrl: "https://www.monex.co.jp/",
      isDomestic: true,
      features: "米国株取扱数が充実 専用米国株アプリが使いやすい IPOもそこそこ多い",
    },
    {
      name: "松井証券",
      commission: "1日50万円まで現物手数料無料",
      minInvestment: "原則100株",
      nisaSupport: true,
      tsumitateNisa: true,
      ipoCount: 25,
      foreignStocks: true,
      points: "なし（独自ポイント制度なし）",
      rating: 4,
      affiliateUrl: "https://www.matsui.co.jp/",
      isDomestic: true,
      features: "老舗ネット証券 1日定額手数料が低コスト シンプルな手数料体系",
    },
    {
      name: "DMM株（DMM.com証券）",
      commission: "現物取引 80円〜(5万円以下) 1日定額: 1,200円(上限)",
      minInvestment: "原則100株 単元未満株なし",
      nisaSupport: true,
      tsumitateNisa: true,
      ipoCount: 15,
      foreignStocks: true,
      points: "DMMポイントはなし（キャッシュバック有）",
      rating: 4,
      affiliateUrl: "https://securities.dmm.com/",
      isDomestic: true,
      features: "取引ツールがシンプル キャンペーンによるキャッシュバック IPO取扱は多くない",
    },
    {
      name: "三菱UFJ eスマート証券（旧 auカブコム証券）",
      commission: "ワンショット手数料: 99円〜(10万円以下) プレミアム積立(投信積立時の割引等)",
      minInvestment: "原則100株 単元未満株(「プチ株」)1株〜可",
      nisaSupport: true,
      tsumitateNisa: true,
      ipoCount: 30,
      foreignStocks: true,
      points: "Pontaポイントなど連携可能",
      rating: 4,
      affiliateUrl: "https://kabu.com/",
      isDomestic: true,
      features: "KDDI連携サービスが強化(au時代の特徴) IPO取扱は中程度 投信積立のポイント優待あり",
    },
    {
      name: "GMOクリック証券",
      commission: "現物: 50円〜(5万円以下)",
      minInvestment: "原則100株",
      nisaSupport: true,
      tsumitateNisa: true,
      ipoCount: 15,
      foreignStocks: false,
      points: "GMOポイント連携",
      rating: 4,
      affiliateUrl: "https://click.gmo-jp.com/",
      isDomestic: true,
      features: "手数料水準が低め FX取引では最大手クラス",
    },
  ];

  // 表示する証券会社をフィルタリング（国内証券会社のみを表示）
  const filteredCompanies = companies.filter(company => company.isDomestic);

  const handleSort = (key: keyof SecurityCompany) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };

  // デフォルトではデータの配置順を維持（人気ランキング順）
  const sortedCompanies = sortBy ? [...filteredCompanies].sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];
    
    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
    }
    
    return 0;
  }) : filteredCompanies;

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
  const MobileCompanyCard = ({ company }: { company: SecurityCompany }) => (
    <Card className="mb-4 shadow-md border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold flex justify-between items-center">
          <span>{company.name}</span>
          <Badge variant="secondary" className="text-xs">
            {company.ipoCount}社 IPO
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-muted-foreground text-xs">手数料</p>
            <p className="font-semibold">{company.commission}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs">最低購入株数</p>
            <p className="font-semibold">{company.minInvestment}</p>
          </div>
        </div>
        
        {/* NISA/つみたてNISAを統合 */}
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground text-xs">NISA/つみたてNISA</span>
          {company.nisaSupport && company.tsumitateNisa ? (
            <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100">
              <Check className="h-3 w-3 text-green-600" />
            </div>
          ) : company.nisaSupport || company.tsumitateNisa ? (
            <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-yellow-100">
              <Check className="h-3 w-3 text-yellow-600" />
            </div>
          ) : (
            <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-100">
              <X className="h-3 w-3 text-red-600" />
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground text-xs">外国株</span>
          {company.foreignStocks ? (
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
          <p className="text-muted-foreground text-xs mb-1">ポイント</p>
          <p className="text-sm">{company.points}</p>
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
        <CardTitle className="text-xl sm:text-2xl font-bold text-center">証券会社詳細比較表</CardTitle>
        <p className="text-sm text-muted-foreground text-center mt-4">
          各証券会社の手数料、最低投資額、NISA対応状況、IPO実績、評価などの情報を比較できます
        </p>
        {/* 国内/国外切り替えボタンを削除（国内証券会社のみを表示） */}
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
              <Table className="min-w-[650px]">
                <TableHeader>
                  <TableRow className="hover:bg-muted/50 border-b-2 border-primary/20">
                    <TableHead className="min-w-[100px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap">証券会社</TableHead>
                    <TableHead className="min-w-[80px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap">手数料</TableHead>
                    <TableHead className="min-w-[80px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap">最低購入株数</TableHead>
                    {/* NISA/つみたてNISAを統合 */}
                    <TableHead className="text-center min-w-[60px] text-xs sm:text-sm font-bold text-primary">NISA/<br/>つみたてNISA</TableHead>
                    <TableHead 
                      className={`cursor-pointer min-w-[80px] text-xs sm:text-sm font-bold ${
                        sortBy === "ipoCount" 
                          ? "bg-primary/10 text-primary" 
                          : "text-primary hover:bg-muted/50"
                      } whitespace-nowrap`}
                      onClick={() => handleSort("ipoCount")}
                    >
                      <div className="flex items-center gap-1">
                        IPO実績
                        {sortBy === "ipoCount" && (
                          sortOrder === "asc" ? <ChevronUp className="h-3 w-3 sm:h-4 sm:w-4" /> : <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                        )}
                      </div>
                    </TableHead>
                    <TableHead className="text-center min-w-[60px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap">外国株</TableHead>
                    <TableHead className="min-w-[80px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap">ポイント</TableHead>
                    <TableHead 
                      className={`cursor-pointer min-w-[60px] text-xs sm:text-sm font-bold ${
                        sortBy === "rating" 
                          ? "bg-primary/10 text-primary" 
                          : "text-primary hover:bg-muted/50"
                      } whitespace-nowrap`}
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
                      <TableCell className="text-xs sm:text-sm py-3">{company.commission}</TableCell>
                      <TableCell className="text-xs sm:text-sm py-3">{company.minInvestment}</TableCell>
                      {/* NISA/つみたてNISAを統合 */}
                      <TableCell className="text-center py-3">
                        {company.nisaSupport && company.tsumitateNisa ? (
                          // 両方サポートしている場合は一つのアイコンのみ表示
                          <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100">
                            <Check className="h-3 w-3 text-green-600" />
                          </div>
                        ) : company.nisaSupport || company.tsumitateNisa ? (
                          <div className="flex flex-col items-center">
                            <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100">
                              <Check className="h-3 w-3 text-green-600" />
                            </div>
                            <span className="text-xs my-1">/</span>
                            <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100">
                              <Check className="h-3 w-3 text-green-600" />
                            </div>
                          </div>
                        ) : (
                          // 両方サポートしていない場合は一つのアイコンのみ表示
                          <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-100">
                            <X className="h-3 w-3 text-red-600" />
                          </div>
                        )}
                      </TableCell>
                      <TableCell className="text-center py-3">
                        <Badge variant="secondary" className="text-xs px-2 py-1">
                          {company.ipoCount}社
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center py-3">
                        {company.foreignStocks ? (
                          <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100">
                            <Check className="h-3 w-3 text-green-600" />
                          </div>
                        ) : (
                          <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-100">
                            <X className="h-3 w-3 text-red-600" />
                          </div>
                        )}
                      </TableCell>
                      <TableCell className="text-xs sm:text-sm py-3">{company.points}</TableCell>
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

export default ComparisonTable;