import React, { useState } from 'react';
import LoginModal from './modals/LoginModal';
import SignupModal from './modals/SignupModal';
import '../App.css';
import {Button, Nav} from 'react-bootstrap';

const Header = (props) => {
  // 로그인 전 우측헤더
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
