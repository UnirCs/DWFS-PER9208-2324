import React from "react";

export const Movie=(props)=>{
    console.log("El props es:", props);

    return(
        <div className="card">
            <h3>{props.pelicula.Title}</h3>
            <img src={props.pelicula.Poster} alt={props.pelicula.Title}/>
            <p>Sinopsis:  La saga "Rápidos y Furiosos" combina acción de alto octanaje, carreras de automóviles emocionantes y personajes carismáticos en una serie de películas que han sido populares entre los fanáticos de todo el mundo.</p>
            <p>Duración: {props.pelicula.Year}</p>
            <p>Género: {props.pelicula.Type}</p>
            <p>Puntuación: 10</p>

            <div className="d-flex justify-content-center">
                <button className="bottonSelection" type="button">Seleccionar Asientos</button>
            </div>
        </div>

    )}