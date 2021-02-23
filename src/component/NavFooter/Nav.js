
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { actLogOut } from '../../actions'



class Nav extends Component {


    componentDidMount() {
        let $ = window.$
        $('.header-two').scrollToFixed();


    }

    async signOut() {
        this.props.logOut();

    }

    formSearchSubmit(e) {
        e.preventDefault()
        this.props.history.push(`/search?search=${e.target.search.value}`)
    }
    render() {
        let { cart } = this.props

        return (
            <div className="nav">
                <div className="header">
                    <div className="w3ls-header">
                        <div className="w3ls-header-left">
                            {/* <p><a href="#/">UPTO $50 OFF ON LAPTOPS | USE COUPON CODE LAPPY </a></p> */}
                        </div>
                        <div className="w3ls-header-right">
                            <ul>
                                {this.props.userInfo
                                    ? <>
                                        <li className="dropdown head-dpdn">
                                            <a href="#/" className="dropdown-toggle">{this.props.userInfo.email}</a>
                                        </li>
                                        <li className="dropdown head-dpdn">
                                            <Link to="/order" className="dropdown-toggle"> Đơn hàng</Link>
                                        </li>
                                        <li className="dropdown head-dpdn">
                                            <Link to="/contact" className="dropdown-toggle"> Về chúng tôi</Link>
                                        </li>
                                        <li className="dropdown head-dpdn">
                                            <Link to="/help" className="dropdown-toggle"><i className="fa fa-question-circle" aria-hidden="true"></i> Trợ giúp</Link>
                                        </li>
                                        <li className="dropdown head-dpdn">
                                            <a href="#/" className="dropdown-toggle" onClick={() => this.signOut()}>Đăng xuất</a>
                                        </li>
                                    </>
                                    : (
                                        <>
                                            <li className="dropdown head-dpdn">
                                                <Link to="/log-in" className="dropdown-toggle">Đăng nhập</Link>
                                            </li>
                                            <li className="dropdown head-dpdn">
                                                <Link to="/sign-up" className="dropdown-toggle">Đăng ký</Link>
                                            </li>
                                            <li className="dropdown head-dpdn">
                                                <Link to="/contact" className="dropdown-toggle"> Về chúng tôi</Link>
                                            </li>
                                            <li className="dropdown head-dpdn">
                                                <Link to="/help" className="dropdown-toggle"><i className="fa fa-question-circle" aria-hidden="true"></i> Trợ giúp</Link>
                                            </li>
                                        </>
                                    )}
                             
                            </ul>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                    <div className="header-two">
                        <div className="container">
                            <div className="header-logo">
                                <h1><Link to="/"><span>S</span>tore <i>Smart</i></Link></h1>
                            </div>
                            <div className="header-search">
                                <form onSubmit={e => this.formSearchSubmit(e)}>
                                    <input type="search" name="search" placeholder="Search for a Product..." required="" />
                                    <button type="submit" className="btn btn-default" aria-label="Left Align">
                                        <i className="fa fa-search" aria-hidden="true"> </i>
                                    </button>
                                </form>
                            </div>
                            <div className="header-cart">
                                <div className="cart">
                                    <Link to="/cart">
                                        <button className="w3view-cart btn btn-danger" type="submit" name="submit" value="">
                                            <i className="fa fa-shopping-cart" aria-hidden="true"></i> <span className="label label-warning quantity-cart">
                                                {this.showToTalQuantity(cart)}</span>
                                        </button>
                                    </Link>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    showToTalQuantity = (cart) => {
        let total = 0
        if (cart.length > 0) {
            for (let i = 0; i < cart.length; i++) {
                total += cart[i].quantity
            }
        }
        return total
    }
}


const mapStateToProps = state => {
    return {
        cart: state.cart,
        products: state.products.products,
        userInfo: state.login.userInfo
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        logOut: () => {
            dispatch(actLogOut())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav));



