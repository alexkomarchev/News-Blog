import {FC, useRef, useState} from 'react';
import styles from './index.module.css'

export type TDrop = {
    changeDrop: (img: any) => void
}

const DragAndDropInput: FC<TDrop> = ({changeDrop}) => {
    const [drag, setDrag] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    function dragStartHandler(e: any) {
        e.preventDefault();
        setDrag(true)
    }

    function dragLeaveHandler(e: any) {
        e.preventDefault();
        setDrag(false)
    }

    function onDropHandler(e: any) {
        e.preventDefault();
        let files = [...e.dataTransfer.files]

        const formData = new FormData();
        formData.append('file', e.dataTransfer.files)
        console.log(formData)
        setDrag(false)
    }

    function onChangeInput(e: any) {
        changeDrop(e.target.value)
    }

    return (
        <>
            <input onChange={onChangeInput} accept="image/png, image/svg, image/jpeg" ref={inputRef}
                   className={styles.input_file} type="file"/>
            <label
                onClick={() => inputRef.current!.click()}
                className={styles.drop_area}>
                {drag ?
                    <div
                        onDragStart={e => dragStartHandler(e)}
                        onDragLeave={e => dragLeaveHandler(e)}
                        onDragOver={e => dragStartHandler(e)}
                        onDrop={e => onDropHandler(e)}
                    >Отпустите файлы</div> :
                    <div onDragStart={e => dragStartHandler(e)}
                         onDragLeave={e => dragLeaveHandler(e)}
                         onDragOver={e => dragStartHandler(e)}
                    >
                        Выберите или перетащите изображение
                    </div>}
            </label>

        </>
    );
};

export default DragAndDropInput;