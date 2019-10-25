import React, {Component} from 'react';
import Row from '../components/row' ;

class Cards extends Component {

render () {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
        </tr>
      </thead>
    
<tbody>
 <Row key="1" name="sd" id="1" age="23"/>
</tbody>
</table>
  );
}
}

export default Cards;