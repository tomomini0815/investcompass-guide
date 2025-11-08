import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, ArrowLeft, CheckCircle2, RotateCcw, X } from "lucide-react";

const InvestmentDiagnostic = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const [result, setResult] = useState<string | null>(null);

  const questions = [
    {
      question: "投資経験はどのくらいありますか?",
      options: [
        { value: "beginner", label: "未経験・初心者" },
        { value: "intermediate", label: "1〜3年程度" },
        { value: "advanced", label: "3年以上" },
      ],
    },
    {
      question: "投資の主な目的は何ですか?",
      options: [
        { value: "retirement", label: "老後資金の準備" },
        { value: "wealth", label: "資産を増やしたい" },
        { value: "education", label: "教育資金の準備" },
      ],
    },
    {
      question: "リスクに対する考え方は?",
      options: [
        { value: "conservative", label: "安定重視・リスク回避" },
        { value: "moderate", label: "バランス型" },
        { value: "aggressive", label: "リターン重視・リスク許容" },
      ],
    },
    {
      question: "現在の年齢層は?",
      options: [
        { value: "20s", label: "20代" },
        { value: "30s", label: "30代" },
        { value: "40s", label: "40代" },
        { value: "50s", label: "50代" },
        { value: "60s", label: "60代以上" },
      ],
    },
    {
      question: "現在の収入状況は?",
      options: [
        { value: "low", label: "300万円未満" },
        { value: "medium", label: "300万円〜500万円" },
        { value: "high", label: "500万円以上" },
      ],
    },
    {
      question: "投資知識のレベルは?",
      options: [
        { value: "basic", label: "基本的な知識のみ" },
        { value: "intermediate", label: "中級者レベル" },
        { value: "advanced", label: "上級者レベル" },
      ],
    },
    {
      question: "投資期間の希望は?",
      options: [
        { value: "short", label: "1〜3年" },
        { value: "medium", label: "3〜10年" },
        { value: "long", label: "10年以上" },
      ],
    },
    {
      question: "期待する年間リターンは?",
      options: [
        { value: "low", label: "3%未満" },
        { value: "medium", label: "3%〜7%" },
        { value: "high", label: "7%以上" },
      ],
    },
    {
      question: "投資にかける時間は?",
      options: [
        { value: "little", label: "月1〜2時間程度" },
        { value: "some", label: "週1〜2時間程度" },
        { value: "lot", label: "日々チェックできる" },
      ],
    },
    {
      question: "投資資金の元本保証の重要度は?",
      options: [
        { value: "high", label: "非常に重要" },
        { value: "medium", label: "ある程度重要" },
        { value: "low", label: "あまり重要ではない" },
      ],
    },
  ];

  const getRecommendation = () => {
    const answer0 = answers[0] || [];
    const answer1 = answers[1] || [];
    const answer2 = answers[2] || [];
    const answer3 = answers[3] || [];
    const answer4 = answers[4] || [];
    const answer5 = answers[5] || [];
    const answer6 = answers[6] || [];
    const answer7 = answers[7] || [];
    const answer8 = answers[8] || [];
    const answer9 = answers[9] || [];
    
    // 各質問から最初の回答のみを使用
    const firstAnswer0 = answer0.length > 0 ? answer0[0] : "";
    const firstAnswer1 = answer1.length > 0 ? answer1[0] : "";
    const firstAnswer2 = answer2.length > 0 ? answer2[0] : "";
    const firstAnswer3 = answer3.length > 0 ? answer3[0] : "";
    const firstAnswer4 = answer4.length > 0 ? answer4[0] : "";
    const firstAnswer5 = answer5.length > 0 ? answer5[0] : "";
    const firstAnswer6 = answer6.length > 0 ? answer6[0] : "";
    const firstAnswer7 = answer7.length > 0 ? answer7[0] : "";
    const firstAnswer8 = answer8.length > 0 ? answer8[0] : "";
    const firstAnswer9 = answer9.length > 0 ? answer9[0] : "";
    
    if (firstAnswer0 === "beginner") {
      if (firstAnswer2 === "conservative") {
        return {
          title: "つみたてNISA + インデックス投資",
          description: "初心者で安定志向のあなたには、つみたてNISAでインデックスファンドへの積立投資がおすすめです。",
          features: [
            "月100円から始められる",
            "非課税枠を活用",
            "長期分散投資でリスク軽減",
            "具体的な商品例：eMAXIS Slim 全世界株式（オールカントリー）",
            "投資戦略：毎月10日に自動積立設定を推奨"
          ],
          industryAdvice: [
            {
              industry: "株式投資",
              advice: "楽天証券やSBI証券など、手数料が安く初心者向けの証券会社で口座を開設しましょう。eMAXIS Slim 全世界株式（オールカントリー）を毎月1万円で積立投資します。",
              buttonLabel: "証券会社を比較する",
              buttonLink: "/comparison"
            },
            {
              industry: "投資信託",
              advice: "つみたてNISA枠を活用して、eMAXIS Slim 全世界株式（オールカントリー）を毎月積立投資します。分散投資によりリスクを軽減できます。",
              buttonLabel: "証券会社を比較する",
              buttonLink: "/comparison"
            }
          ],
          selectedAnswers: { 
            answer0: [firstAnswer0], 
            answer1: [firstAnswer1], 
            answer2: [firstAnswer2],
            answer3: [firstAnswer3],
            answer4: [firstAnswer4],
            answer5: [firstAnswer5],
            answer6: [firstAnswer6],
            answer7: [firstAnswer7],
            answer8: [firstAnswer8],
            answer9: [firstAnswer9]
          }
        };
      }
      return {
        title: "NISA + バランス型投資信託",
        description: "初心者のあなたには、NISAを活用したバランス型投資信託がおすすめです。",
        features: [
          "年120万円の非課税枠",
          "株式と債のバランス投資",
          "プロによる運用",
          "具体的な商品例：ニッセイ・バランスファンド",
          "投資戦略：毎月5日に自動積立設定を推奨"
        ],
        industryAdvice: [
          {
            industry: "株式投資",
            advice: "SBI証券や楽天証券などでNISA口座を開設し、ニッセイ・バランスファンドを毎月1万円で積立投資します。株式と債券のバランスにより、リスクとリターンのバランスが取れています。",
            buttonLabel: "証券会社を比較する",
            buttonLink: "/comparison"
          },
          {
            industry: "投資信託",
            advice: "NISA枠を活用して、ニッセイ・バランスファンドを毎月積立投資します。プロのファンドマネージャーによる運用により、手間をかけずに資産を増やせます。",
            buttonLabel: "証券会社を比較する",
            buttonLink: "/comparison"
          }
        ],
        selectedAnswers: { 
          answer0: [firstAnswer0], 
          answer1: [firstAnswer1], 
          answer2: [firstAnswer2],
          answer3: [firstAnswer3],
          answer4: [firstAnswer4],
          answer5: [firstAnswer5],
          answer6: [firstAnswer6],
          answer7: [firstAnswer7],
          answer8: [firstAnswer8],
          answer9: [firstAnswer9]
        }
      };
    }
    
    if (firstAnswer2 === "aggressive") {
      return {
        title: "個別株投資 + 成長株戦略",
        description: "積極的なあなたには、成長性の高い個別株への投資がおすすめです。",
        features: [
          "高いリターンを狙える",
          "企業分析スキルが身につく",
          "配当金も期待できる",
          "具体的な銘柄例：ソフトバンクグループ、メルカリ",
          "投資戦略：四半期ごとの業績レビューと調整を推奨"
        ],
        industryAdvice: [
          {
            industry: "株式投資",
            advice: "SBI証券やマネックス証券などで口座を開設し、ソフトバンクグループやメルカリなどの成長株を購入します。四半期ごとに業績をレビューし、必要に応じて売買します。",
            buttonLabel: "証券会社を比較する",
            buttonLink: "/comparison"
          },
          {
            industry: "FX",
            advice: "積極的な投資家には、為替相場の変動を活用したスキャルピングやデイトレードがおすすめです。GMOクリック証券やDMM FXなどの低スプレッドな業者を利用しましょう。",
            buttonLabel: "FX業者を比較する",
            buttonLink: "/fx-comparison"
          }
        ],
        selectedAnswers: { 
          answer0: [firstAnswer0], 
          answer1: [firstAnswer1], 
          answer2: [firstAnswer2],
          answer3: [firstAnswer3],
          answer4: [firstAnswer4],
          answer5: [firstAnswer5],
          answer6: [firstAnswer6],
          answer7: [firstAnswer7],
          answer8: [firstAnswer8],
          answer9: [firstAnswer9]
        }
      };
    }

    return {
      title: "NISA + 投資信託",
      description: "バランスの取れた投資スタイルで、着実に資産を増やしましょう。",
      features: [
        "非課税のメリット",
        "分散投資でリスク管理",
        "手間をかけずに運用",
        "具体的な商品例：楽天・全米株式インデックスファンド",
        "投資戦略：毎月15日に自動積立設定を推奨"
      ],
      industryAdvice: [
        {
          industry: "株式投資",
          advice: "SBI証券や楽天証券などでNISA口座を開設し、楽天・全米株式インデックスファンドを毎月1万円で積立投資します。米国株式の成長性と分散投資の効果を享受できます。",
          buttonLabel: "証券会社を比較する",
          buttonLink: "/comparison"
        },
        {
          industry: "投資信託",
          advice: "NISA枠を活用して、楽天・全米株式インデックスファンドを毎月積立投資します。米国株式の成長性とインデックス投資の低コストを活かせます。",
          buttonLabel: "証券会社を比較する",
          buttonLink: "/comparison"
        }
      ],
      selectedAnswers: { 
        answer0: [firstAnswer0], 
        answer1: [firstAnswer1], 
        answer2: [firstAnswer2],
        answer3: [firstAnswer3],
        answer4: [firstAnswer4],
        answer5: [firstAnswer5],
        answer6: [firstAnswer6],
        answer7: [firstAnswer7],
        answer8: [firstAnswer8],
        answer9: [firstAnswer9]
      }
    };
  };

  const renderSelectedOptions = (questionIndex: number, selectedValues: string[]) => {
    const question = questions[questionIndex];
    // 最初の選択肢のみ表示
    const firstSelectedValue = selectedValues.length > 0 ? selectedValues[0] : '';
    const option = question.options.find(opt => opt.value === firstSelectedValue);
    return option ? option.label : 'なし';
  };

  const handleAnswer = (value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [step]: [value],
    }));
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      const recommendation = getRecommendation();
      setResult(recommendation.title);
    }
  };

  const handleReset = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  if (result) {
    const recommendation = getRecommendation();
    return (
      <section id="診断" className="py-8 sm:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto shadow-lg">
            <CardHeader className="text-center px-4 sm:px-6">
              <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <CheckCircle2 className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" />
              </div>
              <CardTitle className="text-xl sm:text-2xl">あなたにおすすめの投資方法</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">{recommendation.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{recommendation.description}</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-2">ありがとうございます！</h4>
                <p className="text-blue-700">この診断結果が参考になったでしょうか？具体的なアドバイスと業界別の推奨商品をご紹介します。</p>
              </div>

              <div className="space-y-3">
                {recommendation.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recommendation.industryAdvice && recommendation.industryAdvice.map((advice, index) => (
                  <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{advice.industry}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{advice.advice}</p>
                      <Button asChild size="sm" className="w-full">
                        <Link to={advice.buttonLink}>{advice.buttonLabel}</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" onClick={handleReset} className="flex-1 w-full py-6 text-base">
                  <RotateCcw className="mr-2 h-5 w-5" />
                  もう一度診断する
                </Button>
                <Button className="flex-1 w-full py-6 text-base bg-[#10b77f] hover:bg-[#0ea66e] text-white" asChild>
                  <a href="/tools/risk-assessment#diagnostic-tool">
                    総合診断ツール
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="診断" className="py-8 sm:py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="px-4 sm:px-6">
              <CardTitle className="text-lg sm:text-xl">質問 {step + 1} / {questions.length}</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                {questions[step].question}
                <span className="block text-xs mt-1 text-primary font-medium">1つの選択肢のみ選択してください</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
              <div className="space-y-2 sm:space-y-3">
                {questions[step].options.map((option) => {
                  const isChecked = (answers[step] || []).includes(option.value);
                  return (
                    <div 
                      key={option.value} 
                      className={`flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 border-2 rounded-lg transition-all duration-200 cursor-pointer ${
                        isChecked ? "border-primary bg-primary/10 shadow-sm" : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => handleAnswer(option.value)}
                    >
                      <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground">
                        {isChecked && <div className="h-2 w-2 rounded-full bg-primary" />}
                      </div>
                      <Label htmlFor={option.value} className="flex-1 cursor-pointer text-sm sm:text-base font-medium">
                        {option.label}
                      </Label>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col gap-3 pt-4">
                {/* モバイル用のボタンレイアウト */}
                <div className="flex gap-3 sm:hidden">
                  {step > 0 && (
                    <Button 
                      onClick={() => setStep(step - 1)} 
                      variant="outline" 
                      size="icon"
                      className="h-12 w-12"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </Button>
                  )}
                  <Button
                    onClick={handleNext}
                    disabled={!answers[step] || answers[step].length === 0}
                    className="flex-1 h-12 text-base font-medium"
                  >
                    {step < questions.length - 1 ? "次へ" : "診断結果を見る"}
                  </Button>
                  <Button 
                    onClick={handleReset} 
                    variant="destructive" 
                    size="icon"
                    className="h-12 w-12"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                {/* PC用のボタンレイアウト */}
                <div className="hidden sm:flex gap-3">
                  {step > 0 && (
                    <Button onClick={() => setStep(step - 1)} variant="outline" size="lg" className="px-6 py-6">
                      <ArrowLeft className="mr-2 h-5 w-5" />
                      戻る
                    </Button>
                  )}
                  <Button
                    onClick={handleNext}
                    disabled={!answers[step] || answers[step].length === 0}
                    className="gap-2 flex-1 px-8 py-6 text-lg"
                    size="lg"
                  >
                    {step < questions.length - 1 ? (
                      <>
                        次へ
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="mr-2 h-5 w-5" />
                        診断結果を見る
                      </>
                    )}
                  </Button>
                  <Button 
                    onClick={handleReset} 
                    variant="destructive" 
                    size="lg"
                    disabled={step === 0 && (!answers[0] || answers[0].length === 0)}
                    className="px-6 py-6"
                  >
                    やめる
                    <X className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                
                <div className="flex gap-1 justify-center">
                  {questions.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 w-12 sm:w-16 rounded-full transition-colors ${
                        index <= step ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InvestmentDiagnostic;