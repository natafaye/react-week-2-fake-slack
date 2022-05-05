import React, { Component } from 'react'

class SidebarChannelLink extends Component {

    onChannelLinkClick = () => {
        // call that function passed through props
        this.props.setSelectedChannelId(this.props.channelProp.id);
    }

    render() {
        return (
            <li >
                <button onClick={this.onChannelLinkClick} className="btn btn-link text-white">#{ this.props.channelProp.name }</button>
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
                    { this.props.channelList.map(channelParameter => <SidebarChannelLink key={channelParameter.id} channelProp={channelParameter} setSelectedChannelId={this.props.setSelectedChannelId} />)  }
                </ul>
            </div>
        )
    }
}