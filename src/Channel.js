import React, { Component } from 'react'

export default class Channel extends Component {
    render() {
        return (
            <div>
                <h2>{ this.props.channelData.name }</h2>
                <p>{ this.props.channelData.description }</p>
            </div>
        )
    }
}
