import { Link } from "react-router-dom";
import { ChevronLeft, Users, Target, Eye } from "lucide-react";

const Company = () => {
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
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              運営会社情報
            </h1>
            
            <div className="bg-card rounded-xl shadow-lg p-6 md:p-10 space-y-8">
              <div className="bg-gradient-to-br from-card to-card/50 border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-8 rounded-lg mb-12">
                <h2 className="text-2xl font-bold mb-6 text-center">会社概要</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="p-6 bg-accent/10 rounded-lg">
                    <h3 className="font-bold mb-2">会社名</h3>
                    <p>株式会社ユーザーバリュー</p>
                  </div>
                  
                  <div className="p-6 bg-accent/10 rounded-lg">
                    <h3 className="font-bold mb-2">設立</h3>
                    <p>2021年2月</p>
                  </div>
                  
                  <div className="p-6 bg-accent/10 rounded-lg">
                    <h3 className="font-bold mb-2">所在地</h3>
                    <p>神奈川県秦野市渋沢</p>
                  </div>
                  
                  <div className="p-6 bg-accent/10 rounded-lg">
                    <h3 className="font-bold mb-2">資本金</h3>
                    <p>500万円</p>
                  </div>
                  
                  <div className="p-6 bg-accent/10 rounded-lg">
                    <h3 className="font-bold mb-2">事業内容</h3>
                    <p>投資情報提供サービス</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gradient-to-br from-card to-card/50 border-2 hover:shadow-2xl transition-all duration-300 p-8 rounded-lg text-center">
                  <div className="bg-accent/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">ミッション</h3>
                  <p className="text-muted-foreground">
                    投資初心者から中級者まで、信頼性の高い情報提供を通じて、
                    皆様の資産形成をサポートすることを目的としています。
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-card to-card/50 border-2 hover:shadow-2xl transition-all duration-300 p-8 rounded-lg text-center">
                  <div className="bg-accent/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Target className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">ビジョン</h3>
                  <p className="text-muted-foreground">
                    信頼される投資情報プラットフォームを目指し、
                    透明性と専門性を重視したコンテンツ提供を続けます。
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-card to-card/50 border-2 hover:shadow-2xl transition-all duration-300 p-8 rounded-lg text-center">
                  <div className="bg-accent/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Eye className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">バリュー</h3>
                  <p className="text-muted-foreground">
                    客観性・透明性・信頼性を重視し、
                    ユーザーの利益を最優先に考えた情報提供を心がけています。
                  </p>
                </div>
              </div>
              
              {/* チーム紹介セクションを非表示
              <div className="bg-gradient-to-br from-card to-card/50 border-2 hover:shadow-2xl transition-all duration-300 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">チーム紹介</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-6">
                    当チームは、金融・投資分野に精通したスペシャリストたちで構成されており、
                    各メンバーがそれぞれの専門分野において豊富な知識と経験を持っています。
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-6 bg-accent/10 rounded-lg">
                      <h3 className="font-bold mb-2">金融コンサルタント</h3>
                      <p>
                        多くの企業や個人へのファイナンシャルプランニングの経験を持つ。
                        資産運用・保険・税金など、幅広い知識を有する。
                      </p>
                    </div>
                    
                    <div className="p-6 bg-accent/10 rounded-lg">
                      <h3 className="font-bold mb-2">投資アナリスト</h3>
                      <p>
                        株式投資・暗号資産・債券など、多様な投資商品に精通。
                        マクロ経済の動向を読み、的確な分析を行う。
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-accent/10 rounded-lg">
                    <h3 className="font-bold mb-2">コンテンツエディター</h3>
                    <p>
                      投資初心者にもわかりやすいよう、専門用語をやさしく解説。
                      情報の正確性とわかりやすさを両立させる編集を担当。
                    </p>
                  </div>
                </div>
              </div>
              */}
              
              {/* 更新日 */}
              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-right">
                  最終更新日：2025年10月30日
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Company;