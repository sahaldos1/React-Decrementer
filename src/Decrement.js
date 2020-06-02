//decrement Exercise

import React, {Component} from 'react';
import Proptypes from 'prop-types';

class Decrement extends Component {

  constructor(props) {
    super(props);
    this.state = { number : props.start };
    };

    handleDecrement = () => {
      if(this.state.number === 0){
        alert('Can not be less than zerp');
      }
      this.setState({ number: this.state.number -1});
  }

  render(){
    return (<div>
     {this.state.number} {' '}
     <button onClick={this.handleDecrement}>decrement</button>
    </div>
    );
  }
}

Decrement.propTypes = {
  start: Proptypes.number.isRequired,
};

export default Decrement;