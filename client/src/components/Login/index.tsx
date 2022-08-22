import {FC} from 'react';
import {useAuth} from "../../hooks/useAuth";
import styles from './index.module.css'
import Link from "next/link";
import {useAppDispatch} from "../../redux/hooks";
import {removeUser} from "../../redux/slices/userSlice";

const Login: FC = () => {

    const {isAuth} = useAuth()

    const dispatch = useAppDispatch()

    console.log(isAuth)

    return (
        <>
            {isAuth ? <button className={styles.removeUser} onClick={() => dispatch(removeUser())}>
                Выйти</button> : <Link  href={'/login'}><a className={styles.removeUser}>Войти</a></Link>}
        </>
    );
};

export default Login;