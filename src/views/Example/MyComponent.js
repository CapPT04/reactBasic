import React from 'react';
import ChildComponent from './ChildComponnt';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {

    state = {

        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: '500' },
            { id: 'abcJob2', title: 'Testers', salary: '400' },
            { id: 'abcJob3', title: 'Project managers', salary: '1000' },
        ]
    }

    addNewJob = (job) => {
        console.log("check job from parent: ", job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteAJob = (job) => {
        this.setState({
            arrJobs: this.state.arrJobs.filter(item => item.id !== job.id)
        });
    }



    render() {
        console.log('>>> call render', this.state);
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />


                <ChildComponent

                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />

            </>
        )
    }
}

export default MyComponent;