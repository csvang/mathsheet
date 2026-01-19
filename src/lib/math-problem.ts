import IProblem from "@/interface/IProblems";
import { IConfigureOperator } from "@/providers/configuration-provider";

export default function generateMathProblem(topMin: number, topMax: number, bottomMin: number, bottomMax: number, operator: string): IProblem {
    const number1 = getRandomNumber(topMin, topMax);
    const number2 = getRandomNumber(bottomMin, bottomMax);

    let answer: number | undefined = undefined;

    switch (operator) {
        case 'add':
            answer = number1 + number2;
            break;
        case 'subtract':
            answer = number1 - number2;
            break;
        case 'multiply':
            answer = number1 * number2;
            break;
        case 'divide':
            answer = parseFloat((number1 / number2).toFixed(2));
            break;
    }

    return {
        number1,
        number2,
        operator,
        answer
    };
}

export function generateMathSheet(topMin: number, topMax: number, bottomMin: number, bottomMax: number, operators: IConfigureOperator[]): IProblem[] {
    const problems: IProblem[] = [];

    operators.forEach(operator => {
        // const count = counts[operator.operator] || 0;
        const count = parseInt(operator.numberOfProblems);
        for (let i = 0; i < count; i++) {
            const problem = generateMathProblem(topMin, topMax, bottomMin, bottomMax, operator.operator);
            problems.push(problem);
        }
    });

    return problems;
}


function getRandomNumber(min: number, max: number) {
//   const cleanMin = (min) ? parseFloat(min) : 0;
//   const cleanMax = (max) ? parseFloat(max) : 0;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
