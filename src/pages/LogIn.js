import React, {Component} from 'react';
import MainLayout from '../component/MainLayout'
import LogInContent from '../component/LogIn/LoginContent'
import Subcribe from '../component/Home/Subscribe'
import Scroll from '../component/Scroll'

class LogIn extends Component { 
    // constructor(props){
    //     super(props)

    // }
    render(){
        return (
            <MainLayout>
                <LogInContent/>
                <Subcribe/>
                <Scroll/>
            </MainLayout>
        );
    }
}
export default LogIn;
