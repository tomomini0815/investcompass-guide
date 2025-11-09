import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calculator, TrendingUp, Lightbulb } from "lucide-react";
import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

const FXCalculator = () => {
  const [balance, setBalance] = useState(100000);
  const [lot, setLot] = useState(1);
  const [currencyPair, setCurrencyPair] = useState('USD/JPY');
  const [entryPrice, setEntryPrice] = useState(140.5); // エントリー価格
  const [exitPrice, setExitPrice] = useState(141.0); // 決済価格
  const [rate, setRate] = useState(0.1);
  const [leverage, setLeverage] = useState(25);
  const [position, setPosition] = useState<'buy' | 'sell'>('buy');
  const [pipUnit, setPipUnit] = useState(1000); // 1pipの単位（1000通貨または10000通貨）

  // 通貨ペアに基づいて現在のレートを取得する関数
  const fetchCurrentRate = async () => {
    try {
      // 無料為替レートAPIからリアルタイムのレートを取得
      // 使用API: https://api.exchangerate.host/latest
      let baseCurrency = 'USD';
      let targetCurrency = 'JPY';
      
      switch (currencyPair) {
        case 'USD/JPY':
          baseCurrency = 'USD';
          targetCurrency = 'JPY';
          break;
        case 'EUR/USD':
          baseCurrency = 'EUR';
          targetCurrency = 'USD';
          break;
        case 'GBP/USD':
          baseCurrency = 'GBP';
          targetCurrency = 'USD';
          break;
        case 'AUD/USD':
          baseCurrency = 'AUD';
          targetCurrency = 'USD';
          break;
        case 'USD/CAD':
          baseCurrency = 'USD';
          targetCurrency = 'CAD';
          break;
        case 'NZD/USD':
          baseCurrency = 'NZD';
          targetCurrency = 'USD';
          break;
        case 'EUR/JPY':
          baseCurrency = 'EUR';
          targetCurrency = 'JPY';
          break;
        case 'GBP/JPY':
          baseCurrency = 'GBP';
          targetCurrency = 'JPY';
          break;
        default:
          baseCurrency = 'USD';
          targetCurrency = 'JPY';
      }
      
      const response = await fetch(`https://api.exchangerate.host/latest?base=${baseCurrency}&symbols=${targetCurrency}`);
      
      if (!response.ok) {
        throw new Error(`為替レートAPIからのレスポンスが異常です: ${response.status}`);
      }
      
      const data = await response.json();
      const rate = data.rates[targetCurrency];
      
      // USD/JPYの場合は小数点以下3桁まで表示
      if (currencyPair === 'USD/JPY' || currencyPair === 'EUR/JPY' || currencyPair === 'GBP/JPY') {
        return Number(rate.toFixed(3));
      }
      
      // その他の通貨ペアは小数点以下5桁まで表示
      return Number(rate.toFixed(5));
    } catch (error) {
      console.error('為替レートの取得に失敗しました:', error);
      // エラーの場合、デフォルト値を返す
      switch (currencyPair) {
        case 'USD/JPY':
          return 140.5;
        case 'EUR/USD':
          return 1.08;
        case 'GBP/USD':
          return 1.29;
        case 'AUD/USD':
          return 0.67;
        case 'USD/CAD':
          return 1.35;
        case 'NZD/USD':
          return 0.59;
        case 'EUR/JPY':
          return 152.0;
        case 'GBP/JPY':
          return 181.0;
        default:
          return 140.5;
      }
    }
  };

  // 通貨ペアが変更されたときに現在のレートを更新
  useEffect(() => {
    let isMounted = true;
    
    const fetchRate = async () => {
      const rate = await fetchCurrentRate();
      if (isMounted) {
        setEntryPrice(rate);
        // ポジションに応じて決済価格を設定
        if (position === 'buy') {
          setExitPrice(rate + 0.5); // 買いポジションの場合は0.5円上昇を想定
        } else {
          setExitPrice(rate - 0.5); // 売りポジションの場合は0.5円下落を想定
        }
      }
    };
    
    fetchRate();
    
    // クリーンアップ関数
    return () => {
      isMounted = false;
    };
  }, [currencyPair, position]);

  const calculateResults = () => {
    // 必要証拠金の計算 (取引数量×現在レート÷レバレッジ)
    // じぶん銀行FXの必要証拠金は建玉の建値の4％
    const requiredMargin = (lot * pipUnit * entryPrice) / leverage;
    
    // 1pipあたりの価値の計算
    // 10000通貨の場合、USD/JPYの1pipは0.01円なので、10000 * 0.01 = 100円
    const pipValue = lot * pipUnit * 0.01;
    
    // 最大取引可能ロット数の計算
    // じぶん銀行FXでは新規注文は20倍以内
    const maxLots = (balance * leverage) / (pipUnit * entryPrice);
    
    // ロスカットまでの金額の計算
    // じぶん銀行FXでは証拠金維持率が100％を下回ったときにロスカット発動
    const lossToMarginCall = balance - requiredMargin;
    
    // 証拠金維持率の計算
    const marginMaintenanceRate = (balance / requiredMargin) * 100;
    
    // ロスカット値の計算 (証拠金維持率が100%になるレート)
    let lossCutValue;
    if (position === 'buy') {
      // 買いポジションの場合、BIDレートが下落した場合にロスカット
      // ロスカットレート = エントリー価格 - (口座残高 - 必要証拠金) / (ロット数 × 通貨単位)
      lossCutValue = entryPrice - (balance - requiredMargin) / (lot * pipUnit);
    } else {
      // 売りポジションの場合、ASKレートが上昇した場合にロスカット
      // ロスカットレート = エントリー価格 + (口座残高 - 必要証拠金) / (ロット数 × 通貨単位)
      lossCutValue = entryPrice + (balance - requiredMargin) / (lot * pipUnit);
    }
    
    // 利益と損失の計算
    let profitOrLoss = 0;
    if (position === 'buy') {
      // 買いポジションの場合、決済価格がエントリー価格より高い場合は利益
      profitOrLoss = (exitPrice - entryPrice) * lot * pipUnit;
    } else {
      // 売りポジションの場合、決済価格がエントリー価格より低い場合は利益
      profitOrLoss = (entryPrice - exitPrice) * lot * pipUnit;
    }
    
    return {
      requiredMargin: Math.round(requiredMargin),
      pipValue: pipValue.toFixed(2),
      maxLots: maxLots.toFixed(2),
      lossToMarginCall: Math.round(lossToMarginCall),
      marginMaintenanceRate: marginMaintenanceRate.toFixed(2),
      lossCutValue: lossCutValue.toFixed(3), // ロスカット値を追加
      profitOrLoss: Math.round(profitOrLoss) // 利益/損失を追加
    };
  };

  const results = calculateResults();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY',
    }).format(value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-gradient-to-r from-muted/50 to-muted/30 py-4 border-b">
          <div className="container mx-auto px-4">
            <Link 
              to="/tools" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
              計算ツール一覧に戻る
            </Link>
          </div>
        </div>

        {/* Page Header */}
        <section className="relative py-20 container mx-auto px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 animate-fade-in" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Badge variant="secondary" className="mb-6 px-6 py-2 text-sm font-semibold animate-fade-in hover:scale-105 transition-transform">
              FX計算ツール
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
              FX計算シミュレータ
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              じぶん銀行FXのシミュレーターを参考にした計算ツール
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-secondary/20 via-secondary/10 to-accent/10 p-8 flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Calculator className="h-20 w-20 text-secondary mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-center relative z-10">FX計算</h3>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">FX取引のシミュレーション</h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      このツールでは、ロット数、通貨ペア、レバレッジなどを入力することで、必要証拠金、1pipあたりの価値、最大取引可能ロット数、ロスカットレートなどを計算できます。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="hover:bg-secondary hover:text-secondary-foreground transition-colors">FX計算</Badge>
                      <Badge variant="outline" className="hover:bg-secondary hover:text-secondary-foreground transition-colors">シミュレーション</Badge>
                      <Badge variant="outline" className="hover:bg-secondary hover:text-secondary-foreground transition-colors">リスク管理</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">FX計算シミュレーター</h2>
            <p className="text-muted-foreground text-lg">
              取引条件を入力すると、必要な証拠金やリスク指標を計算します。
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Input Section */}
            <Card>
              <CardHeader className="px-4 sm:px-6">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Calculator className="h-4 w-4 sm:h-5 sm:w-5" />
                  取引条件を入力
                </CardTitle>
                <CardDescription className="text-sm">
                  あなたのFX取引条件を入力してください
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
                {/* ポジション選択 */}
                <div className="space-y-2 sm:space-y-3">
                  <Label className="text-sm sm:text-base">ポジション</Label>
                  <div className="flex gap-4">
                    <Button 
                      variant={position === 'buy' ? 'default' : 'outline'}
                      onClick={() => setPosition('buy')}
                      className="flex-1"
                    >
                      買い
                    </Button>
                    <Button 
                      variant={position === 'sell' ? 'default' : 'outline'}
                      onClick={() => setPosition('sell')}
                      className="flex-1"
                    >
                      売り
                    </Button>
                  </div>
                </div>

                {/* 口座残高 */}
                <div className="space-y-2 sm:space-y-3">
                  <Label htmlFor="balance" className="text-sm sm:text-base">口座残高</Label>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <Input
                      id="balance"
                      type="number"
                      value={balance}
                      onChange={(e) => setBalance(Number(e.target.value))}
                      className="flex-1 text-sm sm:text-base"
                    />
                    <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">円</span>
                  </div>
                </div>

                {/* 通貨ペア選択 */}
                <div className="space-y-2 sm:space-y-3">
                  <Label htmlFor="currencyPair" className="text-sm sm:text-base">通貨ペア</Label>
                  <select
                    id="currencyPair"
                    value={currencyPair}
                    onChange={(e) => setCurrencyPair(e.target.value)}
                    className="w-full p-2 border rounded text-sm sm:text-base"
                  >
                    <option value="USD/JPY">USD/JPY ({currencyPair === 'USD/JPY' ? entryPrice.toFixed(3) : '140.500'})</option>
                    <option value="EUR/USD">EUR/USD ({currencyPair === 'EUR/USD' ? entryPrice.toFixed(5) : '1.08000'})</option>
                    <option value="GBP/USD">GBP/USD ({currencyPair === 'GBP/USD' ? entryPrice.toFixed(5) : '1.29000'})</option>
                    <option value="AUD/USD">AUD/USD ({currencyPair === 'AUD/USD' ? entryPrice.toFixed(5) : '0.67000'})</option>
                    <option value="USD/CAD">USD/CAD ({currencyPair === 'USD/CAD' ? entryPrice.toFixed(5) : '1.35000'})</option>
                    <option value="NZD/USD">NZD/USD ({currencyPair === 'NZD/USD' ? entryPrice.toFixed(5) : '0.59000'})</option>
                    <option value="EUR/JPY">EUR/JPY ({currencyPair === 'EUR/JPY' ? entryPrice.toFixed(3) : '152.000'})</option>
                    <option value="GBP/JPY">GBP/JPY ({currencyPair === 'GBP/JPY' ? entryPrice.toFixed(3) : '181.000'})</option>
                  </select>
                </div>

                {/* エントリー価格と決済価格 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2 sm:space-y-3">
                    <Label htmlFor="entryPrice" className="text-sm sm:text-base">エントリー価格</Label>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <Input
                        id="entryPrice"
                        type="number"
                        step="0.001"
                        value={entryPrice}
                        onChange={(e) => setEntryPrice(Number(e.target.value))}
                        className="flex-1 text-sm sm:text-base"
                      />
                      <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">円</span>
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <Label htmlFor="exitPrice" className="text-sm sm:text-base">決済価格</Label>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <Input
                        id="exitPrice"
                        type="number"
                        step="0.001"
                        value={exitPrice}
                        onChange={(e) => setExitPrice(Number(e.target.value))}
                        className="flex-1 text-sm sm:text-base"
                      />
                      <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">円</span>
                    </div>
                  </div>
                </div>

                {/* 1pipの値幅単位選択 */}
                <div className="space-y-2 sm:space-y-3">
                  <Label className="text-sm sm:text-base">1pipの値幅単位</Label>
                  <div className="flex gap-4">
                    <Button 
                      variant={pipUnit === 1000 ? 'default' : 'outline'}
                      onClick={() => setPipUnit(1000)}
                      className="flex-1"
                    >
                      1,000通貨
                    </Button>
                    <Button 
                      variant={pipUnit === 10000 ? 'default' : 'outline'}
                      onClick={() => setPipUnit(10000)}
                      className="flex-1"
                    >
                      10,000通貨
                    </Button>
                  </div>
                </div>

                {/* Lot */}
                <div className="space-y-2 sm:space-y-3">
                  <Label htmlFor="lot" className="text-sm sm:text-base">取引ロット数</Label>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <Input
                      id="lot"
                      type="number"
                      value={lot}
                      onChange={(e) => setLot(Number(e.target.value))}
                      className="flex-1 text-sm sm:text-base"
                    />
                    <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">LOT</span>
                  </div>
                </div>

                {/* レバレッジ */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between">
                    <Label className="text-sm sm:text-base">レバレッジ</Label>
                    <span className="text-sm font-semibold">{leverage}倍</span>
                  </div>
                  <Slider
                    value={[leverage]}
                    onValueChange={(value) => setLeverage(value[0])}
                    min={1}
                    max={500}
                    step={1}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Result Section */}
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardHeader className="px-4 sm:px-6">
                <CardTitle className="flex items-center gap-2 text-primary text-lg sm:text-xl">
                  <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />
                  計算結果
                </CardTitle>
                <CardDescription className="text-sm">
                  あなたの取引条件に基づくシミュレーション結果
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
                {/* Profit/Loss */}
                <div className="text-center p-4 sm:p-6 bg-background rounded-lg shadow-sm">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2">利益/損失</p>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
                    {formatCurrency(results.profitOrLoss)}
                  </p>
                </div>

                {/* Required Margin */}
                <div className="text-center p-4 sm:p-6 bg-background rounded-lg shadow-sm">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2">必要証拠金</p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-3 sm:mb-4">
                    {formatCurrency(results.requiredMargin)}
                  </p>
                </div>

                {/* Breakdown */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-center p-3 sm:p-4 bg-background rounded-lg">
                    <span className="text-xs sm:text-sm text-muted-foreground">1pipあたりの価値</span>
                    <span className="text-sm sm:text-base font-semibold">{Math.round(parseFloat(results.pipValue))}円</span>
                  </div>
                  <div className="flex justify-between items-center p-3 sm:p-4 bg-background rounded-lg">
                    <span className="text-xs sm:text-sm text-muted-foreground">最大取引可能ロット数</span>
                    <span className="text-sm sm:text-base font-semibold">{results.maxLots} LOT</span>
                  </div>
                  <div className="flex justify-between items-center p-3 sm:p-4 bg-secondary/10 rounded-lg">
                    <span className="text-xs sm:text-sm font-semibold text-secondary">ロスカットまでの金額</span>
                    <span className="text-sm sm:text-base font-bold text-secondary">{formatCurrency(results.lossToMarginCall)}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 sm:p-4 bg-accent/10 rounded-lg">
                    <span className="text-xs sm:text-sm font-semibold text-accent">証拠金維持率</span>
                    <span className="text-sm sm:text-base font-bold text-accent">{results.marginMaintenanceRate}%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 sm:p-4 bg-accent/10 rounded-lg">
                    <span className="text-xs sm:text-sm font-semibold text-accent">ロスカット値</span>
                    <span className="text-sm sm:text-base font-bold text-accent">{results.lossCutValue} 円</span>
                  </div>
                </div>

                {/* Note */}
                <div className="p-3 sm:p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-xs text-muted-foreground">
                    ※このシミュレーション結果は、実際の取引では市場状況や会社方針により異なる場合があります。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto relative overflow-hidden bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/5 border-2 border-primary/20 shadow-2xl">
              <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-secondary/10 rounded-xl">
                    <TrendingUp className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl">FX取引のポイント</CardTitle>
                </div>
                <p className="text-muted-foreground">リスク管理と適切な取引のために</p>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <div className="p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-primary/10">
                  <p className="leading-relaxed">
                    FX取引では、レバレッジを適切に設定し、損失を最小限に抑えることが重要です。
                    必要証拠金やロスカットラインを事前に把握しておくことで、安全な取引が可能になります。
                  </p>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-xl border-2 border-secondary/20">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">💡</span>
                    <p className="font-bold text-lg">リスク管理の重要性</p>
                  </div>
                  <p className="font-semibold mb-4 text-foreground">1つの取引に口座残高の1〜3%以内に抑える</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-sm text-muted-foreground mb-1">安全圏</p>
                      <p className="text-2xl font-bold text-primary">1%以下</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-sm text-muted-foreground mb-1">注意域</p>
                      <p className="text-2xl font-bold text-secondary">1-3%</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg text-center border-2 border-secondary/30">
                      <p className="text-sm text-muted-foreground mb-1">危険域</p>
                      <p className="text-2xl font-bold text-secondary">3%以上</p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-background rounded-lg border border-accent/20">
                    <h3 className="font-bold text-md mb-2">ロスカットとは？</h3>
                    <p className="text-sm text-muted-foreground">
                      ロスカットは、損失が一定のラインに達したときに自動的に取引を決済する仕組みです。
                      これにより、さらに大きな損失を防ぐことができます。
                      ロスカット値は、現在のレートからどのくらい下がるとロスカットが発動するかを示しています。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="relative overflow-hidden bg-gradient-to-br from-secondary/20 via-accent/10 to-primary/20 border-2 border-secondary/30 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-transparent opacity-50" />
                <CardContent className="p-10 text-center relative z-10">
                  <div className="inline-block p-4 bg-background rounded-full mb-6 animate-pulse">
                    <Lightbulb className="h-12 w-12 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">FX取引を安全に行いましょう</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                    この計算ツールを使って自分の取引条件をシミュレーションし、
                    適切なリスク管理を行いましょう。
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="text-lg px-8 hover:scale-105 transition-transform">
                      <Link to="/tools">
                        他のツールを見る →
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="text-lg px-8 hover:scale-105 transition-transform">
                      <Link to="/fx-comparison">
                        FX業者比較
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FXCalculator;