import React, { Component } from 'react'
import Message from './Message'

export default class MessageList extends Component {
  render() {
    return (
      <div>
          { this.props.messages.map(message => <Message message={message} key={message.id} /> )}
      </div>
    )
  }
}
