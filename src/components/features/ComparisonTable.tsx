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
}

const ComparisonTable = () => {
  const [sortBy, setSortBy] = useState<keyof SecurityCompany | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const companies: SecurityCompany[] = [
    {
      name: "SBI証券",
      commission: "国内株式:0円/米国株式:0円",
      minInvestment: "投資信託:100円〜",
      nisaSupport: true,
      tsumitateNisa: true,
      ipoCount: 89,
      foreignStocks: true,
      points: "Tポイント・Vポイント",
      rating: 5,
      affiliateUrl: "https://www.sbisec.co.jp/",
    },
    {
      name: "楽天証券",
      commission: "国内株式:0円/米国株式:0.495%",
      minInvestment: "投資信託:100円〜",
      nisaSupport: true,
      tsumitateNisa: true,
      ipoCount: 65,
      foreignStocks: true,
      points: "楽天ポイント",
      rating: 5,
      affiliateUrl: "https://www.rakuten-sec.co.jp/",
    },
    {
      name: "マネックス証券",
      commission: "国内株式:55円〜/米国株式:無料キャッシュバック",
      minInvestment: "投資信託:100円〜",
      nisaSupport: true,
      tsumitateNisa: true,
      ipoCount: 53,
      foreignStocks: true,
      points: "dポイント",
      rating: 4,
      affiliateUrl: "https://www.monex.co.jp/",
    },
    {
      name: "松井証券",
      commission: "国内株式:0円(50万円以下)/米国株式:0円",
      minInvestment: "投資信託:100円〜",
      nisaSupport: true,
      tsumitateNisa: true,
      ipoCount: 56,
      foreignStocks: true,
      points: "松井証券ポイント",
      rating: 4,
      affiliateUrl: "https://www.matsui.co.jp/",
    },
    {
      name: "auカブコム証券",
      commission: "国内株式:0円/米国株式:0.495%",
      minInvestment: "投資信託:100円〜",
      nisaSupport: true,
      tsumitateNisa: true,
      ipoCount: 42,
      foreignStocks: true,
      points: "Pontaポイント",
      rating: 4,
      affiliateUrl: "https://kabu.com/",
    },
  ];

  const handleSort = (key: keyof SecurityCompany) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };

  const sortedCompanies = [...companies].sort((a, b) => {
    if (!sortBy) return 0;
    
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
            <p className="text-muted-foreground text-xs">最低投資額</p>
            <p className="font-semibold">{company.minInvestment}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-xs">NISA</span>
            {company.nisaSupport ? (
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
            <span className="text-muted-foreground text-xs">つみたてNISA</span>
            {company.tsumitateNisa ? (
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
      </CardHeader>
      <CardContent className="p-0">
        {/* モバイル向け表示 - 768px未満で表示 */}
        <div className="md:hidden px-4 py-2">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-center mb-2">証券会社詳細比較</h3>
            <p className="text-sm text-muted-foreground text-center">
              各証券会社の詳細情報を比較できます
            </p>
          </div>
          {sortedCompanies.map((company) => (
            <MobileCompanyCard key={company.name} company={company} />
          ))}
        </div>
        
        {/* デスクトップ向け表示 - 768px以上で表示 */}
        <div className="hidden md:block">
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="inline-block min-w-full align-middle px-4 sm:px-6">
              <Table className="min-w-[800px]">
                <TableHeader>
                  <TableRow className="hover:bg-muted/50 border-b-2 border-primary/20">
                    <TableHead className="min-w-[140px] sm:min-w-[180px] text-xs sm:text-sm font-bold text-primary">証券会社</TableHead>
                    <TableHead className="min-w-[80px] sm:min-w-[100px] text-xs sm:text-sm font-bold text-primary">手数料</TableHead>
                    <TableHead className="min-w-[90px] sm:min-w-[110px] text-xs sm:text-sm font-bold text-primary">最低投資額</TableHead>
                    <TableHead className="text-center min-w-[70px] sm:min-w-[80px] text-xs sm:text-sm font-bold text-primary">NISA</TableHead>
                    <TableHead className="text-center min-w-[90px] sm:min-w-[110px] text-xs sm:text-sm font-bold text-primary">つみたてNISA</TableHead>
                    <TableHead 
                      className="cursor-pointer hover:bg-muted/50 min-w-[90px] sm:min-w-[110px] text-xs sm:text-sm font-bold text-primary"
                      onClick={() => handleSort("ipoCount")}
                    >
                      <div className="flex items-center gap-1">
                        IPO実績
                        {sortBy === "ipoCount" && (
                          sortOrder === "asc" ? <ChevronUp className="h-3 w-3 sm:h-4 sm:w-4" /> : <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                        )}
                      </div>
                    </TableHead>
                    <TableHead className="text-center min-w-[70px] sm:min-w-[80px] text-xs sm:text-sm font-bold text-primary">外国株</TableHead>
                    <TableHead className="min-w-[120px] sm:min-w-[140px] text-xs sm:text-sm font-bold text-primary">ポイント</TableHead>
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
                  {sortedCompanies.map((company) => (
                    <TableRow 
                      key={company.name} 
                      className="hover:bg-primary/5 transition-colors duration-200 border-b border-muted"
                    >
                      <TableCell className="font-semibold text-xs sm:text-sm py-3">{company.name}</TableCell>
                      <TableCell className="text-xs sm:text-sm py-3">{company.commission}</TableCell>
                      <TableCell className="text-xs sm:text-sm py-3">{company.minInvestment}</TableCell>
                      <TableCell className="text-center py-3">
                        {company.nisaSupport ? (
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
                        {company.tsumitateNisa ? (
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
                        <Badge variant="secondary" className="text-xs px-2 py-1">
                          {company.ipoCount}社
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center py-3">
                        {company.foreignStocks ? (
                          <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                            <Check className="h-4 w-4 text-green-600" />
                          </div>
                        ) : (
                          <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100">
                            <X className="h-4 w-4 text-red-600" />
                          </div>
                        )}
                      </TableCell>
                      <TableCell className="text-xs sm:text-sm py-3">{company.points}</TableCell>
                      <TableCell className="py-3">
                        <RatingStars rating={company.rating} />
                      </TableCell>
                      <TableCell className="text-center py-3">
                        <Button 
                          size="sm" 
                          className="whitespace-nowrap text-xs px-3 py-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-md hover:shadow-lg transition-all duration-300"
                          asChild
                        >
                          <a 
                            href={company.affiliateUrl} 
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

export default ComparisonTable;