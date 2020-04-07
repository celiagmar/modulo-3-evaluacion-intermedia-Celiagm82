import React from 'react';
import pokemons from '../data/pokemons';
import '../stylesheets/App.css';
import PokeList from './PokeList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <PokeList dataList={this.state}/>
      </div>
    );
  }
}

export default App;
