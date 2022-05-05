import React, { Component } from 'react'

export default class Message extends Component {
    render() {
        return (
            <div className="card my-3">
                <div className="card-body">
                    <h4 className="card-title">{ this.props.message.author }</h4>
                    <p className="card-text">
                        { this.props.message.text }
                    </p>
                </div>
            </div>
        )
    }
}
