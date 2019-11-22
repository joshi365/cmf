import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class WelcomePage extends Component {
    render() {
        return (
            <div className='welcome-page-main'>
                <div className='heading-button-mix'>
                <div className='Welcome-header-class'>
                <h1>Welcome To <span>Friends App</span></h1>
            </div>

            <div className='route-button'>
                <Link to='/signup'><button>click to continue <span>-></span></button></Link>
            </div>
            </div>
            </div>
        )
    }
}
