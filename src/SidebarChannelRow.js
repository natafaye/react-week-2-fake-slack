import React, { Component } from 'react'

export default class SidebarChannelRow extends Component {
    render() {
        return (
            <li className={"channel-row" + (this.props.channel.hasUnreadPosts) ? " text-bold" : ""}>
                <a onClick={ () => this.props.onChannelSelected(this.props.channel) }># {this.props.channel.name}</a>
            </li>
        )
    }
}