import React, {Component} from 'react';
import MainLayout from '../component/MainLayout'
import HomeContent from '../component/Home/HomeContent'
class Home extends Component { 
    // constructor(props){
    //     super(props)

    // }

    render(){
        return (
            <MainLayout>
                <HomeContent/>
            </MainLayout>
        );
    }
}
export default Home;
