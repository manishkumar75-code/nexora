
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SeatSelection.css"



function SeatSelection() {

    const location = useLocation();
    const navigate = useNavigate();
    const movie = location.state?.movie;

    const rows = ["A", "B", "C", "D", "E", "F"];

    const [selectedSeats, setSelectedSeats] = useState([]);

    const bookedSeats = ["A2", "B5", "D7"];

    function handleSeatClick(seat) {
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(
                selectedSeats.filter((item) => item !==seat)
            );
        }else{
            setSelectedSeats([
                ...selectedSeats,
                seat
            ]);
        }
    }

    function getSeatPrice(seat) {

        const row = seat.charAt(0);
        if (row === "A" || row === "B") {
            return 999;
        }
        else {
            return 299;
        }
    }
    const totalPrice = selectedSeats.reduce(
        (total, seat) => total + getSeatPrice(seat), 0
    );



    return (
        <div className="SeatSelection">

            <h1>Select Your Seats</h1>



            <div className="Screen">
                SCREEN
            </div>

            <div className="Seats">

                {rows.map((row) => (
                    <div className="Seat-row" key={row}>

                        <span className="Row-name">{row}</span>

                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => {

                            const seat = `${row}${number}`;

                            return (
                                <button className={
                                    bookedSeats.includes(seat)
                                        ? "Seat  booked"
                                        : selectedSeats.includes(seat)
                                            ? "Seat selected" : "Seat"}
                                    key={seat}
                                    onClick={() => handleSeatClick(seat)}
                                    disabled={bookedSeats.includes(seat)}>
                                    {seat}

                                </button>
                            );

                        })}

                    </div>
                ))}

            </div>

            <div className="Seat-legend">
                <div className="Legend-item">
                    <span className="Legend-box available"></span>
                    <span>Avilable</span>

                </div>

                <div className="legend-item">
                    <span className="Legend-box selected"></span>
                    <span>Selected</span>

                </div>

                <div className="Legend-item">
                    <span className="Legend-box booked"></span>
                    <span>Booked</span>

                </div>

            </div>

            <div className="Booking-summary">
                <div>
                    <h3>Selected Seats</h3>

                    <div className="Selected-seat-list">{
                        selectedSeats.length > 0 ? (
                            selectedSeats.map((seat) => (
                                <div className="Selected-seat-item" key={seat}>
                                    <span>{seat}</span>
                                    <span>{movie?.title}</span>
                                </div>
                            ))
                        ) : (
                            <p>No seats selected</p>
                        )}

                    </div>
                </div>
                <div>
                    <h3>Total Price</h3>
                    <p>₹{totalPrice}</p>

                </div>

            </div>

            <button className="Continue-btn"
                disabled={selectedSeats.length === 0}
                onClick={() =>
                    navigate("/Services", {
                        state: {
                            movie: movie,
                            selectedSeats: selectedSeats, totalPrice
                        }
                    })
                }>
                Continue

            </button>

        </div>

    );
}

export default SeatSelection;