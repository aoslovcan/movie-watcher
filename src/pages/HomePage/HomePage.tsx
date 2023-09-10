import React from "react";
import { Header } from "../../components/index";
import bgImage from "../../assets/images/hero-bg.png";

const HomePage = () => {
  return (
    <div className="home">
      <div className="landing">
        <Header
          bgImage={bgImage}
          title="Your streaming guide for movies, TV shows & sports"
          subtitle="Find where to stream new, popular & upcoming entertainment with JustWatch."
          linkTo="/discover-movies"
        />
      </div>
    </div>
  );
};

export default HomePage;
