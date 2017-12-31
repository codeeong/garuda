import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Footer from 'Footer.jsx'
import TextField from 'material-ui/TextField' 
import FlatButton from 'material-ui/FlatButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class Login extends Component {

	static defaultProps = {

	}

	state = {
		username: '',
		password: ''
	}

	handleUsernameChange = (e) => { this.setState({ username: e.target.value }) }
	handlePasswordChange = (e) => { this.setState({ password: e.target.value }) }

	handleSubmitSelected = (e) => {
		console.log('Submit Selected')

		// Typically this is where you call the server to get work done
		// using jQuery or any other means familiar to you
	}
	handleCreateSelected = (e) => {
		console.log('Create Selected')
	}

	render = () => {
		const
			boxStyle = {
				width: '300px',
				height: '400px',
				margin: 'auto',
				backgroundColor: '#eee',
				textAlign: 'center',
				padding: '16px'
			}


		return (
			<div>
				<div style={{padding: '16px'}}>Demonstrate a couple of Material UI components</div>
				<div style={boxStyle}>
					<h1>Login</h1>
					<br />
					<br />
					<TextField
						id='username'
						hintText='Username'
						onChange={this.handleUsernameChange}
						/>
					<TextField
						id='password'
						hintText='Password'
						onChange={this.handlePasswordChange}
						/>
					<br />
					<FlatButton
						label='Submit'
						secondary={true}
						onClick={this.handleSubmitSelected}
						/>
					<br />
					<br />
					<br />
					or<br />
					<br />
					<FlatButton
						label='Create Account'
						primary={true}
						onClick={this.handleCreateSelected}
						/>
				</div>
				<Footer />
			</div>
		)
	}

}

ReactDOM.render(<MuiThemeProvider><Login /></MuiThemeProvider>, document.getElementById('container'))
