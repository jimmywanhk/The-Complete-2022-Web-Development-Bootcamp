import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";
import animals, {useAnimals} from "./data";

//Destructuring Nested Object
const [cat, dog] = animals;
const {name, sound, feedingRequirements: {food, water} } = cat;
//name === cat.name
//sound === cat.sound
//food === cat.feedingRequirements.food
//water === cat.feedingRequirements.water 

//you can also rename the property
//const {name: catName, sound: catSound} = cat;
//console.log(catName);
 
//you can set the default value if it is undefined
//const {name = "Fluffy", sound = "Purr"} = cat;

const [animal, makeSound] = useAnimals(cat);
console.log(animal);
makeSound();



const [honda, tesla] = cars;

const { speedStats: {topSpeed: hondaTopSpeed} } = honda;
const { coloursByPopularity: [hondaTopColour] } = honda;

const { speedStats: {topSpeed: teslaTopSpeed} } = tesla;
const { coloursByPopularity: [teslaTopColour] } = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);