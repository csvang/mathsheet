export default function Problem({ number1, operator, number2 }: { number1: number, operator: string, number2: number }) {
    return (
        <div className="flex flex-col w-25 text-4xl items-center m-8">
            <div className="flex w-15 h-full">
                <div className="flex items-center">
                    +
                </div>
                <div className="flex w-full flex-col items-end">
                    <div>
                        {number1}
                    </div>
                    <div>
                        {number2}
                    </div>
                </div>
            </div>
            <div className="flex w-full border-b-4 pt-2"></div>
        </div>
    )
}