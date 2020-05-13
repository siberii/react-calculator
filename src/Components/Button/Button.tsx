import React, {Component} from 'react';
import './Button.css'
interface IButtonState {
    //
}

interface IButtonProp {
    value: string;
    handleClick: () => void;
}

export class Button extends Component<IButtonProp, IButtonState> {
    render(): JSX.Element {
        const {handleClick, value} = this.props;
        return (
            <div>
                <button className="button" onClick={handleClick}>{value}</button>
            </div>
        );
    }
}
