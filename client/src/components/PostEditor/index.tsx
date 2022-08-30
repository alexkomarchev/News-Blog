import {FC, useState} from 'react';
import styles from './index.module.css'
import Button from "@mui/material/Button";
import {useAppSelector} from "../../redux/hooks";
import {useRouter} from "next/router";
import {useCreatePostMutation} from "../../../api/api";

const PostEditor: FC = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const router = useRouter()

    const author = useAppSelector(state => state.user.email)

    const [create] = useCreatePostMutation()

    async function goPost() {
        await create({title, body, author})
        await router.push('/')
    }

    return (
        <div className={styles.postEditor}>
            <input onChange={(e) => setTitle(e.target.value)} className={styles.title} type="text"
                   placeholder='Заголовок'/>
            <div>
                <textarea onChange={(e) => setBody(e.target.value)} placeholder='Текст поста' className={styles.text}/>
            </div>
            <Button onClick={goPost} className={styles.post} variant="contained">Создать пост</Button>
        </div>
    );
};

export default PostEditor;