import React from "react"


function HornedBeast(props) {
    return (
      <div>
        <h2>{props.title}</h2>   {/*all of these are accessing the properties in the HornedBeast and putting them where they need to be */}
       <img src={props.imageUrl} alt={props.keyword} title={props.title} width="300px"/>
       <p>{props.description}</p>
      </div>
    );
  }
  
  export default HornedBeast;
  