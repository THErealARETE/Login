import '../assets/scss/login.scss'
import React, { Component } from 'react'
import { IoLogoGoogle } from 'react-icons/io'
//import Welcome from './Welcome'
import { Link } from 'react-router-dom'
//import { validateAll } from 'indicative'


class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            error: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log("Submitting");
    //     console.log(this.state);
    //   };

    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.username || !this.state.password) {
            this.setState(() => ({ error:
            <h3 className="text-secondary" >
                     Please provide details or sign up here </h3>}));
            console.log(this.state);
        } else {
            this.setState(() => ({ error: '' }));
            this.props.history.push('Welcome')
        }
    };

    // onSubmit=(e)=>{
    //     e.preventDefault()
    //     const data = this.state
    //     const rules = {
    //         name: 'required|string',
    //         email: 'required|email',
    //         password: 'required|string|min:6|confirmed' 
    //     }
    //     validateAll( data, rules)
    //     .then (()=>{
    //         console.log('success')
    //     })
    //     .catch(errors=>{
    //         console.log(errors)
    //     })
    // }


    // onSubmit = (e) => {
    //     e.preventDefault()
    //     if (!this.state.username || !this.state.password) {
    //         this.setState(() => ({ error: 'Please provide username and password or sign up ' }));
    //         console.log(this.state);  
    //     } else {
    //         this.setState(() => ({ error: '' }));
    //         this.props.history.push('Welcome')
    //     }}

            // this.handleChange()
            // // this.props.onSubmit({
            // //   username: this.state.username,
            // //   password: this.state.password,
            // // });
            // console.log(this.state);    
        
        // console.log("Submitting");
        // console.log(this.state);

    
     //handleSignUp = (e) => {
    //     e.preventDefault()
    //     // console.log("moving to sign up page");
    //     // console.log(this.state);
    // };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div className="container py-5">

                <div className="row align-items-center no-gutters">
                    <div className="col-md-5 minion-box text-center">
                        <h1 className="text-white my-5">SIGN IN</h1>
                        <button type="button" className="btn btn-outline-light btn-lg my-5"> <IoLogoGoogle size={18} /> &nbsp;&nbsp;&nbsp;&nbsp;Continue with Google</button>
                    </div>
                    <div className="col-md form-container">
                    
                        {this.state.error && <p>{this.state.error}</p>}
                        <form onSubmit={this.onSubmit}>
                            {/* <form> */}
                            <div className="form-group mb-5">
                                <label htmlFor='username' className="custom-label">USERNAME</label>
                                <input
                                    className="form-control form-control-lg"
                                    name='username'
                                    type='text'
                                    placeholder='please enter your username'
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                /> 
                                </div>
                            <div className="form-group">
                                <label htmlFor='password' className="custom-label">PASSWORD</label>
                                <input
                                    name='password'
                                    type='password'
                                    placeholder='enter your password'
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>

                            <div className="text-center">
                                {/* <Link to = '/Welcome'> */}
                                <button  className="btn btn-primary my-5"> Continue </button>
                                {/* </Link> */}
                            </div>
{/* type="button" */}
                            <h5 className="text-center">Or
                            <div>
                                <Link to='/SignUp'>
                                    <button type="button" className="btn btn-primary my-5">Sign Up</button>
                                    {/* btn btn-link */}
                                </Link></div>
                            </h5>
                         </form>
                        
                    </div>
                </div>
            </div>
        );

    }
} //onClick= {this.handleSignUp}
//onClick={this.handleLogin}
export default LoginPage;