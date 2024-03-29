import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';

const Loginpage = () => {
  return (
    <AuthTemplate>
      <LoginForm type="login" />
    </AuthTemplate>
  );
};

export default Loginpage;
