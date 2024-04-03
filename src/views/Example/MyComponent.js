import React from 'react';


class MyComponent extends React.Component {

    state = {
        name: 'Cap',
        channel: 'PT'
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        let name = 'CapPT';
        return (
            <>
                <div>
                    <input value={this.state.name} type='text'
                        onChange={(event) => this.handleOnChangeName(event)}
                    >

                    </input>

                    {console.log('My name is : ', name)}
                    Hello my component, My name is {this.state.name}

                </div>

                <div>
                    My youtube channel : this.state.channel
                </div>
            </>
        )
    }
}

export default MyComponent;