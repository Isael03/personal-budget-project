
import { BudgetData, calculateExpenses } from "@/utils/budgetCalculations";
import { BudgetOverview } from "./BudgetOverview";
import { SavingsProgress } from "./SavingsProgress";
import { PremiumAnalysis } from "./PremiumAnalysis";

interface BudgetSummaryProps {
  data: BudgetData;
}

export function BudgetSummary({ data }: BudgetSummaryProps) {
  const calculations = calculateExpenses(data);

  return (
    <div className="w-full max-w-3xl space-y-6 animate-fade-in">
      <BudgetOverview 
        data={data} 
        calculations={{
          totalExpenses: calculations.totalExpenses,
          remainingMoney: calculations.remainingMoney,
        }} 
      />
      
      <SavingsProgress 
        savingsProgress={calculations.savingsProgress}
        monthsToGoal={calculations.monthsToGoal}
      />

      <PremiumAnalysis 
        percentages={{
          rentPercentage: calculations.rentPercentage,
          utilitiesPercentage: calculations.utilitiesPercentage,
          groceriesPercentage: calculations.groceriesPercentage,
          savingsPercentage: calculations.savingsPercentage,
        }}
      />
    </div>
  );
}
