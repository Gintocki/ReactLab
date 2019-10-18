
import React,{PureComponent} from 'react'

class Form extends PureComponent {
    render () {

        return(

<section className="form-block">

<form action="#" onSubmit={(e) => e.preventDefault()} className="form-block_form">
    <input type="text" name="name" placeholder="Name" className="form-control form-block__inp"/>
    <input type="number" name="age" placeholder="Age" className="form-control form-block__inp"/>
    <button type="submit" className="btn btn-success form-block_btn_save">Save</button>
</form>
</section>
);
}
}
export default Form ;