import Problem from "@/components/problem/problem";

export default function Home() {
    const numOfProblems = Array.from({ length: 101 }, (_, i) => i); // 10

    return (
        <div className="flex flex-wrap w-350">
            {
                numOfProblems.map((i) => <Problem key={i} number1={getRandomNumber(7, 7)} operator="add" number2={getRandomNumber(0, 9)}></Problem>)
            }
        </div>
    )
}

function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}