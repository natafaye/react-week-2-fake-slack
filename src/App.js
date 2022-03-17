import React, { Component } from 'react'
import AddChannelForm from './AddChannelForm';
import Channel from './Channel';
import Sidebar from './Sidebar'

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            channels: [
                {
                    id: 0,
                    name: "previous-class-recordings",
                    hasUnreadPosts: false
                },
                {
                    id: 3,
                    name: "random",
                    hasUnreadPosts: true
                },
                {
                    id: 4,
                    name: "general",
                    hasUnreadPosts: false
                }
            ],
            selectedChannel: null
        }
    }

    setSelectedChannel = (channel) => {
        // NEVER DO THIS
        //this.state.selectedChannel = channel;

        this.setState({ selectedChannel: channel });
    }

    addChannel = (channel) => {
        // NEVER DO THIS
        //this.state.channels.push(channel);

        // PERFECTLY GOOD WAY
        // this.setState(state => {
        //     //const copiedChannels = this.state.channels.slice();
        //     const copiedChannels = [...this.state.channels];
        //     copiedChannels.push(channel);
        //     return { channels: copiedChannels }
        // })

        // FANCY WAY
        this.setState( state => ({ channels: state.channels.concat([ channel ]) }) )
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Sidebar channelList={this.state.channels} onChannelSelected={this.setSelectedChannel} />
                    {/* <Channel channel={this.state.selectedChannel} /> */}
                    <AddChannelForm onSubmit={this.addChannel} />
                </div>
            </div>
        )
    }
}
