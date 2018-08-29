import React, { Component } from "react";
import Position from "./Position.jsx"

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            a: "",
            b: "",
            c: "",
            d: "",
            e: "",
            f: "",
            g: "",
            h: "",
            i: "",
            moves: 0
        }
    }

    handleClick(pos) {
        this.setState({
            [pos]: this.props.marker,
            moves: this.state.moves + 1
        }, () => {
            console.log("moves", this.state.moves);
            // If game is over call the gameOver function from props.
            let winner = this.isGameOver();
            if (winner || (this.state.moves === 9)) {
                this.setState({
                    a: "",
                    b: "",
                    c: "",
                    d: "",
                    e: "",
                    f: "",
                    g: "",
                    h: "",
                    i: "",
                    moves: 0
                });
                this.props.gameOver(winner);
            } else {
                this.props.userPlayed();
            }
        });


    }

    isGameOver() {
        // 1st row
        if (this.state.a === this.state.b && this.state.b === this.state.c && this.state.c !== "") {
            return this.props.marker;
        }
        // 2nd row
        if (this.state.d === this.state.e && this.state.e === this.state.f && this.state.f !== "") {
            return this.props.marker;
        }
        // 3rd row
        if (this.state.g === this.state.h && this.state.h === this.state.i && this.state.i !== "") {
            return this.props.marker;
        }
        // 1st column
        if (this.state.a === this.state.d && this.state.d === this.state.g && this.state.g !== "") {
            return this.props.marker;
        }
        // 2nd column
        if (this.state.b === this.state.e && this.state.e === this.state.h && this.state.h !== "") {
            return this.props.marker;
        }
        // 3rd column
        if (this.state.c === this.state.f && this.state.f === this.state.i && this.state.i !== "") {
            return this.props.marker;
        }
        // 1st diagonal
        if (this.state.a === this.state.e && this.state.e === this.state.i && this.state.i !== "") {
            return this.props.marker;
        }
        // 2nd diagonal
        if (this.state.c === this.state.e && this.state.e === this.state.g && this.state.g !== "") {
            return this.props.marker;
        }
        return false;
    }

    render() {
        return (
            <div className="centered">
                <div className="board">
                    <Position pos="a" marker={this.state.a} onPositionClick={this.handleClick} />
                    <Position pos="b" marker={this.state.b} onPositionClick={this.handleClick} />
                    <Position pos="c" marker={this.state.c} onPositionClick={this.handleClick} />
                    <Position pos="d" marker={this.state.d} onPositionClick={this.handleClick} />
                    <Position pos="e" marker={this.state.e} onPositionClick={this.handleClick} />
                    <Position pos="f" marker={this.state.f} onPositionClick={this.handleClick} />
                    <Position pos="g" marker={this.state.g} onPositionClick={this.handleClick} />
                    <Position pos="h" marker={this.state.h} onPositionClick={this.handleClick} />
                    <Position pos="i" marker={this.state.i} onPositionClick={this.handleClick} />
                </div>
            </div>
        );
    }
}