import { Link } from "react-router-dom";
import { ChevronLeft, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
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
              お問い合わせ
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* お問い合わせフォーム */}
              <div className="bg-gradient-to-br from-card to-card/50 border-2 hover:shadow-2xl transition-all duration-300 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">お問い合わせフォーム</h2>
                <form 
                  action="https://formspree.io/f/xvgdpkpe" 
                  method="POST"
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">お名前</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="山田太郎"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">メールアドレス</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="example@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">件名</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="お問い合わせ内容"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">メッセージ</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="お問い合わせ内容を詳しくご記入ください"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-6 rounded-md hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 transform hover:scale-105"
                  >
                    送信する
                  </button>
                </form>
              </div>

              {/* 連絡先情報 */}
              <div>
                <div className="bg-gradient-to-br from-card to-card/50 border-2 hover:shadow-2xl transition-all duration-300 p-8 rounded-lg mb-8">
                  <h2 className="text-2xl font-bold mb-6">連絡先情報</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-accent/20 p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">メールアドレス</h3>
                        <p className="text-muted-foreground">uservalue2021@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-accent/20 p-3 rounded-full mr-4">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">電話番号</h3>
                        <p className="text-muted-foreground">044-400-2258</p>
                        <p className="text-sm text-muted-foreground mt-1">受付時間: 平日 10:00-18:00</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-accent/20 p-3 rounded-full mr-4">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">所在地</h3>
                        <p className="text-muted-foreground">神奈川県秦野市渋沢</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-card to-card/50 border-2 hover:shadow-2xl transition-all duration-300 p-8 rounded-lg">
                  <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-accent/10 rounded-lg">
                      <h3 className="font-semibold mb-2">Q. 投資アドバイスを教えていただけますか？</h3>
                      <p className="text-muted-foreground">
                        当サイトは情報提供のみを行い、個別の投資アドバイスは提供しておりません。
                        投資に際しては、ご自身の判断でお願いいたします。
                      </p>
                    </div>
                    
                    <div className="p-4 bg-accent/10 rounded-lg">
                      <h3 className="font-semibold mb-2">Q. 記事の内容について質問があります</h3>
                      <p className="text-muted-foreground">
                        記事に関するご質問は、お問い合わせフォームよりご連絡ください。
                        できる限りご回答させていただきます。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 更新日 */}
                <div className="pt-6 border-t border-border mt-8">
                  <p className="text-sm text-muted-foreground text-right">
                    最終更新日：2025年10月30日
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;