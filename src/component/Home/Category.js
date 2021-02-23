import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { findManyProduct } from '../../API'

class Category extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: []
        }
    }
    componentDidMount() {
        // FIND_MANY_PRODUCT
        findManyProduct().then(res => {
            console.log(res);
            this.setState({
                categories: res
            })
        })

    }

    render() {
        let { categories } = this.state
        return (
            <div className="deals">
                <div className="container">
                    <h3 className="w3ls-title">Danh mục sản phẩm</h3>
                    {this.showCategory(categories)}
                </div>
            </div>
        );
    }
    showCategory = (categories) => {
        return (
            <div className="deals-row">
                <div className="col-md-3 focus-grid">
                    <Link to={"/product?category=5f5ca90b2900060820a18a8e"} className="wthree-btn">
                        <div className="focus-image"><i className="fa fa-mobile"></i></div>
                        <h4 className="clrchg">Điện thoại & Phụ kiện </h4>
                    </Link>
                </div>
                <div className="col-md-3 focus-grid">
                    <Link to={"/product?category=5f5ca94346a91a271009e651"} className="wthree-btn wthree1">
                        <div className="focus-image"><i className="fa fa-laptop"></i></div>
                        <h4 className="clrchg"> Thiết bị điện tử</h4>
                    </Link>
                </div>
                <div className="col-md-3 focus-grid">
                    <Link to={"/product?category=5f5ca96952c5631bf0e4fc11"} className="wthree-btn wthree2">
                        <div className="focus-image"><i className="fa fa-asterisk"></i></div>
                        <h4 className="clrchg">Giày dép</h4>
                    </Link>
                </div>
                <div className="col-md-3 focus-grid">
                    <Link to={"/product?category=5f5ca99751d10e2f7436bb6b"} className="wthree-btn wthree3">
                        <div className="focus-image"><i className="fa fa-home"></i></div>
                        <h4 className="clrchg">Thiết bị gia đình</h4>
                    </Link>
                </div>
                <div className="col-md-2 focus-grid w3focus-grid-mdl">
                    <Link to={"/product?category=5f5ca9b9edd5d829a0d2b5f9"} className="wthree-btn wthree3">
                        <div className="focus-image"><i className="fa fa-book"></i></div>
                        <h4 className="clrchg">Sách</h4>
                    </Link>
                </div>
                <div className="col-md-2 focus-grid w3focus-grid-mdl">
                    <Link to={"/product?category=5f5ca9d80534032138d68448"} className="wthree-btn wthree4">
                        <div className="focus-image"><i className="fa fa-asterisk"></i></div>
                        <h4 className="clrchg">Thời trang</h4>
                    </Link>
                </div>
                <div className="col-md-2 focus-grid w3focus-grid-mdl">
                    <Link to={"/product?category=5f5ca9ffb84e1f08dc9279d0"} className="wthree-btn wthree2">
                        <div className="focus-image"><i className="fa fa-gamepad"></i></div>
                        <h4 className="clrchg">Kids</h4>
                    </Link>
                </div>
                <div className="col-md-2 focus-grid w3focus-grid-mdl">
                    <Link to={"/product?category=5f5caa1a9c1f351ab0dc38d7"} className="wthree-btn wthree">
                        <div className="focus-image"><i className="fa fa-shopping-basket"></i></div>
                        <h4 className="clrchg">Bách hóa</h4>
                    </Link>
                </div>
                <div className="col-md-2 focus-grid w3focus-grid-mdl">
                    <Link to={"/product?category=5f5caa37ad3594364047ba31"} className="wthree-btn wthree5">
                        <div className="focus-image"><i className="fa fa-cutlery"></i></div>
                        <h4 className="clrchg">Thức ăn</h4>
                    </Link>
                </div>
                <div className="col-md-2 focus-grid w3focus-grid-mdl">
                    <Link to={"/product?category=5f5caa55e88a153b8ce58c6b"} className="wthree-btn wthree1">
                        <div className="focus-image"><i className="fa fa-gamepad"></i></div>
                        <h4 className="clrchg">PC - Gamming</h4>
                    </Link>
                </div>
                <div className="col-md-3 focus-grid">
                    <Link to={"/product?category=5f5caa7121ac8204145246fe"} className="wthree-btn wthree2">
                        <div className="focus-image"><i className="fa fa-medkit"></i></div>
                        <h4 className="clrchg">Sức khỏe & đời sống</h4>
                    </Link>
                </div>
                <div className="col-md-3 focus-grid">
                    <Link to={"/product?category=5f5caa8b74baab3bacac29b7"} className="wthree-btn wthree5">
                        <div className="focus-image"><i className="fa fa-futbol-o"></i></div>
                        <h4 className="clrchg">Thể thao</h4>
                    </Link>
                </div>
                <div className="col-md-3 focus-grid">
                    <Link to={"/product?category=5f5caadce9b1072480f4c47d"} className="wthree-btn wthree3">
                        <div className="focus-image"><i className="fa fa-car"></i></div>
                        <h4 className="clrchg">Ô tô & Xe máy</h4>
                    </Link>
                </div>
                <div className="col-md-3 focus-grid">
                    <Link to={"/product?category=5f5caaff34f0b31da4f57da3"} className="wthree-btn ">
                        <div className="focus-image"><i className="fa fa-gift"></i></div>
                        <h4 className="clrchg">Quà tặng</h4>
                    </Link>
                </div>
                <div className="clearfix"> </div>
            </div>
        )
    }
}

export default Category;
