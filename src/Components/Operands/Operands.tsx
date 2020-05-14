import React, {Component, ChangeEvent} from 'react';
import {Operand} from './Operand/Operand';

interface IOperandsProp {
    num1: number | null;
    num2: number | null;
    handleNum1: (event: ChangeEvent<HTMLInputElement>) => void;
    handleNum2: (event: ChangeEvent<HTMLInputElement>) => void;
}

export class Operands extends Component<IOperandsProp> {
    render() {
        const {num1, num2, handleNum1, handleNum2} = this.props;
        return (
            <div className='inputs'>
                <Operand operand={num1} handleOperand={handleNum1} />
                <Operand operand={num2} handleOperand={handleNum2} />
            </div>
        );
    }
}
