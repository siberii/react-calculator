import React, {Component} from 'react';
import './Button.css';
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
        const CLEAR_COLOR = '#D64952';
        return (
            <div>
                <button
                    className='button'
                    style={{
                        backgroundColor: value === 'Clear' ? CLEAR_COLOR : ''
                    }}
                    onClick={handleClick}
                >
                    {value}
                </button>
            </div>
        );
    }
}
