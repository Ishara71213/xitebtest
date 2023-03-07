import "./BookingBar.css";
//component
//images
import calender from "../../images/calender.svg";
import tag from "../../images/tag.svg";

//hooks

export const BookingBar = () => {
  return (
    <div className="booking-container">
      <div className="dropDownInputWrapper">
        <img
          src={calender}
          className="bookingBar-icon"
          alt="icon"
          height={20}
        />
        <div className="dataInputContainer">
          <div className="checkinDateInput">07 Mar 2023</div>
          <div className="nightsCountInput">1 night</div>
          <div className="checkoutDateInput">07 Mar 2023</div>
          <div className="sectionDivider"></div>
        </div>
        {/* <div className="bookingInputFieldText">1 Room, 1 Adult, 0 Children</div> */}
      </div>
      <div className="dropDownInputWrapper">
        <img
          src={calender}
          className="bookingBar-icon"
          alt="icon"
          height={20}
        />
        <div className="bookingInputFieldText">1 Room, 1 Adult, 0 Children</div>
      </div>
      <div className="dropDownInputWrapper">
        <img src={tag} className="bookingBar-icon" alt="icon" height={15} />
        <div
          className="bookingInputFieldText"
          style={{ color: "var(--textcolor-secondry)" }}
        >
          Special Code
        </div>
      </div>
      <div className="findBtnWrapper">
        <button className="bookingBtn">Search</button>
      </div>
      <div className="booking-container-bg"></div>
    </div>
  );
};
