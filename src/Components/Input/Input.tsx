import React, {Component, ChangeEvent} from 'react';
import './Input.css'
interface IInputState {
    //
}

interface IInputProp {
    operand: number | null;
    handleOperand: (event: ChangeEvent<HTMLInputElement>) => void;
}

export class Input extends Component<IInputProp, IInputState> {
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
