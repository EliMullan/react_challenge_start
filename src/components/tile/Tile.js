import React from "react";

export const Tile = ({object}) => {
  const array = Object.values(object)
  return (
    <div className="tile-container">
       {array.map((item, itemIndex) => {
        <p 
        item={item} 
        key={itemIndex} ></p>
       })}
       
    </div>
  );
};
