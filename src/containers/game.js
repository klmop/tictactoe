import React, { Component } from 'react'
import Board from './board';
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux';
import { clickTurn, jumpTo, clickCoco } from '../actions/actions';


class Game extends Component {
    render() {
        const stepNumber = this.props.history.StepNumber
        const squares = this.props.history.SquaresHistory[stepNumber].squares
        const xTurn = this.props.history.XTurnsHistory[stepNumber]
        const winner = this.props.history.Winner
        const statusGame = winner || (stepNumber === 9)?winner?`The Winner is ${winner}`: 'Match nul!' : `Au tour de  ${xTurn?'X':'O'}`
        const historyList = this.props.history.SquaresHistory.map((step, stepNum) => {
             return <li key={stepNum} onClick={() => this.props.jumpTo(stepNum)}>{'Aller au step : ' + (stepNum + 1)}</li>
            })
        
        return(
            <div className="game">
                <div>
                    <Board handleClickChange={(i) => {this.props.handleClick(i); this.props.clickCoco('update ok!' + i)}} squares={squares} />
                </div>
                <div className="status">
                    {statusGame}
                   <ol>
                        {historyList}
                   </ol>
                </div>
            </div>
        )
    }
}

function mapStateToProps(store) {
    return({
        history: store.history,
        coco: store.coco
    })
}

const mapDispatchToProps = {
    handleClick: clickTurn, jumpTo: jumpTo, clickCoco: clickCoco
}
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({handleClick: clickTurn, jumpTo: jumpTo, clickCoco: clickCoco}, dispatch)
// }

export default connect(mapStateToProps, mapDispatchToProps) (Game)