import React, { Component } from 'react'
import "../book-info/book-info.scss"
import BookInfoHeader from './header'
import BookInfoBody from './body'
class BookInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <div className = "book-info-header container">
                    <div className = "row book-header-wrapper">
                        <BookInfoHeader/>
                    </div>
                </div>
                <div className = "book-info-body container">
                    <div className = "row book-header-wrapper">
                        <BookInfoBody/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default BookInfo;