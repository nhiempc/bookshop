import React, { Component } from 'react'
import LiteratureBook from './literature-book/literature-book'
import MathBook from './math-book/math-book'
import SideBar from './side-bar/side-bar'
import '../homepageComponents/index.scss'

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <div className = "container">
                    <div className = "row">
                        <SideBar/>
                        <div className = "main-content col-md-9">
                            <LiteratureBook/>
                            <MathBook/>
                        </div>
                    </div>
                </div>
            </React.Fragment> 
        )
    }
}

export default Index;
