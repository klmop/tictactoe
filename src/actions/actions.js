import { CLICK_TURN, JUMP } from "../reducers/reducer_history";
import { CLICK_COCO } from "../reducers/reducer_coco";

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

export function clickCoco(value) {
    return({
        type: CLICK_COCO,
        payload: {value: value}
    })
}
