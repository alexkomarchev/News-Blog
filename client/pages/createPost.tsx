import type {NextPage} from 'next'
import styles from '../styles/CreatePost.module.css'
import Layout from "../src/components/Layout";
import PostEditor from "../src/components/PostEditor";
import nookies from "nookies";
import {baseUrl} from "../src/constants/api";

const CreatePost: NextPage = () => {

    return (
        <Layout>
            <div className={styles.createPost}>
                <PostEditor/>
            </div>
        </Layout>


    )
}

export async function getServerSideProps(ctx: any) {

    const {token} = nookies.get(ctx)



    if (!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            }
        }
    }

    return {
        props: {}
    }


}


export default CreatePost