import React, { Component } from 'react';
import MainLayout from '../component/MainLayout'
import Scroll from '../component/Scroll'

class Help extends Component {
    // constructor(props){
    //     super(props)

    // }
    render() {
        return (
            <MainLayout>
                <div className="help">
                    <Scroll/>
                    <div className="container">
                        <h3 className="w3ls-title w3ls-title1">How can we help you</h3>
                        <div className="header-search">
                            <form action="#/" method="post">
                                <input type="search" name="Search" placeholder="Please type your query eg.Return, Refund or others." required=""/>
                                    <i className="fa fa-search" aria-hidden="true"> </i>
                                    <button type="submit" className="btn btn-default" aria-label="Left Align">
                                        Submit
                                    </button>
                                </form>
                            </div>
                            <div className="faq-w3agile">
                                <h5>Top 10 Frequently asked questions(FAQ)</h5>
                                <ul className="faq">
                                    <li className="item1"><a href="#/" title="click here">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor vehicula ipsum nec ?</a>
                                        <ul>
                                            <li className="subitem1"><p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p></li>
                                        </ul>
                                    </li>
                                    <li className="item2"><a href="#/" title="click here">The standard Lorem Ipsum passage Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices ?</a>
                                        <ul>
                                            <li className="subitem1"><p> Tincidunt ut laoreet dolore At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p></li>
                                        </ul>
                                    </li>
                                    <li className="item3"><a href="#/" title="click here">Consectetuer adipiscing elit Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices?</a>
                                        <ul>
                                            <li className="subitem1"><p>Dincidunt ut laoreet dolore At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p></li>
                                        </ul>
                                    </li>
                                    <li className="item4"><a href="#/" title="click here">Sed diam nonummy nibh euismod Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices?</a>
                                        <ul>
                                            <li className="subitem1"><p>At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p></li>
                                        </ul>
                                    </li>
                                    <li className="item5"><a href="#/" title="click here">Euismod tincidunt laoreet Etiam faucibus viverra libero vel efficitur ?</a>
                                        <ul>
                                            <li className="subitem1"><p>At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p></li>
                                        </ul>
                                    </li>
                                    <li className="item6"><a href="#/" title="click here">Voluptas sit aspernatur aut Ut semper nisl ut laoreet ultrices ?</a>
                                        <ul>
                                            <li className="subitem1"><p>At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p></li>
                                        </ul>
                                    </li>
                                    <li className="item7"><a href="#/" title="click here">Donec ut quam ligula feugiat Ut semper nisl ut laoreet ultrices ?</a>
                                        <ul>
                                            <li className="subitem1"><p>At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p></li>
                                        </ul>
                                    </li>
                                    <li className="item8"><a href="#/" title="click here">The standard Lorem Ipsum Ut semper nisl ut laoreet ultrices passage ?</a>
                                        <ul>
                                            <li className="subitem1"><p>Lorem ipsum dolor sit amet At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p></li>
                                        </ul>
                                    </li>
                                    <li className="item9"><a href="#/" title="click here">Consectetuer adipiscing Ut semper nisl ut laoreet ultrices elit ?</a>
                                        <ul>
                                            <li className="subitem1"><p>Lorem ipsum dolor sit amet At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p></li>
                                        </ul>
                                    </li>
                                    <li className="item10"><a href="#/" title="click here">Sed diam nonummy Ut semper nisl ut laoreet ultrices nibh euismod ?</a>
                                        <ul>
                                            <li className="subitem1"><p>Consectetuer adipiscing elit, sed diam nonummy nibh euismod  consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p></li>
                                        </ul>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
            </MainLayout>
        );
    }
}
export default Help;