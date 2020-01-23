import React, { Component } from 'react'
//import LoginPage from './components/LoginPage'
import './App.css'
import 'normalize.css/normalize.css'
import AppRouter from './routers/AppRouter'
//import Header from './components/Header'

class Simple extends Component {
    render () {
        return (
            <div>
                {/* <Header/>
               <LoginPage/>  */}
               <AppRouter/>
            </div>
        )
    }
}

export default Simple