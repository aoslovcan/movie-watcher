import React from "react";
//import "./Header.css";
import bgImage from "../../assets/images/hero-bg.png";

const Header = () => {
    const inlineStyle = {
        backgroundImage: `url(${bgImage})`,
    }

return (
    <div className="hero" style={inlineStyle}>
        <div className="content">
            <h1 className="content__heading">Vaš vodič za streaming filmovi, TV serije i sport</h1>
            <p className="content__subheading" data-v-596d85fa="">
                Uz JustWatch pronađite gdje streamati nove, popularne
                i nadolazeće sadržaje. </p>
        </div>
        <div className="hero__gradient"></div>
    </div>
)
}
export default Header;
