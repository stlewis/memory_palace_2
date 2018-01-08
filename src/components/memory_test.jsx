import React, { Component } from 'react';
import { getPalaceData } from '../lib/utils.js';

class MemoryTest extends Component{

  constructor(props){
    super(props);
    let palaceData = getPalaceData();
    this.state = {
      palaceName:  palaceData['palaceName'],
      locus: palaceData['locus'],
      currentLoci: palaceData['locus'][0],
      statusMessage: ""
    }
  }

  checkAnswer(){
    let answerElement = document.getElementById('answer_input');
    let answerValue   = answerElement.value;
    let currentIdx    = this.state.locus.indexOf(this.state.currentLoci);
    let nextIdx       = currentIdx + 1;

    answerElement.value = "";
    answerElement.focus();
    
    if(this.state.locus[nextIdx] != null && this.state.locus[nextIdx].loci_item != null){
      if(answerValue.toLowerCase() == this.state.currentLoci.loci_item.toLowerCase()){
        this.setState({statusMessage: "Great Job!", currentLoci: this.state.locus[nextIdx]});
      }else{
        this.setState({statusMessage: "Sorry, that wasn't it! Try again!"});
      }
    }else{
      this.setState({statusMessage: "You did it! Congratulations!"});
      // FIXME Consider a button to go back or save the palace, etc.
    }
  }

  render(){
    return(
      <div>
        <h2>The Test</h2>
        <p>
          Each of your loci will present itself below, one at a time. Your job is to fill in the item that
          is currently "at" that location in your memory palace. 
        </p>
        <div className='status-message'>{this.state.statusMessage}</div>
        <div className='form-group'>
          <div className='row'>
            <div className='col'>
              What is at the <span style={{color: 'red'}}>{this.state.currentLoci.loci_name}</span>? 
            </div>
            <div className='col'>
              <input id='answer_input' type='text' className='form-control' placeholder="Type Your Answer" />
              <button onClick={ () => this.checkAnswer() } className='btn btn-lg btn-block btn-success'>Submit</button>
            </div>

          </div>
        </div>
      </div>

    );
  }


}

export default MemoryTest
