'use client';

import Problem from "@/components/problem/problem";
import { useConfiguration } from "@/providers/configuration-provider";

export default function Home() {
  const { numberTopMin, numberTopMax, numberBottomMin, numberBottomMax,
    numberOfAdd, numberOfSubtract, numberOfMultply, numberOfDivide
  } = useConfiguration();
  const numOfProblems = Array.from({ length: parseInt(numberOfAdd) }, (_, i) => i); // 10\

  return (
    <div className="flex flex-wrap w-300">
      {
        numOfProblems.map((i) => <Problem key={i} number1={getRandomNumber(numberTopMin, numberTopMax)} operator="add" number2={getRandomNumber(numberBottomMin, numberBottomMax)}></Problem>)
      }
    </div>
  )
}

function getRandomNumber(min: string, max: string) {
  const cleanMin = (min) ? parseFloat(min) : 0;
  const cleanMax = (max) ? parseFloat(max) : 0;
  return Math.floor(Math.random() * (cleanMax - cleanMin + 1)) + cleanMin;
}