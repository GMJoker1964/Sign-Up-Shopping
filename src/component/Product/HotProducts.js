import React, { Component } from 'react';
import HotProductItem from './HotProductItem'
import { connect } from 'react-redux'
import { actListProduct } from '../../actions'
import { findManyProduct } from '../../API'


class HotProducts extends Component {
    componentDidMount() {
        findManyProduct()
            .then(listProducts => {
                this.props.onListProduct(listProducts)
                let $ = window.$
                $("#owl-demo2").owlCarousel({
                    autoPlay: 3000, //Set AutoPlay to 3 seconds 
                    items: 4,
                    itemsDesktop: [640, 5],
                    itemsDesktopSmall: [480, 2],
                    navigation: true
                });
            })
    }
    render() {
        let { products } = this.props
        return (
            <div className="container">
                <div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
                    <h3 className="w3ls-title">Sản phẩm nổi bật</h3>
                    <div id="myTabContent" className="tab-content">
                        <div role="tabpanel" className="tab-pane fade in active" id="home" aria-labelledby="home-tab">
                            <div className="tabcontent-grids">
                                <div id="owl-demo2" className="owl-carousel">
                                    {this.showProducts(products)}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    showProducts(products) {
        let result = null
        let { onListProduct } = this.props
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <HotProductItem
                    key={index}
                    product={product}
                    onListProduct={onListProduct}
                />
            })
        }
        return result
    }
}
const mapStateToProps = state => {
    return {
        products: state.products.products,

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onListProduct: (products) => {
            dispatch(actListProduct(products))
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HotProducts);