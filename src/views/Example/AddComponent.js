import React from "react";

class AddComponent extends React.Component {

    state = {
        titleJob: '',
        salary: '',
    }

    handleTitleJob = (event) => {
        this.setState({
            titleJob: event.target.value
        })
    }

    handleSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('check data: ', this.state);
    }

    render() {
        return (
            <form>
                <label htmlFor="fname">Job title:</label><br />
                <input
                    type="text"
                    id="fname"
                    name="fname"
                    value={this.state.titleJob}
                    onChange={(event) => this.handleTitleJob(event)}
                /><br />
                <label htmlFor="lname">Salary:</label><br />
                <input
                    type="text"
                    id="lname"
                    name="lname"
                    value={this.state.salary}
                    onChange={(event) => this.handleSalary(event)}
                /><br /><br />
                <input type="Submit" value="Submit"
                    onClick={(event) => this.handleSubmit(event)}
                />
            </form>
        )
    }
}

export default AddComponent;