import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router';

const initialUser = {
    username: '',
    password: ''
}

const CreateAccountForm = () => {
    const [user, setUser] = useState(initialUser);
    const { push } = useHistory();

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://back-end-recipe.herokuapp.com/api/auth/register', user)
        .then(res => {
            console.log(res);
            setUser(res.config.data);
            push('/recipes');
        })
        .catch(err => {
            console.log(err);
        })
    }

    const handleLoginClick = (e) => {
        e.preventDefault();
        push('/login');
    }

    return (
    <div>
        <h1>Secret Family Recipe Cookbook</h1>
            <h2>Enter your Information below to Create your Account</h2>
            <FormContainer>
                 <label>Username:</label>
                <input 
                type='text'
                name='username'
                value={user.username}
                onChange={handleChange}
                />
                 <label>Password:</label>
                <input 
                type='password'
                name='password'
                value={user.password}
                onChange={handleChange}
                />
                <Button onClick={handleSubmit}>Create Account</Button>
            </FormContainer>
            <LoginButton onClick={handleLoginClick}>Login</LoginButton>
    </div>);
}

export default CreateAccountForm;

const FormContainer = styled.form`
    padding: 1em;
    width: 400px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 10%;

    label {
        margin-top: 0.5em;
    }

    input {
        padding: 0.5em;
    }
    
    div { 
        margin: 0.5em 0;
        display:flex;
        justify-content: center;
    }
`

const Button = styled.button`
    width: 50%;
    padding:1em;
    margin-top: 1em;

`
const LoginButton = styled.button`
    width: 10%;
    padding:.5em;
    margin-top: 1em;
    margin-left: 48%;
`