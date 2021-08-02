import { INCREASE, DECREASE } from './actionType';


export function increase(diff){
    return {
        type: INCREASE,
        amount: diff
    };
}
export function decrease(diff){
    return {
        type: DECREASE,
        amount: diff
    };
}