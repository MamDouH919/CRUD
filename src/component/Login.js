import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { useNavigate } from "react-router-dom";

const GET_LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
        login(input: { username: $email, password: $password }) {
            token
        }   
} 
`


export default function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [submitLogin, { loading, error }] = useMutation(GET_LOGIN);

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `listpickups`;
        navigate(path);
    }

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
    if (localStorage.getItem('dataKey') != null) {
        window.location.href = '/listpickups'
    }
    else {
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                submitLogin({
                    variables:
                    {
                        email: userName,
                        password: password
                    },
                    onCompleted: (data) => {
                        localStorage.setItem('dataKey', data.login.token)
                        routeChange()
                    }
                })
            }}>
                <div>
                    <label>your name</label>
                    <input type='text' value={userName} onChange={(e) => (setUserName(e.target.value))} />
                </div>
                <div>
                    <label>your password</label>
                    <input type='password' value={password} onChange={(e) => (setPassword(e.target.value))} />
                </div>
                <input type='submit' />
            </form>
        )
    }
}
