import React from 'react';
import { getRandomColor } from './randomColorGenerator.js';

//parent passes props to child (handleChangeColor, childrenColor)
function Child({ handleChangeColor, childrenColor }) {
   function handleClick() {
      //child passes params to parent (getRandomColor() as newChildColor)
      handleChangeColor(getRandomColor());
   }

   return (
      <div
         onClick={handleClick}
         className="child"
         style={{ backgroundColor: childrenColor }}
      />
   );
}

export default Child;
