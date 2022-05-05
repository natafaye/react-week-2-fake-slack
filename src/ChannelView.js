import React, { Component } from 'react'
import MessageList from './MessageList'

export default class ChannelView extends Component {
    render() {
        return (
            <div className="col">
                <h3>#{this.props.channel.name}</h3>
                <div>
                    <MessageList messages={this.props.channel.messages} />
                </div>
            </div>
        )
    }
}
