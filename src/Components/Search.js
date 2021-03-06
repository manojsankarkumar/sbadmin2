import React, { Component } from 'react';

class Search extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: ""
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		this.setState({
			name: e.target.value
		})
	}

	render() {
		// Properties
		const {placeholder, btnclass} = this.props
		const {name} = this.state

		return (
			<form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                	{/* Placeholder data */}
                    <input type="text" className="form-control bg-light border-0 small" placeholder={placeholder}
                        aria-label="Search" aria-describedby="basic-addon2" onChange={this.handleChange}/>
                    <div className="input-group-append">
                        <button className={"btn btn-"+btnclass} type="button">
                            <i className="fas fa-search fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form>
		);
	}
}

export default Search