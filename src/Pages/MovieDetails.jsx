
import { useLocation, useNavigate } from "react-router-dom";
import "./MovieDetails.css";

function MovieDetails(){

    const location = useLocation();
    const navigate = useNavigate();
    const movie = location.state?.movie;
    


    if(!movie){
        return <h1>Movie not found</h1>;
    }

    return(
        <div className="MovieDetails">
            <div className="MovieDetails-image">
                <img
             src={movie.image}  alt={movie.title} />

            </div>

            <div className="MovieDetails-info">

                <h1>{movie.title}</h1>

                <p className="MovieDetails-genre">
                    {movie.genre}

                </p>

                 <p className="MovieDetails-description">
                    Experience an exciting cinematic journey with {movie.title}.
                    Enjoy the story, characters and thrilling moments at Nexora.
                </p>

                 <button className="Book-seats-btn" 
                 onClick={() =>
                    navigate("/SeatSelection", {
                        state:{movie: movie}
                    })
                    }>
                    Book Seats
                </button>


            </div>


        </div>
    );
}

export default MovieDetails;