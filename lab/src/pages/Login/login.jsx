import React,{PureComponent} from 'react'

class Login extends PureComponent {
    onLogin = (e) => {
        e.preventDefault();
    }
    render () {

        return(

    <section>
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="password" placeholder="Password" />
        <button type="submit" onClick = {this.onLogin}>Sig in</button>
    </section>
        );
}
}
export default Login