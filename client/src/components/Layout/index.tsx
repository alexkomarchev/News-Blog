import {FC, ReactNode} from 'react';
import styles from './index.module.css'
import Header from "../Header";

export type TLayout = {
    children: ReactNode
}

const Layout: FC<TLayout> = ({children}) => {
    return (
        <>
            <Header/>
            <div className={styles.children}>{children}</div>
        </>
    );
};

export default Layout;