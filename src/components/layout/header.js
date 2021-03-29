import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../layout/header.scss'
import LoginModal from './login-modal';
import RegisterModal from './register-modal';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoginShowing: false,
          isRegisterShowing: false,
          onLoginCancelClick : () => {
            this.setState({isLoginShowing:!this.state.isLoginShowing})
          },
          onRegisterCancelClick : () => {
            this.setState({isRegisterShowing:!this.state.isRegisterShowing})
          }
        };
    }
    onLoginClick = () => {
        this.setState({isLoginShowing:!this.state.isLoginShowing})
    }
    onRegisterClick = () => {
        this.setState({isRegisterShowing:!this.state.isRegisterShowing})
    }
    PropTypes = {
        branding: PropTypes.string.isRequired
    };

    render() {
        const {branding} = this.props;
        return(
            <div className="head-container container">
                <div className="head-row row">
                    <div className="left-header col-md-9">
                        <div className="logo col-md-3"><a href = "/">{branding}</a></div>
                        <div className="search col-md-9">
                            <div className="row">
                                <input type="text" name="txt-search" className="txt-search col-md-9" placeholder="Tìm kiếm..."/>
                                <button className="col-md-3 btn-search">
                                    <img className="icon-search" alt = "search" src="https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png"/>
                                Tìm kiếm</button>
                            </div>
                        </div>
                    </div>
                    <div className="right col-md-3">
                        <div className="user">Đăng nhập
                            <div className="user-togle">
                                <button className="btn-user-login" onClick={this.onLoginClick.bind(this)}>Đăng nhập</button>
                                <LoginModal isLoginShowing = {this.state.isLoginShowing} isCancel = {this.state.onLoginCancelClick}/>
                                <button className="btn-user-register" onClick={this.onRegisterClick.bind(this)}>Đăng ký</button>
                                <RegisterModal isRegisterShowing = {this.state.isRegisterShowing} isCancel = {this.state.onRegisterCancelClick}/>
                            </div>
                        </div>
                        <div className="cart col-md-6">Cart here</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;