import { CLICK_TURN, JUMP } from "../reducers/reducer_history";

export function clickTurn(indice) {
    return({
        type: CLICK_TURN,
        payload: {indice: indice}
    })
}

export function jumpTo(stepNum) {
    return({
        type: JUMP,
        payload: {stepNumber: stepNum }
    })
}