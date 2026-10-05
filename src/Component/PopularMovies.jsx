
import "./PopularMovies.css";
import daayra from "../assets/daayra.png";
import Mirzapur from "../assets/mirzapur.png";
import praadise from "../assets/praadise.png";
import vibe from "../assets/vibe.png";
import { useNavigate } from "react-router-dom";


function PopularMovies({searchTeam = ""}){

    const navigate = useNavigate();

    const movies = [
        {
        image: praadise,
        title:"The Paradise",
        genre:"Action . Drama . Thriller"
        },
        {
            image: Mirzapur,
            title: "Mirzapur",
            genre:"Crinme. Thriller"
        },
        {
            image:vibe,
            title:"Vibe",
            genre:"Action .Comedy . Thriller"
        },
         {
            image:daayra,
            title:"Daayra",
            genre:"Crime . Drama. Thriller"
        }
    ];

    const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTeam.toLowerCase()));

    function handleBookNow(movie) {
        navigate("/MovieDetails",{
            state: {movie: movie}
        });
    }


    return (
        <div className="PopularMovies">

            <h1>Popular movies....! </h1>

            <div className="Movie-cards">
                {filteredMovies.length === 0 && (
                    <p>Curentlly not avalible
                        comming soon.. </p>
                )}
                {filteredMovies.map((movie) => (

               

                <div className="Movie-card" key={movie.title}>
                    <img src={movie.image} alt={movie.title} />
                    <h2>{movie.title}</h2>
                    <p>{movie.genre}</p>

                 
                        <button onClick={() => handleBookNow(movie)}>
                        Book Now </button>
                </div>

               
                 ))}

            </div>
        </div>
    )
}

export default PopularMovies;