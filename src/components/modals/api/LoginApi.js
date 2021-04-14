import axios from 'axios';

function LoginApi(props) {
  URL = 'http://localhost:8000/login/';
  return (
        <div>
            fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(json => {
            // user data와 token정보가 일치하면 로그인 성공
            if (json.user && json.user.username && json.token) {
            // eslint-disable-next-line max-len
            props.userHasAuthenticated(true, json.user.username, json.token);
            history.push('/');
            props.setModal(true);
        } else {
            alert('아이디 또는 비밀번호를 확인해주세요.');
        }
        })
            .catch(error => alert(error));
        </div>
  );
}

export default LoginApi;
