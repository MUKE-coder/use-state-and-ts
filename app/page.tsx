"use client";
import AddButton from "@/components/AddButton";
import MinusButton from "@/components/MinusButton";
import React, { useState } from "react";

export default function Home() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      {/* Bigger Box */}
      <div className="bg-white rounded-2xl p-4 flex justify-center flex-col gap-4 items-center min-h-screen">
        {/* Smaller box */}
        <div className="bg-gradient-to-tr from-orange-600 to-green-400 w-[400px] h-[200px] rounded-3xl flex justify-center items-center">
          <p className="text-6xl font-bold ">{number}</p>
        </div>
        <div className="flex items-center gap-4">
          <AddButton number={number} setNumber={setNumber} />
          <MinusButton data={{ number, setNumber }} />
        </div>
      </div>
    </div>
  );
}
