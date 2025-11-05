import { Button } from "./ui/button";
import { RefreshCw, ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

type ProgressTrackerProps = {
  history: string[];
  onReset: () => void;
};

export function ProgressTracker({ history, onReset }: ProgressTrackerProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between mb-8 p-3 bg-card rounded-lg shadow-sm flex-wrap gap-4 transition-opacity duration-500",
        history.length > 0 ? "opacity-100" : "opacity-0 h-0 p-0 m-0 border-0"
      )}
    >
      <div className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
        <button
          onClick={onReset}
          className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          aria-label="Voltar ao início"
        >
          <Home className="w-4 h-4" />
          <span>Início</span>
        </button>
        {history.map((item, index) => (
          <div key={index} className="flex items-center gap-1.5">
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span
              className={
                index === history.length - 1
                  ? "font-medium text-foreground"
                  : ""
              }
            >
              {item}
            </span>
          </div>
        ))}
      </div>
      <Button variant="outline" size="sm" onClick={onReset}>
        <RefreshCw className="w-4 h-4 mr-2" />
        Reiniciar
      </Button>
    </div>
  );
}
