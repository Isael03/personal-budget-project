
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { AlertCircle, TrendingUp, DollarSign, CreditCard } from "lucide-react";

interface PremiumAnalysisProps {
  percentages: {
    rentPercentage: number;
    utilitiesPercentage: number;
    groceriesPercentage: number;
    savingsPercentage: number;
  };
}

export function PremiumAnalysis({ percentages }: PremiumAnalysisProps) {
  const getRecommendations = () => {
    const recommendations = [];
    
    if (percentages.rentPercentage > 30) {
      recommendations.push({
        title: "Alquiler/Hipoteca Alto",
        description: "Considera buscar opciones más económicas o compartir gastos.",
        icon: <CreditCard className="h-5 w-5 text-warning" />,
      });
    }

    if (percentages.savingsPercentage < 20) {
      recommendations.push({
        title: "Ahorro Bajo",
        description: "Intenta aumentar tu ahorro al 20% de tus ingresos.",
        icon: <DollarSign className="h-5 w-5 text-warning" />,
      });
    }

    if (percentages.utilitiesPercentage > 15) {
      recommendations.push({
        title: "Gastos en Servicios Elevados",
        description: "Busca formas de reducir el consumo de servicios.",
        icon: <AlertCircle className="h-5 w-5 text-warning" />,
      });
    }

    return recommendations;
  };

  return (
    <Card className="p-6 relative overflow-hidden">
      <div className="absolute top-3 right-3">
        <Badge variant="secondary" className="bg-primary text-white">
          Premium
        </Badge>
      </div>
      <h4 className="font-semibold mb-6 flex items-center gap-2">
        <TrendingUp className="h-5 w-5" />
        Análisis Detallado
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h5 className="font-medium mb-4">Distribución de Gastos</h5>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Alquiler/Hipoteca</span>
                <span className="text-sm font-medium">{percentages.rentPercentage.toFixed(1)}%</span>
              </div>
              <Progress value={percentages.rentPercentage} className="h-1" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Servicios</span>
                <span className="text-sm font-medium">{percentages.utilitiesPercentage.toFixed(1)}%</span>
              </div>
              <Progress value={percentages.utilitiesPercentage} className="h-1" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Alimentación</span>
                <span className="text-sm font-medium">{percentages.groceriesPercentage.toFixed(1)}%</span>
              </div>
              <Progress value={percentages.groceriesPercentage} className="h-1" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Ahorro</span>
                <span className="text-sm font-medium">{percentages.savingsPercentage.toFixed(1)}%</span>
              </div>
              <Progress value={percentages.savingsPercentage} className="h-1" />
            </div>
          </div>
        </div>
        <div>
          <h5 className="font-medium mb-4">Recomendaciones Personalizadas</h5>
          <div className="space-y-4">
            {getRecommendations().map((rec, index) => (
              <div key={index} className="flex gap-3 items-start">
                {rec.icon}
                <div>
                  <h6 className="font-medium">{rec.title}</h6>
                  <p className="text-sm text-muted-foreground">{rec.description}</p>
                </div>
              </div>
            ))}
            {getRecommendations().length === 0 && (
              <p className="text-sm text-muted-foreground">
                ¡Excelente! Tu presupuesto está bien balanceado.
              </p>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
