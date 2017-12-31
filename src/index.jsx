import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class Index extends Component {

	static defaultProps = {

	}

	state = {

	}

	render = () => {
		return (
			<div>
				<h1>Hello Humans</h1>
			</div>
		)
	}

}

ReactDOM.render(<MuiThemeProvider><Index /></MuiThemeProvider>, document.getElementById('container'))
