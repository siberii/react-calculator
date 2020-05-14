import React, {Component, ChangeEvent, Fragment} from 'react';
import {Button} from '../Button/Button';
import {Sign} from '../Sign';

interface IOperatorsProp {
    handleClick: (event: any) => void;
}

export class Operators extends Component<IOperatorsProp> {
    render() {
        const {handleClick} = this.props;
        const {Add, Subtract, Multiply, Divide} = Sign;
        return (
            <Fragment>
                <Button handleClick={handleClick}>{Add}</Button>
                <Button handleClick={handleClick}>{Subtract}</Button>
                <Button handleClick={handleClick}>{Multiply}</Button>
                <Button handleClick={handleClick}>{Divide}</Button>
            </Fragment>
        );
    }
}
