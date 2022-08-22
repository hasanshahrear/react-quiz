import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../../styles/Login.module.css'
import Button from '../Button'
import Form from '../Form'
import Illustration from '../Illustration'
import TextInput from '../TextInput'

const Login = () => {
    return (
        <>
            <h1>Login to your account</h1>
            <div class="column">
                <Illustration url="./images/login.svg" />
                <Form className={`${classes.login} form`} >
                    <TextInput type="email" placeholder="Enter email" icon="alternate_email" />
                    <TextInput type="password" placeholder="Enter password" icon="lock" />
                    <Button>
                        <span>Submit Now</span>
                    </Button>
                    <div class="info">Don't have an account? <Link to="/signup">Signup</Link> instead.</div>
                </Form>
            </div>
        </>
    )
}

export default Login