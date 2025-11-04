import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, CheckCircle2, RotateCcw, X } from "lucide-react";

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
  ];

  const getRecommendation = () => {
    const answer0 = answers[0] || [];
    const answer1 = answers[1] || [];
    const answer2 = answers[2] || [];
    
    // 各質問から最初の回答のみを使用
    const firstAnswer0 = answer0.length > 0 ? answer0[0] : "";
    const firstAnswer1 = answer1.length > 0 ? answer1[0] : "";
    const firstAnswer2 = answer2.length > 0 ? answer2[0] : "";
    
    if (firstAnswer0 === "beginner") {
      if (firstAnswer2 === "conservative") {
        return {
          title: "つみたてNISA + インデックス投資",
          description: "初心者で安定志向のあなたには、つみたてNISAでインデックスファンドへの積立投資がおすすめです。",
          features: ["月100円から始められる", "非課税枠を活用", "長期分散投資でリスク軽減"],
          selectedAnswers: { answer0: [firstAnswer0], answer1: [firstAnswer1], answer2: [firstAnswer2] }
        };
      }
      return {
        title: "NISA + バランス型投資信託",
        description: "初心者のあなたには、NISAを活用したバランス型投資信託がおすすめです。",
        features: ["年120万円の非課税枠", "株式と債券のバランス投資", "プロによる運用"],
        selectedAnswers: { answer0: [firstAnswer0], answer1: [firstAnswer1], answer2: [firstAnswer2] }
      };
    }
    
    if (firstAnswer2 === "aggressive") {
      return {
        title: "個別株投資 + 成長株戦略",
        description: "積極的なあなたには、成長性の高い個別株への投資がおすすめです。",
        features: ["高いリターンを狙える", "企業分析スキルが身につく", "配当金も期待できる"],
        selectedAnswers: { answer0: [firstAnswer0], answer1: [firstAnswer1], answer2: [firstAnswer2] }
      };
    }

    return {
      title: "NISA + 投資信託",
      description: "バランスの取れた投資スタイルで、着実に資産を増やしましょう。",
      features: ["非課税のメリット", "分散投資でリスク管理", "手間をかけずに運用"],
      selectedAnswers: { answer0: [firstAnswer0], answer1: [firstAnswer1], answer2: [firstAnswer2] }
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
      <section id="診断" className="py-8 sm:py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto shadow-lg">
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

              <div className="bg-muted/50 rounded-lg p-4 border border-muted">
                <h4 className="font-medium mb-2 text-muted-foreground">あなたの選択:</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">投資経験:</span> <span className="text-primary">{renderSelectedOptions(0, recommendation.selectedAnswers.answer0)}</span>
                  </div>
                  <div>
                    <span className="font-medium">投資目的:</span> <span className="text-primary">{renderSelectedOptions(1, recommendation.selectedAnswers.answer1)}</span>
                  </div>
                  <div>
                    <span className="font-medium">リスクに対する考え方:</span> <span className="text-primary">{renderSelectedOptions(2, recommendation.selectedAnswers.answer2)}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {recommendation.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" onClick={handleReset} className="flex-1 w-full">
                  <RotateCcw className="mr-2 h-4 w-4" />
                  もう一度診断する
                </Button>
                <Button className="flex-1 w-full" asChild>
                  <Link to="/comparison">
                    証券会社を比較する
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="診断" className="py-8 sm:py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">あなたに最適な投資方法を診断</h2>
          <p className="text-sm sm:text-base text-muted-foreground px-4">
            3つの質問に答えて、あなたに合った投資スタイルを見つけましょう
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-lg">
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
              <div className="flex gap-3">
                {step > 0 && (
                  <Button onClick={() => setStep(step - 1)} variant="outline" size="lg">
                    戻る
                  </Button>
                )}
                <Button
                  onClick={handleNext}
                  disabled={!answers[step] || answers[step].length === 0}
                  className="gap-2 flex-1"
                  size="lg"
                >
                  {step < questions.length - 1 ? "次へ" : "診断結果を見る"}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button onClick={handleReset} variant="destructive" size="lg">
                  <X className="h-4 w-4" />
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
    </section>
  );
};

export default InvestmentDiagnostic;