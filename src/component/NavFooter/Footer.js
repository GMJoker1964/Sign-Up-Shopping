import React, {Component} from 'react';


class Footer extends Component { 

    render(){
        return (
            <div className="footer">
                <div className="container">
                    <div className="footer-info w3-agileits-info">
                        <div className="col-md-4 address-left agileinfo">
                            <div className="footer-logo header-logo">
                                <h2><a href="index.html"><span>S</span>mart <i>Bazaar</i></a></h2>
                            </div>
                            <ul>
                                <li><i className="fa fa-map-marker"></i> 123 San Sebastian, New York City USA.</li>
                                <li><i className="fa fa-mobile"></i> 333 222 3333 </li>
                                <li><i className="fa fa-phone"></i> +222 11 4444 </li>
                                <li><i className="fa fa-envelope-o"></i> <a href="mailto:example@mail.com"> mail@example.com</a></li>
                            </ul> 
                        </div>
                        <div className="col-md-8 address-right">
                            <div className="col-md-4 footer-grids">
                                <h3>Company</h3>
                                <ul>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="marketplace.html">Marketplace</a></li>  
                                    <li><a href="privacy.html">Privacy Policy</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4 footer-grids">
                                <h3>Services</h3>
                                <ul>
                                    <li><a href="contact.html">Contact Us</a></li>
                                    <li><a href="login.html">Returns</a></li> 
                                    <li><a href="faq.html">FAQ</a></li>
                                    <li><a href="login.html">Order Status</a></li>
                                </ul> 
                            </div>
                            <div className="col-md-4 footer-grids">
                                <h3>Payment Methods</h3>
                                <ul>
                                    <li><i className="fa fa-laptop" aria-hidden="true"></i> Net Banking</li>
                                    <li><i className="fa fa-money" aria-hidden="true"></i> Cash On Delivery</li>
                                    <li><i className="fa fa-pie-chart" aria-hidden="true"></i>EMI Conversion</li>
                                    <li><i className="fa fa-gift" aria-hidden="true"></i> E-Gift Voucher</li>
                                    <li><i className="fa fa-credit-card" aria-hidden="true"></i> Debit/Credit Card</li>
                                </ul>  
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer;
