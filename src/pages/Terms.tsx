import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/5">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              利用規約
            </h1>
            
            <div className="bg-card rounded-xl shadow-lg p-6 md:p-10 space-y-8">
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">1. はじめに</h2>
                <p className="text-muted-foreground leading-relaxed">
                  本利用規約（以下「本規約」）は、当サイトが提供するサービスの利用条件を定めるものです。ユーザーは、本サービスを利用することにより、本規約に同意したものとみなされます。
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">2. サービスの内容</h2>
                <p className="text-muted-foreground leading-relaxed">
                  当サイトは、投資に関する情報提供サービスを提供しています。証券会社の比較、投資ツール、投資ガイドなどのコンテンツを通じて、ユーザーの投資判断をサポートします。
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">3. 利用資格</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  本サービスは、以下の条件を満たす方が利用できます：
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>本規約に同意していただける方</li>
                  <li>日本国内に居住している方</li>
                  <li>反社会的勢力でない方</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">4. 禁止事項</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  ユーザーは、本サービスの利用にあたり、以下の行為を行ってはなりません：
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>法令または公序良俗に違反する行為</li>
                  <li>犯罪行為に関連する行為</li>
                  <li>当サイトのサーバーやネットワークに過度な負荷をかける行為</li>
                  <li>当サイトの運営を妨害する行為</li>
                  <li>他のユーザーの個人情報を収集または蓄積する行為</li>
                  <li>不正アクセスまたは不正アクセスを試みる行為</li>
                  <li>当サイトのコンテンツを無断で複製、転載、改変する行為</li>
                  <li>その他、当サイトが不適切と判断する行為</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">5. 知的財産権</h2>
                <p className="text-muted-foreground leading-relaxed">
                  当サイトのコンテンツ（文章、画像、プログラムなど）に関する知的財産権は、当サイトまたは正当な権利者に帰属します。ユーザーは、事前の書面による許可なく、これらのコンテンツを複製、転載、改変することはできません。
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">6. 免責事項</h2>
                <p className="text-muted-foreground leading-relaxed">
                  当サイトは、提供する情報の正確性、完全性、有用性について、いかなる保証も行いません。また、本サービスの利用により生じた損害について、当サイトは一切の責任を負いません。詳細は免責事項をご確認ください。
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">7. サービスの変更・中断・終了</h2>
                <p className="text-muted-foreground leading-relaxed">
                  当サイトは、ユーザーへの事前通知なく、本サービスの内容を変更、中断、または終了することができます。これにより生じた損害について、当サイトは一切の責任を負いません。
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">8. 規約の変更</h2>
                <p className="text-muted-foreground leading-relaxed">
                  当サイトは、必要に応じて本規約を変更することがあります。変更後の規約は、当サイトに掲載した時点から効力を生じるものとします。
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">9. 準拠法および管轄裁判所</h2>
                <p className="text-muted-foreground leading-relaxed">
                  本規約の解釈および適用は、日本法に準拠するものとします。本サービスに関連して生じた紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">10. お問い合わせ</h2>
                <p className="text-muted-foreground leading-relaxed">
                  本規約に関するお問い合わせは、当サイトのお問い合わせフォームよりご連絡ください。
                </p>
              </section>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  最終更新日：2025年10月30日
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

export default Terms;