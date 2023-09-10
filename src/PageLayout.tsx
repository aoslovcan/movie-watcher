import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, MovieDiscoveryPage, MovieDetailsPage } from "./pages/index";
import { NavBar } from "./components/index";
import "./PageLayout.css";
import "./styles/styles.scss";

function PageLayout() {
  return (
    <div className="u-lyt" data-testid="layout">
      <NavBar />
      <div className="">
        <div className="">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/discover-movies" element={<MovieDiscoveryPage />} />
            <Route
              path="/movie-details/:movieId"
              element={<MovieDetailsPage />}
            />
            <Route index element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default PageLayout;
