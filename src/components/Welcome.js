import React from 'react'
import {Link} from 'react-router-dom'

const Welcome = () => {
    return (
        <div>
            <h1 className='text-white text-center'>Welcome To TeamDelta's Login App</h1>
            <div className = " text-center">
            <Link to = {'/SignOut'}>
            <button type = 'button' className="btn btn-outline-light btn-lg my-5">Sign Out</button>
            </Link>
            </div>
        </div>
    )
}

export default Welcome