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
      name: "GMOコイン",
      tradingFee: "Maker -0.01% / Taker 0.05% 程度",
      withdrawalFee: "入金: 無料（即時入金対応）/ 出金: 無料",
      supportedCoins: 30,
      security: "コールド保管、二段階認証、分別管理、システム冗長化",
      japaneseSupport: true,
      rating: 5,
      affiliateUrl: "https://coin.z.com/jp/",
      isDomestic: true,
      features: "入出金・送金の無料範囲が広い、板の流動性が高め、APIが安定、銘柄数が多い",
    },
    {
      name: "bitFlyer",
      tradingFee: "0.01%～0.15% 程度（Lightning現物、出来高連動）",
      withdrawalFee: "入金: 無料～330円、出金: 220円～770円",
      supportedCoins: 45,
      security: "コールド保管、2FA、出金ホワイトリスト、ISMS",
      japaneseSupport: true,
      rating: 5,
      affiliateUrl: "https://bitflyer.com/ja-jp",
      isDomestic: true,
      features: "老舗・口座数多い、板の厚み、Lightning（高機能板）、銘柄数が多い",
    },
    {
      name: "Coincheck",
      tradingFee: "取引所（BTC等）0% 例あり / 販売所は—（スプレッド）",
      withdrawalFee: "入金: 無料～1,018円、出金: 407円",
      supportedCoins: 30,
      security: "コールド保管、2FA、分別管理",
      japaneseSupport: true,
      rating: 4,
      affiliateUrl: "https://coincheck.com/",
      isDomestic: true,
      features: "アプリ利用者数が多い、NFTマーケット連携、UIが分かりやすい、銘柄数が多い",
    },
    {
      name: "bitbank",
      tradingFee: "Maker -0.02% / Taker 0.12% 程度",
      withdrawalFee: "入金: 無料 / 出金: 550～770円程度",
      supportedCoins: 60,
      security: "コールド保管、2FA、監査、分別管理",
      japaneseSupport: true,
      rating: 4,
      affiliateUrl: "https://bitbank.cc/",
      isDomestic: true,
      features: "板の流動性・銘柄数が多め、プロ向けAPI/チャートが充実、銘柄数が多い",
    },
    {
      name: "SBI VCトレード（VCTRADE Pro）",
      tradingFee: "Maker -0.01% / Taker 0.05% 程度",
      withdrawalFee: "入金: 無料 / 出金: 住信SBIネット銀行は無料、他行は数百円程度",
      supportedCoins: 25,
      security: "金融グループ水準の管理、コールド保管、2FA",
      japaneseSupport: true,
      rating: 4,
      affiliateUrl: "https://www.sbivc.co.jp/",
      isDomestic: true,
      features: "銀行連携が強い、手数料水準が安定、銘柄数が多い、高機能トレーディングツール",
    },
    {
      name: "DMM Bitcoin",
      tradingFee: "現物は無料（— スプレッド）/ レバは建玉料等",
      withdrawalFee: "入金: 無料（即時入金）/ 出金: 無料",
      supportedCoins: 50,
      security: "コールド保管、2FA、分別管理",
      japaneseSupport: true,
      rating: 4,
      affiliateUrl: "https://bitcoin.dmm.com/",
      isDomestic: true,
      features: "レバレッジ通貨ペアが豊富、キャンペーン多め、銘柄数が多い、高機能トレーディングツール",
    },
    {
      name: "Binance Japan",
      tradingFee: "現物 0.10%/0.10% 程度（Maker/Taker）",
      withdrawalFee: "入金: 無料（振込手数料は利用者負担）/ 出金: 数百円程度",
      supportedCoins: 100,
      security: "コールド保管、2FA、PoRページ、公的登録",
      japaneseSupport: true,
      rating: 4,
      affiliateUrl: "https://www.binance.com/ja-JP",
      isDomestic: true,
      features: "銘柄数が多め、板取引・各種Earn（国内準拠版）、銘柄数が多い、高機能トレーディングツール",
    },
    {
      name: "楽天ウォレット",
      tradingFee: "取引所（Pro）低水準/ 販売所は—（スプレッド）",
      withdrawalFee: "入金: 楽天銀行等は無料 / 出金: 数百円程度",
      supportedCoins: 20,
      security: "コールド保管、2FA、分別管理",
      japaneseSupport: true,
      rating: 4,
      affiliateUrl: "https://www.rakuten-wallet.co.jp/",
      isDomestic: true,
      features: "楽天経済圏連携、ポイント周りの導線が強い、銘柄数が多い、高機能トレーディングツール",
    },
    {
      name: "LINE BITMAX",
      tradingFee: "—（販売所はスプレッド）",
      withdrawalFee: "入金: 無料（LINE Pay/銀行）/ 出金: 数百円程度",
      supportedCoins: 10,
      security: "コールド保管、2FA、分別管理",
      japaneseSupport: true,
      rating: 3,
      affiliateUrl: "https://bitmax.me/",
      isDomestic: true,
      features: "LINEアプリからシームレス、初心者向け、銘柄数が多い、高機能トレーディングツール",
    },
    {
      name: "BITPOINT",
      tradingFee: "取引所は無料の銘柄あり/標準低水準",
      withdrawalFee: "入金: 無料（即時入金）/ 出金: 数百円程度",
      supportedCoins: 50,
      security: "コールド保管、2FA、分別管理",
      japaneseSupport: true,
      rating: 4,
      affiliateUrl: "https://www.bitpoint.co.jp/",
      isDomestic: true,
      features: "送金手数料の無料対象が多い、キャンペーン活発、銘柄数が多い、高機能トレーディングツール",
    },
    // 海外取引所（人気ランキング順）
    {
      name: "Binance",
      tradingFee: "現物: 約0.10%/0.10%、先物: 約0.02%/0.04%",
      withdrawalFee: "暗号資産入金: 無料 / 出金: ネットワーク手数料。法定通貨は決済手段により変動",
      supportedCoins: 350,
      security: "PoR公表、コールド保管、2FA、出金ホワイトリスト、バグバウンティ",
      japaneseSupport: true,
      rating: 5,
      affiliateUrl: "https://www.binance.com/",
      isDomestic: false,
      features: "流動性最大級、先物/オプション、Earn/Launchpad、幅広いプロダクト、銘柄数が多い",
    },
    {
      name: "OKX",
      tradingFee: "現物: 約0.08%/0.10%、先物: 約0.02%/0.05%",
      withdrawalFee: "暗号資産入金: 無料 / 出金: ネットワーク手数料。法定通貨は決済手段により変動",
      supportedCoins: 350,
      security: "PoR公表、MPCウォレット、コールド保管、2FA",
      japaneseSupport: false,
      rating: 4,
      affiliateUrl: "https://www.okx.com/",
      isDomestic: false,
      features: "先物・オプション強い、OKX Wallet/DeFi連携、Earn/Jumpstart、銘柄数が多い、高機能トレーディングツール",
    },
    {
      name: "Bybit",
      tradingFee: "現物: 約0.10%/0.10%、先物: 約0.02%/0.055（目安）",
      withdrawalFee: "暗号資産入金: 無料 / 出金: ネットワーク手数料。法定通貨は決済手段により変動",
      supportedCoins: 400,
      security: "PoR公表、コールド保管、2FA、出金ホワイトリスト",
      japaneseSupport: true,
      rating: 4,
      affiliateUrl: "https://www.bybit.com/",
      isDomestic: false,
      features: "デリバティブの板厚、コピー取引、Earn、ローンチパッド、銘柄数が多い、高機能トレーディングツール",
    },
    {
      name: "Coinbase (Advanced/International)",
      tradingFee: "現物: 約0.40%/0.60%、デリバ: 約0.02%/0.05（国際版・目安）",
      withdrawalFee: "暗号資産入金: 無料 / 出金: ネットワーク手数料。法定は通貨・地域で変動",
      supportedCoins: 250,
      security: "上場企業、SOC2監査、コールド保管、強固なコンプライアンス",
      japaneseSupport: false,
      rating: 4,
      affiliateUrl: "https://www.coinbase.com/",
      isDomestic: false,
      features: "UX・規制準拠の安心感、機関投資家向けソリューション、銘柄数が多い、高機能トレーディングツール",
    },
    {
      name: "Kraken",
      tradingFee: "現物: 約0.16%/0.26%、先物: 約0.02%/0.05",
      withdrawalFee: "暗号資産入金: 無料 / 出金: ネットワーク手数料。法定は通貨・地域で変動",
      supportedCoins: 200,
      security: "SOC2、コールド保管、2FA、バグバウンティ",
      japaneseSupport: false,
      rating: 4,
      affiliateUrl: "https://www.kraken.com/",
      isDomestic: false,
      features: "セキュリティ評価高い、先物/マージン、FIAT対応国多い、銘柄数が多い、高機能トレーディングツール",
    },
    {
      name: "Bitget",
      tradingFee: "現物: 約0.10%/0.10%、先物: 約0.02%/0.06",
      withdrawalFee: "暗号資産入金: 無料 / 出金: ネットワーク手数料。法定は通貨・地域で変動",
      supportedCoins: 700,
      security: "PoR公表、保護基金、コールド保管、2FA",
      japaneseSupport: true,
      rating: 4,
      affiliateUrl: "https://www.bitget.com/",
      isDomestic: false,
      features: "コピー取引で著名、Earn/Launchpad、積極的な上場、銘柄数が多い、高機能トレーディングツール",
    },
    {
      name: "KuCoin",
      tradingFee: "現物: 約0.10%/0.10%、先物: 約0.02%/0.06",
      withdrawalFee: "暗号資産入金: 無料 / 出金: ネットワーク手数料。法定は通貨・地域で変動",
      supportedCoins: 700,
      security: "PoR公表、リスク基金、2FA",
      japaneseSupport: false,
      rating: 4,
      affiliateUrl: "https://www.kucoin.com/",
      isDomestic: false,
      features: "アルト豊富、Earn/借貸、先物も幅広い、銘柄数が多い、高機能トレーディングツール",
    },
    {
      name: "HTX (旧Huobi)",
      tradingFee: "現物: 約0.20%/0.20%、先物: 約0.02%/0.05",
      withdrawalFee: "暗号資産入金: 無料 / 出金: ネットワーク手数料。法定は通貨・地域で変動",
      supportedCoins: 700,
      security: "PoR公表、コールド保管、2FA",
      japaneseSupport: false,
      rating: 4,
      affiliateUrl: "https://www.htx.com/",
      isDomestic: false,
      features: "デリバティブ、Earn/Primeなどキャンペーン多数、銘柄数が多い、高機能トレーディングツール",
    },
    {
      name: "Gate.io",
      tradingFee: "現物: 約0.20%/0.20%、先物: 約0.02%/0.05（目安）",
      withdrawalFee: "暗号資産入金: 無料 / 出金: ネットワーク手数料。法定は通貨・地域で変動",
      supportedCoins: 1400,
      security: "PoR公表、コールド保管、2FA",
      japaneseSupport: false,
      rating: 4,
      affiliateUrl: "https://www.gate.io/",
      isDomestic: false,
      features: "アルト最多クラス、IEO(Startup)、NFT等、銘柄数が多い、高機能トレーディングツール",
    },
    {
      name: "MEXC",
      tradingFee: "現物: 約0.10%/0.10%（プロモで0%のこと有）、先物: 約0.02%/0.06",
      withdrawalFee: "暗号資産入金: 無料 / 出金: ネットワーク手数料。法定は通貨・地域で変動",
      supportedCoins: 2000,
      security: "コールド保管、2FA、（PoRページ公開のこと有）",
      japaneseSupport: false,
      rating: 4,
      affiliateUrl: "https://www.mexc.com/",
      isDomestic: false,
      features: "新興アルト・先物が豊富、キャンペーン多い、銘柄数が多い、高機能トレーディングツール",
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
      // デフォルトでは海外取引所の場合評価順にソート
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
    <Card className="mb-4 shadow-md border border-border bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold flex justify-between items-center">
          <span>{exchange.name}</span>
          <Badge variant="secondary" className="text-xs">
            {exchange.supportedCoins}種対応
          </Badge>
        </CardTitle>
      </CardHeader>
      {/* 詳細情報ボタンを会社名下に配置 */}
      <div className="px-6 pb-2">
        <Button 
          size="sm" 
          className="text-xs py-2 bg-blue-100 text-primary hover:bg-blue-200 shadow-md hover:shadow-lg transition-all duration-300 justify-between opacity-50 cursor-not-allowed"
          disabled
        >
          詳細情報
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-muted-foreground text-xs">取引手数料</p>
            <p className="font-semibold">{exchange.tradingFee}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs">入出金手数料</p>
            <p className="font-semibold">{exchange.withdrawalFee}</p>
          </div>
        </div>
        
        <div>
          <p className="text-muted-foreground text-xs">セキュリティ</p>
          <p className="text-xs">{exchange.security}</p>
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
          className="w-full text-xs py-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-md hover:shadow-lg transition-all duration-300 justify-center"
          asChild
        >
          <a 
            href={exchange.affiliateUrl} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            公式サイトへ
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
            海外取引所
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {/* モバイル向け表示 - 768px未満で表示 */}
        <div className="md:hidden px-4 py-2">
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
                    <TableHead className="min-w-[180px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap">取引手数料</TableHead>
                    <TableHead className="min-w-[150px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap">入出金手数料</TableHead>
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
                    <TableHead className="min-w-[200px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap">特徴</TableHead>
                    <TableHead className="text-center min-w-[120px] text-xs sm:text-sm font-bold text-primary whitespace-nowrap">公式サイト</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedExchanges.map((exchange) => (
                    <TableRow 
                      key={exchange.name} 
                      className="hover:bg-primary/5 transition-colors duration-200 border-b border-muted"
                    >
                      <TableCell className="font-semibold text-xs sm:text-sm py-3">
                        {exchange.name}
                        {/* 詳細情報ボタンを追加 */}
                        <div className="mt-2">
                          <Button 
                            size="sm" 
                            className="w-full text-xs py-2 bg-blue-100 text-primary hover:bg-blue-200 shadow-md hover:shadow-lg transition-all duration-300 justify-between opacity-50 cursor-not-allowed"
                            disabled
                          >
                            詳細情報
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className="text-xs sm:text-sm py-3 whitespace-pre-line" dangerouslySetInnerHTML={{ 
                        __html: exchange.tradingFee
                          .replace(/、\s*(先物:)/g, '\n$1')
                          .replace(/([\d.]+)(%)/g, '<span class="font-semibold">$1</span>$2')
                          .replace(/([\d.]+)(USD)/g, '<span class="font-semibold">$1</span>$2')
                          .replace(/([\d.]+)(～)/g, '<span class="font-semibold">$1</span>$2')
                          .replace(/(約)([\d.]+)/g, '$1<span class="font-semibold">$2</span>')
                          .replace(/\/([\d.]+)/g, '/<span class="font-semibold">$1</span>')
                      }} />
                      <TableCell className="text-xs sm:text-sm py-3 whitespace-pre-line" dangerouslySetInnerHTML={{ 
                        __html: exchange.withdrawalFee
                          .replace(/([\d.]+)(円)/g, '<span class="font-semibold">$1</span>$2')
                          .replace(/([\d.]+)(万円)/g, '<span class="font-semibold">$1</span>$2')
                          .replace(/([\d.]+)(～)/g, '<span class="font-semibold">$1</span>$2')
                      }} />
                      <TableCell className="text-center py-3">
                        <Badge variant="secondary" className="text-xs px-2 py-1">
                          {exchange.supportedCoins}種対応
                        </Badge>
                      </TableCell>
                      <TableCell className="text-xs sm:text-sm py-3 break-words max-w-xs">{exchange.security}</TableCell>
                      <TableCell className="py-3">
                        <RatingStars rating={exchange.rating} />
                      </TableCell>
                      <TableCell className="text-xs sm:text-sm py-3 break-words max-w-[200px]">
                        <div className="grid grid-cols-1 gap-1">
                          {(() => {
                            const features = exchange.features.split('、');
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
                <span className="block mt-1">・本ページは情報提供を目的としており、特定の暗号資産への投資を推奨・勧誘するものではありません。</span>
                <span className="block mt-1">・暗号資産への投資は、必ずご自身の判断と責任において行ってください。</span>
                <span className="block mt-1">・暗号資産は価格変動が非常に激しく、投資元本を割り込む損失（元本割れ）が生じる可能性があります。</span>
                <span className="block mt-1">・掲載されている情報は作成時点のものであり、その正確性、完全性、最新性を保証するものではありません。</span>
                <span className="block mt-1">・投資を行う際は、必ずご自身で取引所の公式サイトなど、一次情報をご確認ください。</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CryptoComparisonTable;