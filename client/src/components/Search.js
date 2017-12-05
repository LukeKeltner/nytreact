import React, { Component } from 'react';
import API from "../utils/API";
import Results from './Results'
import Result from './Result'

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
				const test = JSON.parse(this.state.results[0])
				console.log(test)
			}
		)
	};

	savebutton = event =>
	{
		console.log("hi!")
	}

	render()
	{
		return(
			<div>
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
			  </div>
			</div>

			<Results>
			{this.state.results.map((obj,i) => 
				
					<Result key={i} title={JSON.parse(obj).headline.print_headline} date={JSON.parse(obj).pub_date} url={JSON.parse(obj).web_url} id={i}/>
				)}

			</Results>
			</div>
		)
	}
}

export default Search;