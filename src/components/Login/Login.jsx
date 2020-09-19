import React from "react";
import styles from './Login.module.css';
import classes from '../common/FormsControls/FormsControl.module.css'
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControl";
import {required} from "../../utils/validation/validators";
import {login} from '../../redux/auth-reducer'
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const handleFocus = (event) => event.target.select();

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} role='form'>
            <div class='form-group'>
                <label for='email'>Email</label>
                <Field placeholder={'email'} name={'email'} type='email' class='form-control' onFocus={handleFocus}
                       component={Input} validate={[required]}/>
            </div>
            <div className={styles.input}>
                <label for='password'>Password</label>
                <Field placeholder={'password'} name={'password'} type='password' class='form-control'
                       onFocus={handleFocus}
                       component={Input} validate={[required]}/>
            </div>
            <div class='checkbox'>
                <label for='password'>
                    <Field component={Input} className={styles.checkbox} name={'rememberMe'} type={'checkbox'}/>remember
                    me
                </label>
            </div>
            <div className={styles.login}>
                <button class='btn btn-success'>Login</button>
            </div>
            {props.error && <div className={classes.formSummaryError}>
                {props.error}
            </div>
            }
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={`/profile`}/>
    }

    return (
        <div className={styles.body}>
            <div className={styles.wrap}>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    authorizesUserId: state.auth.userId
})
export default connect(mapStateToProps, {login})(Login)