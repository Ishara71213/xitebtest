import "./HeaderNavigation.css";
import { FaUser, FaGlobe, FaMobile, FaChevronDown } from "react-icons/fa";
import { HeaderContent } from "./HeaderContent";

export const HeaderNavigation = () => {
  return (
    <div className="header-slider">
      <div className="header">
        <div className="headerOne">
          <img src="/images/shangrila_en2021.webp" width={180} alt="logo" />
          <ul>
            <li className="linkNav">
              <FaUser className="icon-pa" fontSize={23} /> Sign In
            </li>
            <li className="linkNav">Join Now</li>
            <li className="linkNav">Find Reservations</li>
            <li className="linkNav">
              <FaGlobe className="icon-pa" fontSize={23} /> English
            </li>
            <li className="linkNav">Lkr</li>
            <li>
              <FaMobile className="icon-pa" fontSize={20} />
            </li>
          </ul>
        </div>
        <nav className="headerTwo">
          <ul>
            {HeaderContent.map((item, id) => (
              <li key={id}>
                {item.navigation}
                {item.hasOwnProperty("subMenu") && (
                  <FaChevronDown className="icon-h2" />
                )}
                {/* {console.log(item.hasOwnProperty('navigation'),item.subMenu, 'now')} */}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
