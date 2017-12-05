import React from 'react';

const Results = props =>

<div className="card">
	<h4 className="card-header">Results</h4>
	<div className="card-body">
	{props.children}
	</div>
</div>


export default Results;