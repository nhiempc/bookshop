import React, { Component } from 'react'
import '../side-bar/side-bar.scss'
class SideBar extends Component {
    render() {
        return (
            <div className="side-bar col-md-3">
				<ul>
				  <li><a href="index.html">Văn Học Việt Nam</a></li>
				  <li><a href="about.html">Văn Học Nước Ngoài</a></li>
				  <li><a href="blog.html">Sách Lịch Sử</a></li>
				  <li><a href="contact.html">Sách Nghiên Cứu</a></li>
				  <li><a href="contact.html">Sách Tôn Giáo</a></li>
				  <li><a href="contact.html">Sách Y Học</a></li>
				  <li><a href="contact.html">Sách Phong Thuỷ – Tử Vi</a></li>
				</ul>
			</div>
        )
    }
}
export default SideBar;