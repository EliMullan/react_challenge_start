import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (array) => {
  

  return (
    <div>
        {[array].map((item, itemIndex) => {
          <Tile item={item} key={itemIndex} />
        })}
      
    </div>
  );
};
