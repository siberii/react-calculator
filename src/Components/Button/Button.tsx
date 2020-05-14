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

        return (
            <div>
                <button
                    type='button'
                    className='button'
                    onClick={handleClick}
                    value={children ? children.toString() : ''}
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
