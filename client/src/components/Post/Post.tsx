import {FC} from 'react';
import styles from './Post.module.css'
import Link from "next/link";
import {IPost} from "../../interfaces";

const Post: FC<IPost> = ({title, body, author,createdAt}) => {
    return (
        <Link href={'/'}>
            <a href="./Post">
                <div className={styles.post}>
                    <div className={styles.post_header}>
                        <div>{author}</div>
                        <div className={styles.add_date}>{createdAt}</div>
                    </div>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.text}>{body}</div>
                </div>
            </a>
        </Link>
    );
};

export default Post;