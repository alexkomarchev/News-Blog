import {FC} from 'react';
import styles from '../../../styles/Login.module.css'
import Form from "../Form/Form";
import {getAuth} from "firebase/auth";
import {useAppDispatch} from "../../redux/hooks";
import {useRouter} from "next/router";
import {baseUrl} from "../../constants/api";
import axios from "axios";
import {setCookie} from "nookies";
import {setUser} from "../../redux/slices/userSlice";


const Auth: FC = () => {
    const auth = getAuth();
    const dispatch = useAppDispatch()
    const router = useRouter()

    const signIn = async (email: string, password: string) => {

        try {
            const {data} = await axios.post(`${baseUrl}/auth/login`, {
                email,
                password,
            })
            console.log(data)
            setCookie(null, 'token', data.token)
            dispatch(setUser(data.dataValues))
            await router.push('/')

        } catch (err) {
            console.log('Ошибка')
        }
    }

    return (
        <div className={styles.auth}>
            <Form goLogin={signIn}/>
        </div>
    );
};

export default Auth;