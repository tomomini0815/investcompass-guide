import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Calculator as CalcIcon, TrendingUp } from "lucide-react";

const Calculator = () => {
  const [initialAmount, setInitialAmount] = useState(100000);
  const [monthlyAmount, setMonthlyAmount] = useState(30000);
  const [years, setYears] = useState(20);
  const [returnRate, setReturnRate] = useState(5);

  const calculateCompoundInterest = () => {
    const monthlyRate = returnRate / 100 / 12;
    const months = years * 12;
    
    // 初期投資の複利計算
    const futureValueInitial = initialAmount * Math.pow(1 + monthlyRate, months);
    
    // 積立投資の複利計算
    const futureValueMonthly = monthlyAmount * 
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
    
    const totalInvestment = initialAmount + (monthlyAmount * months);
    const totalValue = futureValueInitial + futureValueMonthly;
    const profit = totalValue - totalInvestment;
    
    return {
      totalValue: Math.round(totalValue),
      totalInvestment: Math.round(totalInvestment),
      profit: Math.round(profit),
      returnPercent: ((profit / totalInvestment) * 100).toFixed(1),
    };
  };

  const result = calculateCompoundInterest();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY',
    }).format(value);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
      {/* Input Section */}
      <Card>
        <CardHeader className="px-4 sm:px-6">
          <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
            <CalcIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            投資条件を入力
          </CardTitle>
          <CardDescription className="text-sm">
            あなたの投資プランを入力して、将来の資産をシミュレーションしましょう
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
          {/* Initial Investment */}
          <div className="space-y-2 sm:space-y-3">
            <Label htmlFor="initial" className="text-sm sm:text-base">初期投資額</Label>
            <div className="flex items-center gap-3 sm:gap-4">
              <Input
                id="initial"
                type="number"
                value={initialAmount}
                onChange={(e) => setInitialAmount(Number(e.target.value))}
                className="flex-1 text-sm sm:text-base"
              />
              <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">円</span>
            </div>
          </div>

          {/* Monthly Investment */}
          <div className="space-y-2 sm:space-y-3">
            <Label htmlFor="monthly" className="text-sm sm:text-base">毎月の積立額</Label>
            <div className="flex items-center gap-3 sm:gap-4">
              <Input
                id="monthly"
                type="number"
                value={monthlyAmount}
                onChange={(e) => setMonthlyAmount(Number(e.target.value))}
                className="flex-1 text-sm sm:text-base"
              />
              <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">円/月</span>
            </div>
          </div>

          {/* Investment Period */}
          <div className="space-y-2 sm:space-y-3">
            <div className="flex justify-between">
              <Label className="text-sm sm:text-base">投資期間</Label>
              <span className="text-sm font-semibold">{years}年</span>
            </div>
            <Slider
              value={[years]}
              onValueChange={(value) => setYears(value[0])}
              min={1}
              max={40}
              step={1}
              className="w-full"
            />
          </div>

          {/* Return Rate */}
          <div className="space-y-2 sm:space-y-3">
            <div className="flex justify-between">
              <Label className="text-sm sm:text-base">想定利回り（年率）</Label>
              <span className="text-sm font-semibold">{returnRate}%</span>
            </div>
            <Slider
              value={[returnRate]}
              onValueChange={(value) => setReturnRate(value[0])}
              min={1}
              max={15}
              step={0.5}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">
              ※参考: 全世界株式の過去平均リターンは約7%
            </p>
          </div>

          <Button 
            className="w-full lg:hidden" 
            size="lg"
            onClick={() => {
              // Scroll to result on mobile
              document.getElementById('result')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            計算結果を見る
          </Button>
        </CardContent>
      </Card>

      {/* Result Section */}
      <Card id="result" className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
        <CardHeader className="px-4 sm:px-6">
          <CardTitle className="flex items-center gap-2 text-primary text-lg sm:text-xl">
            <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />
            シミュレーション結果
          </CardTitle>
          <CardDescription className="text-sm">
            {years}年後の予想資産額
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
          {/* Total Value */}
          <div className="text-center p-4 sm:p-6 bg-background rounded-lg shadow-sm">
            <p className="text-xs sm:text-sm text-muted-foreground mb-2">予想資産総額</p>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
              {formatCurrency(result.totalValue)}
            </p>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary/10 rounded-full">
              <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-secondary" />
              <span className="text-xs sm:text-sm font-semibold text-secondary">
                +{result.returnPercent}%
              </span>
            </div>
          </div>

          {/* Breakdown */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-between items-center p-3 sm:p-4 bg-background rounded-lg">
              <span className="text-xs sm:text-sm text-muted-foreground">投資元本</span>
              <span className="text-sm sm:text-base font-semibold">{formatCurrency(result.totalInvestment)}</span>
            </div>
            <div className="flex justify-between items-center p-3 sm:p-4 bg-secondary/10 rounded-lg">
              <span className="text-xs sm:text-sm font-semibold text-secondary">運用益</span>
              <span className="text-sm sm:text-base font-bold text-secondary">{formatCurrency(result.profit)}</span>
            </div>
          </div>

          {/* Visual Bar */}
          <div className="space-y-2">
            <div className="h-6 sm:h-8 rounded-full overflow-hidden bg-muted flex">
              <div 
                className="bg-primary transition-all duration-500"
                style={{ width: `${(result.totalInvestment / result.totalValue) * 100}%` }}
              />
              <div 
                className="bg-secondary transition-all duration-500"
                style={{ width: `${(result.profit / result.totalValue) * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>元本: {((result.totalInvestment / result.totalValue) * 100).toFixed(0)}%</span>
              <span>運用益: {((result.profit / result.totalValue) * 100).toFixed(0)}%</span>
            </div>
          </div>

          {/* Note */}
          <div className="p-3 sm:p-4 bg-accent/10 rounded-lg border border-accent/20">
            <p className="text-xs text-muted-foreground">
              ※このシミュレーション結果は、税金や手数料を考慮していない概算値です。
              実際の運用成果を保証するものではありません。
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Calculator;
