import React, {ChangeEvent} from 'react';
import {Button} from '../Button/Button';
import {Sign} from '../Sign';
import './Calculator.css';
import {Operands} from '../Operands/Operands';

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

    handleOperator = (sign: Sign) => () => {
        this.setState({
            result: this.calculate(sign)
        });
    };

    handleClear = () => {
        this.setState({
            num1: null,
            num2: null
        });
    };

    private calculate(sign: Sign): number {
        const firstOperand = this.state.num1 ? this.state.num1 : 0;
        const secondOperand = this.state.num2 ? this.state.num2 : 0;

        let answer = 0;
        switch (sign) {
            case Sign.Add:
                answer = firstOperand + secondOperand;
                break;
            case Sign.Subtract:
                answer = firstOperand - secondOperand;
                break;
            case Sign.Multiply:
                answer = firstOperand * secondOperand;
                break;
            case Sign.Divide:
                if (!secondOperand) {
                    answer = 0;
                    break;
                }
                answer = Math.round((firstOperand / secondOperand) * 10) / 10;
                break;
            default:
                break;
        }
        return answer;
    }

    render(): JSX.Element {

        return (
            <div className='modal'>
                <div className='title'>Calculator</div>
                <div className='content'>
                    <div className='result'>{this.state.result}</div>
                    <div className='row'>
                        <Operands
                            num1={this.state.num1}
                            num2={this.state.num2}
                            handleNum1={this.handleNum1}
                            handleNum2={this.handleNum2}
                        />
                        <Button handleClick={this.handleClear}>Clear</Button>
                    </div>
                    <div className='row operators'>
                        <Button handleClick={this.handleOperator(Sign.Add)}>
                            {Sign.Add}
                        </Button>
                        <Button
                            handleClick={this.handleOperator(Sign.Subtract)}
                        >
                            {Sign.Subtract}
                        </Button>
                        <Button
                            handleClick={this.handleOperator(Sign.Multiply)}
                        >
                            {Sign.Multiply}
                        </Button>
                        <Button handleClick={this.handleOperator(Sign.Divide)}>
                            {Sign.Divide}
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;
