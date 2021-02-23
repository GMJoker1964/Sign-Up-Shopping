import React, { Component } from 'react';

class Subscribe extends Component {
    // constructor(props){
    //     super(props)

    // }
    render() {
        return (
            <div>
                <div className="w3agile-ftr-top ">
                    <div className="container">
                        <div className="ftr-toprow">
                            <div className="col-md-4 ftr-top-grids">
                                <div className="ftr-top-left">
                                    <i className="fa fa-truck" aria-hidden="true"></i>
                                </div>
                                <div className="ftr-top-right">
                                    <h4> GIAO HÀNG MIỄN PHÍ </h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                            <div className="col-md-4 ftr-top-grids">
                                <div className="ftr-top-left">
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                </div>
                                <div className="ftr-top-right">
                                    <h4> CHĂM SÓC KHÁCH HÀNG </h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                            <div className="col-md-4 ftr-top-grids">
                                <div className="ftr-top-left">
                                    <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                                </div>
                                <div className="ftr-top-right">
                                    <h4> CHẤT LƯỢNG TỐT </h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                </div>

                <div className="subscribe">
                    <div className="container">
                        <div className="col-md-6 social-icons w3-agile-icons">
                            <h4>Keep in touch</h4>
                            <ul>
                                <li><a href="#/" className="fa fa-facebook icon facebook"> </a></li>
                                <li><a href="#/" className="fa fa-twitter icon twitter"> </a></li>
                                <li><a href="#/" className="fa fa-google-plus icon googleplus"> </a></li>
                                <li><a href="#/" className="fa fa-dribbble icon dribbble"> </a></li>
                                <li><a href="#/" className="fa fa-rss icon rss"> </a></li>
                            </ul>
                            <ul className="apps">
                                <li><h4>Download Our app : </h4> </li>
                                <li><a href="#/" className="fa fa-apple"> </a></li>
                                <li><a href="#/" className="fa fa-windows"> </a></li>
                                <li><a href="#/" className="fa fa-android"> </a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 subscribe-right">
                            <h4> Đăng ký email và được giảm giá 25%! </h4>
                            <form action="#/" method="post">
                                <input type="text" name="email" placeholder="Enter your Email..." required="" />
                                <input type="submit" value="Subscribe" />
                            </form>
                            <div className="clearfix"> </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Subscribe;
