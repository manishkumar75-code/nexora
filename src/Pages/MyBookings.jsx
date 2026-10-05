
import { useLocation, useNavigate } from "react-router-dom";
import "./MyBookings.css";

function MyBookings() {

    const location = useLocation();
    const navigate = useNavigate();

    const movie = location.state?.movie;
    const selectedSeats = location.state?.selectedSeats || [];
    const quantities = location.state?.quantities || {};
    const totalPrice = location.state?.totalPrice || 0;
    const serviceTotal = location.state?.serviceTotal || 0;
    const grandTotal = location.state?.grandTotal || 0;
    const services = location.state?.services || [];

    if (!movie) {
        return (
            <div className="No-booking">
                <h1>No Booking Found</h1>

                <p>
                    Please complete a booking first.
                </p>

                <button onClick={() => navigate("/Movies")}>
                    Browse Movies
                </button>
            </div>
        );
    }

    return (
        <div className="MyBookings">

            <div className="MyBookings-header">
                <span>✓</span>

                <h1>Booking Confirmed</h1>

                <p>
                    Your Nexora cinema experience is booked!
                </p>
            </div>


            <div className="Booking-card">

                {/* Movie */}

                <div className="Booking-movie">

                    <div>
                        <span className="Section-label">
                            MOVIE
                        </span>

                        <h2>{movie.title}</h2>

                        <p>{movie.genre}</p>
                    </div>

                    <div className="Booking-status">
                        CONFIRMED
                    </div>

                </div>


                {/* Seats */}

                <div className="Booking-section">

                    <h3>Selected Seats</h3>

                    <div className="Booking-seats">

                        {selectedSeats.map((seat) => (
                            <span key={seat}>
                                {seat}
                            </span>
                        ))}

                    </div>

                </div>


                {/* Food & Services */}

                <div className="Booking-section">

                    <h3>Food & Services</h3>

                    {services
                        .filter(
                            (service) =>
                                (quantities[service.id] || 0) > 0
                        )
                        .map((service) => (

                            <div
                                className="Booking-service"
                                key={service.id}
                            >

                                <span>
                                    {service.name}
                                </span>

                                <span>
                                    × {quantities[service.id]}
                                </span>

                            </div>

                        ))}

                </div>


                {/* Price */}

                <div className="Booking-price">

                    <div>
                        <span>Seat Total</span>
                        <strong>₹{totalPrice}</strong>
                    </div>

                    <div>
                        <span>Service Total</span>
                        <strong>₹{serviceTotal}</strong>
                    </div>

                    <hr />

                    <div className="Booking-grand-total">

                        <span>Grand Total</span>

                        <strong>
                            ₹{grandTotal}
                        </strong>

                    </div>

                </div>


                {/* Actions */}

                <div className="Booking-actions">

                    <button
                        onClick={() => navigate("/Movies")}
                    >
                        Browse More Movies
                    </button>

                    <button
                        onClick={() => navigate("/")}
                    >
                        Back to Home
                    </button>

                </div>

            </div>

        </div>
    );
}

export default MyBookings;