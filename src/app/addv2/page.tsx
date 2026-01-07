import ProblemV2 from "@/components/problem/problemv2";

export default function Home() {
    const numOfProblems = Array.from({ length: 50 }, (_, i) => i); // 10

    return (
        <div className="flex flex-wrap w-300">
            {
                numOfProblems.map((i) => <ProblemV2 key={i} number1={getRandomNumber(0, 9)} operator="add" number2={getRandomNumber(0, 9)}></ProblemV2>)
            }
        </div>
    )
}

function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}