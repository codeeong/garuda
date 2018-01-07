import React from 'react'
import FlatButton from 'material-ui/FlatButton';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import JobRequests from 'JobRequests.jsx'
import MyJobs from 'MyJobs.jsx'
import History from 'History.jsx'
import Profile from 'Profile.jsx'

	const style = {
		position: 'fixed',
		top: '90px',
		width: '100%',
		borderTop: '2px solid #ddd',
		borderBottom: '2px solid #ddd',
		textAlign: 'left',

	};


const NavBar = () => (

	<Router>
	  <div style={style}>
	    <FlatButton     
	    containerElement={<Link to="/" />}
	    labelStyle = {{fontSize:'17px'}} 
	    linkButton={true}
	    label="My Jobs" 
	    primary={true} />
	    <FlatButton     
	    containerElement={<Link to="/jobreq" />}
	    labelStyle = {{fontSize:'17px'}} 
	    linkButton={true}
	    label="Job Requests" 
	    primary={true} />
	    <FlatButton     
	    containerElement={<Link to="/jobhistory" />}
	    labelStyle = {{fontSize:'17px'}} 
	    linkButton={true}
	    label="Job History" 
	    primary={true} />
	    <FlatButton     
	    containerElement={<Link to="/myprofile" />}
	    labelStyle = {{fontSize:'17px'}} 
	    linkButton={true}
	    label="Profile" 
	    primary={true} />

	    <Route exact path="/" component={Home}/>
	    <Route path="/jobreq" component={JobReq}/>
	    <Route path="/jobhistory" component={JobHistory}/>
	    <Route path="/myprofile" component={MyProfile}/>



    <br />
    <br />

	</div>
	</Router>


);

const Home = () => (
  <div>
  	<MyJobs />
  </div>
);

const JobReq = () => (
  <div>
    <JobRequests />
  </div>
);

const JobHistory = () => (
  <div>
    <History />
  </div>
);

const MyProfile = () => (
  <div>
    <Profile />
  </div>
);

export default NavBar;  

//export default FlatButtonExampleSimple;  