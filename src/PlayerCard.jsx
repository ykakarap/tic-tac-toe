import React, { Component } from "react";

export default class PlayerCard extends Component {
    render() {
        return(
            <div className="card">
                <div className={this.props.isTurn ? "is-turn" : ""}>
                    Player {this.props.marker}
                </div>
            </div>
        );
    }
}