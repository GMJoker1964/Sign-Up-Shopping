import React, {Component} from 'react';

class NotFoundPage extends Component { 

    render(){
        return (
            <div className="container">
                <div class="alert alert-warning" role="alert">
                    <strong>Không tìm thấy trang</strong>
                </div>
            </div>
        );
    }
}
export default NotFoundPage;
