import React, { useEffect, useState } from "react";
import axios from "./axios";
import request from "./request";
import "./Banner.css"

const Banner = () => {

    const [movie, setMovies] = useState([]);

    useEffect(()=>{

        const fetchData = async () => {
            const requests = await axios.get(request.fetchNetflixOriginals);
            const randomNumber = Math.floor(Math.random() * requests.data.results.length -1);
            setMovies(requests.data.results[randomNumber]);
        }
        fetchData();
    },[])

    console.log(movie);

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner-contents">
                <h1 className="banner-title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">My List</button>
                </div>

                <h1 className="banner-description">{movie?.overview}</h1>
            </div>
            <div className="fade-bottom"></div>
        </header>
    )
}

export default Banner