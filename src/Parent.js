import React, { useState } from 'react';
import { getRandomColor } from './randomColorGenerator.js';
import Child from './Child';

function Parent() {
   const randomColor = getRandomColor();
   const [color, setColor] = useState(randomColor);
   const [childrenColor, setChildrenColor] = useState('#FFF');

   //child passes params to parent (getRandomColor() as newChildColor)
   function handleChangeColor(newChildColor) {
      setColor(getRandomColor());
      setChildrenColor(newChildColor);
   }

   return (
      //parent passes props to child (handleChangeColor, childrenColor)
      <div className="parent" style={{ backgroundColor: color }}>
         <Child
            handleChangeColor={handleChangeColor}
            childrenColor={childrenColor}
         />
         <Child
            handleChangeColor={handleChangeColor}
            childrenColor={childrenColor}
         />
      </div>
   );
}

export default Parent;
