import React, { Component } from 'react';
import { SignIn } from '../../API'
import { withRouter } from 'react-router-dom';
import { actSuccessLogin } from '../../actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class LogInContent extends Component {

    async submitAccount(event) {
        event.preventDefault();

        const form = event.target
        const email = form.email.value
        const password = form.password.value
       
       
       // check email va password khong bi trong (not empty)
         if ( !email || !password) {

            //  console.log('Email hoac password bi trong')
            window.alert('Email hoặc password bi trong')
        }

        // Khi email va password khong bi trong (ok)
        if (email && password) {
            const data = { email, password }
            //   console.log('data submit', data)
            const response = await SignIn(data) // gui du lieu len server de dang nhap

            console.log(response);
            // check response tra ve co accessToken => dang nhap thanh cong
            if (response.accessToken) {
                if(response.roles && response.roles.includes('user')){
                    this.props.history.push('/');
                } else {
                    this.props.history.push('/admin');
                }
                
                this.props.successLogin(response);

            } else {
                alert(response.message)
            }
        }
    }


    render() {
        return (
            <div className="login-page">
                <div className="container">
                    <h3 className="w3ls-title w3ls-title1">Login to your account</h3>
                    <div className="login-body">
                        <form action="#" onSubmit={event => this.submitAccount(event)}  >
                            <input type="text" className="user" name="email" placeholder="Enter your email" required="" />
                            <input type="password" name="password" className="lock" placeholder="Password" required="" />
                            <input type="submit" value="Login" />
                            <div className="forgot-grid">
                                <label className="checkbox"><input type="checkbox" name="checkbox" /><i></i>Remember me</label>
                                <div className="forgot">
                                    <a href="#/">Forgot Password?</a>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                        </form>
                    </div>
                    <h6> Not a Member? <Link to="/SignUp">Sign Up Now »</Link> </h6>
                    <div className="login-page-bottom social-icons">
                        <h5>Recover your social account</h5>
                        <ul>
                            <li><a href="#/" className="fa fa-facebook icon facebook"> </a></li>
                            <li><a href="#/" className="fa fa-twitter icon twitter"> </a></li>
                            <li><a href="#/" className="fa fa-google-plus icon googleplus"> </a></li>
                            <li><a href="#/" className="fa fa-dribbble icon dribbble"> </a></li>
                            <li><a href="#/" className="fa fa-rss icon rss"> </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch, props) => {
    return {
        successLogin: (data) => {
            dispatch(actSuccessLogin(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LogInContent));