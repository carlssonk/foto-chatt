import React, { useEffect, useRef, useState } from "react";
import styles from  "../styles/Camera.module.css";
import { Link, useHistory, useLocation } from "react-router-dom";

import { useNamedContext } from "react-easier";

const Camera = () => {
  let g = useNamedContext("global");
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const stripRef = useRef(null);
  // const canvasRef = useRef(null);

  const location = useLocation();

  const [photoHasBeenTaken, setPhotoHasBeenTaken] = useState(false);
  const [photoUrl, setPhotoUrl] = useState("");


  useEffect(() => {
    getVideo();
  }, [videoRef, photoHasBeenTaken]);

  // useEffect(() => {
  //   console.log()
  // }, [])

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error("error:", err);
      });
  };

  const paintToCanvas = () => {
    let video = videoRef.current;
    let photo = photoRef.current;
    let context = photo.getContext("2d");

    const width = 320;
    const height = 240;
    photo.width = width;
    photo.height = height;

    return setInterval(() => {
      context.drawImage(video, 0, 0, width, height);
    }, 200);
  };

  const takePhoto = () => {

    setPhotoHasBeenTaken(true);

    
    // button.style.display = 'none';

    let photo = photoRef.current;
    let strip = stripRef.current;

    const data = photo.toDataURL("image/jpeg");

    console.log(data)

    setPhotoUrl(data)


    // const link = document.createElement("a");
    // link.href = data;
    // link.setAttribute("download", "myWebcam");
    // link.innerHTML = `<img src='${data}' alt='thumbnail'/>`;
    // strip.insertBefore(link, strip.firstChild);

  };


  const handleTakePhotoAgain = () => {
    // paintToCanvas();
    // video.play();
    setPhotoHasBeenTaken(false);
  }



  return (

    <div className={styles.container}>

        {
          photoHasBeenTaken ? (
            null
          ) : (
            <video
            onCanPlay={() => paintToCanvas()}
            ref={videoRef}
            className={styles.player}
          />
          )
        }



        <canvas ref={photoRef} className={styles.photo} />

        <div className={styles.photoBooth}>
          {/* <div ref={stripRef} className={styles.cameraImage} /> */}
          {
            photoHasBeenTaken ? <img className={styles.cameraImage} src={photoUrl} alt='thumbnail'/> : null
          }
          
        </div>

        <div className={styles.center}>


          {
            photoHasBeenTaken ? (
              <>
              <div className="material-icons">
              <a onClick={() => handleTakePhotoAgain()}>replay
              </a>
              </div>
          <div className="material-icons">
              <Link
                to={{pathname: location.state.path, state: {roomid: location.state.roomId, name: location.state.roomTitle, imageSrc: photoUrl, camera: true}}}
              >
                send
              </Link></div>
             </>
             
            ) : (
              <div className="material-icons">
                <a onClick={() => takePhoto()}>radio_button_checked</a>
              </div>
            )

          }


        
        </div>

      </div>


  );
};

export default Camera;

