import React, { Component } from 'react'
import '../layout/footer.scss'
class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className = "container">
                    <div className = "footer">
                        <div className="footer_copyright" itemProp="copyrightHolder">
                            <div className="footer_copyright_left">© 2021 Bản quyền thuộc về Nhiệm PC</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Footer;