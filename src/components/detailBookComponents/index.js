import React, { Component } from 'react'
import BookImg from './detail-book-img/detail-book-img'
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import BookInfo from './book-info/book-info';
import RelatedBook from './related-book/related-book';
class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <div className = "container">
                    <div className = "row">
                        <div className = "carousel-image col-md-5">
                            <BookImg/>
                        </div>
                        <div className = "book-info col-md-7">
                            <BookInfo/>
                        </div>
                    </div>
                </div>
                <RelatedBook/>
            </React.Fragment>
        )
    }
}

export default Index;