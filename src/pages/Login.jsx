import { Button, Input } from 'antd';
import React, { useContext } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { httpHelper } from '../helpers/httpHelper';

const emailUser = 'akun14@mig.id';
const passUser = '4A395C92';

const Login = () => {
  const { setToken } = useStateContext();
  const path = '/auth/login';
  const api = httpHelper();

  const getToken = () => {
    api
      .post(`${path}`, { body: { email: emailUser, password: passUser } })
      .then((res) => {
        console.log(res);
        setToken(res.access_token);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className='block p-6 rounded-lg shadow-lg bg-white max-w-sm grid place-items-center'>
        <Input placeholder='Email' value={emailUser} />
        <Input.Password placeholder='Password' value={passUser} />
        <Button onClick={getToken}>Login</Button>
      </div>
    </>
  );
};

export default Login;
