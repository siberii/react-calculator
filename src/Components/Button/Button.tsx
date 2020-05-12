import React, {Component} from 'react';
import {Sign} from '../Sign';

interface IButtonState {
    //
}

interface IButtonProp {
    value: string;
    handleClick: () => void;
}

export class Button extends Component<IButtonProp, IButtonState> {
    constructor(props: IButtonProp) {
        super(props);
    }

    render(): JSX.Element {
        const {handleClick, value} = this.props;
        return (
            <div>
                <button onClick={handleClick}>{value}</button>
            </div>
        );
    }
}
