import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../index";

type HeaderProps = {
  bgImage: string;
  title: string;
  subtitle: string;
  linkTo: string;
};

const Header = ({ bgImage, title, subtitle, linkTo }: HeaderProps) => {
  const inlineStyle = {
    backgroundImage: `url(${bgImage})`,
  };

  const buttonContent: string = "Discover Movies";

  return (
    <div className="hero" style={inlineStyle}>
      <div className="content">
        <h1 className="content__heading">{title}</h1>
        <p className="content__subheading" data-v-596d85fa="">
          {subtitle}
        </p>
        <div className="content__actions">
          <Link to={linkTo}>
            <button className="button button__rounded large primary">
              {buttonContent}
            </button>
          </Link>
        </div>
      </div>
      <div className="hero__gradient"></div>
    </div>
  );
};
export default Header;
