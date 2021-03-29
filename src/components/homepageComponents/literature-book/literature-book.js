import React, { Component } from 'react'
import '../literature-book/literature-book.scss'
import Pagination from '../pagination/pagination'
class LiteratureBook extends Component {
    render() {
        return (
            <div className = "section-old-book">
                <div className="section-old-book-title">
					<h3><span>Sách văn học</span></h3>
				</div>
                <div className = "section-old-book-content container">
                    <div className="row">
                        <div className="book-item col-md-3">
                            <div className="card" style = {{width : "100%"}}>
                                <img className="card-img-top" src="https://sachxua.vn/wp-content/uploads/2020/02/viet-nam-su-luoc-tran-trong-kim.png" alt="card"/>
                                <div className="card-body">
								    <h4 className="card-title">Tên sách</h4>
								    <p className="card-text">Mô tả sách</p>
								    <a href="/detail" className="btn btn-primary">Xem chi tiết</a>
								</div>
                            </div>
                        </div>
                        <div className="book-item col-md-3">
                            <div className="card" style = {{width : "100%"}}>
                                <img className="card-img-top" src="https://sachxua.vn/wp-content/uploads/2020/02/viet-nam-su-luoc-tran-trong-kim.png" alt="card"/>
                                <div className="card-body">
								    <h4 className="card-title">Tên sách</h4>
								    <p className="card-text">Mô tả sách</p>
								    <a href="/detail" className="btn btn-primary">Xem chi tiết</a>
								</div>
                            </div>
                        </div>
                        <div className="book-item col-md-3">
                            <div className="card" style = {{width : "100%"}}>
                                <img className="card-img-top" src="https://sachxua.vn/wp-content/uploads/2020/02/viet-nam-su-luoc-tran-trong-kim.png" alt="card"/>
                                <div className="card-body">
								    <h4 className="card-title">Tên sách</h4>
								    <p className="card-text">Mô tả sách</p>
								    <a href="/detail" className="btn btn-primary">Xem chi tiết</a>
								</div>
                            </div>
                        </div>
                        <div className="book-item col-md-3">
                            <div className="card" style = {{width : "100%"}}>
                                <img className="card-img-top" src="https://sachxua.vn/wp-content/uploads/2020/02/viet-nam-su-luoc-tran-trong-kim.png" alt="card"/>
                                <div className="card-body">
								    <h4 className="card-title">Tên sách</h4>
								    <p className="card-text">Mô tả sách</p>
								    <a href="/detail" className="btn btn-primary">Xem chi tiết</a>
								</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Pagination/>
            </div>
        )
    }
}

export default LiteratureBook;