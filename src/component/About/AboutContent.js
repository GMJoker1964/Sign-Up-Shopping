import React, { Component } from 'react';
import Scroll from '../Scroll'
class AboutContent extends Component {

    render() {
        return (
            <div className="about">
                <Scroll />
                <div className="container">
                    <h3 className="w3ls-title w3ls-title1">About Smart bazaar</h3>
                    <div className="about-text">
                        <p>Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices. Maecenas dictum arcu purus, sit amet volutpat purus viverra sit amet. Quisque lacinia quam sed tortor interdum, malesuada congue nunc ornare. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In semper lorem eget tortor pulvinar ultricies. Nulla sodales efficitur consequat. Maecenas mi diam, imperdiet consectetur ultricies nec, convallis sit amet turpis.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor vehicula ipsum nec ultrices. Pellentesque sed feugiat sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor vehicula ipsum nec ultrices. Pellentesque sed feugiat sapien.  ullamcorper nunc. Aenean eget massa orci. Vivamus vulputate elit at rutrum elementum. Duis sit amet posuere justo, sit amet finibus urna. Aenean elementum diam nec laoreet sodales. Morbi vulputate tempor nisl nec tristique.</p>
                        <div className="col-md-3 ftr-top-left about-text-grids">
                            <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                            <h4>10 Million+ <br />Products</h4>
                        </div>
                        <div className="col-md-3 ftr-top-left about-text-grids">
                            <i className="fa fa-users" aria-hidden="true"></i>
                            <h4>50,000 <br /> Sellers </h4>
                        </div>
                        <div className="col-md-3 ftr-top-left about-text-grids">
                            <i className="fa fa-credit-card" aria-hidden="true"></i>
                            <h4>5 Million <br />Shipments</h4>
                        </div>
                        <div className="col-md-3 ftr-top-left about-text-grids">
                            <i className="fa fa-globe" aria-hidden="true"></i>
                            <h4>4000+ <br />Cities</h4>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                    <div className="history">
                        <h3 className="w3ls-title">Our Mission</h3>
                        <p>Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices. Maecenas dictum arcu purus, sit amet volutpat purus viverra sit amet. Quisque lacinia quam sed tortor interdum, malesuada congue nunc ornare. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In semper lorem eget tortor pulvinar ultricies. Nulla sodales efficitur consequat. Maecenas mi diam, imperdiet consectetur ultricies nec, convallis sit amet turpis.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor vehicula ipsum nec ultrices. Pellentesque sed feugiat sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor vehicula ipsum nec ultrices. Pellentesque sed feugiat sapien.  ullamcorper nunc. Aenean eget massa orci. Vivamus vulputate elit at rutrum elementum. Duis sit amet posuere justo, sit amet finibus urna. Aenean elementum diam nec laoreet sodales. Morbi vulputate tempor nisl nec tristique.</p>
                        <h3 className="w3ls-title">Our History</h3>
                        <p>Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices. Maecenas dictum arcu purus, sit amet volutpat purus viverra sit amet. Quisque lacinia quam sed tortor interdum, malesuada congue nunc ornare. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In semper lorem eget tortor pulvinar ultricies. Nulla sodales efficitur consequat. Maecenas mi diam, imperdiet consectetur ultricies nec, convallis sit amet turpis.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor vehicula ipsum nec ultrices. Pellentesque sed feugiat sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor vehicula ipsum nec ultrices. Pellentesque sed feugiat sapien.  ullamcorper nunc. Aenean eget massa orci. Vivamus vulputate elit at rutrum elementum. Duis sit amet posuere justo, sit amet finibus urna. Aenean elementum diam nec laoreet sodales. Morbi vulputate tempor nisl nec tristique.</p>
                    </div>
                    <br /><br /><br />
                    <h3 class="w3ls-title w3ls-title1 ">Our Sitemap</h3>
                    <div class="sitemap-row">
                        <div class="sitemap-tabs">
                            <ul>
                                <li><a href="#w3sec1"><i class="fa fa-mobile"></i> Electronics</a></li>
                                <li><a href="#w3sec2"><i class="fa fa-slideshare"></i>Fashion Store</a></li>
                                <li><a href="#w3sec3"><i class="fa fa-child"></i> Kids Fashion & Toys</a></li>
                                <li><a href="#w3sec4"><i class="fa fa-home"></i> Home & Furniture</a></li>
                                <li><a href="#w3sec5"><i class="fa fa-futbol-o"></i>Sports & Fitness</a></li>
                                <li><a href="#w3sec6"><i class="fa fa-shopping-basket"></i> Grocery Store</a></li>
                                <li><a href="#w3sec7"><i class="fa fa-gift"></i> Photo, Gifts & Office</a></li>
                                <li><a href="#w3sec8"><i class="fa fa-medkit"></i> Health & Beauty</a></li>
                                <li><a href="#w3sec9"><i class="fa fa-car"></i> Automotive</a></li>
                                <li><a href="#w3sec10"><i class="fa fa-book"></i> Books, Music & Movies</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutContent;

