import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Footer from 'Footer.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class Index extends Component {

	static defaultProps = {

	}

	state = {

	}

	render = () => {
		return (
			<div>
				<h1>Happy New Year!</h1>
				<Footer />
			</div>
		)
	}

}

ReactDOM.render(<MuiThemeProvider><Index /></MuiThemeProvider>, document.getElementById('container'))
