import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import HomePage from './pages/Home'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Product from './pages/Product'
import DetailProduct from './pages/DetailProduct'
import About from './pages/About'
import Privacy from './pages/Privacy'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import AdminProductManage from './pages/AdminProductManage'
import OrderProduct from './pages/Order'
import BuyProduct from './pages/BuyProduct'
import AdminActionProduct from './pages/AdminActionProduct'
import AdminPurchaseMange from './pages/AdminPurchaseMange'
import Search from './pages/Search'
import Help from './pages/Help'


class Routes extends Component { 

    render(){
        return (
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/log-in" component={LogIn} />
                <Route exact path="/sign-up" component={SignUp} />
                <Route exact path="/product" component={Product}/>
                <Route exact path="/detail-product" component={DetailProduct}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/privacy" component={Privacy}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/help" component={Help}/>
                <Route exact path="/cart" component={Cart}/>
                <Route exact path="/admin" component={AdminProductManage}/>
                <Route exact path="/buy-product" component={BuyProduct}/>
                <Route exact path="/product/add"  component={AdminActionProduct}/>
                <Route exact path="/product/:id/edit" component={AdminActionProduct}/>
                <Route exact path="/purchase-manage" component={AdminPurchaseMange}/>
                <Route exact path="/search" component={Search}/>
                <Route exact path="/order" component={OrderProduct}/>
            </Switch>
        );
    }
}
export default Routes;
