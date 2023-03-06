import "./Destination.css";

export const Destination = () => {
  return (
    <div className="destination-container">
      <div className="destination-wrapper">
        <div className="head-container">
          <div className="title-destination">Our Destinations</div>
          <div className="dropDown-container"></div>
        </div>

        <div className="image-set-container">
          <div className="image-destination-container">
            <img
              src="./images/cinnamon-dhonveli-dest-0803.png"
              alt="cinnamon-dhonveli"
            />
          </div>
          <div className="side-image-container">
            <img src="./images/maldives.png" alt="maldives" />
          </div>
          <div className="text-container">
            <div className="text-title">Cinnamon Dhonveli Maldives</div>
            <div className="text-subtitle">
              Feel an irrepressible wave of excitement as you have the best
              surfing experience, set to the backdrop of serenity, and pristine
              blue waters.
            </div>
            <a
              class="btn-new btn btn-default "
              href="https://www.cinnamonhotels.com/cinnamondhonvelimaldives"
            >
              Discover More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
