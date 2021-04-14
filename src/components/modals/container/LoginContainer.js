import React, { useState } from 'react';
import './LoginModal.css';
import { inject, observer } from 'mobx-react';
import LoginView from "../view/LoginView";

// 로그인 컨테이너 만드는 중

@inject("LoginStore")
@observer
function LoginModal(props) {
  // let [JoinLoign, setJoinLogin] = useState('로그인');
  // const history = useHistory();
  //
  // let [username, setUsername] = useState();
  // let [userpassword, setUserPassword] = useState();

  // const data = {username: username, password: userpassword};

  // const handleNameChange = (e) => {
  //   setUsername(e.target.value);
  // };
  // const handlePasswordChange = (e) => {
  //   setUserPassword(e.target.value);
  // };

  return (
        <div>
            <LoginView />
        </div>
  );
}
export default LoginModal;
