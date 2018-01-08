import React, { Component } from 'react';
import { getPalaceData, persistPalaceData } from '../lib/utils.js';
import LociPopBox from './loci_pop_box.jsx';

class PopulateLoci extends Component{

  constructor(props){
    super(props);
    this.state = {
      palaceName:  getPalaceData()['palaceName'],
      locus: getPalaceData()['locus']
    }
  }

  persistItems = () => {
    persistPalaceData(this.state);
    window.location = '/confirm_loci'
  }

  updateLociItem = (evt, loci_id) =>{
    let current_locus = this.state.locus;  
    let updating_loci = current_locus.filter((loci) => { return(loci.id === loci_id); })[0];
    updating_loci['loci_item'] = evt.target.value;
    this.setState({locus: current_locus});
    return true;
  }

  render(){
    return(
      <div>
        <h2>Populate Your Palace</h2> 
        <p>
          Now that you've decided what your locus are, and what order they appear in,
          the next step is to fill up each loci with an item you'd like to remember.
          For more information about how this is done, refer to the help documentation.
        </p>
        <p>
          Once you've finished adding items, click on "Continue" to confirm your selections
          and start testing yourself.
        </p>
        <div id='loci-population-list'>
          {
            this.state.locus.map((loci) => {
              return (
                <LociPopBox key={loci.loci_name + loci.id.toString() } data={loci} handleChange={this.updateLociItem} />
              );
            }) 
          }
        </div>
        <div>
          <button className='btn btn-success btn-lg btn-block' onClick={this.persistItems}>Continue</button>
        </div>
      </div>
    );
  }


}

export default PopulateLoci
