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
/*
export default class Index extends Component {

	static defaultProps = {

	}

	state = {
		//currentTab: 'job-request' // my-jobs, job-request, job-history, profile, search
		currentTab:'my-jobs'
	}

	render = () => {

		const SkyStyle = {
			position: 'fixed',
			fontSize: '30px',
			top: '5px',
			left: '5px',
			width: '100%',
			color: '#0D47A1',
		};


		if (this.state.currentTab === 'job-request') {
			return (
				<div>
					<div style = {SkyStyle}>
						<h1> SkyWorks </h1>
						<img src="skyworkslogo.jpeg" alt="Logo"/>
					<JobRequests />
					</div>
					<NavBar />
					<Footer />
				</div>
		 	)
		} else {
			return (
				<div>
					<div style = {SkyStyle}>
						<img src='img/skyworkslogo.jpeg' height='10%' width='18%' alt="Logo"/>
					<MyJobs />
					</div>
					<NavBar />
					<Footer />

				</div>
			)
		}
	}

}*/

export default class Index extends Component {
	render = () => {
		return (
			<div>
				<div>
					<img src='img/skyworkslogo.jpeg' height='10%' width='22%' alt="Logo"/>
				</div>
				<NavBar />
				<Footer />

			</div>
		)
	}
}

ReactDOM.render(<MuiThemeProvider muiTheme ={muiTheme}><Index /></MuiThemeProvider>, document.getElementById('container'))
