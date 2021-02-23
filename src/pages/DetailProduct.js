import React, {Component} from 'react';
import MainLayout from '../component/MainLayout'
import DetailContent from '../component/Product/DetailContent'
import Scroll from '../component/Scroll'

class Product extends Component { 
    // constructor(props){
    //     super(props)

    // }
    render(){
        return (
            <MainLayout>
                <DetailContent/>
                <Scroll/>
            </MainLayout>
        );
    }
}
export default Product;