'use client';

import IProblem from '@/interface/IProblems';
import { createContext, useContext, useState, ReactNode } from 'react';


interface IConfiguration {
    // Sheet
    workSheet: IProblem[];
    setWorkSheet: (problems: IProblem[]) => void;

    // Numbers
    numberTopMin: string;
    numberTopMax: string;
    numberBottomMin: string;
    numberBottomMax: string;

    setNumberTopMin: (number: string) => void;
    setNumberTopMax: (number: string) => void;
    setNumberBottomMin: (number: string) => void;
    setNumberBottomMax: (number: string) => void;

    // Operators
    operators: IConfigureOperator[];
    addOperator: (oper: string, numOfProblems: string) => void;
    removeOperator: (oper: string) => void;
    modifyOperatorNumberOfProblems: (oper: string, numOfProblems: string) => void;
    numberOfAdd: string;
    setNumberOfAdd: (number: string) => void;
    numberOfSubtract: string;
    setNumberOfSubtract: (number: string) => void;
    numberOfMultply: string;
    setNumberOfMultiply: (number: string) => void;
    numberOfDivide: string;
    setNumberOfDivide: (number: string) => void;
    

    // Look and Feel
    spaceBorders: boolean;
    toggleBorders: () => void;
    spaceHints: boolean;
    toggleHints: () => void;
}

export interface IConfigureOperator {
    operator: string;
    numberOfProblems: string;
}

// Create the context
const ConfigContext = createContext<IConfiguration | undefined>(undefined);

// Create the provider component
export function ConfigurationProviders({ children }: { children: ReactNode }) {
    const [workSheet, setWorkSheet] = useState<IProblem[]>([]);

    const [numberTopMin, setNumberTopMin] = useState<string>('0');
    const [numberTopMax, setNumberTopMax] = useState<string>('9');
    const [numberBottomMin, setNumberBottomMin] = useState<string>('0');
    const [numberBottomMax, setNumberBottomMax] = useState<string>('9');

    const [spaceBorders, setSpaceBorders] = useState(false);
    const [spaceHints, setSpaceHints] = useState(false);

    const [operators, setOperators] = useState<IConfigureOperator[]>([{ operator: 'add', numberOfProblems: '10' }]);
    const [numberOfAdd, setNumberOfAdd] = useState<string>('10');
    const [numberOfSubtract, setNumberOfSubtract] = useState<string>('10');
    const [numberOfMultply, setNumberOfMultiply] = useState<string>('10');
    const [numberOfDivide, setNumberOfDivide] = useState<string>('10');

    function toggleBorders() { setSpaceBorders(!spaceBorders); }
    function toggleHints() { setSpaceHints(!spaceHints); }

    function addOperator(oper: string, numOfProblems: string) {
        setOperators([...operators, { operator: oper, numberOfProblems: (numOfProblems ? numOfProblems : '0') }]);
    }

    function modifyOperatorNumberOfProblems(oper: string, numOfProblems: string) {
        setOperators(operator => operator.map(o => o.operator === oper ? { ...o, numberOfProblems: numOfProblems } : o));
    }

    function removeOperator(oper: string) {
        setOperators(operators.filter((o) => o.operator !== oper))
    }



    return (
        <ConfigContext.Provider value={{
            workSheet, setWorkSheet,
            spaceBorders, spaceHints, toggleBorders, toggleHints,
            operators, addOperator, removeOperator, modifyOperatorNumberOfProblems,
            numberOfAdd, numberOfSubtract, numberOfMultply, numberOfDivide, setNumberOfAdd, setNumberOfSubtract, setNumberOfMultiply, setNumberOfDivide,
            numberTopMin, numberTopMax, numberBottomMin, numberBottomMax, setNumberTopMin, setNumberTopMax, setNumberBottomMin, setNumberBottomMax
        }}>
            {children}
        </ConfigContext.Provider>
    );
}

// Create a custom hook to consume
export function useConfiguration() {
    const context = useContext(ConfigContext);
    if (context === undefined) {
        throw new Error('Configuration Provider Error!');
    }
    return context;
}
