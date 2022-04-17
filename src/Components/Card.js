import React from "react";

function Card({ id, imageSource }) {
  return (
    <div>
      <img src={imageSource} alt="img" />
    </div>
  );
}

export default Card;
