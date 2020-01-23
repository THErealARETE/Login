import React, { Component } from 'react'
import {Link} from 'react-router-dom'
//import Header from './Header'
import { validateAll } from 'indicative/validator';

class SignupPage extends Component {
    constructor(props){
        super(props)
        this.state = {

            name: '',
            email: '',
            username: '',
            password:'',
            passwordconfirmation:''
            // errors: ''
        }
    }


    onSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state)
        const data = this.state

        const rules = {
            name: 'required|string',
            email: 'required|email',
            password: 'required|string|min:6|confirmed' 
        }
        const messages = {
            required:'This {{field}} is required',
            'email.email':'The email is invalid ',
         'password.confirmed':'The password does not match'
        } 

        validateAll( data, rules, messages )
        .then (()=>{
            console.log('success')
            this.props.history.push('/')
        })
        .catch(errors=>{
            console.log(errors)
            //show errors to user
            const formattedErrors = {}  
            errors.forEach(error =>formattedErrors[error.field] = error.message)
            this.setState({errors:formattedErrors})
            
        })
    }

    // onSubmit = (e) => {
    //     e.preventDefault()
    //     console.log("Submitting");
    //     console.log(this.state);
   // }
    // handleNewSignUp = (e) => {
    //     e.preventDefault()
    //     console.log("move to login page");
    //     console.log(this.state);
    //   };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render () {
        return (
            // <div>htmlFor = 'firstName'
            <div>
                <h1 className="text-white my-5">SIGN UP HERE</h1>
               <form onSubmit = {this.onSubmit}>
                   <label htmlFor = 'fName' >FullName</label>
                   <input
                    name='name'
                    type='text'
                   placeholder = 'Enter your full name'
                   value = {this.state.name}
                   onChange= {this.handleChange}
                   />
                

                   <label htmlFor = 'email'>e-mail</label>
                   <input
                   name = 'email'
                   type = 'text'
                   placeholder = 'Enter your email name'
                   value = {this.state.email}
                   onChange= {this.handleChange}
                   />

                   <label htmlFor = 'username'>Username</label>
                   <input
                   name='username'
                   type='text'
                   placeholder = 'Enter a unique user name'
                   value = {this.state.username}
                   onChange= {this.handleChange}
                   />

                   <label htmlFor = 'password'>Password</label>
                   <input
                   name = 'password'
                   type = 'password'
                   placeholder = 'Enter at least a six letter password'
                   value = {this.state.password}
                   onChange= {this.handleChange}
                   />
{/* htmlFor = 'password' */}
                    <label htmlFor = 'password' >password confirmation</label>
                   <input
                   name = 'password'
                   type = 'password'    
                   placeholder = 'Confirm Password'
                   value = {this.state.passwordconfirmation}
                   onChange= {this.handleChange}
                   />


                   <div className="text-center" >
                   {/* <Link to = '/'> */}
                   <button  
                    className="btn btn-outline-light  my-5">
                    sign Up</button>
                   {/* </Link>  */}
                   </div>
                   
                   </form>

                   <h5 className="text-center"> Already Have An Account </h5>

                            <div className="text-center" >
                                <Link to='/'>
                                    <button type="button" 
                                    className="btn btn-outline-light btn-lg my-5">
                                    login</button>
                                    {/* btn btn-link */}
                                </Link></div>
                            
                    {/* type = "button" */}
            </div>
        )
    }
}
// onClick={this.handleNewSignUp}
export default SignupPage