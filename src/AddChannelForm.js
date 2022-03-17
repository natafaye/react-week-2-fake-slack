import React, { Component } from 'react'

export default class AddChannelForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                name: "",
                description: ""
            }
        }
    }

    onSaveButtonClicked = () => {
        const channel = {
            id: 6,
            name: this.state.formData.name,
            description: this.state.formData.description,
            hasUnreadPosts: false
        }
        this.props.onSubmit(channel)
    }

    handleNameInputChanged = (event) => {
        this.setState( state => ({ formData: { ...state.formData, name: event.target.value } }) )
    }

    handleDescriptionInputChanged = (event) => {
        this.setState( state => ({ formData: { ...state.formData, description: event.target.value } }) )
    }


    render() {
        return (
            <div className="col">
                <label>Name:</label>
                <input type="text" className="form-control" value={this.state.formData.name} onChange={ this.handleNameInputChanged } />
                <label>Description:</label>
                <input type="text" className="form-control" value={this.state.formData.description} onChange={ this.handleDescriptionInputChanged } />
                <button onClick={this.onSaveButtonClicked} className="btn btn-primary">Save</button>
            </div>
        )
    }
}
