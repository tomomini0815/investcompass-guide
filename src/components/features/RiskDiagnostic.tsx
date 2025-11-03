import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { TrendingUp, Bitcoin, DollarSign, Building2, LucideIcon } from "lucide-react";

type Industry = "stocks" | "funds" | "crypto" | "fx";

interface IndustryOption {
  id: Industry;
  label: string;
  icon: LucideIcon;
  path: string;
}

const industries: IndustryOption[] = [
  { id: "stocks", label: "株式・証券", icon: TrendingUp, path: "/comparison" },
  { id: "funds", label: "投資信託", icon: Building2, path: "/comparison" },
  { id: "crypto", label: "仮想通貨", icon: Bitcoin, path: "/crypto-comparison" },
  { id: "fx", label: "FX", icon: DollarSign, path: "/fx-comparison" },
];

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
  {
    id: 4,
    text: "年齢を教えてください",
    options: [
      { value: "young", label: "20-30代", score: 3 },
      { value: "middle", label: "40-50代", score: 2 },
      { value: "senior", label: "60代以上", score: 1 },
    ],
  },
  {
    id: 5,
    text: "投資に回せる余剰資金はどのくらいですか？",
    options: [
      { value: "small", label: "収入の10%未満", score: 1 },
      { value: "medium", label: "収入の10-20%", score: 2 },
      { value: "large", label: "収入の20%以上", score: 3 },
    ],
  },
];

const RiskDiagnostic = () => {
  const [selectedIndustries, setSelectedIndustries] = useState<Industry[]>([]);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<any>(null);

  const handleIndustryToggle = (industryId: Industry) => {
    setSelectedIndustries((prev) =>
      prev.includes(industryId)
        ? prev.filter((id) => id !== industryId)
        : [...prev, industryId]
    );
  };

  const handleAnswer = (questionId: number, score: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: score }));
  };

  const calculateRisk = () => {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
    const avgScore = totalScore / questions.length;

    let riskLevel: string;
    let title: string;
    let description: string;
    let recommendations: string[];

    if (avgScore <= 1.5) {
      riskLevel = "低リスク";
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
  };

  if (selectedIndustries.length === 0) {
    return (
      <div className="max-w-4xl mx-auto">
        <Card className="border-2 hover:shadow-2xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl">投資業界を選択してください</CardTitle>
            <p className="text-muted-foreground mt-2">
              診断したい投資業界を1つ以上選択してください。選択した業界に合わせた診断結果をお届けします。
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {industries.map((industry) => {
                const Icon = industry.icon;
                const isSelected = selectedIndustries.includes(industry.id);
                return (
                  <div
                    key={industry.id}
                    className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      isSelected
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => handleIndustryToggle(industry.id)}
                  >
                    <Checkbox
                      checked={isSelected}
                      onCheckedChange={() => handleIndustryToggle(industry.id)}
                    />
                    <Icon className={`h-6 w-6 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                    <Label className="cursor-pointer flex-1">{industry.label}</Label>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 text-center">
              <Button
                onClick={() => setStep(0)}
                disabled={selectedIndustries.length === 0}
                size="lg"
                className="hover:scale-105 transition-transform"
              >
                診断を開始する
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

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

            <div>
              <h3 className="text-xl font-bold mb-4">選択した業界の比較ページ</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {result.industries.map((industryId: Industry) => {
                  const industry = industries.find((i) => i.id === industryId);
                  if (!industry) return null;
                  const Icon = industry.icon;
                  return (
                    <Button
                      key={industryId}
                      asChild
                      variant="outline"
                      className="h-auto p-4 justify-start hover:scale-105 transition-transform"
                    >
                      <Link to={industry.path}>
                        <Icon className="h-5 w-5 mr-2" />
                        {industry.label}比較ページ →
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button onClick={handleReset} variant="outline" size="lg" className="flex-1">
                もう一度診断する
              </Button>
              <Button asChild size="lg" className="flex-1">
                <Link to="/tools">ツール一覧に戻る</Link>
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
            value={currentAnswer?.toString()}
            onValueChange={(value) => handleAnswer(currentQuestion.id, parseInt(value))}
          >
            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center space-x-2 p-4 rounded-lg border-2 hover:border-primary transition-colors cursor-pointer"
                  onClick={() => handleAnswer(currentQuestion.id, option.score)}
                >
                  <RadioGroupItem value={option.score.toString()} id={option.value} />
                  <Label htmlFor={option.value} className="cursor-pointer flex-1">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>

          <div className="flex gap-4">
            {step > 0 && (
              <Button onClick={() => setStep(step - 1)} variant="outline" size="lg" className="flex-1">
                戻る
              </Button>
            )}
            <Button
              onClick={handleNext}
              disabled={!currentAnswer}
              size="lg"
              className="flex-1 hover:scale-105 transition-transform"
            >
              {step === questions.length - 1 ? "診断結果を見る" : "次へ"}
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

export default RiskDiagnostic;
