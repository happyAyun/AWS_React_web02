import React, {useState} from 'react';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  return (
        <div>
            <h1>login</h1>
            <input
                onChage={e => setId(e.target.value)}
                type="text"
                placeholder="id"
            />

        </div>
  );
}

export default Login;
