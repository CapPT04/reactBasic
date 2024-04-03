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

    handleClickButton = () => {
        alert('click me')
    }

    render() {
        let name = 'CapPT';
        return (
            <>
                <div className='first'>
                    <input value={this.state.name} type='text'
                        onChange={(event) => this.handleOnChangeName(event)}
                    >

                    </input>

                    {console.log('My name is : ', name)}
                    Hello my component, My name is {this.state.name}

                </div>

                <div className='second'>
                    My youtube channel : this.state.channel
                </div>

                <div className='third'>
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </>
        )
    }
}

export default MyComponent;