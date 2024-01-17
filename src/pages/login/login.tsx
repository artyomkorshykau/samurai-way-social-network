import React from 'react'
import {Redirect} from "react-router-dom";
import {LoginReduxForm} from "./login-form";
import {useDispatch, useSelector} from "react-redux";
import {thunks} from "../../redux/thunks/thunks";
import {getCaptchaUrl, getIsAuth} from "../../utils/selectors/auth-selectors/auth-selectors";
import s from './login.module.css'
import {Header} from "../../app/header/header";

export const Login = () => {

    const captcha = useSelector(getCaptchaUrl)
    const isAuth = useSelector(getIsAuth)
    const dispatch = useDispatch()

    const onSubmit = (formData: DataForm) => {
        dispatch(thunks.login(formData.email, formData.password, formData.rememberMe, formData.captcha))
        console.log(formData, 'formData')
    }

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <Header/>
        <div  className={s.form}>
            <h3>
            To log in get registered <a href="https://social-network.samuraijs.com/" target={"_blank"} rel="noreferrer">here</a>
            <br/>
            or use common test account credentials:
            <br/>
            <br/>
            Email: free@samuraijs.com
            <br/>
            Password: free
        </h3>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captcha}/></div>
    </div>
}

export type DataForm = {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha: string | null
}