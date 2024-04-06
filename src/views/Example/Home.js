import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from '../../assets/images/Home1.jpg'

class Home extends React.Component {

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo')
    //     }, 3000);
    // }

    render() {
        console.log('>>> check props: ', this.props);

        return (
            <>
                <div>
                    Hello world from Homepage with CapPT

                </div>

                <div>
                    <img src={logo} style={{ width: '200px', height: '200px', marginTop: '20px' }}></img>
                </div>
            </>
        )
    }

}

// export default withRouter(Home)
export default Color(Home);