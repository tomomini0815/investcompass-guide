import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Coins, Lightbulb, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CryptoReturn = () => {
  const [purchasePrice, setPurchasePrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [capitalGain, setCapitalGain] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);

  const calculate = () => {
    const purchase = parseFloat(purchasePrice) || 0;
    const sell = parseFloat(sellPrice) || 0;
    const qty = parseFloat(quantity) || 0;
    
    const gain = (sell - purchase) * qty;
    const returnPercent = purchase !== 0 ? ((sell - purchase) / purchase) * 100 : 0;
    
    setCapitalGain(gain);
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
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondary/5 animate-fade-in" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Badge variant="secondary" className="mb-6 px-6 py-2 text-sm font-semibold animate-fade-in hover:scale-105 transition-transform">
              仮想通貨
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent animate-fade-in">
              仮想通貨リターン計算機
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              仮想通貨投資のリターンとリスクをシミュレーション
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-accent/20 via-accent/10 to-secondary/10 p-8 flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Coins className="h-20 w-20 text-accent mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-center relative z-10">仮想通貨</h3>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">仮想通貨のリターンとリスクを把握する</h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      仮想通貨では、価格変動によって大きなリターンを得る可能性がありますが、
                      価格変動のリスクも非常に高いです。
                      このツールを使えば、期待リターンとリスクをシミュレーションできます。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="hover:bg-accent hover:text-accent-foreground transition-colors">仮想通貨</Badge>
                      <Badge variant="outline" className="hover:bg-accent hover:text-accent-foreground transition-colors">リターン計算</Badge>
                      <Badge variant="outline" className="hover:bg-accent hover:text-accent-foreground transition-colors">リスク評価</Badge>
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
                  <Coins className="h-6 w-6 text-accent" />
                  仮想通貨リターン計算
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <Label htmlFor="purchasePrice" className="block text-sm font-medium mb-2">
                      購入時価格 (円)
                    </Label>
                    <Input
                      id="purchasePrice"
                      type="number"
                      value={purchasePrice}
                      onChange={(e) => setPurchasePrice(e.target.value)}
                      placeholder="例: 500000"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="sellPrice" className="block text-sm font-medium mb-2">
                      売却時価格 (円)
                    </Label>
                    <Input
                      id="sellPrice"
                      type="number"
                      value={sellPrice}
                      onChange={(e) => setSellPrice(e.target.value)}
                      placeholder="例: 800000"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="quantity" className="block text-sm font-medium mb-2">
                      数量
                    </Label>
                    <Input
                      id="quantity"
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="例: 0.5"
                      className="w-full"
                    />
                  </div>
                </div>
                <Button onClick={calculate} className="w-full md:w-auto">
                  計算する
                </Button>
                
                {capitalGain !== 0 && (
                  <div className="mt-6 p-6 bg-accent/10 rounded-lg">
                    <h3 className="font-bold mb-4 text-center">計算結果</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-background rounded-lg">
                        <p className="text-sm text-muted-foreground">キャピタルゲイン</p>
                        <p className="text-2xl font-bold text-accent">{capitalGain.toLocaleString()}円</p>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg border-2 border-accent/30">
                        <p className="text-sm text-muted-foreground">期待リターン</p>
                        <p className="text-2xl font-bold text-accent">{expectedReturn.toFixed(2)}%</p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Crypto Return Explanation */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">仮想通貨リターン計算の基本</h2>
              <p className="text-muted-foreground">
                仮想通貨のリターンは、価格変動によって得られるキャピタルゲインです。
              </p>
            </div>
            
            <Card className="border-2 hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-card to-card/80 mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-accent" />
                  キャピタルゲイン
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  仮想通貨の価格変動によって得られる利益です。
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-center font-mono">
                    キャピタルゲイン = (売却時価格 - 購入時価格) × 数量
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-card to-card/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Coins className="h-6 w-6 text-accent" />
                  期待リターンとリスクの計算
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold mb-4">期待リターン</h3>
                    <div className="bg-muted p-4 rounded-lg mb-4">
                      <p className="text-center font-mono">
                        期待リターン = (売却時価格 - 購入時価格) ÷ 購入時価格 × 100
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      期待リターンは、過去の価格変動や市場分析などを基に算出します。
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold mb-4">リスク（標準偏差）</h3>
                    <div className="bg-muted p-4 rounded-lg mb-4">
                      <p className="text-center font-mono">
                        リスク = 価格変動率の標準偏差
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      仮想通貨は他の資産クラスに比べてリスクが非常に高いです。
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
                    <Lightbulb className="h-6 w-6 text-accent" />
                    計算例
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold mb-2">仮想通貨情報</h3>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="p-4 bg-accent/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">通貨名</p>
                          <p className="font-bold">ビットコイン (BTC)</p>
                        </div>
                        <div className="p-4 bg-accent/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">購入時価格</p>
                          <p className="font-bold">500,000円</p>
                        </div>
                        <div className="p-4 bg-accent/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">売却時価格</p>
                          <p className="font-bold">800,000円</p>
                        </div>
                        <div className="p-4 bg-accent/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">数量</p>
                          <p className="font-bold">0.5 BTC</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-accent/10 rounded-lg">
                      <h3 className="font-bold mb-4 text-center">計算結果</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-background rounded-lg">
                          <p className="text-sm text-muted-foreground">キャピタルゲイン</p>
                          <p className="text-2xl font-bold text-accent">150,000円</p>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg border-2 border-accent/30">
                          <p className="text-sm text-muted-foreground">期待リターン</p>
                          <p className="text-2xl font-bold text-accent">60%</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        <span className="font-bold">注意:</span> 仮想通貨は価格変動が非常に大きく、
                        この計算例は過去の実績に基づくものであり、
                        未来の価格変動を保証するものではありません。
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
              <Card className="relative overflow-hidden bg-gradient-to-br from-accent/20 via-secondary/10 to-primary/20 border-2 border-accent/30 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-50" />
                <CardContent className="p-10 text-center relative z-10">
                  <div className="inline-block p-4 bg-background rounded-full mb-6 animate-pulse">
                    <Lightbulb className="h-12 w-12 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">仮想通貨のリターンをシミュレーション</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                    仮想通貨リターン計算機を使って、自分の投資計画をシミュレーションし、
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

export default CryptoReturn;