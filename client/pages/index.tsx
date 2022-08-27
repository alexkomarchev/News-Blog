import type {GetServerSideProps, NextPage} from 'next'
import styles from '../styles/Home.module.css'
import Post from "../src/components/Post/Post";
import {IPost, IUser} from "../src/interfaces";
import nookies from 'nookies'
import jwt_decode from 'jwt-decode'
import Layout from "../src/components/Layout";
import {baseUrl} from "../src/constants/api";
import axios from "axios";
import {removeUser, setUser} from "../src/redux/slices/userSlice";
import {wrapper} from "../src/redux";
import {useAppSelector} from "../src/redux/hooks";
import {checkLogin} from "../utils/utils";

interface IPosts {
    data: IPost[] | null
}

const Home: NextPage<IPosts> = ({data}) => {

    const a = useAppSelector(state => state.user)

    console.log(a)
    return (
        <Layout>
            <div className={styles.home}>
                {data?.map(post => <Post key={post.id} author={post.author} createdAt={post.createdAt}
                                         title={post.title}
                                         body={post.body}/>)}
            </div>
        </Layout>

    )
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {


    checkLogin(ctx, store)

    const {data} = await axios.get(`${baseUrl}/post`)

    return {
        props: {
            data
        }
    }
})

export default Home