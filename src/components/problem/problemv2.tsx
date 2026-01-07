export default function ProblemV2({ number1, operator, number2 }: { number1: number, operator: string, number2: number }) {
    const borders: boolean = false;
    const spaceHints: boolean = false;

    let numOfSpace: number = spaceHints 
                    ? 
                    (number1 + number2).toString().split('').length
                    :
                    (number1.toString().split('').length > number2.toString().split('').length) ? number1.toString().split('').length : number2.toString().split('').length
                    ;

    const maxNumSpace = Array.from({ length: numOfSpace }, (_, i) => i);

    const num1 = number1.toString().padStart(numOfSpace, ' ');
    const num2 = number2.toString().padStart(numOfSpace, ' ');

    return (
        <div className="flex flex-row text-2xl m-5 w-40">
            <div className="flex flex-col items-center">
                <div className="flex h-full">
                    <div className='p-2 w-10 text-center'>&nbsp;</div>
                    {
                        maxNumSpace.map((num, i) =>
                            <div key={i} className={`${borders && 'border border-dotted'} p-2 w-10 text-center`}>{num1[i]}</div>
                        )
                    }
                </div>
                <div className="flex h-full">
                    <div className='p-2 w-10 text-center'>{getOperatorSymbol(operator)}</div>
                    {
                        maxNumSpace.map((num, i) =>
                            <div key={i} className={`${borders && 'border border-dotted'} p-2 w-10 text-center`}>{num2[i]}</div>
                        )
                    }
                </div>
                <div className="flex h-full">
                    <div className={`${borders && 'border'} border-t-2 p-2 w-10 text-center`}>&nbsp;</div>
                    {
                        maxNumSpace.map((num, i) =>
                            <div key={i} className={`${borders && 'border'} border-t-2 p-2 w-10 text-center`}>&nbsp;</div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

function getOperatorSymbol(operator: string) {
    switch(operator) {
        case 'add':
            return '+';
        case 'subtract':
            return '-';
        case 'multiply':
            return 'x';
        case 'divide':
            return '/';
    }
}