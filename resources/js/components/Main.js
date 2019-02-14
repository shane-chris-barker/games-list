import React,  { Component } from 'react'
import Content from './main_partials/Content'

class Main extends Component {
    render() {
        return (
            <div className='container text-center mt-5' id='content'>
                <div className="col-12">
                    <div className='col-12'>
                        <h1>Welcome to Games- list</h1>
                    </div>
                    <div className='col-12'>
                        <h3>Another pointless creation by me - Shane Chris Barker</h3>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-6 col-12'>
                            <div className='alert alert-info'>
                                <h4 className='alert-heading'>So....what does this do exactly?</h4>
                                <p>
                                    Erm.. it lets you search the GiantBomb API (more info on this in the footer) for a video game and save
                                    any of the resutlts to a list. When you have finished building your list, you can export it as a PDF for
                                    referring to later (or giving to your Mum so she knows what to get you for Xmas).
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className='alert alert-success'>
                                <h4 className='alert-heading'>
                                Okay, that could be useful to someone I guess... So what did you make it with?</h4>
                                <p>
                                    Glad you asked! This creation is my first go at mixing Laravel and React.js! I get to use Laravel
                                    a lot in my current role but not React.js. This is my first attempt at using the two together.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 alert alert-primary'>
                        <Content />
                    </div>
                </div>
            </div>
        )
    }
}

export default Main
