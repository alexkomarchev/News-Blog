import {FC, useState} from 'react';
import styles from './index.module.css'
import Button from "@mui/material/Button";
import axios from 'axios'
import DragAndDropInput from "../DragAndDropInput";
import {useAppSelector} from "../../redux/hooks";

const PostEditor: FC = () => {

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [image, setImage] = useState('')

    const author = useAppSelector(state => state.user.email)

    const goPost = () => {
        axios.post('http://localhost:3000/post', {
            'title': title,
            'body': text,
            'author': author
        })
    }
    return (
        <div className={styles.postEditor}>
            <input onChange={(e) => setTitle(e.target.value)} maxLength={60} className={styles.title} type="text"
                   placeholder='Заголовок'/>
            <DragAndDropInput changeDrop={(img) => setImage(img)}/>
            <div>
                <textarea onChange={(e) => setText(e.target.value)} placeholder='Текст поста' className={styles.text}/>
            </div>
            <Button onClick={goPost} className={styles.post} variant="contained">Создать пост</Button>
        </div>
    );
};

export default PostEditor;