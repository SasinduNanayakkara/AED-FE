import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Assets/Logo.svg";
import Footer from "../../Components/Footer"
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from "axios";
import { baseUrl } from "../../App";

function Login() {
  // const [login, { isLoading }]
  const navigate = useNavigate();
    const onFinish = async (values) => {
      console.log('Received values of form: ', values);
      const response = await axios.post(`${baseUrl}/employee/login`, {email: values.username, password: values.password});
      if(response) {
        navigate("/trainlist");
      }
    };
  return (
    <div>
      <div className="">
        <div className="flex justify-between items-center bg-white px-28 py-4">
        <div></div>
        <img src={Logo} className="h-8 xl:flex justify-between items-center" alt="Logo" />
      </div>
      <div className="border-b border-gray-300"></div>
      </div>
      
      <div className="w-full h-full min-h-[81vh] flex flex-col justify-center items-center">
      <h5 className="text-5xl mb-5 font-extrabold text-center">Welcome</h5>
      <h5 className="text-3xl font-extrabold text-center">Employee Login</h5>
          <p className="font-medium mt-4 text-center mb-5">Please enter your details to continue</p>
          <Form
      name="normal_login"
      className="login-form"
      
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" size="large" name="email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          size="large"
          
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" shape="round" style={{background: "black"}}  block>
          Log in
        </Button>
      </Form.Item>
    </Form>
      </div>
    </div>
  );
}

function LoginOffice() {
  return (
    <div>
      <Login />
      <Footer/>
    </div>
  )
}
export default LoginOffice;
