
import { Card } from "./ui/card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { BudgetData } from "@/utils/budgetCalculations";

interface BudgetOverviewProps {
  data: BudgetData;
  calculations: {
    totalExpenses: number;
    remainingMoney: number;
  };
}

const COLORS = ["#7E69AB", "#9b87f5", "#6E59A5", "#4CAF50"];

export function BudgetOverview({ data, calculations }: BudgetOverviewProps) {
  const pieData = [
    { name: "Alquiler/Hipoteca", value: data.rent },
    { name: "Servicios", value: data.utilities },
    { name: "Alimentación", value: data.groceries },
    { name: "Disponible", value: calculations.remainingMoney },
  ];

  return (
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
              ${calculations.totalExpenses.toFixed(2)}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Dinero Disponible</p>
            <p className="text-2xl font-semibold text-primary">
              ${calculations.remainingMoney.toFixed(2)}
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
  );
}
