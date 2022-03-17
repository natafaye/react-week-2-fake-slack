import React, { Component } from 'react'

export default class Channel extends Component {
  render() {
    return (
        <div className="col">
            { (this.props.channel !== null) ? this.props.channel.name : "No Channel Selected" }
        </div>
    )
  }
}
