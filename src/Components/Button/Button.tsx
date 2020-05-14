import React, {Component, ChangeEvent} from 'react';
import './Button.css';
interface IButtonState {
    //
}

interface IButtonProp {
    handleClick: (event: any) => void;
}

export class Button extends Component<IButtonProp, IButtonState> {
    render(): JSX.Element {
        const {handleClick, children} = this.props;

        const value = children ? children.toString() : '';
        return (
            <div>
                <button
                    type='button'
                    className='button'
                    onClick={handleClick}
                    value={value}
                    style={this.getColorStyle(value)}
                >
                    {children}
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
