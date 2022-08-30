import type {NextPage} from 'next'
import styles from '../styles/Login.module.css'
import Reg from "../src/components/Registration";

const Registration: NextPage = () => {
    return (
        <div className={styles.login}>
            <Reg/>
        </div>
    )
}

export default Registration
