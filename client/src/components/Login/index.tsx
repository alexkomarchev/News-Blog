import {FC} from 'react';
import {useAuth} from "../../hooks/useAuth";
import styles from './index.module.css'
import Link from "next/link";
import {useAppDispatch} from "../../redux/hooks";
import {removeUser} from "../../redux/slices/userSlice";
import {setCookie} from "nookies";

const Login: FC = () => {

    const {isAuth, name} = useAuth()

    const dispatch = useAppDispatch()

    function exit() {
        location.reload();
        dispatch(removeUser())
        setCookie(null, 'token', '')
    }

    return (
        <>
            {isAuth ?
                <div>
                    {name}
                    <button className={styles.removeUser} onClick={exit}>
                        Выйти
                    </button>
                </div>
                : <Link href={'/login'}><a className={styles.removeUser}>Войти</a></Link>
            }
        </>
    );
};

export default Login;