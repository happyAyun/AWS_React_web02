import React, {useState} from 'react';
import {Button, FormControl, Modal, Container, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LoginModal(props) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  // 유효성 검사
  const validate = (id, password) =>{
    return (id && id.length > 0) && (password && password.length > 0);
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
                              </Form.Group>

                              <Form.Group>
                                  <Form.Label>비밀번호</Form.Label>
                                  <FormControl
                                      value={password}
                                      onChange={e => setPassword(e.target.value)}
                                      type="password"
                                  />
                              </Form.Group>

                              <Button
                                  block
                                  bsSize="large"
                                  variant="info"
                                  disabled={!validate(id, password)}
                                  type="submit"
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
