import React, { Component } from 'react';
import API from "../utils/API";

class Search extends Component
{
	state = 
	{
		topic: "",
		startYear: "",
		endYear: "",
		results: []
	};

	updateField = event =>
	{
		 this.setState({[event.target.name]: event.target.value})
	};

	submitSearch = event =>
	{
		event.preventDefault()
		console.log(this.state)
		API.getArticles()
			.then(res =>
				{
					const array = res.data.response.docs.splice(0,5).map(object => JSON.stringify(object))
					this.setState({"results": array})
					console.log(array.length)
				}
			)
	}

	render()
	{
		return(

			<div className="card">
			  <h4 className="card-header">Search for Articles</h4>
			  <div className="card-body">
				<form>
				  <div className="form-group">
				    <label htmlFor="topic">Topic</label>
				    <input type="text" className="form-control" id="topic" placeholder="Enter topic" value={this.state.topic} name="topic" onChange={this.updateField}/>
				  </div>
				  <div className="form-group">
				    <label htmlFor="start-year">Start Year</label>
				    <input type="number" className="form-control" id="start-year" placeholder="Enter Start Year" value={this.state.startYear} name="startYear" onChange={this.updateField}/>
				  </div>
				  <div className="form-group">
				    <label htmlFor="end-year">End Year</label>
				    <input type="number" className="form-control" id="end-year" placeholder="Enter End Year" value={this.state.endYear} name="endYear" onChange={this.updateField}/>
				  </div>
				  <button type="submit" className="btn btn-primary" onClick={this.submitSearch}>Submit</button>
				</form>

				<p>{this.state.results}</p>
			  </div>
			</div>
		)
	}
}

export default Search;