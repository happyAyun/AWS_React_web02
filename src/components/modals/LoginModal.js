import React, {useState} from 'react';
import {Button, FormControl, Modal, Container, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LoginModal.css';

function LoginModal(props) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [idError, setIdError] = useState('');
  const [passError, setPassError] = useState('');

  const idCheck = (e) => {
    if (id.length >= 3) {
      return true;
    }
    setIdError('3자리 이상 입력해주세요');
    return false;
  };

  const passCheck = (e) => {
    if (password.length >= 8) {
      return true;
    }
    setPassError('8자리 이상 입력해주세요');
    return false;
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    idCheck();
    passCheck();
    if (idCheck() && passCheck()) {
      alert('wow');
      // props.switchKey();
    }
  };

  return (
        <div className="container">
            <div className="Login">
                <Modal
                    show={props.show}
                    onHide={props.onHide}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Container>
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">로그인</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Label>아이디</Form.Label>
                                    <FormControl
                                        autoFocus
                                        value={id}
                                        onChange={e => setId(e.target.value)}
                                    />
                                    <div style={{ color: 'red', fontSize: '12px' }}>{idError}</div>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>비밀번호</Form.Label>
                                    <FormControl
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        type="password"
                                    />
                                    <div style={{ color: 'red', fontSize: '12px' }}>{passError}</div>
                                </Form.Group>

                                <Button
                                    block
                                    bsSize="large"
                                    variant="info"
                                    type="submit"
                                    onClick={onSubmitHandler}
                                >
                                    Login
                                </Button>
                                <Button
                                    block
                                    bsSize="large"
                                    type="submit"
                                >
                                    <Link to="/Signup"><span className="signup_text">Signup</span></Link>
                                </Button>
                            </Form>
                        </Modal.Body>
                    </Container>
                </Modal>
            </div>
        </div>
  );
}

export default LoginModal;
