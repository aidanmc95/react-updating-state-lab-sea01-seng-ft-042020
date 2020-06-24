// Code YouTubeDebugger Component Here
import React, { Component, Fragment } from 'react'

class YouTubeDebugger extends Component {
    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    handleBitrate = () => {
        let newState = this.state
        newState.settings.bitrate = 12
        this.setState(newState)
    }

    handleResolution = () => {
        let newState = this.state
        newState.settings.video.resolution = '720p'
        this.setState(newState)
    }

    render() {
        return(
            <Fragment>
                <button className="bitrate" onClick={this.handleBitrate}>bitrate</button>
                <button className="resolution" onClick={this.handleResolution}>resolution</button>
            </Fragment>
        )
    }
}

export default YouTubeDebugger;