import { useLocation, useNavigate } from "react-router-dom";
import "./BookingSummary.css";

function BookingSummary() {

    const location = useLocation();
    const navigate = useNavigate();

    const movie = location.state?.movie;
    const selectedSeats = location.state?.selectedSeats || [];
    const totalPrice = location.state?.totalPrice || 0;
    const quantities = location.state?.quantities || {};
    const serviceTotal = location.state?.serviceTotal || 0;
    const grandTotal = location.state?.grandTotal || 0;
    const services = location.state?.services || [];

    return (
        <div className="BookingSummary">

            <h1>Booking Summary</h1>

            <div className="Booking-card">

                <div className="Movie-info">
                    <div>
                        <span>Movie</span>
                        <h2>{movie?.title}</h2>
                        <p>{movie?.genre}</p>
                    </div>
                </div>

                <div className="Summary-section">

                    <h3>selected Seats</h3>

                    <div className="Selected-seats">
                        {selectedSeats.map((seat) =>(
                            <span key={seat}>
                                {seat}
                            </span>
                        ))}

                    </div>

                </div>

                <div className="Summary-section">

                        <h3>Food & Services</h3>

                        {Object.entries(quantities).some(
                            ([, quantity]) => quantity > 0
                            ) ? (
                                Object.entries(quantities).map(
                                    ([id, quantity]) => {
                                        if(quantity === 0) {
                                            return null;
                                        }
                                        const service = services.find(
                                            (item) => item.id === Number(id)
                                        );
                                        return(
                                            <div className="Service-item" key={id}>
                                                <span>
                                                    {service?.name}
                                                </span>
                                                <span>
                                                    x {quantity}
                                                </span>
                                            </div>
                                        );
                                    }
                                )

                            ) :( 
                                <p>No services selected</p>
                            )}
                    </div>

                <div className="Price-summary">
                    <div>
                        <span>Seat Total</span>
                        <strong>₹{totalPrice}</strong>
                    </div>

                    <div>
                        <span>Service Total</span>
                        <strong>₹{serviceTotal}</strong>
                    </div>
                    <hr />

                    <div className="Grand-total">
                        <span>Grand Total</span>
                        <strong>₹{grandTotal}</strong>

                    </div>
                </div>
                <button className="Confirm-booking-btn" onClick={() =>
                    navigate("/MyBookings",{
                        state:{
                            movie:movie,
                            selectedSeats: selectedSeats,
                            totalPrice: totalPrice,
                            quantities: quantities,
                            services: services,
                            serviceTotal: serviceTotal,
                            grandTotal: grandTotal
                        }
                    })
                }>
                    Confirm Booking

                </button>
            </div>

        </div>


           
    );
}

export default BookingSummary;