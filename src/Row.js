import React,{useState, useEffect} from "react";
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer";
import axios from "./axios";
import "./Row.css"

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({title, fetchUrl, largeRow}) => {

    const [movies,setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");

    useEffect(()=>{
        const fetchData = async () => {
            const response = await axios.get(fetchUrl);
            setMovies(response.data.results);
        }
        fetchData();
    },[fetchUrl]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    const handleClick = (movie) => {
        if(trailerUrl) {
            setTrailerUrl('');
        }
        else {
            movieTrailer(movie?.name || "").then(url => {
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get('v'));
            }).catch((error)=>console.log(error));
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row-posters" >
                {movies.map((movie) => {
                    return (
                        <img key={movie.id} className={`row-poster ${largeRow && "large-row"}`}
                        onClick = {()=>handleClick(movie)}
                        src={`${base_url}${ largeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                    );
                })}
            </div>
            { trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;
