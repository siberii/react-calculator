import React, {ChangeEvent} from 'react';
import {Button} from '../Button/Button';
import {Input} from '../Input/Input';
import {Sign} from '../Sign';

interface ICalculatorState {
    num1: number | null;
    num2: number | null;
    operator: Sign;
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
            operator: Sign.Add,
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
            num2: null,
            operator: Sign.Add
        });
    };

    private calculate(sign: Sign): number {
        const {num1, num2} = this.state;
        let answer = 0;
        switch (sign) {
            case Sign.Add:
                answer = (num1 as number) + (num2 as number);
                break;
            case Sign.Subtract:
                answer = (num1 as number) - (num2 as number);
                break;
            case Sign.Multiply:
                answer = (num1 as number) * (num2 as number);
                break;
            case Sign.Divide:
                if (num2 === 0) {
                    answer = 0;
                    break;
                }
                answer =
                    Math.round(((num1 as number) / (num2 as number)) * 10) / 10;
                break;
            default:
                break;
        }
        return answer;
    }

    render(): JSX.Element {
        const {num1, num2, operator, result} = this.state;

        return (
            <div>
                <div>{result}</div>
                <div>
                    <Input operand={num1} handleOperand={this.handleNum1} />
                    <Input operand={num2} handleOperand={this.handleNum2} />
                    <Button handleClick={this.handleClear} value={'Clear'} />
                </div>
                <div>
                    <Button
                        handleClick={this.handleOperator(Sign.Add)}
                        value={Sign.Add}
                    />
                    <Button
                        handleClick={this.handleOperator(Sign.Subtract)}
                        value={Sign.Subtract}
                    />
                    <Button
                        handleClick={this.handleOperator(Sign.Multiply)}
                        value={Sign.Multiply}
                    />
                    <Button
                        handleClick={this.handleOperator(Sign.Divide)}
                        value={Sign.Divide}
                    />
                </div>
            </div>
        );
    }
}

export default Calculator;