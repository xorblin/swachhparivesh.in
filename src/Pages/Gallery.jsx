import { Link } from "react-router-dom";
import "./styles/gallery.css";
import { GalleryContainer } from "../Components/GalleryContainer";
import {
  Founder,
  Neem,
  Awareness,
  Relief,
  Swachta,
  Empowerment,
  Health,
  Blood,
  Environment,
  Wildlife,
  GauSeva,
  Yoga,
  Cultural,
  Computer,
} from "../import/gallery";
const Gallery = () => {
  return (
    <div className="spf-gallery">
      <div className="headLine">
        <div className="head">
          <h1>SPF&apos; Gallery</h1>
        </div>
        <div className="mediaLink">
          <Link to="/Media">We in Media&#8594;</Link>
        </div>
      </div>
      <GalleryContainer title="Founder's Day" Images={Founder} />
      <GalleryContainer title="Neem Tree Plantation" Images={Neem} />
      <GalleryContainer title="Awareness " Images={Awareness} />
      <GalleryContainer title="Relief  " Images={Relief} />
      <GalleryContainer title="Swachta " Images={Swachta} />
      <GalleryContainer title="Empowerment " Images={Empowerment} />
      <GalleryContainer title="Health " Images={Health} />
      <GalleryContainer title="Awareness " Images={Blood} />
      <GalleryContainer title="Environment " Images={Environment} />
      <GalleryContainer title="Wildlife " Images={Wildlife} />
      <GalleryContainer title="GauSeva " Images={GauSeva} />
      <GalleryContainer title="Yoga " Images={Yoga} />
      <GalleryContainer title="Cultural " Images={Cultural} />
      <GalleryContainer title="Computer " Images={Computer} />
    </div>
  );
};

export default Gallery;
