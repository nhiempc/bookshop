import React, { Component } from 'react'
import '../pagination/pagination.scss'
class Pagination extends Component {
    render() {
        return (
            <React.Fragment>
                <nav aria-label="...">
					  <ul className="pagination justify-content-center">
					    <li className="page-item disabled">
					      <a className="page-link" href="/" tabIndex="-1">Trước</a>
					    </li>
					    <li className="page-item active"><a className="page-link" href="/">1</a></li>
					    <li className="page-item">
					      <a className="page-link" href="/">2 <span className="sr-only">(current)</span></a>
					    </li>
					    <li className="page-item"><a className="page-link" href="/">3</a></li>
					    <li className="page-item">
					      <a className="page-link" href="/">Sau</a>
					    </li>
					</ul>
				</nav>
            </React.Fragment>
        )
    }
}
export default Pagination;