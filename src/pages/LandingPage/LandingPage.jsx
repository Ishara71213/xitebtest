import "./LandingPage.css";
// components
import { ImageSlider } from "../../components/ImageSlider/ImageSlider";
// import { Destination } from "../../components/Destination/Destination";

export default function LandingPage() {
  return (
    <div className="landingPage-container">
      <div className="landingPage-imgSlider">
        <ImageSlider />
      </div>
      {/* <Destination /> */}
    </div>
  );
}
