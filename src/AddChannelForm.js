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

    onNameChanged = (event) => {
        this.setState(state => {
            // NO GOOD
            //state.formData.name = "fdsfdsf"

            const copyOfFormData = { ...state.formData };
            copyOfFormData.name = event.target.value;
            return { formData: copyOfFormData }
        })
    }
    
    onDescriptionChanged = (event) => {
        this.setState(state => {
            // NO GOOD
            //state.formData.name = "fdsfdsf"

            const copyOfFormData = { ...state.formData };
            copyOfFormData.description = event.target.value;
            return { formData: copyOfFormData }
        })
    }

    onSaveButtonClicked = () => {
        const newChannel = {
            id: 0, // no good
            name: this.state.formData.name,
            description: this.state.formData.description,
            messages: []
        }
        this.props.onSubmit(newChannel)
        this.setState({ formData: { name: "", description: "" }})
    }

    render() {
        return (
            <div className="col">
                <label>Name:</label>
                <input type="text" className="form-control" value={this.state.formData.name} onChange={this.onNameChanged}/>
                <label>Description:</label>
                <input type="text" className="form-control" value={this.state.formData.description} onChange={this.onDescriptionChanged}/>
                <button className="btn btn-primary" type="button" onClick={this.onSaveButtonClicked}>Save</button>
            </div>
        )
    }
}
