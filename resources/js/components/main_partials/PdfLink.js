import React, {Component} from 'react';

class PdfLink extends Component {
    constructor(props) {
		super(props);
		this.state = {
			pdfLink: this.props.pdfLink
		};
        console.log('inside pdfLink');
        console.log(this.state.pdfLink);
	}

    render() {
        return (
            <div className='row'>
                <a href={this.state.pdfLink} className='btn btn-primary' target='_blank'>Download PDF</a>
            </div>
        )
    }
}

export default PdfLink
