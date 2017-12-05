import React from 'react';

const resultStyle = 
{
	"border": "1px solid rgba(0,0,0,.125)",
	"marginBottom": "10px"
}

const Result = props =>

<div style={resultStyle}>
	<h4 className="card-title">{props.title}</h4>
	<h6 className="card-subtitle mb-2 text-muted">{props.date}</h6>
	<a target="_blank" href={props.url}>Click Here!</a>
	{props.children}
</div>


export default Result;