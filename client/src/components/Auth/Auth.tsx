import {FC} from 'react';
import styles from '../../../styles/Login.module.css'
import Form from "../Form/Form";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useAppDispatch} from "../../redux/hooks";
import {setUser} from "../../redux/slices/userSlice";
import {useRouter} from "next/router";


const Auth: FC = () => {
    const auth = getAuth();
    const dispatch = useAppDispatch()
    const router = useRouter()

    const signIn = (email: string, password: string): void => {
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    token: user.refreshToken,
                    id: user.uid,
                }))
                router.push('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }


    return (
        <div className={styles.auth}>
            <Form goLogin={signIn}/>
        </div>
    );
};

export default Auth;