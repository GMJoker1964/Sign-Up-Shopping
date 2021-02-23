import React, {Component} from 'react';
import MainLayout from '../component/MainLayout'
import SignUpContent from '../component/SignUp/SignUpContent'
import Subcribe from '../component/Home/Subscribe'
import Scroll from '../component/Scroll'

class SignUp extends Component { 
    // constructor(props){
    //     super(props)

    // }
    render(){
        return (
            <MainLayout>
                <SignUpContent/>
                <Subcribe/>
                <Scroll/>
            </MainLayout>
        );
    }
}
export default SignUp;
