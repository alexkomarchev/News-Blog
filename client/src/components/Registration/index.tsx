import {FC, useState} from 'react';
import styles from '../Auth/Auth.module.css'
import {useAppDispatch} from "../../redux/hooks";
import {useRouter} from "next/router";
import {baseUrl} from "../../constants/api";
import axios, {AxiosError} from "axios";
import {setCookie} from "nookies";
import {setUser} from "../../redux/slices/userSlice";
import {Alert, TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import Link from "next/link";
import Err from '../Error'

const Registration: FC = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState('')


    const Registration = async (email: string, password: string, name: string) => {
        setError('')
        try {
            const {data} = await axios.post(`${baseUrl}/auth/registration`, {
                email,
                password,
                name
            })
            setCookie(null, 'token', data.token)
            dispatch(setUser(data.dataValues))
            await router.push('/')

        } catch (err:any) {
            setError(err.response?.data.message)
        }
    }

    return (
        <div className={styles.form}>
            <Typography className={styles.form__title}>Зарегистрироваться</Typography>
            <TextField onChange={(e) => setName(e.target.value)} size='small' className={styles.form__input}
                       margin='normal' label="Имя" variant="outlined"/>
            <TextField
                onChange={(e) => setEmail(e.target.value)} size='small' className={styles.form__input}
                margin='normal' label="Электронная почта" variant="outlined"/>
            <TextField onChange={(e) => setPassword(e.target.value)} size='small' type='password'
                       className={styles.form__input} margin='normal' label="Пароль" variant="outlined"/>
            {error && <Err error={error} />}
            <Button onClick={() => Registration(email, password, name)} className={styles.form__button}
                    variant='contained'>Зарегистрироваться</Button>
            <div className={styles.more}>
                <Link href='/login'>
                    <a>Войти</a>
                </Link>
            </div>
        </div>
    );
};

export default Registration;