import React, { Component } from 'react';
import API from "../utils/API";
import Results from './Results'
import Result from './Result'
import Saved from './Saved'

class Search extends Component
{
	state = 
	{
		topic: "",
		startYear: "",
		endYear: "",
		results: [],
		saved: []
	};

	updateField = event =>
	{
		 this.setState({[event.target.name]: event.target.value})
	};

	submitSearch = event =>
	{
		event.preventDefault()
		console.log(this.state)
		API.getArticles(this.state.topic, this.state.startYear, this.state.endYear)
		.then(res =>
			{
				const filter = res.data.response.docs.filter(object => object.headline.print_headline)
				const array = filter.splice(0,5).map(object => JSON.stringify(object))
				console.log(res.data.response.docs.splice(0,5))
				this.setState({"results": array})
			}
		)
	};

	saveArticle = event =>
	{
		const article = JSON.parse(event.target.name)
		const data = 
		{
			"title": article.headline.main,
			"date": article.pub_date,
			"url": article.web_url
		}

		API.saveNewArticle(data)
			.then(res =>
			{
				API.getSavedArticles().then(res =>
					{
						this.setState({saved: res.data})
						console.log(this.state.saved)

					}).catch(err => console.log(err));
			})
	};

	deleteArticle = event =>
	{
		const data = 
		{
			"title": event.target.name
		}
		console.log(data)

		API.deleteArticle(event.target.name)
		.then(res =>
		{
					API.getSavedArticles().then(res =>
					{
						this.setState({saved: res.data})
						console.log(this.state.saved)

					}).catch(err => console.log(err));
		})

	}

	componentDidMount = () =>
	{
		API.getSavedArticles().then(res =>
			{
				this.setState({saved: res.data})
				console.log(this.state.saved)

			}).catch(err => console.log(err));
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
				
					<Result key={i} title={JSON.parse(obj).headline.main} date={JSON.parse(obj).pub_date} url={JSON.parse(obj).web_url} id={i}>
					<br></br><button type="button" className="btn btn-warning save" name={obj} onClick={this.saveArticle}>Save</button>
					</Result>
				)}

			</Results>

			<Saved>
			{this.state.saved.map((obj,i) => 
				
					<Result key={i} title={obj.title} date={obj.date} url={obj.url} id={i}>
					<br></br><button type="button" className="btn btn-warning save" name={obj.title} onClick={this.deleteArticle}>Delete</button>
					</Result>
				)}
			</Saved>
			</div>
		)
	}
}

export default Search;