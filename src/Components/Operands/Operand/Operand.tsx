import React, {Component, ChangeEvent} from 'react';
import './Operand.css'
import { Sign } from '../../Sign';


interface IOperandProp {
    operand: number | null;
    handleOperand: (event: ChangeEvent<HTMLInputElement>) => void;
}

export class Operand extends Component<IOperandProp> {
    render() {
        const {operand, handleOperand} = this.props;
        return (
            <input
                className='input'
                type='number'
                value={operand ? operand : ''}
                onChange={handleOperand}
            />
        );
    }
}
