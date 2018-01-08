import React, { Component } from 'react';
import { getPalaceData, persistPalaceData } from '../lib/utils.js';

class ConfirmLoci extends Component{

  constructor(props){
    super(props);
    this.state = {
      palaceName:  getPalaceData()['palaceName'],
      locus: getPalaceData()['locus']
    }
  }

  startTest(){
    window.location = '/test'
  }

  render(){
    let populatedLocus = this.state.locus.filter((loci) => {  return(loci.loci_item != null); });
    return(
      <div>
        <h2>Review Your List</h2> 
        <p>
          Take a moment to review the items you want to remember, and where you've "placed" them in your palace.
          Now would be a good time to try to assign a vivid visualization for each of these items, in the corresponding
          location in your palace. For more information about this process, please see the help documentation.
        </p>
        <p>
          When you're ready, click the "Start Test" button to try your luck!
        </p>
        <div id='loci-confirm-list'>
          {
            populatedLocus.map((loci) => {
              return (
                <div key={'loci-' + loci.id + 'key'}>
                  The <span style={{color: 'red'}}>{loci.loci_item}</span> is at <span style={{color: 'blue'}}>{loci.loci_name}</span>.
                </div>
              );
            }) 
          }
        </div>
        <div style={{marginTop: '30px'}}>
          <button className='btn btn-success btn-lg btn-block' onClick={this.startTest}>Start Test</button>
        </div>
      </div>
    );
  }


}

export default ConfirmLoci
