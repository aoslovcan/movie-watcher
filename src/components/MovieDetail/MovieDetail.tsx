import React from "react";

const MovieDetail = () => {
return(
  <div className="movie-detail">
    <div className="movie-detail__info">
      <div className="movie-detail__info__item">
        <h3>Izvorni naziv</h3>
        <span>
        7.5
      </span>
      </div>

      <div className="movie-detail__info__item">
        <h3>Ocjena</h3>
        <span>
        7.5
      </span>
      </div>
      <div className="movie-detail__info__item">
        <h3>Žanrovi</h3>
        <span>
        7.5
      </span>
      </div>
      <div className="movie-detail__info__item">
        <h3>Godina proizvodnje</h3>
        <span>
        7.5
      </span>
      </div>

      <div className="movie-detail__info__item">
        <h3>Sinopsis</h3>
        <p className="description">
          Dvadeset godina nakon događaja iz filma Zvjezdane staze: Nemesis, pratimo sada umirovljenog admirala Picarda u sljedećem poglavlju njegova života.
        </p>
      </div>
    </div>

  </div>
)
}

export default MovieDetail;
