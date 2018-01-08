import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import StartPalace from './components/start_palace.jsx';
import Home from './components/home.jsx';
import AddLoci from './components/add_loci.jsx';
import PopulateLoci from './components/populate_loci.jsx';
import ConfirmLoci from './components/confirm_loci.jsx';
import MemoryTest from './components/memory_test.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/start_palace/' component={StartPalace} />
          <Route exact path='/add_loci/' component={AddLoci} />
          <Route exact path='/populate_loci/' component={PopulateLoci} />
          <Route exact path='/confirm_loci/' component={ConfirmLoci} />
          <Route exact path='/test/' component={MemoryTest} />
        </Switch>
      </div>
    );
  }
}

export default App;
