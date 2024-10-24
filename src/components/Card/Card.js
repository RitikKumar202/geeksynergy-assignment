import React, { useState } from 'react';
import "./Card.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import PickupIcon from "../../assets/pickup-icon.png";
import Timer from "../../assets/timer.png";

const Card = ({ image, title, duration, price, oldPrice, pickup }) => {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    }

    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={title} />
                <div className="like-icon" onClick={toggleLike}>
                    {
                        liked ? <FaHeart className='red-heart' /> : <FaRegHeart />
                    }
                </div>
            </div>
            <div className="card-content">
                <div className="duration">
                    <img src={Timer} alt="timer" />
                    <p>{duration}</p>
                </div>
                <h3>{title}</h3>
                <div className='pickup'>
                    <img src={PickupIcon} alt="pickup icon" />
                    <p>Pickup: {pickup}</p>
                </div>
                <div className="pricing">
                    <div className='pricing-container'>
                        <p className='price-start'>Starts at</p>
                        <div className='pricing-detail'>
                            <span className="old-price">₹{oldPrice}</span>
                            <span className='new-price'>₹{price}</span>
                        </div>
                        <p className='price-taxes'>*Excluding all taxes</p>
                    </div>
                    <button className='view-details-btn'>View Details</button>
                </div>

            </div>
        </div>
    )
}

export default Card;