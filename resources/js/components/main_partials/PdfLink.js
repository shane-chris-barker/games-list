import React, {Component} from 'react';

class PdfLink extends Component {
    constructor(props) {
		super(props);
		this.state = {
			pdfLink: this.props.pdfLink
		};
    }

    render() {
        return (
            <div className='alert alert-success'>
                <h3 className='alert-heading col-12 text-center'>The PDF is ready to download! Whoop!</h3>
                <div className='rowmt-5 col-12'>
                    <a href={this.state.pdfLink} className='btn btn-primary' target='_blank'>Download PDF</a>
                </div>
                <div className='row mt-2 col-12'>
                    <button className='btn btn-primary col-4 offset-4' onClick={this.props.reset}>
                        reset
                    </button>
                </div>
            </div>
        )
    }
}

export default PdfLink
