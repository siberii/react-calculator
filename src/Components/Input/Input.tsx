import React, {Component, ChangeEvent} from 'react';

interface IInputState {
    //
}

interface IInputProp {
    operand: number | null;
    handleOperand: (event: ChangeEvent<HTMLInputElement>) => void;
}

export class Input extends Component<IInputProp, IInputState> {
    constructor(props: IInputProp) {
        super(props);
    }

    render() {
        const {operand, handleOperand} = this.props;
        return (
            <input
                type='number'
                value={operand ? operand : ''}
                onChange={handleOperand}
            />
        );
    }
}
