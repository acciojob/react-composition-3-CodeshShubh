import React, { useState } from "react";
// import "../styles/"; // Import CSS for styling

const Tooltip = (props) => {
   const {text, content} = props ;
   const [visible, setvisible] = useState(false)
  return (
   <div onMouseEnter={()=>setvisible(true)}
    onMouseLeave={()=>setvisible(false)}>
    {visible ? text : ''}
    {content}
   </div>
  )
};

export default Tooltip;
