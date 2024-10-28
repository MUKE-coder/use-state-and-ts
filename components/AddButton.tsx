import { ButtonProps } from "@/types/types";
import React, { SetStateAction } from "react";
import { Button } from "./ui/button";

export default function AddButton({ number, setNumber }: ButtonProps) {
  function handleAdd() {
    if (number < 10) {
      setNumber((prev: number) => prev + 1);
    }
  }
  return (
    <Button
      onClick={handleAdd}
      className="py-2 bg-black px-6 rounded-md text-white"
    >
      Add
    </Button>
  );
}
