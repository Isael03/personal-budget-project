
import { useState } from "react";
import { BudgetForm } from "@/components/BudgetForm";
import { BudgetSummary } from "@/components/BudgetSummary";

interface BudgetData {
  income: number;
  rent: number;
  utilities: number;
  groceries: number;
  savings: number;
}

const Index = () => {
  const [budgetData, setBudgetData] = useState<BudgetData | null>(null);

  const handleBudgetSubmit = (data: BudgetData) => {
    setBudgetData(data);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">
            Calculadora de Presupuestos Personalizados
          </h1>
          <p className="text-lg text-muted-foreground">
            Organiza tus finanzas de manera simple y efectiva
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-1/3">
            <BudgetForm onSubmit={handleBudgetSubmit} />
          </div>
          <div className="w-full lg:w-2/3">
            {budgetData && <BudgetSummary data={budgetData} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
