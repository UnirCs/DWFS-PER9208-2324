import React, { useState, useEffect } from 'react';
import { Movie } from "./Movie";

export const MovieList = () => {

    const [peliculas, setPeliculas] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = "https://www.omdbapi.com/?s=the+fast&apikey=ff9520af";
                const response = await fetch(url);
                if (!response.ok ) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setPeliculas(data.Search);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (

        <div className="sectionBody">    
            {peliculas.map((peliculaService, index) =>
            (
                <Movie
                    key={index}
                    pelicula={peliculaService}
                />
            ))}
        </div>
    );
}
