"use client";

import { useTriage } from "@/hooks/use-triage";
import { OptionCard } from "./option-card";
import { SkuDisplay } from "./sku-display";
import { ProgressTracker } from "./progress-tracker";

export function Configurator() {
  const { currentState, sku, history, selectOption, reset } = useTriage();

  const getBreadcrumbHistory = () => {
    if (history.length === 0 && !sku) {
        return [];
    }
    const fullHistory = ["Início", ...history];
    return fullHistory;
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <ProgressTracker history={getBreadcrumbHistory()} onReset={reset} />
      {sku ? (
        <SkuDisplay sku={sku} onReset={reset} />
      ) : (
        <>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            <span className="text-primary font-bold">Encontre Fácil:</span> {currentState.question}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {currentState.options.map((option, index) => (
              <OptionCard
                key={option.value + index}
                option={option}
                onClick={() => selectOption(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
