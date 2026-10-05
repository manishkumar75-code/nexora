import "./Home.css";
import Hero from "../Component/Hero";

import praadise from "../assets/praadise.png";
import Mirzapur from "../assets/mirzapur.png";
import vibe from "../assets/vibe.png";
import daayra from "../assets/daayra.png";

function Home() {

    const movies = [
        {
            image: praadise,
            title: "The Paradise",
            genre: "Action • Drama • Thriller",
            rating: "8.5"
        },
        {
            image: Mirzapur,
            title: "Mirzapur",
            genre: "Crime • Drama • Thriller",
            rating: "8.3"
        },
        {
            image: vibe,
            title: "Vibe",
            genre: "Action • Comedy • Thriller",
            rating: "8.2"
        },
        {
            image: daayra,
            title: "Daayra",
            genre: "Crime • Drama • Thriller",
            rating: "8.4"
        }
    ];

    return (

        <div className="Home">

            {/* Hero */}

            <section className="Home-hero">

                <div className="Hero-content">

                    <span className="Hero-label">
                        LUXURY CINEMA EXPERIENCE
                    </span>

                    <h1>
                        Experience the
                        <span> Magic of Cinema</span>
                    </h1>

                    <p>
                        Premium seating, exceptional sound,
                        delicious food and unforgettable moments.
                    </p>

                    <button className="Hero-btn">
                        Book Now
                        <span>→</span>
                    </button>

                </div>

            </section>


            {/* Premium Features */}

            <section className="Premium-features">

                <div className="Feature-card">

                    <div className="Feature-icon">▣</div>

                    <div>
                        <h3>Premium Seating</h3>
                        <p>Relax in luxury</p>
                    </div>

                </div>


                <div className="Feature-card">

                    <div className="Feature-icon">◉</div>

                    <div>
                        <h3>Crystal Clear Audio</h3>
                        <p>Feel every sound</p>
                    </div>

                </div>


                <div className="Feature-card">

                    <div className="Feature-icon">♜</div>

                    <div>
                        <h3>Gourmet Snacks</h3>
                        <p>Food & beverages</p>
                    </div>

                </div>


                <div className="Feature-card">

                    <div className="Feature-icon">✓</div>

                    <div>
                        <h3>Seamless Booking</h3>
                        <p>Fast & easy</p>
                    </div>

                </div>

            </section>


            {/* Now Showing */}

            <section className="Now-showing">

                <div className="Section-heading">

                    <div>
                        <h2>Now Showing</h2>

                        <p>
                            Blockbuster movies, handpicked for you.
                        </p>
                    </div>

                    <span>View All →</span>

                </div>


                <div className="Home-movie-list">

                    {movies.map((movie) => (

                        <div
                            className="Home-movie-card"
                            key={movie.title}
                        >

                            <div className="Home-movie-image">

                                <img
                                    src={movie.image}
                                    alt={movie.title}
                                />

                            </div>


                            <div className="Home-movie-info">

                                <h3>{movie.title}</h3>

                                <p>{movie.genre}</p>

                                <div className="Movie-bottom">

                                    <span>
                                        ★ {movie.rating}
                                    </span>

                                    <button>
                                        Book Now
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </section>


            {/* Premium Cinema Section */}

            <section className="Premium-cinema">

                <div className="Cinema-image">

                    <div className="Cinema-overlay"></div>

                </div>


                <div className="Cinema-content">

                    <span>MORE THAN JUST A MOVIE</span>

                    <h2>
                        Your Premium Cinema
                        Destination
                    </h2>

                    <p>
                        From the latest blockbusters to timeless
                        classics, experience the world of cinema
                        in complete comfort and luxury.
                    </p>

                    <button>
                        Explore More →
                    </button>

                </div>


                <div className="Cinema-stats">

                    <div>
                        <strong>100+</strong>
                        <span>Movies</span>
                    </div>

                    <div>
                        <strong>50K+</strong>
                        <span>Happy Customers</span>
                    </div>

                    <div>
                        <strong>4.8</strong>
                        <span>Average Rating</span>
                    </div>

                </div>

            </section>


            {/* Final CTA */}

            <section className="Home-cta">

                <span>YOUR NEXT MOVIE AWAITS</span>

                <h2>
                    Ready for your next
                    <span> movie?</span>
                </h2>

                <p>
                    Book your seats and enjoy a premium
                    cinema experience with Nexora.
                </p>

                <button>
                    Book Your Movie →
                </button>

            </section>

        </div>
    );
}

export default Home;