import React, {Component} from 'react';
import MainLayout from '../component/MainLayout'
import OrderProduct from '../component/Order/OrderProduct'
import Scroll from '../component/Scroll'

class Cart extends Component { 
    // constructor(props){
    //     super(props)

    // }
    render(){
        return (
            <MainLayout>
                <OrderProduct/>
                <Scroll/>
            </MainLayout>
        );
    }
}
export default Cart;