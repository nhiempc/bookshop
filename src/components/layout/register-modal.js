import { Button, Modal, ModalHeader, ModalBody, ModalFooter,FormGroup, Label, Input, Form, Row, Col } from 'reactstrap';
import React, { Component } from 'react'

class RegisterModal extends Component {
  render() {
    const {isRegisterShowing} = this.props;
    const {isCancel} = this.props;
    return(
    <React.Fragment>
      <Modal isOpen={isRegisterShowing}>
        <ModalHeader>Đăng Ký</ModalHeader>
        <Form method = "POST">
          <ModalBody>
            <Row>
              <Col>
                <FormGroup>
                  <Label>Họ và tên</Label>
                  <Input type="text" name = "txtUserFullName" placeholder="Nhập họ tên" />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>Số điện thoại</Label>
                  <Input type="tel" name = "txtUserPhone" placeholder="Nhập số điện thoại" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label>Email</Label>
                  <Input type="email" name = "txtUserEmail" placeholder="Nhập email" />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>Tên người dùng</Label>
                  <Input type="text" name = "txtUserName" placeholder="Nhập tên người dùng" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label>Mật khẩu</Label>
                  <Input type="password" name = "txtUserPassword" placeholder="Mật khẩu từ 6 đến 32 kí tự" />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>Mật lại mật khẩu</Label>
                  <Input type="password" name = "txtUserPassword2" placeholder="Mật khẩu từ 6 đến 32 kí tự" />
                </FormGroup>
              </Col>
            </Row>
          </ModalBody>
        <ModalFooter>
          <Button color="primary" type = "submit">Tạo tài khoản</Button>{' '}
          <Button color="secondary" onClick={isCancel}>Cancel</Button>
        </ModalFooter>
        </Form>
      </Modal>
    </React.Fragment>
    )
  }
}

export default RegisterModal;