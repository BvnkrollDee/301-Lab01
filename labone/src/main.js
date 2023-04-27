// importing libraries
import React, { useState } from "react"
import HornedBeast from "./HornedBeast";
import hornedImages from "./data.json";
import Form from 'react-bootstrap/Form';

function Main(props) {           {/*Creating a component for the Main*/}

    const [horns, setHorns] = useState(undefined)
    //filter honedImages array based on number of horns
    let filteredHornedImages = hornedImages.filter( (element) => {
        if(element.horns == horns || horns === undefined){
        return true
        }else{
            return false
        }
    })
    return (
        <main>
     <Form.Select onChange={(event) => {setHorns(event.target.value)}} aria-label="Default select example">    {/* creating my form for the user to be able to filter the beasts according to how many horns that they have. I'm using the function setHorns to update the state of which beasts show on screen based on how many horns they have */} 

      <option>Select Amount of Horns</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
     
    </Form.Select>
            {filteredHornedImages.map( function (element){   {/* mapping through the images and displaying the different properties */}
             return <HornedBeast beastUpdateFunction={props.beastUpdateFunction}  updateFunction={props.updateFunction} imageUrl = {element.image_url} title = {element.title} description = {element.description} keyword = {element.keyword} horns = {element.horns}  />    // Line 10 is iterating through the array of objects from the hornedImages JSON file and returning each of the properties for the images.
            })}
            {/* <HornedBeast imageUrl= "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" title = "Rhino Family" description = "Parent rhino with two babies" keyword = "Rhino"/>
            <HornedBeast imageUrl= "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" title = "UniWhal" description = "A unicorn and a narwhal nuzzling their horns" keyword= "narwhal"/> */}
            {/*Reffering back to the HornedBeast component and setting the properties for it. */}
        </main>

    );
  }
  export default Main