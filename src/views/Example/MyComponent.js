import React from 'react';
import ChildComponent from './ChildComponnt';


class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: '500' },
            { id: 'abcJob2', title: 'Testers', salary: '400' },
            { id: 'abcJob3', title: 'Project managers', salary: '1000' },
        ]
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('check data: ', this.state);
    }

    render() {
        console.log('>>> call render', this.state);
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        id="fname"
                        name="fname"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input
                        type="text"
                        id="lname"
                        name="lname"
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)}
                    /><br /><br />
                    <input type="Submit" value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>

                <ChildComponent
                    name={this.state.firstName}
                    age={'20'}
                    address={'Tra Vinh'}
                    arrJobs={this.state.arrJobs}
                />

            </>
        )
    }
}

export default MyComponent;