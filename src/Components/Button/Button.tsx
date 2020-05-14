import React, {Component} from 'react';
import './Button.css';
interface IButtonState {
    //
}

interface IButtonProp {
    handleClick: () => void;
}

export class Button extends Component<IButtonProp, IButtonState> {
    render(): JSX.Element {
        const {handleClick} = this.props;
        console.log(this.props.children);

        return (
            <div>
                <button
                    type='button'
                    className='button'
                    onClick={handleClick}
                >
                    {this.props.children}
                </button>
            </div>
        );
    }

    private getColorStyle(value: string) {
        const COLOR = '#D64952';
        const isClear = value === 'Clear';

        const colorStyle = {
            backgroundColor: isClear ? COLOR : ''
        };

        return colorStyle;
    }
}
