import React, {Component} from 'react';
import MainLayout from '../component/MainLayout'
import ContactContent from '../component/Contact/ContactContent'
import Scroll from '../component/Scroll'

class Contact extends Component { 
    // constructor(props){
    //     super(props)

    // }
    render(){
        return (
            <MainLayout>
                <ContactContent/>
                <Scroll/>
            </MainLayout>
        );
    }
}
export default Contact;