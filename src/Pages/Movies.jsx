
import "./Movies.css";
import PopularMovies from "../Component/PopularMovies";
import { useState } from "react";


function Movies(){

    const[ searchTeam, setSearchTeam] =useState("")
    return(
        <div className="Movies">
            <h1> Explore your Movies</h1>

            <p>Choose your favorite movie and book your seats.</p>

            <div className="Movies-Search">

                <input type="text" placeholder="Search movies..."
                value={searchTeam}
                onChange={(e) => setSearchTeam (e.target.value)}
                />
                   
            </div>
                 <PopularMovies searchTeam ={searchTeam} />
        </div>
    )
}

export default Movies;