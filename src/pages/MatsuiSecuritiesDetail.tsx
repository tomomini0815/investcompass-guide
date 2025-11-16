import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CheckCircle, XCircle, Star, ArrowLeft } from "lucide-react";

const MatsuiSecuritiesDetail = () => {
  // 松井証券の基本情報
  const companyInfo = {
    name: "松井証券",
    fullName: "松井証券株式会社",
    established: "1962年4月",
    parentCompany: "松井金融グループ",
    url: "https://www.matsui.co.jp/",
    rating: 4,
  };

  // 手数料情報
  const fees = [
    {
      plan: "現物取引",
      description: "1日約定代金合計50万円まで",
      fee: "無料",
      details: "1日約定代金合計が50万円を超える場合は、超過分に0.077%（税込）"
    },
    {
      plan: "投資信託",
      description: "手数料無料",
      fee: "0円",
      details: "全銘柄で手数料無料"
    },
    {
      plan: "米国株式",
      description: "1約定につき",
      fee: "100円",
      details: "米国株ETFも同様"
    }
  ];

  // NISA情報
  const nisaInfo = {
    generalNisa: {
      name: "一般NISA",
      annualLimit: "120万円",
      nonTaxablePeriod: "5年",
      supported: true
    },
    tsumitateNisa: {
      name: "つみたてNISA",
      annualLimit: "40万円",
      nonTaxablePeriod: "20年",
      supported: true
    },
    juniorNisa: {
      name: "ジュニアNISA",
      annualLimit: "80万円",
      nonTaxablePeriod: "5年",
      supported: true
    }
  };

  // 主要特徴
  const features = [
    {
      title: "老舗ネット証券",
      description: "1962年の設立以来、証券業界のパイオニアとしての実績を持つ",
      icon: "🏆"
    },
    {
      title: "シンプルな手数料体系",
      description: "1日50万円までの現物手数料無料で、わかりやすい料金体系",
      icon: "💰"
    },
    {
      title: "IPO取扱件数が多い",
      description: "業界トップクラスのIPO取扱件数で、新規株式にアクセスしやすい",
      icon: "📈"
    },
    {
      title: "低コスト",
      description: "手数料水準が低く、コストを抑えながら投資可能",
      icon: "📉"
    }
  ];

  // 取引ツール情報
  const tradingTools = [
    {
      name: "松井証券 日本株アプリ",
      description: "松井証券の主力取引ツール。自由にカスタマイズ可能なオリジナル取引環境を実現します。",
      image: "/images/securities/matsui-japan-stock-app.png"
    },
    {
      name: "マーケットラボ米国株",
      description: "米国株に特化した投資情報ツール。銘柄選定や売買判断をサポートします。",
      image: "/images/securities/matsui-marketlab-usa.png"
    }
  ];

  // 評価を星アイコンで表示するコンポーネント
  const RatingStars = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-gradient-to-r from-muted/50 to-muted/30 py-4 border-b">
          <div className="container mx-auto px-4">
            <Link 
              to="/comparison" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
              証券会社比較に戻る
            </Link>
          </div>
        </div>

        {/* Company Header */}
        <section className="py-12 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm">
                国内証券会社
              </Badge>
              <h1 className="text-4xl font-bold mb-4">{companyInfo.name}</h1>
              <p className="text-lg text-muted-foreground mb-6">{companyInfo.fullName}</p>
              <div className="flex justify-center items-center gap-4">
                <RatingStars rating={companyInfo.rating} />
                <span className="text-lg font-semibold">{companyInfo.rating}.0</span>
              </div>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    会社概要
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">基本情報</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground">会社名</span>
                        <span>{companyInfo.fullName}</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground">設立</span>
                        <span>{companyInfo.established}</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground">親会社</span>
                        <span>{companyInfo.parentCompany}</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">評価</h3>
                    <div className="flex items-center gap-4 mb-4">
                      <RatingStars rating={companyInfo.rating} />
                      <span className="text-2xl font-bold">{companyInfo.rating}.0/5.0</span>
                    </div>
                    <p className="text-muted-foreground">
                      松井証券は、1962年の設立以来、証券業界のパイオニアとしての実績を持つ老舗ネット証券会社です。
                      シンプルな手数料体系と低コストが特徴で、初心者から上級者まで幅広く支持されています。
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Trading Tools Image Section */}
              <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 mt-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    取引ツール
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col items-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center mb-4 overflow-hidden">
                        <img 
                          src="/images/securities/matsui-netstock-trader.png" 
                          alt="ネットストックトレーダー" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-2">ネットストックトレーダー</h3>
                      <p className="text-muted-foreground text-center">
                        松井証券の主力取引ツール。自由にカスタマイズ可能なオリジナル取引環境を実現します。
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center mb-4 overflow-hidden">
                        <img 
                          src="/images/securities/matsui-marketlab-usa.png" 
                          alt="マーケットラボ米国株" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-2">マーケットラボ米国株</h3>
                      <p className="text-muted-foreground text-center">
                        米国株に特化した投資情報ツール。銘柄選定や売買判断をサポートします。
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Fee Structure */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">手数料体系</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  松井証券はシンプルで低コストな手数料体系を提供しています。
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {fees.map((fee, index) => (
                  <Card key={index} className="shadow-md border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold">{fee.plan}</CardTitle>
                      <p className="text-sm text-muted-foreground">{fee.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center mb-4">
                        <span className="text-2xl font-bold text-primary">{fee.fee}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{fee.details}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* NISA Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">NISA対応状況</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  松井証券はすべてのNISA制度に対応しており、お得に資産運用できます。
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.values(nisaInfo).map((nisa, index) => (
                  <Card key={index} className="shadow-md border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold flex items-center justify-between">
                        {nisa.name}
                        {nisa.supported ? (
                          <CheckCircle className="h-6 w-6 text-green-500" />
                        ) : (
                          <XCircle className="h-6 w-6 text-red-500" />
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">年間非課税投資枠</span>
                          <span className="font-semibold">{nisa.annualLimit}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">非課税期間</span>
                          <span className="font-semibold">{nisa.nonTaxablePeriod}</span>
                        </div>
                        <div className="pt-3">
                          {nisa.supported ? (
                            <Badge variant="secondary" className="bg-green-100 text-green-800">
                              対応しています
                            </Badge>
                          ) : (
                            <Badge variant="secondary" className="bg-red-100 text-red-800">
                              未対応
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">主要な特徴</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  松井証券が選ばれる理由をご紹介します。
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="shadow-md border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold flex items-center gap-3">
                        <span className="text-2xl">{feature.icon}</span>
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trading Tools */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">取引ツール</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  松井証券が提供する高機能な取引ツールをご紹介します。
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {tradingTools.map((tool, index) => (
                  <Card key={index} className="shadow-md border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold">{tool.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0">
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                            <span className="text-gray-500 text-sm">取引ツール画像</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-muted-foreground mb-4">{tool.description}</p>
                          <Button asChild size="sm" variant="outline">
                            <a href={companyInfo.url} target="_blank" rel="noopener noreferrer">
                              ツール詳細を見る
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-lg border-0 bg-gradient-to-br from-primary/10 to-secondary/10 text-center">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">松井証券の公式サイトへ</h2>
                  <p className="text-muted-foreground mb-6">
                    詳しい情報や口座開設については、松井証券の公式サイトをご確認ください。
                  </p>
                  <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all">
                    <a href={companyInfo.url} target="_blank" rel="noopener noreferrer">
                      公式サイトへ
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
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

export default MatsuiSecuritiesDetail;