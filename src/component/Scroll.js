import React, { Component } from 'react';

class Scroll extends Component {

    componentDidMount() {
        let $ = window.$
        $('.nutlentren').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({ scrollTop: 0 + 'px' }, 500, "easeInOutElastic");
        });
    }
    render() {

        return (
            <div className="nutlentren">
                <img src="./images/move-up.png" alt="scroll"></img>
            </div>
        );
    }
}
export default Scroll;
