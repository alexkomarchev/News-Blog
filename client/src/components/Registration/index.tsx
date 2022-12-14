import {FC, useState} from 'react';
import styles from '../Auth/Auth.module.css'
import {useAppDispatch} from "../../redux/hooks";
import {useRouter} from "next/router";
import {setCookie} from "nookies";
import {setUser} from "../../redux/slices/userSlice";
import {TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import Link from "next/link";
import Err from '../Error'
import {useRegistrationMutation} from "../../../api/api";

const Registration: FC = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [err, setErr] = useState('')
    const [registration] = useRegistrationMutation()


    const Registration = async (email: string, password: string, name: string) => {
        setErr('')
        const info = await registration({email,password,name})
        const {error} = info
        const {data} = info
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
        <div className={styles.form}>
            <Typography className={styles.form__title}>Зарегистрироваться</Typography>
            <TextField onChange={(e) => setName(e.target.value)} size='small' className={styles.form__input}
                       margin='normal' label="Имя" variant="outlined"/>
            <TextField
                onChange={(e) => setEmail(e.target.value)} size='small' className={styles.form__input}
                margin='normal' label="Электронная почта" variant="outlined"/>
            <TextField onChange={(e) => setPassword(e.target.value)} size='small' type='password'
                       className={styles.form__input} margin='normal' label="Пароль" variant="outlined"/>
            {err && <Err error={err} />}
            <Button onClick={() => Registration(email, password, name)} className={styles.form__button}
                    variant='contained'>Зарегистрироваться</Button>
            <div className={styles.more}>
                Есть аккаунт?
                <Link href='/login'>
                    <a className={styles.link}>Войти</a>
                </Link>
            </div>
        </div>
    );
};

export default Registration;