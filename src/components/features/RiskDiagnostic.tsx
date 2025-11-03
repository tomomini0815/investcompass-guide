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

// 業界ごとのアドバイスを追加
const industryAdvice = {
  stocks: {
    low: {
      title: "株式投資（低リスク）",
      advice: "低リスクの株式投資では、大型株や配当性向の高い株に投資することをおすすめします。ブルーチップ株を中心に組み立てたポートフォリオで、安定的なリターンを目指しましょう。"
    },
    medium: {
      title: "株式投資（中リスク）",
      advice: "中リスクの株式投資では、成長株と配当株のバランスを取ることが重要です。インデックスファンドやETFを活用して分散投資を行い、定期的なポートフォリオの見直しをしましょう。"
    },
    high: {
      title: "株式投資（高リスク）",
      advice: "高リスクの株式投資では、新興株や成長性の高い株に投資できます。ただし、リスク管理を徹底し、損失を最小限に抑えるためのストップロス注文を活用しましょう。"
    }
  },
  funds: {
    low: {
      title: "投資信託（低リスク）",
      advice: "低リスクの投資信託では、債券系やバランス型の商品を選びましょう。信託報酬が低く、実績のある運用会社の商品を選ぶことで、安定的な運用が期待できます。"
    },
    medium: {
      title: "投資信託（中リスク）",
      advice: "中リスクの投資信託では、株式と債券のバランスが取れた商品が適しています。インデックス型やアクティブ型の商品を組み合わせて、リスク分散を図りましょう。"
    },
    high: {
      title: "投資信託（高リスク）",
      advice: "高リスクの投資信託では、株式系の商品や新興国株式ファンドなどが選択肢になります。運用会社の実績やポートフォリオ構成をよく確認し、分散投資を心がけましょう。"
    }
  },
  crypto: {
    low: {
      title: "仮想通貨（低リスク）",
      advice: "低リスクの仮想通貨投資では、主要な通貨（ビットコイン、イーサリアム）に限定し、ドルコスト平均法で少額ずつ購入することをおすすめします。"
    },
    medium: {
      title: "仮想通貨（中リスク）",
      advice: "中リスクの仮想通貨投資では、主要通貨と一部の有望なアルトコインを組み合わせて投資できます。各プロジェクトの基本情報をよく確認し、適切なポートフォリオ構成を心がけましょう。"
    },
    high: {
      title: "仮想通貨（高リスク）",
      advice: "高リスクの仮想通貨投資では、新規プロジェクトやデリバティブ商品に投資できます。ただし、価格変動が大きいため、リスク管理を徹底し、損失を最小限に抑える必要があります。"
    }
  },
  fx: {
    low: {
      title: "FX（低リスク）",
      advice: "低リスクのFX投資では、主要通貨ペア（ドル/円、ユーロ/ドルなど）に限定し、レバレッジを低く抑えて取引することをおすすめします。スワップポイントを考慮した運用も有効です。"
    },
    medium: {
      title: "FX（中リスク）",
      advice: "中リスクのFX投資では、複数の通貨ペアに分散投資し、テクニカル分析とファンダメンタル分析を組み合わせて取引を行いましょう。リスク管理を徹底し、損切りラインを設定することが重要です。"
    },
    high: {
      title: "FX（高リスク）",
      advice: "高リスクのFX投資では、マイナー通貨ペアやCFD商品に投資できます。スキャルピングやデイトレードなどの短期取引も選択肢になりますが、リスク管理を徹底する必要があります。"
    }
  }
};

const industries: IndustryOption[] = [
  { id: "stocks", label: "株式・証券", icon: TrendingUp, path: "/comparison" },
  { id: "funds", label: "投資信託", icon: Building2, path: "/comparison" },
  { id: "crypto", label: "仮想通貨", icon: Bitcoin, path: "/crypto-comparison" },
  { id: "fx", label: "FX", icon: DollarSign, path: "/fx-comparison" },
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

            {/* 業界ごとのアドバイスを追加 */}
            <div>
              <h3 className="text-xl font-bold mb-4">業界ごとのアドバイス</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {result.industries.map((industryId: Industry) => {
                  const industry = industries.find((i) => i.id === industryId);
                  if (!industry) return null;
                  const Icon = industry.icon;
                  const advice = industryAdvice[industryId][result.riskKey as "low" | "medium" | "high"];
                  
                  return (
                    <Card key={industryId} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <Icon className="h-5 w-5" />
                          {advice.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{advice.advice}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
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

export default RiskDiagnostic;