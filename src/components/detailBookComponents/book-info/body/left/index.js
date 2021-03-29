import React, { Component } from 'react'
import '../left/index.scss'
class Left extends Component {
    render() {
        return (
            <div className ="left col-md-8">
                <div className = "price-and-icon ">
                    <div className = "product-price">
                        <div className = "current-price">
                            <span>124.800 ₫</span>
                        </div>
                        <div className = "origin-price">
                            <span>156.000 ₫</span>
                        </div>
                        <div className = "discount-rate">
                            <span>-20%</span>
                        </div>
                    </div>
                </div>
                <div className = "delivery-zone">
                    <div className = "inner">
                        Bạn hãy <span>NHẬP ĐỊA CHỈ</span> nhận hàng để được dự báo thời gian &amp; chi phí giao hàng một cách chính xác nhất.
                    </div>
                </div>
                <div className = "purchase">
                    <div className = "quantity-and-message">
                        <div className = "quantity-input-wrapper">
                            <p className = "label">
                                Số lượng
                            </p>
                            <div  className = "group-input">
                                <button className="">
                                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg" alt = "plus"/>
                                </button>
                                <input type="text" defaultValue="1" className="input"/>
                                <button>
                                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg" alt = "plus"/>
                                </button>
                            </div>
                        </div>
                        <div className = "product-left">
                            <span>Chỉ còn lại 3 sản phẩm</span>
                        </div>
                    </div>
                    <div className = "group-button">
                        <button className="btn btn-add-to-cart">Chọn mua</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Left;