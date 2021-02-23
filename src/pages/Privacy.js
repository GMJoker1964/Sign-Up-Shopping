import React, {Component} from 'react';
import MainLayout from '../component/MainLayout'
import PrivacyContent from '../component/Privacy/PrivacyContent'
import Scroll from '../component/Scroll'

class Privacy extends Component { 
    // constructor(props){
    //     super(props)

    // }
    render(){
        return (
            <MainLayout>
                <PrivacyContent/>
                <Scroll/>
            </MainLayout>
        );
    }
}
export default Privacy;