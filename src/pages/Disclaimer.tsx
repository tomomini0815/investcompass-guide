import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AlertCircle } from "lucide-react";

const Disclaimer = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/5">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              免責事項
            </h1>
            
            <div className="bg-card rounded-xl shadow-lg p-6 md:p-10 space-y-8">
              <div className="flex items-start gap-4 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">重要なお知らせ</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    当サイトで提供する情報は、投資判断の参考情報として提供するものであり、投資の勧誘を目的としたものではありません。投資に関する最終的な判断は、必ずご自身の責任において行ってください。
                  </p>
                </div>
              </div>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">1. 情報の正確性について</h2>
                <p className="text-muted-foreground leading-relaxed">
                  当サイトは、掲載する情報について正確性を期すよう努めていますが、その完全性、正確性、有用性、安全性等について、いかなる保証も行うものではありません。情報の誤りや古い情報が含まれる可能性がありますので、必ず公式サイト等で最新の情報をご確認ください。
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">2. 投資判断について</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  当サイトで提供する情報は、投資判断の参考情報として提供するものです：
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>投資の最終判断は、必ずご自身の責任において行ってください</li>
                  <li>投資にはリスクが伴い、元本割れの可能性があります</li>
                  <li>過去の実績は将来の成果を保証するものではありません</li>
                  <li>個別の証券会社や金融商品を推奨するものではありません</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">3. 損害に対する責任</h2>
                <p className="text-muted-foreground leading-relaxed">
                  当サイトの情報を利用したことにより生じた、いかなる損害（直接的、間接的を問わず）についても、当サイトは一切の責任を負いません。これには以下が含まれますが、これらに限定されません：
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-3">
                  <li>投資による損失</li>
                  <li>情報の誤りによる損害</li>
                  <li>サイトの利用不能による損害</li>
                  <li>第三者による不正アクセス等による損害</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">4. 外部リンクについて</h2>
                <p className="text-muted-foreground leading-relaxed">
                  当サイトからリンクされている外部サイトの内容について、当サイトは一切の責任を負いません。外部サイトの利用については、各サイトの利用規約等をご確認ください。
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">5. アフィリエイトについて</h2>
                <p className="text-muted-foreground leading-relaxed">
                  当サイトは、一部のコンテンツにアフィリエイトリンクを含んでいます。これらのリンクから商品やサービスをご利用いただいた場合、当サイトは紹介料を受け取る場合があります。ただし、これにより追加の費用が発生することはありません。
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">6. 金融商品取引業者ではない旨</h2>
                <p className="text-muted-foreground leading-relaxed">
                  当サイトは、金融商品取引業者ではありません。金融商品の売買、仲介、媒介等の業務は行っておりません。具体的な金融商品の購入や投資判断については、必ず金融商品取引業者にご相談ください。
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">7. サービスの中断・終了</h2>
                <p className="text-muted-foreground leading-relaxed">
                  当サイトは、事前の予告なく、サービスの内容を変更、中断、または終了する場合があります。これにより生じた損害について、当サイトは一切の責任を負いません。
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">8. 免責事項の変更</h2>
                <p className="text-muted-foreground leading-relaxed">
                  当サイトは、必要に応じて本免責事項を変更することがあります。変更後の免責事項は、当サイトに掲載した時点から効力を生じるものとします。
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">9. お問い合わせ</h2>
                <p className="text-muted-foreground leading-relaxed">
                  本免責事項に関するお問い合わせは、当サイトのお問い合わせフォームよりご連絡ください。
                </p>
              </section>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  最終更新日：2025年1月
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Disclaimer;
