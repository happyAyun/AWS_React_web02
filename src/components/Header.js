import React, { useState } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import LoginModal from './modals/LoginModal';
import SignupModal from './modals/SignupModal';
import '../App.css';

const Header = () => {
  const [loginModalOn, setLoginModalOn] = useState(false);
  const [signupModalOn, setSignupModalOn] = useState(false);

  return (
      <div className="LoginModal">
          <LoginModal
              show={loginModalOn}
              onHide={() => setLoginModalOn(false)}
          />
          <SignupModal
              show={signupModalOn}
              onHide={() => setSignupModalOn(false)}
          />

                          <Nav className="ml-auto">
                              <Nav.Link>
                                  <Button
                                      variant="primary"
                                      onClick={() => setLoginModalOn(true)}
                                  >
                                      로그인
                                  </Button>
                              </Nav.Link>
                              <Nav.Link>
                                  <Button
                                      variant="primary"
                                      onClick={() => setSignupModalOn(true)}
                                  >
                                      회원가입
                                  </Button>
                              </Nav.Link>
                          </Nav>

    </div>
  );
};

export default Header;
