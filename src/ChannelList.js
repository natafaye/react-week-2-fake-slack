import React, { Component } from 'react'
import Channel from './Channel'

export default class ChannelList extends Component {
    render() {

        /* FINE */
        // const listOfChannelComponents = [];
        // for(const channel of this.props.channelListData) {
        //     listOfChannelComponents.push( <Channel channelData={ channel} /> )
        // }

        return (
            <div>
                <button onClick={this.props.onCreateChannel}>Create New Channel</button>
                { this.props.channelListData.map(channel => <Channel channelData={channel} /> ) /* BETTER */ }
            </div>
        )
    }
}
