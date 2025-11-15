import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, ExternalLink, ChevronDown, ChevronUp, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
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
      commission: "スタンダードプラン: 55円〜(現物取引 5万円以下)\nアクティブプラン: 約定代金合計100万円まで0円",
      minInvestment: "原則100株 単元未満株(「S株」)1株〜可",
      nisaSupport: true,
      tsumitateNisa: true,
      ipoCount: 80,
      foreignStocks: true,
      points: "Tポイント・Vポイントなどを連携可能",
      rating: 5,
      affiliateUrl: "https://www.sbisec.co.jp/",
      isDomestic: true,
      features: "口座数トップクラス、多彩な投資商品、IPO取扱件数が業界最多クラス、高機能トレーディングツール",
    },
    {
      name: "楽天証券",
      commission: "超割コース: 55円〜(現物取引 5万円以下)\nいちにち定額コース: 0円〜",
      minInvestment: "原則100株 単元未満株(「いちかぶ」)1株〜可",
      nisaSupport: true,
      tsumitateNisa: true,
      ipoCount: 70,
      foreignStocks: true,
      points: "楽天ポイントの獲得・利用可",
      rating: 5,
      affiliateUrl: "https://www.rakuten-sec.co.jp/",
      isDomestic: true,
      features: "楽天ポイントと連携可、投資信託積立でもポイント獲得、利便性の高いトレーディングツール、IPO取扱件数が多い",
    },
    {
      name: "マネックス証券",
      commission: "取引毎手数料: 99円〜(現物取引 10万円以下)\n一日定額手数料コース: 0円〜",
      minInvestment: "原則100株 単元未満株(「ワン株」)1株〜可",
      nisaSupport: true,
      tsumitateNisa: true,
      ipoCount: 50,
      foreignStocks: true,
      points: "独自のマネックスポイント",
      rating: 4,
      affiliateUrl: "https://www.monex.co.jp/",
      isDomestic: true,
      features: "米国株取扱数が充実、専用米国株アプリが使いやすい、IPOもそこそこ多い、手数料水準が低い",
    },
    {
      name: "IG証券",
      commission: "株式CFD取引時に取引量に応じた手数料が発生する(具体的な金額は銘柄により異なる)",
      minInvestment: "CFDのため1株から取引可能(レバレッジ取引)",
      nisaSupport: false,
      tsumitateNisa: false,
      ipoCount: 0,
      foreignStocks: true,
      points: "キャッシュバックキャンペーンあり(取引量連動型)",
      rating: 4,
      affiliateUrl: "https://www.ig.com/jp/",
      isDomestic: true,
      features: "CFD・FX・ノックアウトオプション専門/現物株取引なし、多様な金融商品を扱う、イギリス拠点の金融会社、個人口座レバレッジ最大5倍、法人口座最大20倍",
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
      features: "老舗ネット証券、1日定額手数料が低コスト、シンプルな手数料体系、IPO取扱件数が多い",
    },
    {
      name: "DMM株（DMM.com証券）",
      commission: "現物取引 80円〜(5万円以下)\n1日定額: 1,200円(上限)",
      minInvestment: "原則100株 単元未満株なし",
      nisaSupport: true,
      tsumitateNisa: true,
      ipoCount: 15,
      foreignStocks: true,
      points: "DMMポイントはなし（キャッシュバック有）",
      rating: 4,
      affiliateUrl: "https://securities.dmm.com/",
      isDomestic: true,
      features: "取引ツールがシンプル、キャンペーンによるキャッシュバック、IPO取扱は多くない、手数料水準が低い",
    },
    {
      name: "三菱UFJ eスマート証券（旧 auカブコム証券）",
      commission: "ワンショット手数料: 99円〜(10万円以下)\nプレミアム積立(投信積立時の割引等)",
      minInvestment: "原則100株 単元未満株(「プチ株」)1株〜可",
      nisaSupport: true,
      tsumitateNisa: true,
      ipoCount: 30,
      foreignStocks: true,
      points: "Pontaポイントなど連携可能",
      rating: 4,
      affiliateUrl: "https://kabu.com/",
      isDomestic: true,
      features: "KDDI連携サービスが強化(au時代の特徴)、IPO取扱は中程度、投信積立のポイント優待あり、手数料水準が低い",
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
      features: "手数料水準が低め、FX取引では最大手クラス、IPO取扱件数は多い、高機能トレーディングツール",
    },
  ];

  // 証券会社名からスラッグを生成する関数
  const getCompanySlug = (name: string) => {
    const slugMap: { [key: string]: string } = {
      "SBI証券": "sbi",
      "楽天証券": "rakuten",
      "マネックス証券": "monex",
      "IG証券": "ig",
      "松井証券": "matsui",
      "DMM株（DMM.com証券）": "dmm",
      "三菱UFJ eスマート証券（旧 auカブコム証券）": "au-kabucom",
      "GMOクリック証券": "gmo-click"
    };
    return slugMap[name] || name.toLowerCase().replace(/\s+/g, '-');
  };

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
    <Card className="mb-4 shadow-md border border-border bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold flex justify-between items-center">
          <span>{company.name}</span>
          <Badge variant="secondary" className="text-xs">
            {company.ipoCount}社 IPO
          </Badge>
        </CardTitle>
        {/* 各証券会社の詳細ページへのリンクを追加 */}
        <div className="mt-2">
          <Link to={`/securities/${getCompanySlug(company.name)}`} className="text-sm text-primary hover:underline">
            詳細情報を見る
          </Link>
        </div>

      </CardHeader>
      {/* 詳細情報ボタンを会社名下に配置 */}
      <div className="px-6 pb-2">
        <Button 
          size="sm" 
          className="text-xs py-2 bg-blue-100 text-primary hover:bg-blue-200 shadow-md hover:shadow-lg transition-all duration-300 justify-between"
          asChild
        >
          <Link to={`/securities/${getCompanySlug(company.name)}`}>
            詳細情報
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
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
          className="w-full text-xs py-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-md hover:shadow-lg transition-all duration-300 justify-center"
          asChild
        >
          <a 
            href={company.name === "DMM株（DMM.com証券）" ? "https://h.accesstrade.net/sp/cc?rk=0100mkk300ol0m" : company.affiliateUrl} 
            target="_blank" 
            rel={company.name === "DMM株（DMM.com証券）" ? "nofollow noopener" : "noopener noreferrer"}
            referrerPolicy={company.name === "DMM株（DMM.com証券）" ? "no-referrer-when-downgrade" : undefined}
          >
            {company.name === "DMM株（DMM.com証券）" ? (
              <>
                公式サイトへ
                <img src="https://h.accesstrade.net/sp/rr?rk=0100mkk300ol0m" width="1" height="1" style={{ border: '0' }} alt="" />
                <ExternalLink className="ml-1 h-3 w-3" />
              </>
            ) : (
              <>
                公式サイトへ
                <ExternalLink className="ml-1 h-3 w-3" />
              </>
            )}
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
          各証券会社の手数料、最低購入株数、NISA対応状況、IPO実績、評価などの情報を比較できます
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
              <Table className="min-w-[700px]">
                <TableHeader>
                  <TableRow className="hover:bg-muted/50 border-b-2 border-primary/20">
                    <TableHead className="min-w-[100px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap">証券会社</TableHead>
                    <TableHead className="min-w-[100px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap">手数料</TableHead>
                    <TableHead className="min-w-[80px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap">最低購入株数</TableHead>
                    {/* NISA/つみたてNISAを統合 */}
                    <TableHead className="text-center min-w-[100px] text-xs sm:text-sm font-bold text-primary">NISA/つみたてNISA</TableHead>
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
                    <TableHead className="min-w-[200px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap">特徴</TableHead>
                    <TableHead className="text-center min-w-[120px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap">公式サイト</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedCompanies.map((company) => (
                    <TableRow 
                      key={company.name} 
                      className="hover:bg-primary/5 transition-colors duration-200 border-b border-muted"
                    >
                      <TableCell className="font-semibold text-xs sm:text-sm py-3">
                        {company.name}
                        {/* 詳細情報ボタンを追加 */}
                        <div className="mt-2">
                          <Button 
                            size="sm" 
                            className="w-full text-xs py-2 bg-blue-100 text-primary hover:bg-blue-200 shadow-md hover:shadow-lg transition-all duration-300 justify-between"
                            asChild
                          >
                            <Link to={`/securities/${getCompanySlug(company.name)}`}>
                              詳細情報
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className="text-xs sm:text-sm py-3 break-words" dangerouslySetInnerHTML={{ 
                        __html: company.commission
                          .replace(/([\d.]+)(円)/g, '<span class="font-semibold">$1</span>$2')
                          .replace(/([\d.]+)(万円)/g, '<span class="font-semibold">$1</span>$2')
                          .replace(/([\d.]+)(%)/g, '<span class="font-semibold">$1</span>$2')
                          .replace(/([\d.]+)(～)/g, '<span class="font-semibold">$1</span>$2')
                      }} />
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
                      <TableCell className="text-xs sm:text-sm py-3 break-words max-w-[200px]">
                        <div className="grid grid-cols-1 gap-1">
                          {(() => {
                            const features = company.features.split('、');
                            // 指定された特徴のキーワードを定義
                            const additionalHighlightedKeywords = [
                              'FX取引高世界第1位', '高機能取引ツール',
                              'LINEサポート対応', '最短当日取引開始',
                              '老舗証券会社の信頼性', 'サポート充実',
                              '楽天ポイントが貯まる',
                              'Pontaポイント付与', '株式との連携'
                            ];
                            
                            // 業界標準クラスのキーワードを定義
                            const industryStandardKeywords = ['最大', '最多', '最狭', '高機能', '高性能', '業界', 'クラス'];
                            
                            // マーカーを適用する特徴のリスト
                            const highlightedFeatures = [];
                            
                            // 既存の重要な特徴にマーカーをつける（業界標準クラスを除く）
                            features.forEach((feature, index) => {
                              const isIndustryStandard = industryStandardKeywords.some(keyword => feature.includes(keyword));
                              const hasImportantKeyword = (
                                feature.includes('最大') || feature.includes('最多') || feature.includes('最狭') || 
                                feature.includes('高機能') || feature.includes('高性能') || feature.includes('業界') || 
                                feature.includes('クラス')
                              );
                              const shouldHighlightExisting = hasImportantKeyword && !isIndustryStandard;
                              
                              // 指定された特徴にマーカーをつける
                              const shouldHighlightAdditional = additionalHighlightedKeywords.some(keyword => feature.includes(keyword));
                              
                              // どちらかの条件に該当する場合にマーカーをつける
                              if (shouldHighlightExisting || shouldHighlightAdditional) {
                                highlightedFeatures.push({ index, feature, highlighted: true });
                              } else {
                                highlightedFeatures.push({ index, feature, highlighted: false });
                              }
                            });
                            
                            // 最低1つ〜2つまで重要ポイントにマーカーをつける
                            let highlightCount = 0;
                            const maxHighlights = 2;
                            
                            return features.map((feature, index) => {
                              let shouldHighlight = false;
                              
                              // 既存のロジックでマーカーをつけるべき特徴
                              const isIndustryStandard = industryStandardKeywords.some(keyword => feature.includes(keyword));
                              const hasImportantKeyword = (
                                feature.includes('最大') || feature.includes('最多') || feature.includes('最狭') || 
                                feature.includes('高機能') || feature.includes('高性能') || feature.includes('業界') || 
                                feature.includes('クラス')
                              );
                              const shouldHighlightExisting = hasImportantKeyword && !isIndustryStandard;
                              
                              // 指定された特徴にマーカーをつける
                              const shouldHighlightAdditional = additionalHighlightedKeywords.some(keyword => feature.includes(keyword));
                              
                              // どちらかの条件に該当する場合にマーカーをつける
                              if (shouldHighlightExisting || shouldHighlightAdditional) {
                                shouldHighlight = true;
                                highlightCount++;
                              } else if (highlightCount < maxHighlights) {
                                // マーカーがまだ2つ未満の場合、他の特徴にもマーカーをつける
                                shouldHighlight = true;
                                highlightCount++;
                              }
                              
                              return (
                                <div key={index} className="flex items-start">
                                  <span className={shouldHighlight || (index > 0 && features[index-1] && (() => {
                                    // 前の要素がハイライトされているかチェック
                                    const prevFeature = features[index-1];
                                    const isPrevIndustryStandard = industryStandardKeywords.some(keyword => prevFeature.includes(keyword));
                                    const hasPrevImportantKeyword = (
                                      prevFeature.includes('最大') || prevFeature.includes('最多') || prevFeature.includes('最狭') || 
                                      prevFeature.includes('高機能') || prevFeature.includes('高性能') || prevFeature.includes('業界') || 
                                      prevFeature.includes('クラス')
                                    );
                                    const shouldHighlightPrevExisting = hasPrevImportantKeyword && !isPrevIndustryStandard;
                                    const shouldHighlightPrevAdditional = additionalHighlightedKeywords.some(keyword => prevFeature.includes(keyword));
                                    return shouldHighlightPrevExisting || shouldHighlightPrevAdditional;
                                  })()) ? "bg-yellow-200 dark:bg-yellow-600 px-1 mr-1" : "mr-1"}>
                                    {shouldHighlight ? 
                                      <span className="bg-yellow-200 dark:bg-yellow-600 px-1">{feature}</span> : 
                                      feature
                                    }
                                  </span>
                                </div>
                              );
                            });
                          })()}
                        </div>
                      </TableCell>
                      <TableCell className="text-center py-3">
                        <Button 
                          size="sm" 
                          className="whitespace-nowrap text-xs px-3 py-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-md hover:shadow-lg transition-all duration-300 min-w-[120px]"
                          asChild
                        >
                          <a 
                            href={company.name === "DMM株（DMM.com証券）" ? "https://h.accesstrade.net/sp/cc?rk=0100mkk300ol0m" : company.affiliateUrl} 
                            target="_blank" 
                            rel={company.name === "DMM株（DMM.com証券）" ? "nofollow noopener" : "noopener noreferrer"}
                            referrerPolicy={company.name === "DMM株（DMM.com証券）" ? "no-referrer-when-downgrade" : undefined}
                          >
                            {company.name === "DMM株（DMM.com証券）" ? (
                              <>
                                DMM 株
                                <img src="https://h.accesstrade.net/sp/rr?rk=0100mkk300ol0m" width="1" height="1" style={{ border: '0' }} alt="" />
                              </>
                            ) : (
                              <>
                                公式サイト
                                <ExternalLink className="ml-1 h-3 w-3" />
                              </>
                            )}
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
      <div className="px-4 sm:px-6 pb-6">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <span className="font-bold">注意事項:</span>
                <br />
                <span className="block mt-1">・本ページは情報提供を目的としており、特定の証券会社への取引を推奨・勧誘するものではありません。</span>
                <span className="block mt-1">・証券会社の選択は、必ずご自身の投資目的、リスク許容度、取引スタイルに合ったものをお選びください。</span>
                <span className="block mt-1">・掲載されている情報は作成時点のものであり、その正確性、完全性、最新性を保証するものではありません。</span>
                <span className="block mt-1">・証券会社のサービス内容や手数料体系は変更される場合がありますので、投資を行う際は必ず公式サイトなどで最新情報をご確認ください。</span>
                <span className="block mt-1">・投資は自己責任で行うものとし、本情報を用いた判断や行動の結果について当サイトは一切の責任を負いません。</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ComparisonTable;