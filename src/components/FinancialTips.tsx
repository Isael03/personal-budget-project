
import { Card } from "./ui/card";
import { PiggyBank, BookOpen, TrendingUp, Shield } from "lucide-react";

export function FinancialTips() {
  const tips = [
    {
      icon: <PiggyBank className="h-5 w-5 text-primary" />,
      title: "La regla 50/30/20",
      description: "Destina 50% a necesidades básicas, 30% a deseos personales y 20% al ahorro."
    },
    {
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      title: "Fondo de Emergencia",
      description: "Mantén un fondo de emergencia equivalente a 3-6 meses de gastos."
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
      title: "Inversión Temprana",
      description: "Comienza a invertir lo antes posible, aprovechando el interés compuesto."
    },
    {
      icon: <Shield className="h-5 w-5 text-primary" />,
      title: "Evita Deudas Innecesarias",
      description: "Usa el crédito de manera responsable y evita deudas por gastos no esenciales."
    }
  ];

  return (
    <Card className="p-6">
      <h3 className="text-2xl font-semibold mb-6">Consejos Financieros</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tips.map((tip, index) => (
          <div key={index} className="flex gap-4">
            <div className="mt-1">{tip.icon}</div>
            <div>
              <h4 className="font-medium mb-1">{tip.title}</h4>
              <p className="text-sm text-muted-foreground">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
