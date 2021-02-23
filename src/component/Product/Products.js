import React, { Component } from 'react';
import ProductItem from './ProductItem'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actAddToCart, actListProduct, actBuyProduct,actPaginate } from '../../actions'
import { findManyProduct, getCategories } from '../../API'

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: []
        }
    
    }

    componentDidMount() {
        let categoryId = new URLSearchParams(window.location.search).get('category')
        let endPrice = new URLSearchParams(window.location.search).get('endPrice')
        let startPrice = new URLSearchParams(window.location.search).get('startPrice')
        let sortBy = new URLSearchParams(window.location.search).get('sortBy')
		let sort = new URLSearchParams(window.location.search).get('sort')

        findManyProduct(categoryId,'',startPrice,endPrice,sortBy,sort)
            .then(listProducts => {
                this.props.onListProduct(listProducts)
            })
        getCategories().then(title => {
            this.setState({
                categories: title
            })
        })
    }

    render() {
        let { products } = this.props
        let { categories } = this.state
        let category_id = new URLSearchParams(window.location.search).get('category')

        return (
            <div className="col-md-9 product-w3ls-right">
                <ol className="breadcrumb breadcrumb1">
                    <li><Link to="/">Home</Link></li>
                    <li className="active">Products</li>
                </ol>
                <div className="clearfix"> </div>
                {this.showTitleCate(categories)}
                <div className="products-row">
                    {this.showProducts(products)}
                    <div className="clearfix"> </div>
                </div>
                <div className="page-count">
                    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div className="btn-group mr-2" role="group" aria-label="First group">
                        <Link 
                            to={`/product?category=${category_id}?pageSize=8& pageIndex=1`}> <button type="button" className="btn btn-secondary">{this.onPaginate}</button>
                        </Link>            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    onPaginate = () =>{
        this.props.onPaginate()
    }
    showTitleCate(categories) {
        // console.log(categories);
        return (
            <div className="product-top" >
                <h4>{categories.title}</h4>
                <div className="clearfix"> </div>
            </div>
        )
    }
    showProducts(products) {
        let result = null
        let { onAddToCart, onListProduct, onBuy } = this.props
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem
                    key={index}
                    product={product}
                    onAddToCart={onAddToCart}
                    onListProduct={onListProduct}
                    onBuy={onBuy}
                />
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

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1))
        },
        onListProduct: (products) => {
            dispatch(actListProduct(products))
        },
        onBuy: (product) => {
            dispatch(actBuyProduct(product, 1))
        },
        onPaginate : () =>{
            dispatch(actPaginate())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
