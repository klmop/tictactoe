import React, { Component } from 'react'
import Square from '../components/square';

class Board extends Component {

    render() {
        return (
            <div className="board">
                <div>
                    <Square onClickChange={() => this.props.handleClickChange(0)} value={this.props.squares[0]} />
                    <Square onClickChange={() => this.props.handleClickChange(1)} value={this.props.squares[1]} />
                    <Square onClickChange={() => this.props.handleClickChange(2)} value={this.props.squares[2]} />
                </div>
                <div>
                    <Square onClickChange={() => this.props.handleClickChange(3)} value={this.props.squares[3]} />
                    <Square onClickChange={() => this.props.handleClickChange(4)} value={this.props.squares[4]} />
                    <Square onClickChange={() => this.props.handleClickChange(5)} value={this.props.squares[5]} />
                </div>
                <div>
                    <Square onClickChange={() => this.props.handleClickChange(6)} value={this.props.squares[6]} />
                    <Square onClickChange={() => this.props.handleClickChange(7)} value={this.props.squares[7]} />
                    <Square onClickChange={() => this.props.handleClickChange(8)} value={this.props.squares[8]} />
                </div>
            </div>
        )
    }
}

export default Board