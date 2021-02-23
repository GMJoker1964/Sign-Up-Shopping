import React, {Component} from 'react';
import Detail from './Detail'
import HotProducts from './HotProducts'
// import {BASE_URL,API_PATHS} from '../config'

class ProductContent extends Component { 

    render(){
        return (
            <div className="products">
                <div className = "container">
                    <Detail/>
                    <HotProducts/>
                </div>
            </div>
        );
    }
}
export default ProductContent;