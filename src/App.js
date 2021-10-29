import React, { Component } from 'react'
import ChannelList from './ChannelList';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            channelList: []
        }
    }

    handleCreateChannel = () => {
        // We're using the same static data for every channel we make for simplicity
        const newChannel = {
            name: "New Channel",
            description: "fdjsklfdjs",
            public: true
        }

        // BAD
        //this.state.channelList.push(newChannel);

        
        // GOOD
        // this.setState(state => {
        //     const newChannelList = [ ...state.channelList ];
        //     newChannelList.push(newChannel);
        //     return { channelList: newChannelList }
        // });

        // BETTER
        this.setState(state => ({
            channelList: state.channelList.concat( [ newChannel ] )
        }))
    }

    render() {
        return (
            <div>
                <p>Number of Channels: { this.state.channelList.length }</p>
                <ChannelList channelListData={ this.state.channelList } onCreateChannel={ this.handleCreateChannel } />
            </div>
        )
    }
}
