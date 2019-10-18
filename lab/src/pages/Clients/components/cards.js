import React, {Component} from 'react';


class Cards extends Component {

render () {
  return (
    <div>
         {this.props.clients[1].name}
    </div>
  );
}
}

export default Cards;