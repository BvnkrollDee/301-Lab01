import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'reactstrap'

function HornedBeast(props) {
    const [clicks, setClicks] = useState(0);
    return (
      <Card>
        <h2>{props.title}</h2>   {/*all of these are accessing the properties in the HornedBeast and putting them where they need to be */}
       <img onClick = {()=> setClicks(clicks + 1)}  src={props.imageUrl} alt={props.keyword} title={props.title} width="300px"/>
       <p>{props.description}</p>
       <p> &#9829;{clicks}</p>
      </Card>
    );
        



  }
  
  export default HornedBeast;
  