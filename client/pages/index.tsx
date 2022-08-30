import type {GetServerSideProps, NextPage} from 'next'
import styles from '../styles/Home.module.css'
import Post from "../src/components/Post/Post";
import {IPost} from "../src/interfaces";
import Layout from "../src/components/Layout";
import {wrapper} from "../src/redux";
import {useAppDispatch, useAppSelector} from "../src/redux/hooks";
import {checkLogin} from "../utils/utils";
import {getPosts} from "../api/api";

interface IPosts {
    data: IPost[] | null
}

const Home: NextPage<IPosts> = ({data}) => {

    return (
        <Layout>
            <div className={styles.home}>
                {data?.map(post => <Post id={post.id} key={post.id} author={post.author} createdAt={post.createdAt}
                                         title={post.title}
                                         body={post.body}/>)}
            </div>
        </Layout>

    )
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {

    checkLogin(ctx, store)

    const {data} = await store.dispatch(getPosts.initiate())

    return {
        props: {data}
    }
})

export default Home