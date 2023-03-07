import "./FooterMenu.css";

export const FooterMenu = (props) => {
  return (
    <div className="footerMenuContainer">
      <div className="fotterTitle">{props.title}</div>
      <ul className="footerLinks">
        {props.linksUrl.map((item, id) => {
          return (
            <li className="link" key={id}>
              <a href={item[1]}>{item[0]}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
