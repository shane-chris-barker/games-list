import React, {Component} from 'react'
import PdfSpin from './images/pdf-spinner.svg'

class PdfSpinner extends Component {

    render() {
        return (
            <div className='row'>
                <div className='col-12'>
                    <img src={PdfSpin}/>
                </div>
            </div>
        )
    }
}

export default PdfSpinner
