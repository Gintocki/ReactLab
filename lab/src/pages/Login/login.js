import React,{PureComponent} from 'react'
import Form from '../Clients/components/Form'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'



class Login extends PureComponent {
    onLogin = (e) => {
        e.preventDefault();
    }
    render () {

        return(

    <section>
      <div>
        lsdlasld
    </div>
         <input type="text" name="email" placeholder="Email" />
        <input type="text" name="password" placeholder="Password" />
        <button type="submit" onClick = {this.onLogin}>Sig in</button>
    </section>
        );
}
}
export default Login