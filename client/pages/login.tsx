import type {NextPage} from 'next'
import styles from '../styles/Login.module.css'
import Auth from "../src/components/Auth/Auth";


const Login: NextPage = () => {
    return (
        <div className={styles.login}>
            <Auth/>
        </div>
    )
}

export default Login
