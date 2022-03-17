import React, { Component } from 'react'
import SidebarChannelRow from './SidebarChannelRow'

export default class Sidebar extends Component {
    render() {
        return (
            <div className="col-3 bg-dark text-light">
                <h2>Sidebar</h2>
                <ul className="list-unstyled">
                    { this.props.channelList.map( channel => 
                        <SidebarChannelRow key={ channel.id } channel={channel} onChannelSelected={this.props.onChannelSelected} /> 
                    )}
                </ul>
            </div>
        )
    }
}

