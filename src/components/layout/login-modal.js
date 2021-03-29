import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, FormGroup, Form} from 'reactstrap';
import React, { Component } from 'react'

class LoginModal extends Component {
  render() {
    const {isLoginShowing} = this.props;
    const {isCancel} = this.props;
    return(
    <React.Fragment>
      <Modal isOpen={isLoginShowing}>
        <ModalHeader closeButton>Đăng Nhập</ModalHeader>
        <Form method = "POST">
          <ModalBody>
            <FormGroup>
              <Label>Tên người dùng</Label>
              <Input type="text" name = "txtUserName" placeholder="Nhập tên người dùng" />
            </FormGroup>
            <FormGroup>
              <Label>Mật khẩu</Label>
              <Input type="password" name = "txtUserPassword" placeholder="Mật khẩu từ 6 đến 32 kí tự" />
            </FormGroup>
            <span>Quên mật khẩu? Nhấn vào <a href = "/">đây</a></span>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type = "submit">Đăng Nhập</Button>{' '}
            <Button color="secondary" onClick={isCancel}>Cancel</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </React.Fragment>
    )
  }
}



export default LoginModal;