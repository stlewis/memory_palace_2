import React, { Component } from 'react';

class LociBox extends Component{
  render(){
    return(
      <div style={{'marginBottom': '30px'}}>
        <input type='text' id='add-loci-box' className='form-control' style={{'width': '50%', 'marginRight': '5px', 'display': 'inline'}} placeholder='Loci Name' />
        <button className='btn btn-success' onClick={() => this.props.handleClick() }>Add Loci</button>
      </div>
    );
  }

}

export default LociBox
