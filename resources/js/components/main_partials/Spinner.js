import React,  { Component } from 'react'
import ajaxSpinner from './images/pacman-loader.svg'
class Spinner extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-12'>
                    <img src={ajaxSpinner}/>
                </div>
            </div>
        )
    }
}
export default Spinner
