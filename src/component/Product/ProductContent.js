import React, {Component} from 'react';
import Filter from './Filter'
import Products from './Products'


class ProductContent extends Component { 

    render(){
        return (
            <div className="products">
                <div className = "container">
                    <Filter/>
                    <Products/>
                </div>
            </div>
        );
    }
}
export default ProductContent;