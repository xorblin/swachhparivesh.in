import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/gallery.css";

const Gallery = () => {
  const [lightbox, setLightbox] = useState({ isOpen: false, imageUrl: "" });

  const openLightbox = (imageUrl) => {
    console.log("Opening lightbox with image:", imageUrl);
    setLightbox({ isOpen: true, imageUrl: imageUrl });
  };

  const closeLightbox = () => {
    console.log("Closing lightbox");
    setLightbox({ isOpen: false, imageUrl: "" });
  };

  return (
    <div className="spf-gallery">
      <div className="headLine">
        <div className="head">
          <h1>SPF's Media Gallery</h1>
        </div>
      </div>
      <div className="photos">
        <div className="gallery">
          {/* Add more images as needed */}
          {/* Add images just by copying any of the below line and in src part of the img tag just put the image path of the image "saved in the images folder in the assets folder in public folder" */}

          <div className="work founders-day">
            {/* <h3>Founder's Day</h3> */}
            <div className="pictures">
              <div
                className="media"
                onClick={() =>
                  openLightbox("./assets/images/Media-gallery/media1.jpg")
                }
              >
                <img
                  src="./assets/images/Media-gallery/media1.jpg"
                  alt="Image"
                />
              </div>
              <div
                className="media"
                onClick={() =>
                  openLightbox("./assets/images/Media-gallery/media2.jpg")
                }
              >
                <img
                  src="./assets/images/Media-gallery/media2.jpg"
                  alt="Image"
                />
              </div>
              <div
                className="media"
                onClick={() =>
                  openLightbox("./assets/images/Media-gallery/media3.jpg")
                }
              >
                <img
                  src="./assets/images/Media-gallery/media3.jpg"
                  alt="Image"
                />
              </div>
              <div
                className="media"
                onClick={() =>
                  openLightbox("./assets/images/Media-gallery/media4.jpg")
                }
              >
                <img
                  src="./assets/images/Media-gallery/media4.jpg"
                  alt="Image"
                />
              </div>
              <div
                className="media"
                onClick={() =>
                  openLightbox("./assets/images/Media-gallery/media5.jpg")
                }
              >
                <img
                  src="./assets/images/Media-gallery/media5.jpg"
                  alt="Image"
                />
              </div>
              <div
                className="media"
                onClick={() =>
                  openLightbox("./assets/images/Media-gallery/media6.jpg")
                }
              >
                <img
                  src="./assets/images/Media-gallery/media6.jpg"
                  alt="Image"
                />
              </div>
              <div
                className="media"
                onClick={() =>
                  openLightbox("./assets/images/Media-gallery/media7.jpg")
                }
              >
                <img
                  src="./assets/images/Media-gallery/media7.jpg"
                  alt="Image"
                />
              </div>
              <div
                className="media"
                onClick={() =>
                  openLightbox("./assets/images/Media-gallery/media8.jpg")
                }
              >
                <img
                  src="./assets/images/Media-gallery/media8.jpg"
                  alt="Image"
                />
              </div>
              <div
                className="media"
                onClick={() =>
                  openLightbox("./assets/images/Media-gallery/media9.jpg")
                }
              >
                <img
                  src="./assets/images/Media-gallery/media9.jpg"
                  alt="Image"
                />
              </div>
              <div
                className="media"
                onClick={() =>
                  openLightbox("./assets/images/Media-gallery/media10.jpg")
                }
              >
                <img
                  src="./assets/images/Media-gallery/media10.jpg"
                  alt="Image"
                />
              </div>
              <div
                className="media"
                onClick={() =>
                  openLightbox("./assets/images/Media-gallery/media11.jpg")
                }
              >
                <img
                  src="./assets/images/Media-gallery/media11.jpg"
                  alt="Image"
                />
              </div>
              <div
                className="media"
                onClick={() =>
                  openLightbox("./assets/images/Media-gallery/media12.jpg")
                }
              >
                <img
                  src="./assets/images/Media-gallery/media12.jpg"
                  alt="Image"
                />
              </div>
            </div>
          </div>

          {lightbox.isOpen && (
            <div id="lightbox" className="lightbox" onClick={closeLightbox}>
              <span className="close-btn">&times;</span>
              <img src={lightbox.imageUrl} alt="Lightbox" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
