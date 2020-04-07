import React from 'react';

const Pokemon = (props) => {
   return (
      <li>
         <div className="image-container">
            <img src={props.image} alt="pokemon"></img>
         </div>
         <div className="name-container">
            <h2>{props.pokeName}</h2>
         </div>
         <div className="type-container">
            {props.pokeTypes.map((singleType, index) =>
            <span key={index}>{singleType}    </span>
            )}
         </div>
      </li>
   )
}



export default Pokemon;
