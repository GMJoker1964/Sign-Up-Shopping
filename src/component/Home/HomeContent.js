import React, { Component } from 'react';
import Banner from './Banner'
import NewProducts from './NewProducts';
import Category from './Category';
import Subcribe from './Subscribe';
import Scroll from '../Scroll'

class HomeContent extends Component {

    render() {
        return (
            <div className="home-content">
                <Banner />
                <NewProducts />
                <Category />
                <Subcribe />
                <Scroll />
            </div>
        );
    }
}
export default HomeContent;

