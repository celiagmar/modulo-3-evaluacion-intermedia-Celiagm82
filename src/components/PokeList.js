import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) => {
   return (
      <ul className="cards-list">
         {props.dataList.map((pokeObject,index) =>
        <Pokemon 
            key={index}
            image={pokeObject.url}
            pokeName={pokeObject.name}
            pokeTypes={pokeObject.types}
        />
      )}
      </ul>
   )
}




export default PokeList;