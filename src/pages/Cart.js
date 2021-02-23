import React, {Component} from 'react';
import MainLayout from '../component/MainLayout'
import CartContent from '../component/Cart/CartContent'
import Scroll from '../component/Scroll'

class Cart extends Component { 
    // constructor(props){
    //     super(props)

    // }
    render(){
        return (
            <MainLayout>
                <CartContent/>
                <Scroll/>
            </MainLayout>
        );
    }
}
export default Cart;