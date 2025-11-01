import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, PieChart, Lightbulb, Target } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SavingCalculator = () => {
  const [targetAmount, setTargetAmount] = useState("");
  const [years, setYears] = useState("");
  const [annualReturn, setAnnualReturn] = useState("");
  const [monthlyAmount, setMonthlyAmount] = useState(0);

  const calculate = () => {
    const target = parseFloat(targetAmount) || 0;
    const yearCount = parseFloat(years) || 0;
    const annualRate = parseFloat(annualReturn) || 0;
    
    // 月利と月数を計算
    const monthlyRate = annualRate / 100 / 12;
    const months = yearCount * 12;
    
    // 積立額を計算
    if (monthlyRate > 0 && months > 0) {
      const amount = target * monthlyRate / (Math.pow(1 + monthlyRate, months) - 1);
      setMonthlyAmount(amount);
    } else {
      setMonthlyAmount(0);
    }
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
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-fade-in" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Badge variant="secondary" className="mb-6 px-6 py-2 text-sm font-semibold animate-fade-in hover:scale-105 transition-transform">
              基礎計算
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in">
              積立額計算ツール
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              目標額に応じた最適な積立額と期間を計算
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/10 p-8 flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <PieChart className="h-20 w-20 text-primary mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-center relative z-10">積立計算</h3>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">目標に向かって着実に資産を積み上げる</h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      積立投資は、毎月一定額を投資信託などに投資する手法です。
                      ドルコスト平均法により、市場のタイミングを気にすることなく、
                      長期的な資産形成が可能です。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">積立投資</Badge>
                      <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">ドルコスト平均法</Badge>
                      <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">資産形成</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12 border-2 hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-card to-card/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-6 w-6 text-primary" />
                  積立額計算
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <Label htmlFor="targetAmount" className="block text-sm font-medium mb-2">
                      目標額 (円)
                    </Label>
                    <Input
                      id="targetAmount"
                      type="number"
                      value={targetAmount}
                      onChange={(e) => setTargetAmount(e.target.value)}
                      placeholder="例: 10000000"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="years" className="block text-sm font-medium mb-2">
                      期間 (年)
                    </Label>
                    <Input
                      id="years"
                      type="number"
                      value={years}
                      onChange={(e) => setYears(e.target.value)}
                      placeholder="例: 20"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="annualReturn" className="block text-sm font-medium mb-2">
                      期待リターン (年利%)
                    </Label>
                    <Input
                      id="annualReturn"
                      type="number"
                      value={annualReturn}
                      onChange={(e) => setAnnualReturn(e.target.value)}
                      placeholder="例: 5"
                      className="w-full"
                    />
                  </div>
                </div>
                <Button onClick={calculate} className="w-full md:w-auto">
                  計算する
                </Button>
                
                {monthlyAmount > 0 && (
                  <div className="mt-6 p-6 bg-primary/10 rounded-lg">
                    <h3 className="font-bold mb-4 text-center">計算結果</h3>
                    <div className="text-center p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg border-2 border-primary/30">
                      <p className="text-sm text-muted-foreground">毎月の積立額</p>
                      <p className="text-3xl font-bold text-primary">{monthlyAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })}円</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Calculator Explanation */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">積立額計算ツールの使い方</h2>
              <p className="text-muted-foreground">
                目標額、運用期間、期待リターンを入力すると、毎月の積立額を計算します。
              </p>
            </div>
            
            <Card className="mb-12 border-2 hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-card to-card/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-primary" />
                  計算式
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-6 rounded-lg">
                  <p className="text-center text-lg font-mono">
                    毎月の積立額 = 目標額 × 月利 / ((1 + 月利)<sup>月数</sup> - 1)
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">
                    ここで、月利 = 年利 ÷ 12、月数 = 年数 × 12
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-card to-card/80">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-6 w-6 text-primary" />
                    使い方のポイント
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">1.</span>
                      <span>目標額を明確に設定しましょう</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">2.</span>
                      <span>無理のない範囲で継続できる金額を目標にします</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">3.</span>
                      <span>期待リターンは過去の実績などを参考に設定します</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">4.</span>
                      <span>定期的に見直し、必要に応じて調整します</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-card to-card/80">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-6 w-6 text-primary" />
                    計算例
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold">目標: 1,000万円</p>
                      <p className="text-sm text-muted-foreground">期間: 20年 (240ヶ月)</p>
                      <p className="text-sm text-muted-foreground">期待リターン: 年利5%</p>
                    </div>
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <p className="text-center text-xl font-bold text-primary">
                        必要な毎月の積立額: 約29,000円
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 border-2 border-primary/30 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50" />
                <CardContent className="p-10 text-center relative z-10">
                  <div className="inline-block p-4 bg-background rounded-full mb-6 animate-pulse">
                    <Lightbulb className="h-12 w-12 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">積立投資で目標を実現しましょう</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                    積立額計算ツールを使って自分の投資計画を立て、
                    着実に資産を積み上げていきましょう。
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="text-lg px-8 hover:scale-105 transition-transform">
                      <Link to="/tools">
                        他のツールを見る →
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="text-lg px-8 hover:scale-105 transition-transform">
                      <Link to="/#診断">
                        投資診断を始める
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

export default SavingCalculator;