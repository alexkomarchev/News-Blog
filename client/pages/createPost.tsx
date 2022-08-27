import type {NextPage} from 'next'
import styles from '../styles/CreatePost.module.css'
import Layout from "../src/components/Layout";
import PostEditor from "../src/components/PostEditor";
import nookies from "nookies";
import {checkLogin} from "../utils/utils";
import {GetServerSideProps} from "next";
import {wrapper} from "../src/redux";

const CreatePost: NextPage = () => {

    return (
        <Layout>
            <div className={styles.createPost}>
                <PostEditor/>
            </div>
        </Layout>


    )
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {

    checkLogin(ctx, store)

    return {
        props: {}
    }
})

export default CreatePost