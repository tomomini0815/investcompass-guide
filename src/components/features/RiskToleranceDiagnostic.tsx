import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { TrendingUp, Bitcoin, DollarSign, Building2, LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Industry = "stocks" | "funds" | "crypto" | "fx";

interface IndustryOption {
  id: Industry;
  label: string;
  icon: LucideIcon;
}

const industries: IndustryOption[] = [
  { id: "stocks", label: "株式・証券", icon: TrendingUp },
  { id: "funds", label: "投資信託", icon: Building2 },
  { id: "crypto", label: "暗号資産", icon: Bitcoin },
  { id: "fx", label: "FX", icon: DollarSign },
];

const RiskToleranceDiagnostic = () => {
  const [selectedIndustries, setSelectedIndustries] = useState<Industry[]>([]);
  const navigate = useNavigate();

  const handleIndustryToggle = (industryId: Industry) => {
    setSelectedIndustries((prev) =>
      prev.includes(industryId)
        ? prev.filter((id) => id !== industryId)
        : [...prev, industryId]
    );
  };

  const handleStartDiagnostic = () => {
    // 診断開始のロジックはここに実装
    console.log("選択された業界:", selectedIndustries);
    // 診断ページに遷移
    navigate('/risk-diagnostic', { state: { industries: selectedIndustries } });
  };

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
                  className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                    isSelected
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50 hover:bg-muted/50"
                  }`}
                  onClick={() => handleIndustryToggle(industry.id)}
                >
                  <Checkbox
                    checked={isSelected}
                    onCheckedChange={() => handleIndustryToggle(industry.id)}
                    className="h-5 w-5"
                  />
                  <Icon className={`h-6 w-6 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                  <Label 
                    className="cursor-pointer flex-1 text-base font-medium"
                  >
                    {industry.label}
                  </Label>
                </div>
              );
            })}
          </div>
          <div className="mt-6 text-center">
            <Button
              onClick={handleStartDiagnostic}
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
};

export default RiskToleranceDiagnostic;