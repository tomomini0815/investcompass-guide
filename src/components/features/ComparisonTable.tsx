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
      <CardHeader>
        <CardTitle className="text-2xl">証券会社詳細比較表</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">証券会社</TableHead>
                <TableHead>手数料</TableHead>
                <TableHead>最低投資額</TableHead>
                <TableHead className="text-center">NISA</TableHead>
                <TableHead className="text-center">つみたてNISA</TableHead>
                <TableHead 
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => handleSort("ipoCount")}
                >
                  <div className="flex items-center gap-1">
                    IPO実績
                    {sortBy === "ipoCount" && (
                      sortOrder === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                    )}
                  </div>
                </TableHead>
                <TableHead className="text-center">外国株</TableHead>
                <TableHead>ポイント</TableHead>
                <TableHead 
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => handleSort("rating")}
                >
                  <div className="flex items-center gap-1">
                    評価
                    {sortBy === "rating" && (
                      sortOrder === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                    )}
                  </div>
                </TableHead>
                <TableHead className="text-center">口座開設</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedCompanies.map((company) => (
                <TableRow key={company.name} className="hover:bg-muted/50">
                  <TableCell className="font-semibold">{company.name}</TableCell>
                  <TableCell>{company.commission}</TableCell>
                  <TableCell>{company.minInvestment}</TableCell>
                  <TableCell className="text-center">
                    {company.nisaSupport ? (
                      <Check className="h-5 w-5 text-secondary mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {company.tsumitateNisa ? (
                      <Check className="h-5 w-5 text-secondary mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge variant="secondary">{company.ipoCount}社</Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    {company.foreignStocks ? (
                      <Check className="h-5 w-5 text-secondary mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    )}
                  </TableCell>
                  <TableCell className="text-sm">{company.points}</TableCell>
                  <TableCell>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`h-4 w-4 rounded-sm ${
                            i < company.rating ? "bg-accent" : "bg-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <Button size="sm" className="whitespace-nowrap" asChild>
                      <a 
                        href={company.affiliateUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        詳細を見る
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComparisonTable;
