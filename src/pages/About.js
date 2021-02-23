import React, {Component} from 'react';
import MainLayout from '../component/MainLayout'
import AboutContent from '../component/About/AboutContent'

class About extends Component { 

    render(){
        return (
            <MainLayout>
                <AboutContent/>
            </MainLayout>
        );
    }
}
export default About;
