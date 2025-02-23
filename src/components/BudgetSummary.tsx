
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { AlertCircle, TrendingUp, DollarSign, CreditCard } from "lucide-react";

interface BudgetSummaryProps {
  data: {
    income: number;
    rent: number;
    utilities: number;
    groceries: number;
    savings: number;
  };
}

export function BudgetSummary({ data }: BudgetSummaryProps) {
  const totalExpenses = data.rent + data.utilities + data.groceries;
  const remainingMoney = data.income - totalExpenses;
  const savingsProgress = (remainingMoney / data.savings) * 100;
  
  // Cálculo de meses para alcanzar la meta de ahorro
  const monthsToGoal = remainingMoney > 0 
    ? Math.ceil((data.savings - remainingMoney) / remainingMoney) 
    : Infinity;

  const pieData = [
    { name: "Alquiler/Hipoteca", value: data.rent },
    { name: "Servicios", value: data.utilities },
    { name: "Alimentación", value: data.groceries },
    { name: "Disponible", value: remainingMoney },
  ];

  const COLORS = ["#7E69AB", "#9b87f5", "#6E59A5", "#4CAF50"];

  // Cálculos avanzados para la versión premium
  const rentPercentage = (data.rent / data.income) * 100;
  const utilitiesPercentage = (data.utilities / data.income) * 100;
  const groceriesPercentage = (data.groceries / data.income) * 100;
  const savingsPercentage = (remainingMoney / data.income) * 100;

  const getRecommendations = () => {
    const recommendations = [];
    
    if (rentPercentage > 30) {
      recommendations.push({
        title: "Alquiler/Hipoteca Alto",
        description: "Considera buscar opciones más económicas o compartir gastos.",
        icon: <CreditCard className="h-5 w-5 text-warning" />,
      });
    }

    if (savingsPercentage < 20) {
      recommendations.push({
        title: "Ahorro Bajo",
        description: "Intenta aumentar tu ahorro al 20% de tus ingresos.",
        icon: <DollarSign className="h-5 w-5 text-warning" />,
      });
    }

    if (utilitiesPercentage > 15) {
      recommendations.push({
        title: "Gastos en Servicios Elevados",
        description: "Busca formas de reducir el consumo de servicios.",
        icon: <AlertCircle className="h-5 w-5 text-warning" />,
      });
    }

    return recommendations;
  };

  return (
    <div className="w-full max-w-3xl space-y-6 animate-fade-in">
      <Card className="p-6">
        <h3 className="text-2xl font-semibold mb-4">Resumen del Presupuesto</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Ingresos Mensuales</p>
              <p className="text-2xl font-semibold text-success">
                ${data.income.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Gastos Totales</p>
              <p className="text-2xl font-semibold text-warning">
                ${totalExpenses.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Dinero Disponible</p>
              <p className="text-2xl font-semibold text-primary">
                ${remainingMoney.toFixed(2)}
              </p>
            </div>
          </div>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h4 className="font-semibold mb-4">Progreso de Ahorro</h4>
        <Progress value={Math.min(savingsProgress, 100)} className="h-2" />
        <div className="mt-2 space-y-1">
          <p className="text-sm text-muted-foreground">
            Has alcanzado el {Math.min(savingsProgress, 100).toFixed(1)}% de tu meta
            de ahorro
          </p>
          {monthsToGoal === Infinity ? (
            <p className="text-sm text-destructive">
              Con el ahorro actual, no podrás alcanzar tu meta. Necesitas aumentar tu ahorro mensual.
            </p>
          ) : (
            <p className="text-sm text-muted-foreground">
              A este ritmo, alcanzarás tu meta de ahorro en aproximadamente{" "}
              <span className="font-medium text-primary">
                {monthsToGoal} {monthsToGoal === 1 ? "mes" : "meses"}
              </span>
            </p>
          )}
        </div>
      </Card>

      {/* Análisis Premium */}
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
                  <span className="text-sm font-medium">{rentPercentage.toFixed(1)}%</span>
                </div>
                <Progress value={rentPercentage} className="h-1" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Servicios</span>
                  <span className="text-sm font-medium">{utilitiesPercentage.toFixed(1)}%</span>
                </div>
                <Progress value={utilitiesPercentage} className="h-1" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Alimentación</span>
                  <span className="text-sm font-medium">{groceriesPercentage.toFixed(1)}%</span>
                </div>
                <Progress value={groceriesPercentage} className="h-1" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Ahorro</span>
                  <span className="text-sm font-medium">{savingsPercentage.toFixed(1)}%</span>
                </div>
                <Progress value={savingsPercentage} className="h-1" />
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
    </div>
  );
}
