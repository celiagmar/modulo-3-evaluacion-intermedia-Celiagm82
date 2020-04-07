import React from 'react';
import pokemons from '../data/pokemons';
import '../stylesheets/App.css';
import PokeList from './PokeList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:pokemons
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>Mi lista de Pokemons</h1>
          <PokeList dataList={this.state.data}/>
      </div>
    );
  }
}

export default App;
