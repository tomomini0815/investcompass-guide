import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { TrendingUp, Bitcoin, DollarSign, Building2, type LucideIcon } from "lucide-react";

type Industry = "stocks" | "funds" | "crypto" | "fx";

interface IndustryOption {
  id: Industry;
  label: string;
  icon: LucideIcon;
  path: string;
}

interface IndustryResult {
  industryId: Industry;
  recommendations: string[];
}

interface DiagnosticResult {
  riskLevel: string;
  title: string;
  description: string;
  industryResults: IndustryResult[];
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
  const [result, setResult] = useState<DiagnosticResult | null>(null);

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

  const getIndustryRecommendations = (industryId: Industry, avgScore: number): string[] => {
    const industryData: Record<Industry, { low: string[]; medium: string[]; high: string[] }> = {
      stocks: {
        low: [
          "東証プライム上場の大型優良株への投資",
          "高配当株による安定収入の確保",
          "ETFを活用した分散投資",
          "長期保有による複利効果の活用",
        ],
        medium: [
          "大型株と中型株のバランス投資",
          "成長株と配当株の組み合わせ",
          "セクター分散によるリスク管理",
          "四半期ごとのポートフォリオ見直し",
        ],
        high: [
          "グロース株への集中投資",
          "新興市場（グロース市場）の活用",
          "短期トレーディングの実施",
          "テクニカル分析を活用した売買",
        ],
      },
      funds: {
        low: [
          "インデックスファンドでの運用",
          "債券型ファンドの組み入れ",
          "バランス型ファンドの活用",
          "つみたてNISAの最大活用",
        ],
        medium: [
          "国内外の株式ファンドの組み合わせ",
          "REITファンドでの分散投資",
          "アクティブファンドとインデックスファンドのバランス",
          "リバランスによるリスク調整",
        ],
        high: [
          "テーマ型ファンドへの投資",
          "新興国株式ファンドの活用",
          "ハイイールド債券ファンドの組み入れ",
          "レバレッジ型ファンドの検討",
        ],
      },
      crypto: {
        low: [
          "ビットコインへの少額積立投資",
          "時価総額上位の主要通貨のみに投資",
          "総資産の5%以内での運用",
          "長期保有（ガチホ）戦略の採用",
        ],
        medium: [
          "ビットコインとイーサリアムのバランス投資",
          "DeFiプロジェクトへの少額投資",
          "ステーキングによる報酬獲得",
          "定期的な利益確定とリバランス",
        ],
        high: [
          "アルトコインへの積極投資",
          "新規プロジェクトへの早期参入",
          "レバレッジ取引の活用",
          "短期トレーディングでの利益追求",
        ],
      },
      fx: {
        low: [
          "主要通貨ペア（米ドル/円）のみの取引",
          "低レバレッジ（2-3倍）での運用",
          "スワップポイント重視の長期保有",
          "損切りラインの厳格な設定",
        ],
        medium: [
          "複数通貨ペアでのリスク分散",
          "中程度のレバレッジ（5-10倍）活用",
          "スイングトレードの実施",
          "テクニカル指標を使った売買",
        ],
        high: [
          "エキゾチック通貨ペアへの投資",
          "高レバレッジ（10倍以上）の活用",
          "デイトレード・スキャルピング",
          "経済指標発表時の積極的な売買",
        ],
      },
    };

    if (avgScore <= 1.5) {
      return industryData[industryId].low;
    } else if (avgScore <= 2.5) {
      return industryData[industryId].medium;
    } else {
      return industryData[industryId].high;
    }
  };

  const calculateRisk = () => {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
    const avgScore = totalScore / questions.length;

    let riskLevel: string;
    let title: string;
    let description: string;

    if (avgScore <= 1.5) {
      riskLevel = "低リスク";
      title = "保守的な投資家";
      description = "安定性を重視し、リスクを最小限に抑えた投資戦略が適しています。";
    } else if (avgScore <= 2.5) {
      riskLevel = "中リスク";
      title = "バランス型投資家";
      description = "リスクとリターンのバランスを取った投資戦略が適しています。";
    } else {
      riskLevel = "高リスク";
      title = "積極的な投資家";
      description = "高いリターンを目指す積極的な投資戦略が適しています。";
    }

    const industryResults: IndustryResult[] = selectedIndustries.map((industryId) => ({
      industryId,
      recommendations: getIndustryRecommendations(industryId, avgScore),
    }));

    setResult({
      riskLevel,
      title,
      description,
      industryResults,
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

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">各業界別の投資戦略</h3>
              {result.industryResults.map((industryResult) => {
                const industry = industries.find((i) => i.id === industryResult.industryId);
                if (!industry) return null;
                const Icon = industry.icon;
                
                return (
                  <Card key={industryResult.industryId} className="border-2 bg-gradient-to-br from-muted/30 to-background">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        {industry.label}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-lg font-bold mb-3">おすすめの投資戦略</h4>
                        <ul className="space-y-2">
                          {industryResult.recommendations.map((rec, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-primary mt-1">✓</span>
                              <span className="text-muted-foreground">{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full hover:scale-105 transition-transform"
                      >
                        <Link to={industry.path}>
                          {industry.label}の比較ページを見る →
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
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
