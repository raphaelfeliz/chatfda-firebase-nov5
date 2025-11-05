"use client";

import { useState, useMemo, useCallback } from "react";
import { TriageMachine, type QuestionState, type Option } from "@/lib/triage";

export const useTriage = () => {
  const machine = useMemo(() => new TriageMachine(), []);

  const [currentState, setCurrentState] = useState<QuestionState | null>(() =>
    machine.getState()
  );
  const [sku, setSku] = useState<string | null>(null);
  const [finalProduct, setFinalProduct] = useState<Option | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  const selectOption = useCallback(
    (index: number) => {
      if (!currentState) return;
      
      const selectedOption = currentState.options[index];
      const result = machine.triage(index);

      setHistory((prev) => [...prev, selectedOption.label]);

      if (result && "sku" in result) {
        setSku(result.sku);
        setFinalProduct(selectedOption);
        setCurrentState(null);
      } else if (result) {
        setCurrentState(result as QuestionState);
      }
    },
    [machine, currentState]
  );

  const reset = useCallback(() => {
    const initialState = machine.reset();
    setCurrentState(initialState);
    setSku(null);
    setFinalProduct(null);
    setHistory([]);
  }, [machine]);

  return { currentState, sku, history, selectOption, reset, finalProduct };
};
