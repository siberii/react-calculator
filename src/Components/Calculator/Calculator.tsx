import React, {ChangeEvent} from 'react';
import {Button} from '../Button/Button';
import {Sign} from '../Sign';
import './Calculator.css';
import {Operands} from '../Operands/Operands';
import {Maths} from './Maths';
import {Operators} from '../Operators/Operators';

interface ICalculatorState {
    num1: number | null;
    num2: number | null;
    result: number;
}

interface ICalculatorProp {
    //
}

export class Calculator extends React.Component<
    ICalculatorProp,
    ICalculatorState
> {
    constructor(props: ICalculatorProp) {
        super(props);
        this.state = {
            num1: null,
            num2: null,
            result: 0
        };
    }

    handleNum1 = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            num1: Number(event.target.value)
        });
    };

    handleNum2 = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            num2: Number(event.target.value)
        });
    };

    handleOperator = (event: ChangeEvent<HTMLButtonElement>) => {
        const first = this.state.num1 ? this.state.num1 : 0;
        const second = this.state.num2 ? this.state.num2 : 0;
        const sign = event.target.value as Sign;

        this.setState({
            result: Maths.calculate(sign, first, second)
        });
    };

    handleClear = () => {
        this.setState({
            num1: null,
            num2: null
        });
    };

    render(): JSX.Element {
        const {num1, num2, result} = this.state;

        return (
            <div className='modal'>
                <div className='title'>Calculator</div>
                <div className='content'>
                    <div className='result'>{result}</div>
                    <div className='row operands'>
                        <Operands
                            num1={num1}
                            num2={num2}
                            handleNum1={this.handleNum1}
                            handleNum2={this.handleNum2}
                        />
                        <Button handleClick={this.handleClear}>Clear</Button>
                    </div>
                    <div className='row operators'>
                        <Operators handleClick={this.handleOperator} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;
