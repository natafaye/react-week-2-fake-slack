import React, { Component } from 'react'

class MessageCard extends Component {
    render() {
        return (
            <div className="card my-3">
                <div className="card-body">
                    <h4 className="card-title">{ this.props.messageProp.author }</h4>
                    <p className="card-text">
                        { this.props.messageProp.text }
                    </p>
                </div>
            </div>
        )
    }
}

export default class MessageList extends Component {
  render() {
    return (
      <div>
          { this.props.messages.map( messageParameter => <MessageCard messageProp={messageParameter} key={messageParameter.id} /> ) }
      </div>
    )
  }
}
