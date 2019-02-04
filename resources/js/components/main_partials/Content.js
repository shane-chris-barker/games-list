import React,  { Component } from 'react'
import Spinner from './Spinner'
import axios from 'axios'

class Content extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            results: null,
            errors: [],
            list: [],
            loading: false
        };
        this.handleSearchTerm   = this.handleSearchTerm.bind(this);
        this.search             = this.search.bind(this);
        this.addToList          = this.addToList.bind(this);
        this.exportToPdf        = this.exportToPdf.bind(this);
        this.sendAsEmail        = this.sendAsEmail.bind(this);

    }

    search (event) {
        event.preventDefault();
        let searchTerm = {
            name: this.state.name
        }
        this.setState({ loading: true });
        axios.post('api/search', searchTerm).then(response => {
            var data = JSON.parse(response.data);
            this.setState({results: data});
            this.setState({ loading: false });

        }).catch(error => {
            self.setState({ loading: false });

        })
    }

    handleSearchTerm (event) {
        this.setState({name: event.target.value});
    }

    addToList(event) {
        const history = this.state.list;
        let i = this.state.list.length;
        i++

        history.push({id:i, name:this.state.results.name, image:this.state.results.image.thumb_url});
        this.setState({list:history});
    }

    exportToPdf(event) {
        axios.post('api/pdf', this.state.list).then(response => {
            var data = JSON.parse(response.data)
        }).catch(error => {
            alert('search was shite')
        })
    }

    sendAsEmail(event) {

    }

    render() {
        let resultDiv
        if(this.state.results) {
            resultDiv =
            <div className='col-12'>
                <div className="card text-center">
                    <div className="card-header">
                        <div className='row'>
                            <h3 className='col-12'>The Results</h3>
                        </div>
                    </div>
                    <hr/>
                    <div className='row '>
                        <p className='col-12'><strong>Name:</strong></p>
                        <p className='col-12'> {this.state.results.name}</p>
                        <p className='col-12'><strong>Release Date:</strong></p>
                        <p className='col-12'>{this.state.results.original_release_date}</p>
                    </div>
                    <div className='row'>
                        <img className='col-4 offset-4 img-thumbnail' src={this.state.results.image.thumb_url}/>
                    </div>
                    <div className='row mt-5'>
                        <input type='button' className='btn btn-primary col-6 offset-3' onClick={this.addToList} value='Add to list'/>
                    </div>
                </div>
            </div>
        } else {
            resultDiv =
            <div className='row text-center'>
                <h3 className='col-12'>The Results</h3>
                <p className='col-12'>You haven't searched for anything yet...</p>
            </div>
        }
        let listDiv;
        if (this.state.list.length > 0) {
        listDiv =
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header'>
                        <h3 className='col-12'>The List</h3>
                    </div>

                    {this.state.list.map((result) =>
                        <div key={result.id} className='row'>
                            <div className='col-12 text-center'>
                                <strong>{result.name}</strong>
                            </div>
                            <div className='col-12'>
                                <img className='img-thumbnail' src={result.image}/>
                            </div>
                            <div className='row'><hr/></div>
                        </div>

                    )}
                    <hr/>
                    <div className='row'>
                        <button className='btn btn-primary col-6 offset-3' onClick={this.exportToPdf}>Export To PDF</button>
                    </div>
                    <div className='row mt-2 mb-5'>
                        <button className='btn btn-primary col-6 offset-3' onClick={this.showEmailModal}>Send As Email</button>
                    </div>
                </div>
            </div>
        } else {
            listDiv =
                <div className='col-12'>
                    <div className='row'>
                        <h3 className='col-12'>The List</h3>
                        <p>You haven't added anything to your list yet</p>
                    </div>
                </div>
        }
        return (
            <div className='row'>
                <div className="col-4">
                    <h5>The Search:</h5>
                    <form onSubmit={this.search}>
                        <div className='form-group'>
                            <label className='form-label'>Type the name of the game you would like to search for</label>
                            <input
                                type='text'
                                value={this.state.name}
                                name='seach-term'
                                id='search-term'
                                className='form-control'
                                onChange={this.handleSearchTerm}
                            />
                        </div>
                        <div className='form-group'>
                            <input type='submit' className='btn btn-primary' value='Search Baby!'/>
                        </div>
                    </form>
                </div>
                <div className='col-4'>
                    {this.state.loading ? <Spinner /> : resultDiv}
                </div>
                <div className='col-4'>
                    {listDiv}
                </div>
            </div>
        )
    }
}
export default Content
