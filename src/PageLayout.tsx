import React from 'react';
import logo from './logo.svg';
import { Routes, Route, Navigate } from "react-router-dom";
import {HomePage, MovieDiscoveryPage,MovieDetailsPage } from "./pages/index";
import './App.css';

function PageLayout() {
  return (
      <div className="u-lyt" data-testid="layout">
        <div className="o-page">
          <div className="main">
            <Routes>
                <Route path="/home" element={<HomePage />}></Route>
                <Route path="/discover-movies" element={<MovieDiscoveryPage/>}></Route>
                <Route path="/movie-details/:id" element={<MovieDetailsPage/>}></Route>
                <Route index element={<Navigate to="/home" replace />} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default PageLayout;
