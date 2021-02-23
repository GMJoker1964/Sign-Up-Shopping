import React, { Component } from 'react';
import ProducList from './ProductList'
import ProductItem from './ProductItem'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { findManyProduct, deleteProduct } from '../../API'

class ProductManage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        findManyProduct().then(res => {
            this.setState({
                products: res
            })
        })
    }
    onDelete = (_id) => {
        let { products } = this.state
        deleteProduct(_id).then(res => {
            if (res.status === 20) {
                let index = this.findIndex(products, _id)
                if (index !== -1) {
                    products.splice(index, 1)
                    this.setState({
                        products: products
                    })
                }
            }
        })
    }
    findIndex = (products, id) => {
        let result = -1
        products.forEach((product, index) => {
            if (product.id === id) {
                result = index
            }
        })
        return result
    }

    render() {
        let { products } = this.state
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-md-12 col-sm-12 col-lg-12">
                            <Link to="/product/add"><button type="button" className="btn btn-info mb-2">Thêm sản phẩm</button>
                            </Link>
                        </div>
                    </div><br />
                    <ProducList>
                        {this.showProducts(products)}
                    </ProducList>
                
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
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
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

export default connect(mapStateToProps, null)(ProductManage);
