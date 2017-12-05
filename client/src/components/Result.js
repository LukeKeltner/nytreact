import React from 'react';
import API from "../utils/API";

const resultStyle = 
{
	"border": "1px solid rgba(0,0,0,.125)",
	"marginBottom": "10px"
}

const Result = props =>

<div style={resultStyle}>
	<h4 className="card-title">{props.title}</h4>
	<button type="button" className="btn btn-warning float-right save" onClick={function()
		{
			console.log(props.title)
		}
	}>Save</button>
	<h6 className="card-subtitle mb-2 text-muted">{props.date}</h6>
	<a href={props.url}>Click Here!</a>
</div>


export default Result;