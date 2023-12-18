import React, { useState } from 'react';
import './TortoiseCard.css';

function TortoiseCard({ name, image, onMouseEnter, onMouseLeave, onClick }) {
    const [hover, setHover] = useState(false);
    const className = `tortoise-card ${name.toLowerCase().replace(" ", "-")}`;
  
    return (
      <div 
        className={className} 
        onMouseEnter={() => { setHover(true); onMouseEnter(); }} 
        onMouseLeave={() => { setHover(false); onMouseLeave(); }}
        onClick={onClick}
      >
        <img src={hover ? image.colored : image.sketch} alt={name} className="tortoise-image" />
      </div>
    );
}

export default TortoiseCard;
