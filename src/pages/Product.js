import React, {Component} from 'react';
import MainLayout from '../component/MainLayout'
import ProductContent from '../component/Product/ProductContent'
import Scroll from '../component/Scroll'

class Product extends Component { 
    // constructor(props){
    //     super(props)

    // }
    render(){
        return (
            <MainLayout>
                <ProductContent/>
                <Scroll/>
            </MainLayout>
        );
    }
}
export default Product;
