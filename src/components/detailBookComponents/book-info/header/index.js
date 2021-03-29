import React, { Component } from 'react'
import "../header/index.scss"
// import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
// import '@fortawesome/fontawesome-free/js/fontawesome.min.js';
// import '../../../../../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css'
// import '../../../../../node_modules/@fortawesome/fontawesome-free/js/fontawesome.min.js'
// import '@fortawesome/react-fontawesome';
// import '@fortawesome/fontawesome-free-regular';

class BookInfoHeader extends Component {
    render() {
        return (
            <React.Fragment>
                <div className = "book-title col-md-9">
                        <p>Sách Ehon - Combo 4 cuốn Bạn là ai vậy - Dành cho trẻ từ 0 - 3 tuổi</p>
                </div>
                <div className = "like-and-share col-md-3">
                    <div className = "like">
                        <div className = "icon-wrap">
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-like.svg" alt = "like-icon"/>
                        </div>
                    </div>
                    <div className = "share">
                        <div className = "icon-wrap">
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-account-social.svg" alt = "like-icon"/>
                        </div>
                    </div>
                </div>
                <div className = "book-author col-md-12">
                    <h6><b>Tác giả:</b>&nbsp;Fuku Mitsu</h6>
                </div>
                <div className = "book-rating col-md-12">
                    <p style = {{fontSize : "16px"}}>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                    </p>
                </div>
            </React.Fragment>
            
        )
    }
}
export default BookInfoHeader;
