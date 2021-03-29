import React, { Component } from 'react'
import '../layout/menu.scss'
class Menu extends Component {
    render() {
        return (
            <div className="menu-bar container">
                <div className="row">
                    <div className="category col-md-3">Danh mục sách</div>
                    <div className="menu col-md-9">
                        <ul>
                        <li><a href="/">Trang chủ</a></li>
                        <li><a href="/">Giới thiệu</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Liên hệ</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;
