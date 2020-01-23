import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

const SignOut = () => {
    return (
        <div className='signOut'>
        <h1 >Hope to see you again soon   </h1>
            <div className = 'text-center'>
             <Link to = {'/'}>
            <button   type= 'button' className="btn btn-outline-light btn-lg my-5">
            Log In
            </button>
            </Link>
            </div>
        </div>
    )
}//type = 'button'

//btn btn-light btn-lg my-5
//text-white text-center
export default SignOut