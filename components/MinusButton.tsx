import { ButtonProps } from "@/types/types";
import React from "react";

export default function MinusButton({ data }: { data: ButtonProps }) {
  const { number, setNumber } = data;
  function handleMinus() {
    if (number > 0) {
      setNumber((prev: number) => prev - 1);
    }
  }
  return (
    <button
      onClick={handleMinus}
      className="rounded-md py-2 px-6 bg-orange-500 text-white"
    >
      Minus
    </button>
  );
}
