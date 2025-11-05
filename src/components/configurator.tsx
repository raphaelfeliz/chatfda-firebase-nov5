"use client";

import { useTriage } from "@/hooks/use-triage";
import { OptionCard } from "./option-card";
import { SkuDisplay } from "./sku-display";
import { ProgressTracker } from "./progress-tracker";

export function Configurator() {
  const { currentState, sku, history, selectOption, reset } = useTriage();

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary-foreground/90">
          Configurador de Produtos
        </h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Encontre a porta ou janela ideal para você respondendo algumas perguntas.
        </p>
      </header>

      {sku ? (
        <SkuDisplay sku={sku} onReset={reset} />
      ) : (
        <>
          <ProgressTracker history={history} onReset={reset} />
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8 font-headline">
            {currentState.question}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center max-w-7xl mx-auto">
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
