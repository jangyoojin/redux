import { INCREASE, DECREASE } from './actionType';

const initialState = {
    count: 0
};

export default function reducer(state = initialState, action) {
    switch (action.type){
        case INCREASE:
            return Object.assign({},state,{
                count: state.count + action.amount
            });
        case DECREASE:
            return Object.assign({},state,{
                count: state.count - action.amount
            });
        default:
            return state;
    }
}