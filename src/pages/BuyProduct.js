import React, {Component} from 'react';
import MainLayout from '../component/MainLayout'
import BuyProductContent from '../component/BuyProduct/BuyProductContent'
import Scroll from '../component/Scroll'

class BuyProduct extends Component { 
    render(){
        return (
        <MainLayout>
            <BuyProductContent/>
            <Scroll/>
        </MainLayout>
        );
    }
}
export default BuyProduct;
