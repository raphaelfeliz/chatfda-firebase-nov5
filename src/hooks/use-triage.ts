"use client";

import { useState, useMemo, useCallback } from "react";
import { TriageMachine, type QuestionState } from "@/lib/triage";

export const useTriage = () => {
  const machine = useMemo(() => new TriageMachine(), []);

  const [currentState, setCurrentState] = useState<QuestionState>(() =>
    machine.getState()
  );
  const [sku, setSku] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  const selectOption = useCallback(
    (index: number) => {
      const selectedLabel = currentState.options[index].label;
      const result = machine.triage(index);

      setHistory((prev) => [...prev, selectedLabel]);

      if (result && "sku" in result) {
        setSku(result.sku);
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
    setHistory([]);
  }, [machine]);

  return { currentState, sku, history, selectOption, reset };
};
