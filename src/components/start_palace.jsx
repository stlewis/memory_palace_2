import React, { Component } from 'react';
import { getPalaceData, persistPalaceData } from '../lib/utils.js';

class StartPalace extends Component{

  constructor(props){
    super(props);
    this.state = {
      palaceName: null
    } 
    this.palace_data = {}

    if(window.localStorage.getItem('palace_data')){
      this.palace_data = getPalaceData();
    }
  }

  setPalaceName = () => {
    let name = document.getElementById('palace-name').value;
    
    this.palace_data['palaceName'] = name;
    persistPalaceData(this.palace_data)
    window.location = "/add_loci";
  }

  render(){
    return(
      <div>
        <h2>Name Your Palace</h2> 
        <p>
          It's possible, (even likely), that you're going to want more than one 
          memory palace. With that in mind, give this one a unique name so that you
          can refer back to it later.
        </p>
        <input className='form-control' type='text' id='palace-name' name='palace_name' placeholder='Palace Name' /><br />
        <button className='btn btn-lg btn-block btn-success' onClick={this.setPalaceName} >Name My Palace!</button>
      </div>
    );
  }


}

export default StartPalace
