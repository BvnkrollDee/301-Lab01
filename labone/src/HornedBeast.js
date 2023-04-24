import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'reactstrap'

function HornedBeast(props) {
    const [clicks, setClicks] = useState(0); // Creating and setting the state for the HornedBeast function.
    return (
      <Card>
        <h2>{props.title}</h2>   {/*all of these are accessing the properties in the HornedBeast and putting them where they need to be */}
       <img onClick = {()=> {
        props.updateFunction(true)
       props.beastUpdateFunction({title:props.title, imageUrl:props.imageUrl ,description:props.description})  /* updating the state of the app through horned beast*/
        setClicks(clicks + 1)
        }} src={props.imageUrl} alt={props.keyword} title={props.title} width="300px"/> {/* added the attribute onClick and made the function for them to increase by one every time that the image is clicked on.  */}
       <p>{props.description}</p>
       <p> &#9829;{clicks}</p>          {/* displaying the heart and the number of clicks on the page. */}
      </Card>
    );
        



  }
  
  export default HornedBeast;
  