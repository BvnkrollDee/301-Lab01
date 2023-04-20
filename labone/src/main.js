// importing libraries
import React from "react"
import HornedBeast from "./HornedBeast";
import hornedImages from "./data.json";

function Main() {           {/*Creating a component for the Main*/}
    return (
        <main>
            {hornedImages.map( function (element){
             return <HornedBeast imageUrl = {element.image_url} title = {element.title} description = {element.description} keyword = {element.keyword} horns = {element.horns}  />    // Line 10 is iterating through the array of objects from the hornedImages JSON file and returning each of the properties for the images.
            })}
            <HornedBeast imageUrl= "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" title = "Rhino Family" description = "Parent rhino with two babies" keyword = "Rhino"/>
            <HornedBeast imageUrl= "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" title = "UniWhal" description = "A unicorn and a narwhal nuzzling their horns" keyword= "narwhal"/>
            {/*Reffering back to the HornedBeast component and setting the properties for it. */}
        </main>

    );
  }
  export default Main