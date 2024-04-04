import React from "react";

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: '',
    }

    handleTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        if (!this.state.title || !this.state.salary) {
            alert('Missing required params')
            return;
        }
        console.log('check data: ', this.state);
        this.props.addNewJob({
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
            salary: this.state.salary,
        });

        this.setState({
            title: '',
            salary: '',
        })
    }

    render() {
        return (
            <form>
                <label htmlFor="fname">Job title:</label><br />
                <input
                    type="text"
                    id="fname"
                    name="fname"
                    value={this.state.title}
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