import React, { Component } from 'react'
import AddChannelForm from './AddChannelForm';
import ChannelView from './ChannelView';
import Sidebar from './Sidebar'

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            channelList: [
                {
                    id: 0,
                    name: "previous-class-recordings",
                    messages: [
                        {
                            id: 0,
                            author: "Natalie",
                            text: "Link to YouTube video",
                            unread: true
                        },
                        {
                            id: 1,
                            author: "Jose",
                            text: "Link to YouTube video",
                            unread: false
                        }
                    ]
                },
                {
                    id: 3,
                    name: "random",
                    messages: []
                },
                {
                    id: 4,
                    name: "general",
                    messages: [
                        {
                            id: 0,
                            author: "Simone",
                            text: "How's it going?",
                            unread: false
                        }
                    ]
                }
            ],
            selectedChannel: null
        }
        // hacky line - to be removed
        this.state.selectedChannel = this.state.channelList[0];
    }

    setSelectedChannel = (newSelectedChannel) => {
        // CAN'T DO THIS - CAN'T CHANGE STATE DIRECTLY
        // this.state.selectedChannel = channel

        // Isn't the best should be working off of ids
        this.setState({ selectedChannel: newSelectedChannel });
    }

    addChannel = (newChannel) => {
        // CAN'T DO THIS - CAN'T CHANGE STATE DIRECTLY
        // this.state.channelList.push(newChannel);

        // CAN'T DO THIS - ASYNCHRONOUS
        // const channelListCopy = this.state.channelList.slice()
        // const channelListCopy = [ ...this.state.channelList]
        // channelListCopy.push(newChannel);
        // this.setState({ channeList: channelListCopy })

        // GREAT WAY
        // this.setState(state => {
        //     const channelListCopy = [ ...state.channelList]
        //     channelListCopy.push(newChannel);
        //     return { channelList: channelListCopy }
        // });

        // ANOTHER WAY
        // this.setState(state => {
        //     const channelListCopy = [ ...state.channelList, newChannel]
        //     return { channelList: channelListCopy }
        // });

        // SUPER LEGIT WAY
        this.setState(state => ({ channelList: state.channelList.concat( [ newChannel ] ) }) );
        // filter for deleting
        // map for updating
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Sidebar channelListProp={this.state.channelList} onChannelSelected={this.setSelectedChannel} />
                    <AddChannelForm onSubmit={this.addChannel}/>
                    {/* <ChannelView channel={this.state.selectedChannel} /> */}
                </div>
            </div>
        )
    }
}
