import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/5">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              プライバシーポリシー
            </h1>
            
            <div className="bg-card rounded-xl shadow-lg p-6 md:p-10 space-y-8">
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">1. 個人情報の取り扱いについて</h2>
                <p className="text-muted-foreground leading-relaxed">
                  当サイトは、ユーザーの個人情報を適切に保護し、プライバシーを尊重することを重要な責務と考えています。本プライバシーポリシーは、当サイトがどのように個人情報を収集、使用、保護するかを説明するものです。
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">2. 収集する情報</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  当サイトでは、以下の情報を収集する場合があります：
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>アクセスログ情報（IPアドレス、ブラウザ情報、アクセス日時など）</li>
                  <li>Cookieによる情報</li>
                  <li>お問い合わせフォームから送信された情報</li>
                  <li>その他、サービス提供に必要な情報</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">3. 情報の利用目的</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  収集した個人情報は、以下の目的で利用します：
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>サービスの提供、維持、改善</li>
                  <li>ユーザーサポートの提供</li>
                  <li>サイトの利用状況の分析</li>
                  <li>お問い合わせへの対応</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">4. Cookieについて</h2>
                <p className="text-muted-foreground leading-relaxed">
                  当サイトでは、より良いサービスを提供するためにCookieを使用しています。Cookieは、ユーザーのブラウザに保存される小さなテキストファイルです。ユーザーはブラウザの設定によりCookieを無効にすることができますが、一部の機能が利用できなくなる場合があります。
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">5. 第三者への情報提供</h2>
                <p className="text-muted-foreground leading-relaxed">
                  当サイトは、法令に基づく場合を除き、ユーザーの個人情報を事前の同意なく第三者に提供することはありません。ただし、以下の場合は例外とします：
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-3">
                  <li>ユーザーの同意がある場合</li>
                  <li>法令に基づく場合</li>
                  <li>人の生命、身体または財産の保護のために必要がある場合</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">6. アクセス解析ツール</h2>
                <p className="text-muted-foreground leading-relaxed">
                  当サイトでは、Googleアナリティクスなどのアクセス解析ツールを使用しています。これらのツールはCookieを使用してユーザーの行動を分析しますが、個人を特定する情報は含まれません。
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">7. セキュリティ</h2>
                <p className="text-muted-foreground leading-relaxed">
                  当サイトは、個人情報の漏洩、紛失、改ざんを防止するため、適切なセキュリティ対策を実施しています。
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">8. プライバシーポリシーの変更</h2>
                <p className="text-muted-foreground leading-relaxed">
                  当サイトは、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当サイトに掲載した時点から効力を生じるものとします。
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">9. お問い合わせ</h2>
                <p className="text-muted-foreground leading-relaxed">
                  本プライバシーポリシーに関するお問い合わせは、当サイトのお問い合わせフォームよりご連絡ください。
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

export default Privacy;
