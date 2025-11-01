import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TrendingUp, Lightbulb, BarChart3 } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const StockReturn = () => {
  const [purchasePrice, setPurchasePrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [dividend, setDividend] = useState("");
  const [capitalGain, setCapitalGain] = useState(0);
  const [incomeGain, setIncomeGain] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);

  const calculate = () => {
    const purchase = parseFloat(purchasePrice) || 0;
    const sell = parseFloat(sellPrice) || 0;
    const div = parseFloat(dividend) || 0;
    
    const gain = sell - purchase;
    const returnPercent = purchase !== 0 ? ((gain + div) / purchase) * 100 : 0;
    
    setCapitalGain(gain);
    setIncomeGain(div);
    setExpectedReturn(returnPercent);
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
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 animate-fade-in" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Badge variant="secondary" className="mb-6 px-6 py-2 text-sm font-semibold animate-fade-in hover:scale-105 transition-transform">
              株式投資
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent animate-fade-in">
              株式リターン計算機
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              株式投資のリターンとリスクを計算するシミュレーションツール
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-secondary/20 via-secondary/10 to-primary/10 p-8 flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <TrendingUp className="h-20 w-20 text-secondary mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-center relative z-10">株式投資</h3>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">株式投資のリターンとリスクを把握する</h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      株式投資では、株価の上昇や配当金によってリターンを得ますが、
                      価格変動のリスクも伴います。
                      このツールを使えば、期待リターンとリスクをシミュレーションできます。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="hover:bg-secondary hover:text-secondary-foreground transition-colors">株式投資</Badge>
                      <Badge variant="outline" className="hover:bg-secondary hover:text-secondary-foreground transition-colors">リターン計算</Badge>
                      <Badge variant="outline" className="hover:bg-secondary hover:text-secondary-foreground transition-colors">リスク評価</Badge>
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
            <Card className="border-2 hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-card to-card/80 mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                  株式リターン計算
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <Label htmlFor="purchasePrice" className="block text-sm font-medium mb-2">
                      購入価格 (円)
                    </Label>
                    <Input
                      id="purchasePrice"
                      type="number"
                      value={purchasePrice}
                      onChange={(e) => setPurchasePrice(e.target.value)}
                      placeholder="例: 5000"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="sellPrice" className="block text-sm font-medium mb-2">
                      売却価格 (円)
                    </Label>
                    <Input
                      id="sellPrice"
                      type="number"
                      value={sellPrice}
                      onChange={(e) => setSellPrice(e.target.value)}
                      placeholder="例: 6000"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="dividend" className="block text-sm font-medium mb-2">
                      年間配当金 (円)
                    </Label>
                    <Input
                      id="dividend"
                      type="number"
                      value={dividend}
                      onChange={(e) => setDividend(e.target.value)}
                      placeholder="例: 100"
                      className="w-full"
                    />
                  </div>
                </div>
                <Button onClick={calculate} className="w-full md:w-auto">
                  計算する
                </Button>
                
                {(capitalGain !== 0 || incomeGain !== 0) && (
                  <div className="mt-6 p-6 bg-secondary/10 rounded-lg">
                    <h3 className="font-bold mb-4 text-center">計算結果</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-background rounded-lg">
                        <p className="text-sm text-muted-foreground">キャピタルゲイン</p>
                        <p className="text-2xl font-bold text-secondary">{capitalGain.toLocaleString()}円</p>
                      </div>
                      <div className="text-center p-4 bg-background rounded-lg">
                        <p className="text-sm text-muted-foreground">インカムゲイン</p>
                        <p className="text-2xl font-bold text-secondary">{incomeGain.toLocaleString()}円</p>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg border-2 border-secondary/30">
                        <p className="text-sm text-muted-foreground">期待リターン</p>
                        <p className="text-2xl font-bold text-secondary">{expectedReturn.toFixed(2)}%</p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Stock Return Explanation */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">株式リターン計算の基本</h2>
              <p className="text-muted-foreground">
                株式投資のリターンは、キャピタルゲインとインカムゲインに分かれます。
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-card to-card/80">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-secondary" />
                    キャピタルゲイン
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    株価の上昇によって得られる利益です。
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-center font-mono">
                      キャピタルゲイン = 売却価格 - 購入価格
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-card to-card/80">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-6 w-6 text-secondary" />
                    インカムゲイン
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    配当金や株主優待などによって得られる利益です。
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-center font-mono">
                      インカムゲイン = 配当金 + 株主優待
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="border-2 hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-card to-card/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-6 w-6 text-secondary" />
                  期待リターンとリスクの計算
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold mb-4">期待リターン</h3>
                    <div className="bg-muted p-4 rounded-lg mb-4">
                      <p className="text-center font-mono">
                        期待リターン = (キャピタルゲイン + インカムゲイン) ÷ 購入価格 × 100
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      期待リターンは、過去の実績やアナリスト予想などを基に算出します。
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold mb-4">リスク（標準偏差）</h3>
                    <div className="bg-muted p-4 rounded-lg mb-4">
                      <p className="text-center font-mono">
                        リスク = 株価の変動率の標準偏差
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      リスクが高いほど、リターンのばらつきが大きくなります。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Example Section */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-card to-card/80">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-6 w-6 text-secondary" />
                    計算例
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold mb-2">株式情報</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-secondary/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">銘柄名</p>
                          <p className="font-bold">XYZ株式会社</p>
                        </div>
                        <div className="p-4 bg-secondary/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">購入価格</p>
                          <p className="font-bold">5,000円</p>
                        </div>
                        <div className="p-4 bg-secondary/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">売却価格</p>
                          <p className="font-bold">6,000円</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-bold mb-2">配当情報</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-secondary/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">年間配当金</p>
                          <p className="font-bold">100円</p>
                        </div>
                        <div className="p-4 bg-secondary/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">保有期間</p>
                          <p className="font-bold">1年</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-secondary/10 rounded-lg">
                      <h3 className="font-bold mb-4 text-center">計算結果</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-background rounded-lg">
                          <p className="text-sm text-muted-foreground">キャピタルゲイン</p>
                          <p className="text-2xl font-bold text-secondary">1,000円</p>
                        </div>
                        <div className="text-center p-4 bg-background rounded-lg">
                          <p className="text-sm text-muted-foreground">インカムゲイン</p>
                          <p className="text-2xl font-bold text-secondary">100円</p>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg border-2 border-secondary/30">
                          <p className="text-sm text-muted-foreground">期待リターン</p>
                          <p className="text-2xl font-bold text-secondary">22%</p>
                        </div>
                      </div>
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
              <Card className="relative overflow-hidden bg-gradient-to-br from-secondary/20 via-primary/10 to-accent/20 border-2 border-secondary/30 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-transparent opacity-50" />
                <CardContent className="p-10 text-center relative z-10">
                  <div className="inline-block p-4 bg-background rounded-full mb-6 animate-pulse">
                    <Lightbulb className="h-12 w-12 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">株式投資のリターンをシミュレーション</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                    株式リターン計算機を使って、自分の投資計画をシミュレーションし、
                    より良い投資判断を行いましょう。
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

export default StockReturn;