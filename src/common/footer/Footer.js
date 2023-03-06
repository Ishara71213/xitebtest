import "./Footer.css";
import { FooterMenu } from "./FooterMenu";
import { FooterContent } from "./FooterContent";
// import { useState } from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export const Footer = () => {
  // const [currentState, clickCheckBox] = useState(true);
  // if(currentState){
  //     // const checkBox=document.getElementsByClassName('checkmark');
  //     console.log(true);
  //     document.addEventListener('click', function handleClick(event) {
  //         event.target.classList.add('checkmark.act');
  //       });
  // }

  return (
    <div className="footerContainer">
      <div className="footerWrapper">
        <div className="navigationContainer">
          {FooterContent.map((item, id) => {
            return (
              <div
                className={`footerMenuCont ${"class" + id}`}
                key={id}
                id={id}
              >
                <FooterMenu
                  title={item.title}
                  type={item.type}
                  linksName={item.linksName}
                  linksUrl={item.linksUrl}
                />
              </div>
            );
          })}
        </div>

        <div className="footerRight">
          <div className="socialMediaContainer">
            <div className="fotterTitle">Follow Us</div>
            <div className="footerLinksSocialMedia">
              <a href="https://www.facebook.com/cinnamonhotels">
                <FaFacebookF className="icon" />
              </a>
              <a href="https://www.facebook.com/cinnamonhotels">
                <FaTwitter className="icon" />
              </a>
              <a href="https://www.facebook.com/cinnamonhotels">
                <FaLinkedin className="icon" />
              </a>
              <a href="https://www.facebook.com/cinnamonhotels">
                <FaInstagram className="icon" />
              </a>
              <a href="https://www.facebook.com/cinnamonhotels">
                <FaYoutube className="icon" />
              </a>
            </div>
          </div>
          <div className="subscribe">
            <div className="fotterTitle">Get Cinnamon in your inbox</div>
            <div className="emailAdd">
              <input
                type="text"
                id="email"
                className="formControl"
                placeholder="Email Address"
              />
              <span className="input-group-btn">
                <button className="btn btn-default btn-footer" id="fooSubmit">
                  <span>
                    <img
                      src="https://www.cinnamonhotels.com/themes/cinnamon/images/svg/right-arw.svg"
                      height="20"
                      alt=""
                    />
                  </span>
                </button>
              </span>
            </div>
            <div className="checkbox custCheckbox">
              <label>
                <input id="terms" type="checkbox" />
                By Checking this box, I consent to the processing of my Personal
                Data by Cinnamon for the purpose and within the Conditions set
                out in this form and the
                <a href="https://www.cinnamonhotels.com/privacy-statement">
                  Cinnamon Data Protection Policy
                </a>
                .*
              </label>
              <span className="checkmark"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
