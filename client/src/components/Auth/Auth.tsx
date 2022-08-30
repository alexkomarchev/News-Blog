import {FC, useState} from 'react';
import styles from './Auth.module.css'
import {useAppDispatch} from "../../redux/hooks";
import {useRouter} from "next/router";
import {baseUrl} from "../../constants/api";
import axios, {AxiosError} from "axios";
import {setCookie} from "nookies";
import {setUser} from "../../redux/slices/userSlice";
import {TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import Link from "next/link";
import Error from "../Error";


const Auth: FC = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const signIn = async (email: string, password: string) => {
        setError('')
        try {
            const {data} = await axios.post(`${baseUrl}/auth/login`, {
                email,
                password,
            })
            setCookie(null, 'token', data.token)
            dispatch(setUser(data.dataValues))
            await router.push('/')

        } catch (err:any) {
            setError(err.response.data.message)
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
                {error && <Error error={error}/>}
                <Button onClick={() => signIn(email, password)} className={styles.form__button}
                        variant='contained'>Войти</Button>
                <div className={styles.more}>
                    <Link href='/registration'>
                        <a>Зарегистрироваться</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Auth;