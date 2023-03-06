import "./LandingPage.css";
// components
import { ImageSlider } from "../../components/ImageSlider/ImageSlider";
import { Destination } from "../../components/Destination/Destination";
import { Experience } from "../../components/Experience/Experience";

export default function LandingPage() {
  return (
    <div className="landingPage-container">
      <div className="landingPage-imgSlider">
        <ImageSlider />
      </div>
      <Destination />
      <Experience />
    </div>
  );
}
