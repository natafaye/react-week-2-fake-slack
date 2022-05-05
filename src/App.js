import React, { Component } from 'react'
import AddChannelForm from './AddChannelForm';
import ChannelView from './ChannelView';
import Sidebar from './Sidebar';

// NO GOOD
// const messages = [

// ]

export default class App extends Component {
    constructor(props) {
        super(props);
        // GOOD
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
            selectedChannelId: 0
        }
    }

    setSelectedChannelId = (newId) => {
        // DON'T DO
        //this.state.selectedChannelId = 1
        this.setState({ selectedChannelId: newId })
    }

    addChannel = (newChannelData) => {
        this.setState(state => {
            const newChannel = {
                id: state.channelList[state.channelList.length - 1].id + 1, // hack
                name: newChannelData.name,
                description: newChannelData.description,
                messages: []
            }
            const copyOfChannelList = [...state.channelList]
            copyOfChannelList.push(newChannel);
            return { channelList: copyOfChannelList }
        })
    }

    render() {
        // NO GOOD
        // this.messages = []

        return (
            <div className="container">
                <div className="row">
                    <Sidebar channelList={this.state.channelList} setSelectedChannelId={this.setSelectedChannelId}/>
                    <ChannelView channel={this.state.channelList.find(channel => channel.id === this.state.selectedChannelId)} />
                    <AddChannelForm onAddChannel={this.addChannel} />
                </div>
            </div>
        )
    }
}
