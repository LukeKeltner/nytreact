import React from 'react';

const Saved = props =>

<div className="card">
	<h4 className="card-header">Saved Articles</h4>
	<div className="card-body">
	{props.children}
	</div>
</div>


export default Saved;