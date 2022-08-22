import type {NextPage} from 'next'
import styles from '../styles/Login.module.css'
import Auth from "../src/components/Auth/Auth";


const Login: NextPage = () => {
    return (
        <div className={styles.login}>
            <div className={styles.image}><h1>Зарегистрируйтесь,чтобы поддержать любимых авторов</h1></div>
            <Auth/>
        </div>
    )
}

export default Login
