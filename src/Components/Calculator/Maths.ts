import { Sign } from "../Sign";

export class Maths {
    static calculate(sign: Sign, first: number, second: number) {
        let answer = 0;
        switch (sign) {
            case Sign.Add:
                answer = first + second;
                break;
            case Sign.Subtract:
                answer = first - second;
                break;
            case Sign.Multiply:
                answer = first * second;
                break;
            case Sign.Divide:
                if (!second) {
                    answer = 0;
                    break;
                }
                answer = Math.round((first / second) * 10) / 10;
                break;
            default:
                break;
        }

        return answer;
    }

}
