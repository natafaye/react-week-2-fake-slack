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

    onNameInputChange = (event) => {
        this.setState(state => {
            const copyOfFormData = { ...state.formData }
            copyOfFormData.name = event.target.value;
            return { formData: copyOfFormData }
        })
    }

    onDescriptionInputChange = (event) => {
        this.setState(state => {
            const copyOfFormData = { ...state.formData }
            copyOfFormData.description = event.target.value;
            return { formData: copyOfFormData }
        })
    }

    onSubmitButtonClick = () => {
        this.props.onAddChannel(this.state.formData);
    }

    render() {
        return (
            <div className="col">
                <label>Name:</label>
                <input type="text" className="form-control" onChange={this.onNameInputChange} value={this.state.formData.name} />
                <label>Description:</label>
                <textarea className="form-control" onChange={this.onDescriptionInputChange} value={this.state.formData.description} />
                <button className="btn btn-primary" onClick={this.onSubmitButtonClick}>Submit</button>
            </div>
        )
    }
}
