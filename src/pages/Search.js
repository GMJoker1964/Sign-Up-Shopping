import React, {Component} from 'react';
import MainLayout from '../component/MainLayout'
import SearchContent from '../component/Search/SearchContent'
import Scroll from '../component/Scroll'

class Privacy extends Component { 
    // constructor(props){
    //     super(props)

    // }
    render(){
        return (
            <MainLayout>
                <SearchContent/>
                <Scroll/>
                <br/>
            </MainLayout>
        );
    }
}
export default Privacy;