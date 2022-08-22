import type {NextPage} from 'next'
import styles from '../styles/CreatePost.module.css'
import {TextField} from "@mui/material";
import Layout from "../src/components/Layout";
import PostEditor from "../src/components/PostEditor";

const CreatePost: NextPage = () => {

    return (
        <Layout>
            <div className={styles.createPost}>
              <PostEditor/>
            </div>
        </Layout>


    )
}


export default CreatePost