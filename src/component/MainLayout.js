import React, { Component } from 'react';
import Nav from './NavFooter/Nav'
import Footer from './NavFooter/Footer'
import './MainLayout.css'
class MainLayout extends Component {

    render() {
        return (
            <div className={`main-container ${this.props.className}`}>
                <div>
                    <Nav />
                    {this.props.children} {/*<HomeContent/> */}
                </div>
                <Footer />
            </div>
        );
    }
}
export default MainLayout;
