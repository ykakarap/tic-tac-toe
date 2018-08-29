import React, { Component } from "react";
import "./Game.css";
import Title from "./Title.jsx";
import PlayerCard from "./PlayerCard.jsx";
import Board from "./Board.jsx";

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marker: "X",
            message: ""
        };

        this.play = this.play.bind(this);
        this.game = this.game.bind(this);
    }

    play() {
        if (this.state.marker === "X") {
            this.setState({
                marker: "O"
            });
        } else {
            this.setState({
                marker: "X"
            });
        }
    }


    game(winner) {
        console.log("game over?");
        console.log(winner);
        if (winner) {
            this.setState({
                message: "Player " + this.state.marker + " won!!"
            });
        } else {
            this.setState({
                message: "It's a draw!!"
            })
        }

        setTimeout(() => {
            this.setState({
                message: ""
            });
        }, 3000);
    }

    render() {
        return (
            <div className="game">
                <div className="title">
                    <Title />
                </div>
                <div className="players">
                    <div className="section-half">
                        <PlayerCard marker="X" isTurn={this.state.marker === "X" ? true : false} />
                    </div>
                    <div className="section-half">
                        <PlayerCard marker="O" isTurn={this.state.marker === "O" ? true : false} />
                    </div>
                </div>
                <div className="board-section">
                    <div className="centered">
                        <span style={{ fontSize: "40px" }}>{this.state.message}</span>
                    </div>
                    <Board marker={this.state.marker} userPlayed={this.play} gameOver={this.game} />
                </div>
            </div>
        );
    }
}