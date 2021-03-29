import React, { Component } from 'react'
import Left from './left';
import Right from './right';

class BookInfoBody extends Component {
    render() {
        return (
            <React.Fragment>
                <Left/>
                <Right/>
            </React.Fragment>
        )
    }
}
export default BookInfoBody;
