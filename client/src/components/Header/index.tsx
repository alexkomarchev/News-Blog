import {FC} from 'react';
import styles from './index.module.css'
import Login from "../Login";
import {useAuth} from "../../hooks/useAuth";
import Link from "next/link";

const Header: FC = () => {

    const {isAuth} = useAuth()

    return (
        <div className={styles.header}>
            <div>Logo</div>
            {isAuth && <Link href={'/createPost'}><a>+ Create post</a></Link>}
            <Login/>
        </div>
    );
};

export default Header;