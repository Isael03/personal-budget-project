
export interface BudgetData {
  income: number;
  rent: number;
  utilities: number;
  groceries: number;
  savings: number;
}

export const calculateExpenses = (data: BudgetData) => {
  const totalExpenses = data.rent + data.utilities + data.groceries;
  const remainingMoney = data.income - totalExpenses;
  const savingsProgress = (remainingMoney / data.savings) * 100;
  const monthsToGoal = remainingMoney > 0 
    ? Math.ceil((data.savings - remainingMoney) / remainingMoney) 
    : Infinity;

  const rentPercentage = (data.rent / data.income) * 100;
  const utilitiesPercentage = (data.utilities / data.income) * 100;
  const groceriesPercentage = (data.groceries / data.income) * 100;
  const savingsPercentage = (remainingMoney / data.income) * 100;

  return {
    totalExpenses,
    remainingMoney,
    savingsProgress,
    monthsToGoal,
    rentPercentage,
    utilitiesPercentage,
    groceriesPercentage,
    savingsPercentage,
  };
};
