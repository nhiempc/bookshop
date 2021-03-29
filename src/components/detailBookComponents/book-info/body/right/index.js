import React, { Component } from 'react'
import '../right/index.scss'
class Right extends Component {
    render() {
        return (
            <div className ="right col-md-4">
                <div className = "seller-widget">
                    <div className = "seller-info">
                        <a className = "overview" href ="/">
                            <div className = "logo">
                                <img className = "logo-shop" src="https://vcdn.tikicdn.com/ts/seller/4b/54/1a/f385a79a716cb3505f152e7af8c769aa.png" alt = "logo-shop"></img>
                            </div>
                            <div className = "seller-name">
                                <span>Noel Store</span>
                            </div>
                        </a>
                    </div>
                    <div className = "seller-detail">
                        <div className = "seller-rating">
                            <div className = "title">
                                <span>4.8 / 5.0</span>
                            </div>
                            <div className = "sub-title">22</div>
                        </div>
                        <div className = "seller-subcriber">
                        <div className = "title">
                            <span>5</span>
                        </div>
                        <div className = "sub-title">
                            Theo dõi
                        </div>
                        </div>
                    </div>
                    <div className = "seller-action">
                        <a className="view-shop" href="/">
                            <img src="https://salt.tikicdn.com/ts/upload/49/27/ff/d735c33edfdc6cf6aeb6e183bec28869.png" alt = "view-shop"/>
                            <span>Xem Shop</span>
                        </a>
                        <a className="follow-shop" href="/">
                            <img src="https://salt.tikicdn.com/ts/upload/5b/bf/3c/eeda00767e26b5873030e44f951441c4.png" alt = "view-shop"/>
                            <span>Theo dõi</span>
                        </a>
                    </div>
                    <div className = "customer-benefits">
                        <div className = "benefit-item">
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/compensation.svg" alt = "Hoàn tiền 111% nếu giả"/>
                            <span>Hoàn tiền<br/><b>111%</b><br/>nếu giả</span>
                        </div>
                        <div className = "benefit-item">
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/guarantee.svg" alt = "Hoàn tiền 111% nếu giả"/>
                            <span>Mở hộp<br/>kiểm tra<br/>nhận hàng</span>
                        </div>
                        <div className = "benefit-item">
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/refund.svg" alt = "Hoàn tiền 111% nếu giả"/>
                            <span>Đổi trả trong<br/><b>30 ngày</b><br/>nếu sp lỗi</span>
                        </div>
                    </div>
                    {/* <div className = "other-seller">
                        <div className = "title">Nhà bán khác</div>
                        <div className="seller">
                            <span className="seller-name">WABOOKS</span>
                            <div className="seller-price">117.000 ₫</div>
                            <button className="seller-view">Chọn</button>
                        </div>
                        <div className="seller">
                            <span className="seller-name">WABOOKS</span>
                            <div className="seller-price">117.000 ₫</div>
                            <button className="seller-view">Chọn</button>
                        </div>
                        <div className="seller">
                            <span className="seller-name">WABOOKS</span>
                            <div className="seller-price">117.000 ₫</div>
                            <button className="seller-view">Chọn</button>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}
export default Right;