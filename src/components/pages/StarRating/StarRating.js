import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

import './StarRating.scss';

const StarRating = () => {
  const [rating, setRating] = useState(null);
  // const [hover, setHover] = useState(null);

  return (
<div>
  {[...Array(5)].map((star, i) => {
    const ratingValue = i + 1;
    return (
    <label>
      <input
      type="radio"
      name="rating"
      value={ratingValue}
      onClick={() => setRating(ratingValue)}
      />
      <FaStar className="star"
      color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'}
      size={50}
      // onMouseEnter={() => setHover(ratingValue)}
     // onMouseLeave={() => setHover(null)}
      />
    </label>
    );
  })}
  <h3>Rate This Outing</h3>
<p>This rating is {rating} stars!</p>
</div>
  );
};

export default StarRating;
