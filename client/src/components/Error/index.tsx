import {FC} from 'react';
import styles from './index.module.css'

type TError = {
    error: string;
}

const Error: FC<TError> = ({error}) => {
    return (
        <div className ={styles.err}>
            {error} !
        </div>
    );
};

export default Error;