import React, { Component } from 'react';

class LociPopBox extends Component{


  render(){
    return(
      <div style={{'marginBottom': '30px'}}>
        <div className='form-group'>
          <div className='row'>
            <div className='col-md-5'>
              <label htmlFor={'pop-loci-box-' + this.props.data.id}>What is at <span style={{color: 'red'}}>{this.props.data.loci_name}</span>: &nbsp;</label>
            </div>
            <div className='col-md-7'>
              <input onChange={ (e) => { this.props.handleChange(e, this.props.data.id); } } type='text' id={'pop-loci-box-' + this.props.data.id} className='form-control loci-item-box' placeholder='Enter Item' />
            </div>
          </div>

        </div>

      </div>
    );
  }

}

export default LociPopBox
