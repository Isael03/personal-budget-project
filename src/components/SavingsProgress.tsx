
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";

interface SavingsProgressProps {
  savingsProgress: number;
  monthsToGoal: number;
}

export function SavingsProgress({ savingsProgress, monthsToGoal }: SavingsProgressProps) {
  return (
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
  );
}
