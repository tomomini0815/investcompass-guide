import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const Legal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ヘッダー */}
      <div className="bg-gradient-to-r from-muted/50 to-muted/30 py-4 border-b">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            <ChevronLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
            ホームに戻る
          </Link>
        </div>
      </div>

      {/* メインコンテンツ */}
      <main className="flex-1">
        <section className="relative py-20 container mx-auto px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondary/5 animate-fade-in"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-block mb-6 px-6 py-2 text-sm font-semibold animate-fade-in hover:scale-105 transition-transform bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
              法律情報
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent animate-fade-in">
              特定商取引法に基づく表記
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
              当サイトのサービスに関する特定商取引法に基づく表記です
            </p>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-card to-card/50 border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-8 rounded-lg">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold mb-6 text-center">事業者情報</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="p-6 bg-accent/10 rounded-lg">
                      <h3 className="font-bold mb-2">事業者名</h3>
                      <p>投資総合ガイド運営チーム</p>
                    </div>
                    
                    <div className="p-6 bg-accent/10 rounded-lg">
                      <h3 className="font-bold mb-2">所在地</h3>
                      <p>東京都渋谷区</p>
                    </div>
                    
                    <div className="p-6 bg-accent/10 rounded-lg">
                      <h3 className="font-bold mb-2">電話番号</h3>
                      <p>03-XXXX-XXXX</p>
                    </div>
                    
                    <div className="p-6 bg-accent/10 rounded-lg">
                      <h3 className="font-bold mb-2">メールアドレス</h3>
                      <p>info@invest-navi.com</p>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-6 text-center mt-12">サービス内容</h2>
                  
                  <div className="mb-8 p-6 bg-accent/10 rounded-lg">
                    <h3 className="font-bold mb-2">サービス名</h3>
                    <p>投資総合ガイド</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="p-6 bg-accent/10 rounded-lg">
                      <h3 className="font-bold mb-2">販売価格</h3>
                      <p>無料</p>
                    </div>
                    
                    <div className="p-6 bg-accent/10 rounded-lg">
                      <h3 className="font-bold mb-2">代金以外の必要料金</h3>
                      <p>インターネット接続料金等（ユーザー負担）</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="p-6 bg-accent/10 rounded-lg">
                      <h3 className="font-bold mb-2">申込有効期限</h3>
                      <p>特になし</p>
                    </div>
                    
                    <div className="p-6 bg-accent/10 rounded-lg">
                      <h3 className="font-bold mb-2">支払方法</h3>
                      <p>当サイトは情報提供サービスであり、商品の販売は行っていません</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="p-6 bg-accent/10 rounded-lg">
                      <h3 className="font-bold mb-2">引き渡し時期</h3>
                      <p>即時</p>
                    </div>
                    
                    <div className="p-6 bg-accent/10 rounded-lg">
                      <h3 className="font-bold mb-2">返品・交換について</h3>
                      <p>デジタルコンテンツの性質上、返品・交換はできません</p>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-6 text-center mt-12">免責事項</h2>
                  
                  <div className="mb-8 p-6 bg-accent/10 rounded-lg">
                    <p>
                      当サイトに掲載されている情報の正確性には万全を期していますが、
                      利用者が当サイトの情報を用いて行う一切の行為に関しては、
                      一切の責任を負いません。投資に係る最終的な判断は、
                      お客様ご自身の責任において行ってください。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Legal;