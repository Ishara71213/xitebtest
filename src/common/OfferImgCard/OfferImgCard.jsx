import "./OfferImgCard.css";

export const OfferImgCard = (props) => {
  return (
    <div className="imgCard-container">
      <div className="image-container">
        <img src={props.imgUrl} alt={props.imgAlt} />
      </div>
      <div className="detail-container">
        <p className="offer-type text-medium">{props.offerType}</p>
        <p className="offer-title text-medium">{props.offerTitle}</p>
        <p className="offer-desc text-regular">{props.offerDesc}</p>
      </div>
      <div className="priceAndbtn">
        <p className="offer-price text-regular">
          From <span className="text-medium">{props.offerPrice}</span> Average
          Per Night
        </p>
        <a className="link-btn text-medium" href={props.btnUrl}>
          View Details
        </a>
      </div>
    </div>
  );
};
