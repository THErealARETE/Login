import React from 'react'

const Header = (props) => {
    return (
        <div>
            <h1 >{props.title}</h1>
           
        </div>
    )
}

Header.Props = {
    title: 'LOGIN FORM '
  };
export default Header