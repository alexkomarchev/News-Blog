import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import Post from "../src/components/Post/Post";
import Header from "../src/components/Header";
import {IPost} from "../src/interfaces";
import Layout from "../src/components/Layout";

interface IPosts {
    data: IPost[]
}

const Home: NextPage<IPosts> = ({data}) => {

    return (
        <Layout>
            <div className={styles.home}>
                {data.map(post => <Post key={post.id} author={post.author} createdAt={post.createdAt} title={post.title}
                                        body={post.body}/>)}
            </div>
        </Layout>

    )
}

export async function getServerSideProps() {

    const res = await fetch('http://localhost:3000/post')
    const data = await res.json()

    return {
        props: {
            data
        }
    }
}

export default Home