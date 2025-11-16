import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, ExternalLink, ChevronDown, ChevronUp, Star, ArrowRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";

interface CryptoExchange {
  name: string;
  fee: string;
  currencyPairs: number;
  security: string;
  rating: number;
  affiliateUrl: string;
  isDomestic: boolean;
  features: string;
}

const CryptoComparisonTable = () => {
  const [sortBy, setSortBy] = useState<keyof CryptoExchange | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [showDomestic, setShowDomestic] = useState<boolean>(true);

  const domesticExchanges: CryptoExchange[] = [
    // 国内暗号資産取引所
    {
      name: "Coincheck",
      fee: "販売所:無料(スプレッドあり)、取引所:Maker 0.00%、Taker 0.00%",
      currencyPairs: 35,
      security: "マネックスグループ傘下、信頼性の高いセキュリティ体制",
      rating: 5,
      affiliateUrl: "https://coincheck.com/ja/",
      isDomestic: true,
      features: "スマホアプリダウンロード数国内No.1(2019年1月〜2023年12月)、34種類の暗号資産を取り扱い(2025年10月時点)、初心者に最適なUI、NFT・IEO・INO対応",
    },
    {
      name: "GMOコイン",
      fee: "取引所:BTC/ETH/XRP/DAI Maker -0.01%、Taker 0.05%、その他銘柄 Maker -0.03%、Taker 0.09%",
      currencyPairs: 21,
      security: "GMOグループの信頼性、業界トップクラスのセキュリティ",
      rating: 5,
      affiliateUrl: "https://coin.z.com/jp/",
      isDomestic: true,
      features: "すべてのサービスで手数料が無料、ステーキングも手数料ゼロ、日本円の入出金・仮想通貨の送金手数料が無料、Maker手数料がマイナス(手数料を受け取れる)",
    },
    {
      name: "bitFlyer",
      fee: "取引所:約定数量 × 0.01~0.15%(ビットコイン)、販売所:無料(スプレッドあり)",
      currencyPairs: 38,
      security: "業界トップクラスのセキュリティ、創業以来ハッキング被害ゼロ",
      rating: 5,
      affiliateUrl: "https://bitflyer.com/ja-jp/",
      isDomestic: true,
      features: "ビットコイン取引量9年連続No.1(2016-2024年)、初心者にも使いやすい、信頼性と実績",
    },
    {
      name: "bitbank",
      fee: "取引所:Maker -0.02%、Taker 0.12%(BTC)、Maker -0.01%、Taker 0.05%(一部銘柄)",
      currencyPairs: 40,
      security: "セキュリティ国内No.1",
      rating: 4,
      affiliateUrl: "https://bitbank.cc/",
      isDomestic: true,
      features: "国内アルトコイン取引量No.1(2023年1月〜2024年10月)、高性能チャートTradingView採用、2024年11月から信用取引開始",
    },
    {
      name: "SBI VCトレード",
      fee: "取引所:無料、販売所:無料(スプレッドあり)",
      currencyPairs: 38,
      security: "SBIグループの信頼性、業界標準のセキュリティ",
      rating: 4,
      affiliateUrl: "https://www.sbivc.co.jp/",
      isDomestic: true,
      features: "入出金・出庫手数料は無料、条件や制限なしで日本円を無料で出金可能、取引方法の選択肢が豊富",
    },
    {
      name: "BITPOINT",
      fee: "現物取引:取引手数料無料",
      currencyPairs: 30,
      security: "SBIグループ傘下、信頼性の高いセキュリティ体制",
      rating: 4,
      affiliateUrl: "https://bitpoint.co.jp/",
      isDomestic: true,
      features: "ステーキング報酬年率国内No.1(2025年3月11日BITPOINT社調べ)、ゼロつみたて(スプレッド・手数料完全無料)、入出金・取引手数料無料、ユニークなアルトコイン",
    },
    {
      name: "Binance Japan",
      fee: "取引手数料一律0.1%、BNB支払いで25%割引",
      currencyPairs: 63,
      security: "業界標準のセキュリティ、世界最大手グループ国内取引所",
      rating: 4,
      affiliateUrl: "https://www.binance.co.jp/",
      isDomestic: true,
      features: "国内取引所の中でも最多クラスの銘柄数、早期に100銘柄の取扱いを目指すことを表明、出金手数料:1回150円、コンバート手数料無料",
    },
    {
      name: "BitTrade",
      fee: "販売所:無料(スプレッドあり)、取引所:無料",
      currencyPairs: 43,
      security: "業界標準のセキュリティ、100%コールドウォレット管理",
      rating: 4,
      affiliateUrl: "https://bittrade.co.jp/",
      isDomestic: true,
      features: "取扱仮想通貨数が国内トップクラス、積立プログラム(最大1%プレゼント)、レンディングサービス充実",
    },
    {
      name: "楽天ウォレット",
      fee: "販売所:無料(スプレッドあり)",
      currencyPairs: 10,
      security: "楽天グループの信頼性、信頼性の高いセキュリティ体制",
      rating: 4,
      affiliateUrl: "https://wallet.rakuten.co.jp/",
      isDomestic: true,
      features: "楽天ポイントと暗号資産を交換可能、楽天キャッシュチャージで出金手数料無料、楽天経済圏との連携、レバレッジ取引対応",
    },
    {
      name: "LINE BITMAX",
      fee: "販売所:取引手数料無料(スプレッドあり)",
      currencyPairs: 7,
      security: "LINEグループの信頼性、コールドウォレット管理",
      rating: 4,
      affiliateUrl: "https://bitmax.line.me/",
      isDomestic: true,
      features: "1円から投資可能、LINEアプリから簡単取引、最大年利8%の貸出サービス、LINE Pay連携、独自通貨KAIA取扱",
    }
  ];

  const foreignExchanges: CryptoExchange[] = [
    // 海外暗号資産取引所
    {
      name: "Binance",
      fee: "取引手数料: Maker 0.1%、Taker 0.1%(スポット取引)",
      currencyPairs: 500,
      security: "業界トップクラスのセキュリティ",
      rating: 5,
      affiliateUrl: "https://www.binance.com/ja",
      isDomestic: false,
      features: "世界最大手の暗号資産取引所、BNB保有で25%割引、多様な取引オプション",
    },
    {
      name: "Bybit",
      fee: "取引手数料: Maker 0.1%、Taker 0.1%(スポット取引)",
      currencyPairs: 200,
      security: "業界トップクラスのセキュリティ",
      rating: 5,
      affiliateUrl: "https://www.bybit.com/ja-JP/",
      isDomestic: false,
      features: "先物取引手数料が競争力あり(Maker 0.02%、Taker 0.055%)、VIPプログラムで手数料割引",
    },
    {
      name: "Coinbase",
      fee: "取引手数料: Maker 0.60%、Taker 1.20%(通常)、Advanced: Maker 0.00%-0.40%、Taker 0.05%-0.60%",
      currencyPairs: 240,
      security: "米国で厳格な規制を満たすセキュリティ",
      rating: 4,
      affiliateUrl: "https://www.coinbase.com/ja",
      isDomestic: false,
      features: "初心者に最適なインターフェース、米国最大の取引所、Coinbase Oneで手数料削減可能",
    },
    {
      name: "Kraken",
      fee: "取引手数料: Maker 0.16%、Taker 0.26%",
      currencyPairs: 70,
      security: "ISO/IEC 27001:2013認証",
      rating: 4,
      affiliateUrl: "https://www.kraken.com/ja-jp",
      isDomestic: false,
      features: "2011年創業の老舗取引所、優れた顧客サポート、取引量に応じた手数料割引",
    },
    {
      name: "KuCoin",
      fee: "取引手数料: Maker 0.1%、Taker 0.1%",
      currencyPairs: 300,
      security: "業界標準のセキュリティ",
      rating: 4,
      affiliateUrl: "https://www.kucoin.com/ja",
      isDomestic: false,
      features: "KCS保有で最大60%割引、3,900万人以上のユーザー、豊富なアルトコイン",
    },
    {
      name: "Gemini",
      fee: "取引手数料: Maker 0.2%、Taker 0.4%(取引量に応じて変動)",
      currencyPairs: 70,
      security: "SOC1 Type 2およびSOC2 Type 2認証取得、ISO 27001およびSOC 2 Type 2認証",
      rating: 4,
      affiliateUrl: "https://www.gemini.com/ja",
      isDomestic: false,
      features: "Winklevoss兄弟創業、規制重視",
    },
    {
      name: "Bitstamp",
      fee: "取引手数料: Maker 0.1%、Taker 0.25%",
      currencyPairs: 70,
      security: "業界トップクラスのセキュリティ",
      rating: 4,
      affiliateUrl: "https://www.bitstamp.net/ja",
      isDomestic: false,
      features: "2011年創業のヨーロッパ最古参取引所、高い信頼性、規制遵守",
    },
    {
      name: "Bitfinex",
      fee: "取引手数料: Maker 0.1%、Taker 0.2%",
      currencyPairs: 120,
      security: "業界標準のセキュリティ",
      rating: 4,
      affiliateUrl: "https://www.bitfinex.com/ja",
      isDomestic: false,
      features: "LEOトークン保有で最大25%割引、プロフェッショナル向け、高機能な取引ツール",
    },
    {
      name: "Huobi(HTX)",
      fee: "取引手数料: Maker 0.2%、Taker 0.2%",
      currencyPairs: 250,
      security: "業界標準のセキュリティ",
      rating: 4,
      affiliateUrl: "https://www.huobi.com/ja-jp",
      isDomestic: false,
      features: "多様な暗号資産の取扱、高機能な取引ツール、アジア市場で強み",
    },
    {
      name: "OKX",
      fee: "取引手数料: Maker 0.08%、Taker 0.1%",
      currencyPairs: 400,
      security: "重大なハッキング被害なし",
      rating: 4,
      affiliateUrl: "https://www.okx.com/ja",
      isDomestic: false,
      features: "OKBトークン保有で10-40%割引、180以上の国と地域で利用可能、多様なデリバティブ取引",
    }
  ];

  const companies = showDomestic ? domesticExchanges : foreignExchanges;

  // 表示する暗号資産取引所をフィルタリング
  const filteredCompanies = companies.filter(company => 
    showDomestic ? company.isDomestic : !company.isDomestic
  );

  const handleSort = (key: keyof CryptoExchange) => {
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
  const MobileCompanyCard = ({ company }: { company: CryptoExchange }) => (
    <Card className="mb-4 shadow-md border border-border bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold flex justify-between items-center">
          <span>{company.name}</span>
          <Badge variant="secondary" className="text-xs">
            {company.currencyPairs}通貨ペア
          </Badge>
        </CardTitle>
      </CardHeader>
      {/* 詳細情報ボタンを会社名下に配置 */}
      <div className="px-6 pb-2">
        {company.name === "GMOコイン" || company.name === "DMM Bitcoin" || company.name === "bitFlyer" || company.name === "Coincheck" || company.name === "liquid by QUOINE" || company.name === "Binance" || company.name === "Bybit" || company.name === "Coinbase" || company.name === "Kraken" || company.name === "KuCoin" || company.name === "Gemini" || company.name === "Bitstamp" || company.name === "Bitfinex" || company.name === "Huobi" || company.name === "OKX" || company.name === "FTX" || company.name === "bitbank" || company.name === "SBI VCトレード" || company.name === "BITPOINT" || company.name === "Binance Japan" || company.name === "BitTrade" || company.name === "楽天ウォレット" || company.name === "LINE BITMAX" ? (
          <Button 
            size="sm" 
            className="text-xs py-2 bg-blue-100 text-primary hover:bg-blue-200 shadow-md hover:shadow-lg transition-all duration-300 justify-between"
            asChild
          >
            <Link to={
              company.name === "GMOコイン" ? "/crypto/gmo-coin" : 
              company.name === "DMM Bitcoin" ? "/crypto/dmm-bitcoin" : 
              company.name === "bitFlyer" ? "/crypto/bitflyer" : 
              company.name === "Coincheck" ? "/crypto/coincheck" : 
              company.name === "liquid by QUOINE" ? "/crypto/liquid-by-quoine" : 
              company.name === "Binance" ? "/crypto/binance" : 
              company.name === "Bybit" ? "/crypto/bybit" :
              company.name === "Coinbase" ? "/crypto/coinbase" :
              company.name === "Kraken" ? "/crypto/kraken" :
              company.name === "KuCoin" ? "/crypto/kucoin" :
              company.name === "Gemini" ? "/crypto/gemini" :
              company.name === "Bitstamp" ? "/crypto/bitstamp" :
              company.name === "Bitfinex" ? "/crypto/bitfinex" :
              company.name === "Huobi" ? "/crypto/huobi" :
              company.name === "OKX" ? "/crypto/okx" :
              company.name === "FTX" ? "/crypto/ftx" :
              company.name === "bitbank" ? "/crypto/bitbank" :
              company.name === "SBI VCトレード" ? "/crypto/sbi-vc-trade" :
              company.name === "BITPOINT" ? "/crypto/bitpoint" :
              company.name === "Binance Japan" ? "/crypto/binance-japan" :
              company.name === "BitTrade" ? "/crypto/bittrade" :
              company.name === "楽天ウォレット" ? "/crypto/rakuten-wallet" :
              "/crypto/line-bitmax"
            }>
              詳細情報
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        ) : (
          <Button 
            size="sm" 
            className="text-xs py-2 bg-blue-100 text-primary hover:bg-blue-200 shadow-md hover:shadow-lg transition-all duration-300 justify-between opacity-50 cursor-not-allowed"
            disabled
          >
            詳細情報
            <ArrowRight className="h-4 w-4" />
          </Button>
        )}
      </div>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-muted-foreground text-xs">手数料</p>
            <p className="font-semibold">{company.fee}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs">セキュリティ</p>
            <p className="font-semibold">{company.security}</p>
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
          className="w-full text-xs py-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-md hover:shadow-lg transition-all duration-300 justify-center"
          asChild
        >
          <a 
            href={company.affiliateUrl} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <>
              公式サイトへ
              <ExternalLink className="ml-1 h-3 w-3" />
            </>
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
          各暗号資産取引所の手数料、通貨ペア数、セキュリティ、評価などの情報を比較できます
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
            海外取引所
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
              <Table className="min-w-[600px]">
                <TableHeader>
                  <TableRow className="hover:bg-muted/50 border-b-2 border-primary/20">
                    <TableHead className="min-w-[120px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap">取引所</TableHead>
                    <TableHead className="min-w-[180px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap">手数料</TableHead>
                    <TableHead 
                      className="cursor-pointer hover:bg-muted/50 min-w-[80px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap"
                      onClick={() => handleSort("currencyPairs")}
                    >
                      <div className="flex items-center justify-between">
                        <span>通貨ペア数</span>
                        {sortBy === "currencyPairs" && (
                          <span>{sortOrder === "asc" ? "↑" : "↓"}</span>
                        )}
                      </div>
                    </TableHead>
                    <TableHead className="min-w-[120px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap">セキュリティ</TableHead>
                    <TableHead className="min-w-[120px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap">評価</TableHead>
                    <TableHead className="min-w-[200px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap">特徴</TableHead>
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
                          {company.name === "GMOコイン" || company.name === "DMM Bitcoin" || company.name === "bitFlyer" || company.name === "Coincheck" || company.name === "liquid by QUOINE" || company.name === "Binance" || company.name === "Bybit" || company.name === "Coinbase" || company.name === "Kraken" || company.name === "KuCoin" || company.name === "Gemini" || company.name === "Bitstamp" || company.name === "Bitfinex" || company.name === "Huobi" || company.name === "OKX" || company.name === "FTX" || company.name === "bitbank" || company.name === "SBI VCトレード" || company.name === "BITPOINT" || company.name === "Binance Japan" || company.name === "BitTrade" || company.name === "楽天ウォレット" || company.name === "LINE BITMAX" ? (
                            <Button 
                              size="sm" 
                              className="w-full text-xs py-2 bg-blue-100 text-primary hover:bg-blue-200 shadow-md hover:shadow-lg transition-all duration-300 justify-between"
                              asChild
                            >
                              <Link to={
                                company.name === "GMOコイン" ? "/crypto/gmo-coin" : 
                                company.name === "DMM Bitcoin" ? "/crypto/dmm-bitcoin" : 
                                company.name === "bitFlyer" ? "/crypto/bitflyer" : 
                                company.name === "Coincheck" ? "/crypto/coincheck" : 
                                company.name === "liquid by QUOINE" ? "/crypto/liquid-by-quoine" : 
                                company.name === "Binance" ? "/crypto/binance" : 
                                company.name === "Bybit" ? "/crypto/bybit" :
                                company.name === "Coinbase" ? "/crypto/coinbase" :
                                company.name === "Kraken" ? "/crypto/kraken" :
                                company.name === "KuCoin" ? "/crypto/kucoin" :
                                company.name === "Gemini" ? "/crypto/gemini" :
                                company.name === "Bitstamp" ? "/crypto/bitstamp" :
                                company.name === "Bitfinex" ? "/crypto/bitfinex" :
                                company.name === "Huobi" ? "/crypto/huobi" :
                                company.name === "OKX" ? "/crypto/okx" :
                                company.name === "FTX" ? "/crypto/ftx" :
                                company.name === "bitbank" ? "/crypto/bitbank" :
                                company.name === "SBI VCトレード" ? "/crypto/sbi-vc-trade" :
                                company.name === "BITPOINT" ? "/crypto/bitpoint" :
                                company.name === "Binance Japan" ? "/crypto/binance-japan" :
                                company.name === "BitTrade" ? "/crypto/bittrade" :
                                company.name === "楽天ウォレット" ? "/crypto/rakuten-wallet" :
                                "/crypto/line-bitmax"
                              }>
                                詳細情報
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                            </Button>
                          ) : (
                            <Button 
                              size="sm" 
                              className="w-full text-xs py-2 bg-blue-100 text-primary hover:bg-blue-200 shadow-md hover:shadow-lg transition-all duration-300 justify-between opacity-50 cursor-not-allowed"
                              disabled
                            >
                              詳細情報
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-xs sm:text-sm py-3 whitespace-pre-line">{company.fee}</TableCell>
                      <TableCell className="text-xs sm:text-sm py-3">{company.currencyPairs}</TableCell>
                      <TableCell className="text-xs sm:text-sm py-3">{company.security}</TableCell>
                      <TableCell className="py-3">
                        <RatingStars rating={company.rating} />
                      </TableCell>
                      <TableCell className="text-xs sm:text-sm py-3 break-words max-w-[200px]">
                        <div className="grid grid-cols-1 gap-1">
                          {(() => {
                            const features = company.features.split('、');
                            // 指定された特徴のキーワードを定義
                            const additionalHighlightedKeywords = [
                              '世界最大手', '業界最安', '信頼性の高い',
                              '9年連続No. 1', '初心者にも使いやすい'
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
                          className="whitespace-nowrap text-xs px-3 py-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-md hover:shadow-lg transition-all duration-300 min-w-[130px]"
                          asChild
                        >
                          <a 
                            href={company.affiliateUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <>
                              公式サイト
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </>
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
                <span className="block mt-1">・手数料は取引ペアや取引量によっても変動します。</span>
                <span className="block mt-1">・評価はあくまで一般的なユーザーの声や取引条件の傾向を総合的に見た参考レベルです。</span>
                <span className="block mt-1">・最新の情報や詳細な数値を確認する際は、必ず各社の公式サイトや最新の取引約款・告知文書をチェックしてください。</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CryptoComparisonTable;