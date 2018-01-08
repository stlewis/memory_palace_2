import React, { Component } from 'react';
import { getPalaceData, persistPalaceData } from '../lib/utils.js';
import LociBox from './loci_box.jsx';
import Loci from './loci.jsx';
import Dragula from 'react-dragula';

class AddLoci extends Component{

  constructor(props){
    super(props);
    this.state = {
      palaceName:  getPalaceData()['palaceName'],
      locus: []
    }
    this.drake = null;
  }

  addLoci = () => {
    let loci_box      = document.getElementById('add-loci-box')
    let loci_name     = loci_box.value
    let current_locus = this.state.locus
    let new_index     = loci_name + (current_locus.length + 1).toString();
    loci_box.value    = '';
    loci_box.focus();

    current_locus.push({loci_name: loci_name, loci_item: null, id: new_index});
    this.setState({locus: current_locus});
  }

  removeLoci = (id) => {
    let current_locus = this.state.locus
    let toRemove      = current_locus.filter((loci) => { return (loci.id === id);  })[0];
    let removalIndex  = current_locus.indexOf(toRemove);
    current_locus.splice(removalIndex, 1);
    
    this.setState({locus: current_locus})
  }

  reorderLoci = (dropped, container, sourceContainer, nextItem) => {
    let new_locus = [] 
    let children  = container.childNodes
    children.forEach((child) =>{
      let this_loci = this.state.locus.filter( (loci) => { return( "loci-" + loci.id === child.id); })[0];
      new_locus.push(this_loci);
    });
    this.setState({locus: new_locus});
  }
  
  persistLoci = () =>{
    let current_palace_data = getPalaceData();
    current_palace_data['locus'] = this.state.locus
    persistPalaceData(current_palace_data)
    window.location = '/populate_loci'
  }

  dragulaDecorator = (componentBackingInstance) => {
    if(componentBackingInstance){
      let options = {} ;
      this.drake = Dragula([componentBackingInstance], options);

      this.drake.on('drop', this.reorderLoci);
    }
  }

    render(){
    return(
      <div>
        <h2>Locus For {this.state.palaceName}</h2>
        <p>
          Please enter a descriptive name for each of the loci in your palace. To find out more
          about what loci are, please <a href=''>read the help article</a>.
        </p>
        <p>
          Once you've added some loci, you can drag them to rearrange their position in the list, or
          click the red X next to the name to remove it.
        </p>
        <div id='loci-box-area'>
          <LociBox boxIndex='0' handleClick={ this.addLoci } />
        </div>

        <div id='loci-list' ref={this.dragulaDecorator}>
          {
            this.state.locus.map((loci) => {
              return (
                <Loci onDelete={ this.removeLoci } key={loci.loci_name + loci.id.toString() } data={loci} />
              );
            }) 
          }
        </div>
        <div>
          <button onClick={this.persistLoci } className='btn btn-lg btn-block btn-success'>Continue</button>
        </div>
      </div>
    );
  }


}

export default AddLoci
