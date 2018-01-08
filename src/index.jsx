import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Footer from 'Footer.jsx'
import NavBar from 'NavBar.jsx'
import JobRequests from 'JobRequests.jsx'
import MyJobs from 'MyJobs.jsx'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const muiTheme = getMuiTheme(darkBaseTheme);

export default class Index extends Component {
	render = () => {
		return (
			<div>
				<div>
					<img src='img/skyworks.png' height='100px' width='250px' alt="Logo"/>
				</div>
				<NavBar />
				<Footer />

			</div>
		)
	}
}


ReactDOM.render(<MuiThemeProvider muiTheme ={muiTheme}><Index /></MuiThemeProvider>, document.getElementById('container'))
