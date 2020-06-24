// Code DigitalClicker Component Here
import React, { Component } from 'react'

class DigitalClicker extends Component {
    state = {
        timesClicked: 0
    }

    handleClick = () => {
        let newState = this.state
        newState.timesClicked = newState.timesClicked + 1
        this.setState(newState)
    }

    render() {
        return(
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker;