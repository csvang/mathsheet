'use client';

import Problem from "@/components/problem/problem";
import { useConfiguration } from "@/providers/configuration-provider";

export default function Home() {
  const { workSheet } = useConfiguration();

  return (
    <div className="flex flex-wrap w-300">
      {
        workSheet &&
        workSheet.map((problem, i) => 
          <Problem key={i} number1={problem.number1} operator={problem.operator} number2={problem.number2}></Problem>
        )
      }
    </div>
  )
}