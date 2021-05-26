import React, { useEffect, useRef, useState } from "react";
import { useStates } from "react-easier";
import styles from "../styles/Messageinput.module.css";
import { Link, useHistory } from "react-router-dom";
import { Divider } from "@material-ui/core";

function Messageinput({addFile, handleSubmit, handleInput }) {
    const inputRef = useRef(null);
    const fileRef = useRef(null)

    const submit = (e) => {
        e.preventDefault(); // Prevent reload
        inputRef.current.value = ""; // Clear input field

        console.log(e)
        handleSubmit(e);
        // fileRef.current.files
    };

    const fileClick = (e) => {
        fileRef.current.click()
    }

    return (
        <div className={styles.messageBar}>
            <Link
            className={styles.btn}
            to={{pathname: `/camera`, state: {test: "hahah lool"}}}
            >
                <div className={styles.cameraBtn} >
                    <i className="material-icons">camera_alt</i>
                </div>
            </Link>

            <button className={styles.btn} onClick={fileClick}>
                <i className="material-icons">photo_size_select_actual</i>
            </button>


            <div className={styles.inputMessage}>
                <form onSubmit={submit} className={styles.form}>
                    <input
                        className={styles.input}
                        type="text"
                        ref={inputRef}
                        onChange={handleInput}
                    />
                    <input
                        type="file"
                        ref={fileRef}
                        onChange={addFile}
                        accept="image/*,video/*,audio/*"
                        // capture
                        multiple
                        style={{display: "none"}}
                    />
                </form>
            </div>
            <button className={styles.btn}>
                <i className="material-icons">send</i>
            </button>
        </div>
    );
}

export default Messageinput;
