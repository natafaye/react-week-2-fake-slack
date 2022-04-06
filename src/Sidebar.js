import React, { Component } from 'react'

class SidebarChannelLink extends Component {

    onChannelClick = () => {
        this.props.onChannelSelected(this.props.channel)
    }

    render() {
        return (
            <li >
                <button className="btn btn-link text-white" onClick={this.onChannelClick}>#{ this.props.channel.name }</button>
            </li>
        )
    }
}

export default class Sidebar extends Component {
    render() {
        return (
            <div className="col-3 bg-dark text-light">
                <h2>Flack</h2>
                <ul className="list-unstyled">
                    { this.props.channelListProp.map( channel => 
                        <SidebarChannelLink channel={channel} key={channel.id} onChannelSelected={this.props.onChannelSelected} />
                    )}
                </ul>
            </div>
        )
    }
}

