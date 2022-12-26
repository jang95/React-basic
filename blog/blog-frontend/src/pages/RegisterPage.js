import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterFrom from '../containers/auth/RegisterFrom';

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <RegisterFrom type="register" />
    </AuthTemplate>
  );
};

export default RegisterPage;
