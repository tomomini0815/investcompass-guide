import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { TrendingUp, Bitcoin, DollarSign, Building2, LucideIcon } from "lucide-react";

type Industry = "stocks" | "funds" | "crypto" | "fx";

interface IndustryOption {
  id: Industry;
  label: string;
  icon: LucideIcon;
}

const industries: IndustryOption[] = [
  { id: "stocks", label: "株式・証券", icon: TrendingUp },
  { id: "funds", label: "投資信託", icon: Building2 },
  { id: "crypto", label: "仮想通貨", icon: Bitcoin },
  { id: "fx", label: "FX", icon: DollarSign },
];

// 質問数を減らして効率化
const questions = [
  {
    id: 1,
    text: "投資経験はどのくらいありますか？",
    options: [
      { value: "beginner", label: "初心者（1年未満）", score: 1 },
      { value: "intermediate", label: "中級者（1-3年）", score: 2 },
      { value: "advanced", label: "上級者（3年以上）", score: 3 },
    ],
  },
  {
    id: 2,
    text: "投資資金が30%減少した場合、どう感じますか？",
    options: [
      { value: "panic", label: "すぐに売却したい", score: 1 },
      { value: "worried", label: "心配だが様子を見る", score: 2 },
      { value: "calm", label: "長期的視点で保有する", score: 3 },
    ],
  },
  {
    id: 3,
    text: "投資の目的は何ですか？",
    options: [
      { value: "short", label: "短期的な利益", score: 3 },
      { value: "medium", label: "中期的な資産形成", score: 2 },
      { value: "long", label: "長期的な老後資金", score: 1 },
    ],
  },
];

const RiskToleranceDiagnosticPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedIndustries, setSelectedIndustries] = useState<Industry[]>([]);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<any>(null);

  // URLパラメータまたはstateから選択された業界を取得
  useEffect(() => {
    if (location.state && location.state.industries) {
      setSelectedIndustries(location.state.industries);
    }
  }, [location.state]);

  // 単一選択に変更
  const handleAnswer = (questionId: number, score: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: score,
    }));
  };

  const calculateRisk = () => {
    const allScores = Object.values(answers);
    const totalScore = allScores.reduce((sum, score) => sum + score, 0);
    const avgScore = totalScore / allScores.length;

    let riskLevel: string;
    let riskKey: "low" | "medium" | "high";
    let title: string;
    let description: string;
    let recommendations: string[];

    if (avgScore <= 1.5) {
      riskLevel = "低リスク";
      riskKey = "low";
      title = "保守的な投資家";
      description = "安定性を重視し、リスクを最小限に抑えた投資戦略が適しています。";
      recommendations = [
        "国債や安定した大型株への投資",
        "分散投資でリスクを軽減",
        "定期的な積立投資",
        "投資信託やETFの活用",
      ];
    } else if (avgScore <= 2.5) {
      riskLevel = "中リスク";
      riskKey = "medium";
      title = "バランス型投資家";
      description = "リスクとリターンのバランスを取った投資戦略が適しています。";
      recommendations = [
        "株式と債券のバランス投資",
        "成長株と配当株の組み合わせ",
        "投資信託での分散投資",
        "定期的なポートフォリオ見直し",
      ];
    } else {
      riskLevel = "高リスク";
      riskKey = "high";
      title = "積極的な投資家";
      description = "高いリターンを目指す積極的な投資戦略が適しています。";
      recommendations = [
        "成長株への集中投資",
        "新興市場への投資",
        "レバレッジ商品の活用",
        "短期的な市場機会の活用",
      ];
    }

    setResult({
      riskLevel,
      riskKey,
      title,
      description,
      recommendations,
      industries: selectedIndustries,
    });
  };

  const handleNext = () => {
    if (step === questions.length - 1) {
      calculateRisk();
    } else {
      setStep(step + 1);
    }
  };

  const handleReset = () => {
    setSelectedIndustries([]);
    setStep(0);
    setAnswers({});
    setResult(null);
    navigate("/"); // トップページに戻る
  };

  if (result) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <Card className="border-2 hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-card to-card/80">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-3xl">{result.title}</CardTitle>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                {result.riskLevel}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">{result.description}</p>

            <div>
              <h3 className="text-xl font-bold mb-4">おすすめの投資戦略</h3>
              <ul className="space-y-2">
                {result.recommendations.map((rec: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 pt-4">
              <Button onClick={handleReset} variant="outline" size="lg" className="flex-1">
                もう一度診断する
              </Button>
              <Button asChild size="lg" className="flex-1">
                <a href="/">トップページに戻る</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQuestion = questions[step];
  const currentAnswer = answers[currentQuestion.id];

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="border-2 hover:shadow-2xl transition-all duration-300">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <Badge variant="outline">質問 {step + 1} / {questions.length}</Badge>
            <div className="flex gap-2">
              {selectedIndustries.map((industryId) => {
                const industry = industries.find((i) => i.id === industryId);
                if (!industry) return null;
                const Icon = industry.icon;
                return (
                  <Badge key={industryId} variant="secondary" className="flex items-center gap-1">
                    <Icon className="h-3 w-3" />
                    {industry.label}
                  </Badge>
                );
              })}
            </div>
          </div>
          <CardTitle className="text-2xl">{currentQuestion.text}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <RadioGroup
            value={currentAnswer?.toString() || ""}
            onValueChange={(value) => handleAnswer(currentQuestion.id, parseInt(value))}
            className="space-y-3"
          >
            {currentQuestion.options.map((option) => (
              <div
                key={option.value}
                className="flex items-center space-x-3 p-4 rounded-lg border-2 transition-colors"
              >
                <RadioGroupItem
                  value={option.score.toString()}
                  id={option.value}
                  className="h-5 w-5"
                />
                <Label
                  htmlFor={option.value}
                  className="cursor-pointer flex-1 text-base"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>

          <div className="flex gap-3">
            {step > 0 && (
              <Button onClick={() => setStep(step - 1)} variant="outline" size="lg">
                戻る
              </Button>
            )}
            <Button
              onClick={handleNext}
              disabled={currentAnswer === undefined}
              size="lg"
              className="flex-1 hover:scale-105 transition-transform"
            >
              {step === questions.length - 1 ? "診断結果を見る" : "次へ"}
            </Button>
            <Button onClick={handleReset} variant="destructive" size="lg">
              診断をやめる
            </Button>
          </div>

          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((step + 1) / questions.length) * 100}%` }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RiskToleranceDiagnosticPage;