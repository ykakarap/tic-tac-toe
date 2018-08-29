import React, { Component } from "react";

export default class Position extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if(this.props.marker === "") {
            this.props.onPositionClick(this.props.pos);
        }
    }

    render() {
        return (
            <div className="position" onClick={this.handleClick}>
                <span style={{fontSize:"80px"}}>{this.props.marker}</span>
            </div>
        );
    }
}