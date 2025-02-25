
import React from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { DollarSign } from "lucide-react";

interface BudgetFormProps {
  onSubmit: (data: {
    income: number;
    rent: number;
    utilities: number;
    groceries: number;
    savings: number;
    currentSavings: number;
  }) => void;
}

export function BudgetForm({ onSubmit }: BudgetFormProps) {
  const [formData, setFormData] = React.useState({
    income: "",
    rent: "",
    utilities: "",
    groceries: "",
    savings: "",
    currentSavings: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      income: parseFloat(formData.income) || 0,
      rent: parseFloat(formData.rent) || 0,
      utilities: parseFloat(formData.utilities) || 0,
      groceries: parseFloat(formData.groceries) || 0,
      savings: parseFloat(formData.savings) || 0,
      currentSavings: parseFloat(formData.currentSavings) || 0,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Only allow numbers and decimal points
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <Card className="w-full max-w-md p-6 shadow-lg animate-fade-in">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="income">Ingresos Mensuales</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                id="income"
                name="income"
                type="text"
                placeholder="0.00"
                value={formData.income}
                onChange={handleChange}
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="rent">Alquiler/Hipoteca</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                id="rent"
                name="rent"
                type="text"
                placeholder="0.00"
                value={formData.rent}
                onChange={handleChange}
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="utilities">Servicios (Luz, Agua, etc.)</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                id="utilities"
                name="utilities"
                type="text"
                placeholder="0.00"
                value={formData.utilities}
                onChange={handleChange}
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="groceries">Alimentación</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                id="groceries"
                name="groceries"
                type="text"
                placeholder="0.00"
                value={formData.groceries}
                onChange={handleChange}
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="currentSavings">Ahorro Actual</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                id="currentSavings"
                name="currentSavings"
                type="text"
                placeholder="0.00"
                value={formData.currentSavings}
                onChange={handleChange}
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="savings">Meta de Ahorro</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                id="savings"
                name="savings"
                type="text"
                placeholder="0.00"
                value={formData.savings}
                onChange={handleChange}
                className="pl-10"
              />
            </div>
          </div>
        </div>

        <Button type="submit" className="w-full">
          Calcular Presupuesto
        </Button>
      </form>
    </Card>
  );
}
