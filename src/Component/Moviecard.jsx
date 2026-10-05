
import Moviesposter from "../assets/Movies-poster.png";

function Moviecard(){
    return(
        <div className="Moviecard">
            <div className="Movie-image">
                <img
                src={Moviesposter}
                alt="Movie"
               />

            </div>

            <h3>Movie Name</h3>
            <p>Action . drama</p>

            <button>Book Now</button>
        </div>
    )
}
export default Moviecard;