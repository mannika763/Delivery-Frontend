import React from 'react'
import { Container, Form, Button, Alert } from 'react-bootstrap'
import { useState } from 'react';
import { RegisterAction } from '../Action/RegisterAction';
import { useDispatch } from 'react-redux';

function RegisterScreen() {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmpassword] = useState('');
const [passwordMatchError, setPasswordMatchError] = useState('');

const dispatch = useDispatch();
  const handleRegister = () => {
    // Check if passwords match
    if (password !== confirmPassword) {
      setPasswordMatchError('Passwords do not match');
      return;
    }
else{
    const user = {name, email,password,confirmPassword}
    console.log(user)
    dispatch(RegisterAction(user)); 
  //   dispatch({ type: "USER_REGISTER_REQUEST", payload: user })
  //   setTimeout(() => {
  //     // Dispatch an action with type "User_Register_Success" to indicate successful registration
  //     dispatch({ type: "User_Register_Success" });
  // }, 10); // Dispatch the success action after 1 second (replace with actual success logic)
}
   

  };


  return (
    <>
      <Container>
        <h1>Registration Form</h1>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control 
        value={name}
        onChange={(e)=> setName(e.target.value)}
        type="name" placeholder="Enter name" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
         value={email}
         onChange={(e)=> setEmail(e.target.value)}
        type="email" placeholder="Enter email" required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
         value={password}
         onChange={(e)=> setPassword(e.target.value)}
        type="password" placeholder="Password" required/>
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
         value={confirmPassword}
         onChange={(e)=> setConfirmpassword(e.target.value)}
        type="password" placeholder="Password" required/>
      </Form.Group>
      {passwordMatchError && (
          <Alert variant="danger">{passwordMatchError}</Alert>
        )}
        <Button variant="primary" onClick={handleRegister}>
        Register
      </Button>
    </Form>
      </Container>
    </>
  )
}

export default RegisterScreen
