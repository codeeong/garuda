import React, { Component } from 'react'

export default class Footer extends Component {

	render = () => {
		const
			footerStyle = {
				position: 'fixed',
				bottom: '0px',
				width: '100%',
				borderTop: '1px solid #ddd',
				textAlign: 'center',
				padding: '16px'
			}

		return (
			<div style={footerStyle}>
				This is a sample component.<br />
				<br />
				You use components to break pages up into logical classes.
			</div>
		)
	}

}