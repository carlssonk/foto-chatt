import React from "react";
import styles from "../styles/Chat.module.css";

function otherMessageField({images, postId, message, username, sent, openImageComments }) {

    const formatDate = (sent) => {
        const date = new Date(sent)
        const hours = date.getHours()
        const minutes = date.getMinutes()
        return `${hours}:${minutes}`
    }


    return (
            <li className={styles.otherMessageField}>
            <div onClick={images.length > 0 ? () => openImageComments(true, postId) : null} className={styles.otherMessage}>
                <p className={styles.content}>{message && message}</p>
                
                    <div className={styles.myImageBox}>
                        {
                            images && images.map(e => {
                                return <img key={e._id} src={e.url.replace("/upload", "/upload/w_200")} width="200" />
                            })
                        }

                        {images.length > 0 ? <a className={styles.myImageLink}>Visa kommentarer</a> : null}
                    </div>
            </div>
            <p className={styles.otherName}>
                {username}
                <span className={styles.otherName}>
                    {formatDate(sent)}
                </span>
            </p>
        </li>
    );
}

export default otherMessageField;
