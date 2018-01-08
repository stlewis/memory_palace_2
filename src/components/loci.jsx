import React, { Component } from 'react';

class Loci extends Component{

  render(){
    return(
      <div className='loci-list-item' id={"loci-" + this.props.data.id}>
        <div className='row'>
          <div className='col-md-11'>
            {this.props.data.loci_name}        
          </div>
          <div className='col-md-1 delete-loci' onClick={() => { this.props.onDelete(this.props.data.id) }}>X</div>
        </div>
      </div>
    );
  }


}

export default Loci
