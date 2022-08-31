import {FC, useState} from 'react';
import styles from './Auth.module.css'
import {useAppDispatch} from "../../redux/hooks";
import {useRouter} from "next/router";
import {setCookie} from "nookies";
import {setUser} from "../../redux/slices/userSlice";
import {TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import Link from "next/link";
import Error from "../Error";
import {useLoginMutation} from "../../../api/api";
import {IResponseUser} from "../../interfaces";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {SerializedError} from "@reduxjs/toolkit";


const Auth: FC = () => {
        const dispatch = useAppDispatch()
        const router = useRouter()
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [err, setErr] = useState('')
        const [login] = useLoginMutation();

        const signIn = async (email: string, password: string) => {
            setErr('')
            const info:{ data: IResponseUser} | { error: FetchBaseQueryError | SerializedError} = await login({email, password})
            console.log(info)
            const {error} = info;
            const {data}= info
            if (!error) {
                const {name, email, token} = data
                setCookie(null, 'token', token)
                dispatch(setUser({email, name}))
                await router.push('/')
            } else {
                setErr(error.data.message)
            }
        }
        return (
            <div className={styles.auth}>
                <div className={styles.form}>
                    <Typography className={styles.form__title}>Авторизоваться</Typography>
                    <TextField onChange={(e) => setEmail(e.target.value)} size='small' className={styles.form__input}
                               margin='normal' label="Электронная почта" variant="outlined"/>
                    <TextField onChange={(e) => setPassword(e.target.value)} size='small' type='password'
                               className={styles.form__input} margin='normal' label="Пароль" variant="outlined"/>
                    {err && <Error error={err}/>}
                    <Button onClick={() => signIn(email, password)} className={styles.form__button}
                            variant='contained'>Войти</Button>
                    <div className={styles.more}>
                        Нет аккаунта?
                        <Link href='/registration'>
                            <a className={styles.link}>Зарегистрироваться</a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
;

export default Auth;