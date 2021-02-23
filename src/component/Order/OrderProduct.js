import React, { Component } from 'react';
import PurchaseList from './OrderList'
import PurchaseItem from './OderItem'
import { connect } from 'react-redux'
// import {Link } from 'react-router-dom'
import { findManyProduct } from '../../API'

class OrderProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        findManyProduct().then(res => {
            console.log(res);
            this.setState({
                products: res
            })
        })
    }

    render() {
        let { products } = this.props
        return (
            <div>
                <div className="container-fluid">
                    <PurchaseList>
                        {this.showProducts(products)}
                    </PurchaseList>
                </div>
                <br />
              
            </div>
        );
    }
    showProducts(products) {
        let result = null
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <PurchaseItem
                        key={index}
                        product={product}
                        index={index}
                    />
                )
            })
        }
        return result
    }
}

const mapStateToProps = state => {
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps, null)(OrderProduct);
