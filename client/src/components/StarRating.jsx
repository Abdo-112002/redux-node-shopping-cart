
import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaStarHalfAlt } from 'react-icons/fa';

function StarRating({rating}) {
    let ratingIcon = Array.from({length: 5},(el,ind) => {
        let number = ind + 0.5;
        return (
            <span key={ind}>
                {
                    (rating >= ind + 1)
                    ? <AiFillStar color='gold'/>
                    : (rating >= number) 
                    ? <FaStarHalfAlt color='gold'/>
                    : <AiOutlineStar/>
                }
            </span>
        )
    });
    return ratingIcon;
}

export default StarRating;
