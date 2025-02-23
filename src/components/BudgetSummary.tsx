
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

  const pieData = [
    { name: "Alquiler/Hipoteca", value: data.rent },
    { name: "Servicios", value: data.utilities },
    { name: "Alimentación", value: data.groceries },
    { name: "Disponible", value: remainingMoney },
  ];

  const COLORS = ["#7E69AB", "#9b87f5", "#6E59A5", "#4CAF50"];

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
        <p className="text-sm text-muted-foreground mt-2">
          Has alcanzado el {Math.min(savingsProgress, 100).toFixed(1)}% de tu meta
          de ahorro
        </p>
      </Card>
    </div>
  );
}
