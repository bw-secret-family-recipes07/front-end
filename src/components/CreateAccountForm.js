import React from 'react';

export default function CreateAccountForm() {
  return (
    <div>
        <h1>Secret Family Recipe Cookbook</h1>
        <div className='form'>
            <h2>Enter your Information below to Create your Account</h2>
            <form>
                <label>First Name:</label>
                <input 
                type='text'
                name='first-name'
                value='first-name'
                />
                 <label>Last Name:</label>
                <input 
                type='text'
                name='last-name'
                value='last-name'
                />
                 <label>Email:</label>
                <input 
                type='email'
                name='email'
                value='email'
                />
                 <label>Username:</label>
                <input 
                type='text'
                name='username'
                value='username'
                />
                 <label>Password:</label>
                <input 
                type='password'
                name='password'
                value='password'
                />
                <button>Create Account</button>
            </form>
            <button>Login</button>
        </div>
    </div>);
}
