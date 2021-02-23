import React, {useState} from 'react'

import { Modal} from 'react-bootstrap'


export default function MyModal() {
    const [show, setShow] = useState(false);
    const handleHide = window.modalHide = () => setShow(false);
    const handleShow = window.modalShow = () => setShow(true);

    return (
      
        <Modal show={show} onHide={handleHide} animation={false}>
          <Modal.Header>
            <Modal.Title>Thông báo</Modal.Title>
          </Modal.Header>
          <Modal.Body>Đăng ký thành công</Modal.Body>
        </Modal>
    );
  }