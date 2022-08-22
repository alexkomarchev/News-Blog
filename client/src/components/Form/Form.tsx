import {FC, useState} from 'react';
import Button from "@mui/material/Button";
import {TextField, Typography} from "@mui/material";
import styles from './Form.module.css'

export type TForm = {
    goLogin: (email: string, password: string) => void
}


const Form: FC<TForm> = ({goLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className={styles.form}>
            <Typography className={styles.form__title}>Авторизоваться</Typography>
            <TextField onChange={(e) => setEmail(e.target.value)} size='small' className={styles.form__input}
                       margin='normal' label="Электронная почта" variant="outlined"/>
            <TextField onChange={(e) => setPassword(e.target.value)} size='small' type='password'
                       className={styles.form__input} margin='normal' label="Пароль" variant="outlined"/>
            <Button onClick={() => goLogin(email, password)} className={styles.form__button}
                    variant='contained'>Войти</Button>
        </div>
    );
};

export default Form;