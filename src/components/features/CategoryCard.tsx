import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  color: "primary" | "secondary" | "accent";
}

const CategoryCard = ({ icon: Icon, title, description, href, color }: CategoryCardProps) => {
  const colorClasses = {
    primary: "from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 border-primary/20",
    secondary: "from-secondary/10 to-secondary/5 hover:from-secondary/20 hover:to-secondary/10 border-secondary/20",
    accent: "from-accent/10 to-accent/5 hover:from-accent/20 hover:to-accent/10 border-accent/20",
  };

  const iconColorClasses = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    accent: "bg-accent text-accent-foreground",
  };

  return (
    <Link to={href}>
      <Card className={`h-full bg-gradient-to-br ${colorClasses[color]} border transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer`}>
        <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
          <div className={`p-4 rounded-xl ${iconColorClasses[color]}`}>
            <Icon className="h-8 w-8" />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
