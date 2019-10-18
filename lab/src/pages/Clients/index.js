import React from 'react';
import clients from '../../data/data'
import Cards from './components/cards'
import Form from './components/Form'

class Clients extends Component {

  state = {
      clients: clients
  }


render () {
  const { clients } = this.state;
  return (
    <div>
      {clients[0].age}
        <Cards
         clients={clients}
        />
        <h3>Add New</h3>
        <Form  onAdd={onAdd}/>

    </div>
  );
}
}

export default Clients;