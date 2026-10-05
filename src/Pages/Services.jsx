import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Services.css";

import Popcorn from "../assets/Popcorn.png";
import Cold_drink from "../assets/Cold-drink.png";
import FrenchFries from "../assets/Franch-Fries.png";
import PremiumCombo from "../assets/Premium-combo.png";


function Service() {

    const location = useLocation();
    const navigate = useNavigate();

    const movie = location.state?.movie;
    const selectedSeats = location.state?.selectedSeats;
    const totalPrice = location.state?.totalPrice || 0;

    const [quantities, setQuantities] = useState({});


    const services = [
        {
            id: 1,
            name: "Popcorn",
            price: 149,
            image: Popcorn
        },
        {
            id: 2,
            name: "Cold Drink",
            price: 99,
            image: Cold_drink
        },
        {
            id: 3,
            name: "French Fries",
            price: 119,
            image: FrenchFries
        },
        {
            id: 4,
            name: "Premium Combo",
            price: 399,
            image: PremiumCombo
        }
    ];


    function increaseQuantity(id) {

        setQuantities({
            ...quantities,
            [id]: (quantities[id] || 0) + 1
        });

    }


    function decreaseQuantity(id) {

        setQuantities({
            ...quantities,
            [id]: Math.max((quantities[id] || 0) - 1, 0)
        });

    }


    const serviceTotal = services.reduce(
        (total, service) =>
            total + service.price * (quantities[service.id] || 0),
        0
    );


    const grandTotal = totalPrice + serviceTotal;


    return (
        <div className="Services">

            {/* Header */}

            <div className="Services-header">

                <div className="Film-strip">
                    🎞
                </div>

                <div className="Nexora-logo">
                    <h1>
                        NE<span>X</span>ORA
                    </h1>

                    <p>
                        CINEMA <span>•</span> FOOD <span>•</span> MEMORIES
                    </p>
                </div>

                <div className="Food-title">
                    <h2>Good Food</h2>
                    <h2>Better Movies</h2>
                    <span>🍿</span>
                </div>

            </div>


            {/* Service Cards */}

            <div className="Services-list">

                {services.map((service) => (

                    <div className="Service-card" key={service.id}>

                        <div className="Service-image">

                            <img
                                src={service.image}
                                alt={service.name}
                            />

                        </div>


                        <div className="Service-content">

                            <h3>{service.name}</h3>

                            <h2>₹{service.price}</h2>


                            <div className="Quantity-control">

                                <button
                                    onClick={() =>
                                        decreaseQuantity(service.id)
                                    }
                                >
                                    −
                                </button>


                                <span>
                                    {quantities[service.id] || 0}
                                </span>


                                <button
                                    onClick={() =>
                                        increaseQuantity(service.id)
                                    }
                                >
                                    +
                                </button>

                            </div>


                            <p className="Quantity-text">
                                Quantity: {quantities[service.id] || 0}
                            </p>

                        </div>

                    </div>

                ))}

            </div>


            {/* Bottom Summary */}

            <div className="Service-summary">

                <div className="Summary-item">

                    <div className="Summary-icon">
                        🎟
                    </div>

                    <div>
                        <span>Seat Total</span>
                        <strong>₹{totalPrice}</strong>
                    </div>

                </div>


                <div className="Summary-line"></div>


                <div className="Summary-item">

                    <div className="Summary-icon">
                        🥤
                    </div>

                    <div>
                        <span>Service Total</span>
                        <strong>₹{serviceTotal}</strong>
                    </div>

                </div>


                <div className="Summary-line"></div>


                <div className="Summary-item">

                    <div className="Summary-icon">
                        💳
                    </div>

                    <div>
                        <span>Grand Total</span>
                        <strong className="Grand-price">
                            ₹{grandTotal}
                        </strong>
                    </div>

                </div>


                <button
                    className="Continue-btn"
                    onClick={() =>
                        navigate("/BookingSummary", {
                            state: {
                                movie: movie,
                                selectedSeats: selectedSeats,
                                totalPrice: totalPrice,
                                quantities: quantities,
                                services: services,
                                serviceTotal: serviceTotal,
                                grandTotal: grandTotal
                            }
                        })
                    }
                >
                    Continue
                    <span>→</span>
                </button>

            </div>


            {/* Footer */}

            <div className="Services-footer">

                <span></span>

                <p>
                    NEXORA — YOUR PREMIUM CINEMA EXPERIENCE
                </p>

                <span></span>

            </div>

        </div>
    );
}


export default Service;