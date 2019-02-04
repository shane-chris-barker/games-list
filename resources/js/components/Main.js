import React,  { Component } from 'react'
import Content from './main_partials/Content'

class Main extends Component {
    render() {
        return (
            <div className='container text-center'>
                <div className="col-12">
                    <div className='col-12'>
                        <h1>Welcome to Games- list</h1>
                    </div>
                    <div className='col-12'>
                        <h3>Another boring Sunday afternoon means another pointless creation by me - Shane Chris Barker</h3>
                    </div>
                    <div className='col-12'>
                        <h4>So....what does this do exactly?</h4>
                        <p>
                            Erm.. it lets you search the GiantBomb API (more info on this in the footer) for a video game and save
                            any of the resutlts to a list. When you've finished building your list, you can export it as a PDF for
                            referring to later or email the list to your Mum so she knows what to get you for Xmas.
                        </p>
                    </div>
                    <div className="col-12">
                        <h4>Okay, that could be useful to someone I guess... So what did you make it with?</h4>
                        <p>I'm glad you asked! This creation is my first go at mixing Laravel and React.js! I've used Laravel
                        a lot in my current role but not React.js. This is my first attempt at using the two together.</p>
                    </div>
                    <Content />
                </div>
            </div>
        )
    }
}

export default Main
