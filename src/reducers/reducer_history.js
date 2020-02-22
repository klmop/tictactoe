
export const CLICK_TURN = 'clickTurn'
export const JUMP = 'jump'

const HISTORY_INIT = {
    SquaresHistory: [{squares: Array(9).fill(null)}],
    XTurnsHistory: [true, null, null, null, null, null, null, null, null],
    StepNumber: 0,
    Winner: null
}

function historyReducer (state = HISTORY_INIT, action) {
    switch(action.type) {
        case CLICK_TURN : {
            console.log('historyReducer : ClickTurn : ', state)
            const stepNumber = state.StepNumber
            const squares = state.SquaresHistory[stepNumber].squares.slice()
            const xTurn = state.XTurnsHistory[stepNumber]
            const indice = action.payload.indice
            if(squares[indice]) {
                break
            }
            const newState = {...state}
            let winner = getWinner(squares)
            if(winner) {
                newState.Winner = winner
                state = newState
                break
            }
            squares[indice] = xTurn?'X':'O'
            newState.StepNumber = stepNumber + 1
            newState.SquaresHistory = state.SquaresHistory.concat({squares: squares})
            newState.XTurnsHistory[newState.StepNumber] = !xTurn
            winner = getWinner(squares)
            if(winner) {
                newState.Winner = winner
            }
            state = newState
            console.log('New State : ', state)
            break;
        }
        case JUMP : {
            console.log('historyReducer : jump : ', action.payload)
            const stepNumber = action.payload.stepNumber
            const squaresHistory = state.SquaresHistory.slice(0, stepNumber + 1)
            if(stepNumber < state.StepNumber) state.Winner = null
            state.StepNumber = stepNumber
            state.SquaresHistory = squaresHistory
            state = {...state}
            break;
        }
        default: break;

    }

    return state
}

export default historyReducer

function getWinner(squares) {
    const winTab = [
       [0, 1, 2],
       [3, 4, 5],
       [6, 7, 8],
       [0, 4, 8],
       [2, 4, 6],
       [0, 3, 6],
       [1, 4, 7],
       [2, 5, 8],
     ]
   
     for(let i = 0; i < winTab.length; i++) {
       const [a, b, c] = winTab[i];
       if(squares[a]&&(squares[a]===squares[b])&&(squares[a]===squares[c])) {
         return squares[a];
       }
     }
   }