import {FC} from 'react';
import styles from './Post.module.css'
import Link from "next/link";
import {IPost} from "../../interfaces";
import {useAppSelector} from "../../redux/hooks";
import axios from "axios";
import {baseUrl} from "../../constants/api";

const Post: FC<IPost> = ({title, body, author, createdAt, id}) => {

    const user = useAppSelector(state => state.user.email)

    console.log(id)

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
                    {user === author && <div className={styles.editor}>
                        <button onClick={() => axios.delete(`${baseUrl}/post?id=${id}`)} className={styles.delete}>Удалить
                        </button>
                    </div>}
                </div>
            </a>
        </Link>
    );
};

export default Post;