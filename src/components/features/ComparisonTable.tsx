import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
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
      commission: "0円〜",
      minInvestment: "100円〜",
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
      commission: "0円〜",
      minInvestment: "100円〜",
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
      commission: "0円〜",
      minInvestment: "100円〜",
      nisaSupport: true,
      tsumitateNisa: true,
      ipoCount: 53,
      foreignStocks: true,
      points: "マネックスポイント",
      rating: 4,
      affiliateUrl: "https://www.monex.co.jp/",
    },
    {
      name: "松井証券",
      commission: "0円〜",
      minInvestment: "100円〜",
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
      commission: "0円〜",
      minInvestment: "100円〜",
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

  return (
    <Card className="shadow-lg">
      <CardHeader className="px-4 sm:px-6">
        <CardTitle className="text-xl sm:text-2xl">証券会社詳細比較表</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <div className="inline-block min-w-full align-middle px-4 sm:px-6">
            <Table className="min-w-[800px]">
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[140px] sm:min-w-[180px] text-xs sm:text-sm">証券会社</TableHead>
                  <TableHead className="min-w-[80px] sm:min-w-[100px] text-xs sm:text-sm">手数料</TableHead>
                  <TableHead className="min-w-[90px] sm:min-w-[110px] text-xs sm:text-sm">最低投資額</TableHead>
                  <TableHead className="text-center min-w-[70px] sm:min-w-[80px] text-xs sm:text-sm">NISA</TableHead>
                  <TableHead className="text-center min-w-[90px] sm:min-w-[110px] text-xs sm:text-sm">つみたてNISA</TableHead>
                  <TableHead 
                    className="cursor-pointer hover:bg-muted/50 min-w-[90px] sm:min-w-[110px] text-xs sm:text-sm"
                    onClick={() => handleSort("ipoCount")}
                  >
                    <div className="flex items-center gap-1">
                      IPO実績
                      {sortBy === "ipoCount" && (
                        sortOrder === "asc" ? <ChevronUp className="h-3 w-3 sm:h-4 sm:w-4" /> : <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                      )}
                    </div>
                  </TableHead>
                  <TableHead className="text-center min-w-[70px] sm:min-w-[80px] text-xs sm:text-sm">外国株</TableHead>
                  <TableHead className="min-w-[120px] sm:min-w-[140px] text-xs sm:text-sm">ポイント</TableHead>
                  <TableHead 
                    className="cursor-pointer hover:bg-muted/50 min-w-[70px] sm:min-w-[80px] text-xs sm:text-sm"
                    onClick={() => handleSort("rating")}
                  >
                    <div className="flex items-center gap-1">
                      評価
                      {sortBy === "rating" && (
                        sortOrder === "asc" ? <ChevronUp className="h-3 w-3 sm:h-4 sm:w-4" /> : <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                      )}
                    </div>
                  </TableHead>
                  <TableHead className="text-center min-w-[100px] sm:min-w-[120px] text-xs sm:text-sm">口座開設</TableHead>
                </TableRow>
              </TableHeader>
            <TableBody>
              {sortedCompanies.map((company) => (
                <TableRow key={company.name} className="hover:bg-muted/50">
                  <TableCell className="font-semibold text-xs sm:text-sm">{company.name}</TableCell>
                  <TableCell className="text-xs sm:text-sm">{company.commission}</TableCell>
                  <TableCell className="text-xs sm:text-sm">{company.minInvestment}</TableCell>
                  <TableCell className="text-center">
                    {company.nisaSupport ? (
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-secondary mx-auto" />
                    ) : (
                      <X className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground mx-auto" />
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {company.tsumitateNisa ? (
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-secondary mx-auto" />
                    ) : (
                      <X className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground mx-auto" />
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge variant="secondary" className="text-xs">{company.ipoCount}社</Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    {company.foreignStocks ? (
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-secondary mx-auto" />
                    ) : (
                      <X className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground mx-auto" />
                    )}
                  </TableCell>
                  <TableCell className="text-xs sm:text-sm">{company.points}</TableCell>
                  <TableCell>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`h-3 w-3 sm:h-4 sm:w-4 rounded-sm ${
                            i < company.rating ? "bg-accent" : "bg-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <Button size="sm" className="whitespace-nowrap text-xs px-2 sm:px-4" asChild>
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
      </CardContent>
    </Card>
  );
};

export default ComparisonTable;
