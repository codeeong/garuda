import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton';

export default class Footer extends Component {

	render = () => {
		const
			footerStyle = {
				position: 'fixed',
				bottom: '0px',
				width: '100%',
				borderTop: '1px solid #ddd',
				textAlign: 'center',
			}

		return (
			<div style={footerStyle}>
			    <FlatButton label="My Jobs" primary={true} />
			    <FlatButton label="Job Requests" primary={true} />
				<FlatButton label="Job History" primary={true} />
			    <FlatButton label="Search" primary={true} />
			    <FlatButton label="Profile" primary={true} />
				<br />
				<br />
			</div>
		)
	}

}