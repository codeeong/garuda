// import React from 'react';
// import FlatButton from 'material-ui/FlatButton';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'


// 	const style = {
// 		position: 'fixed',
// 		top: '80px',
// 		width: '100%',
// 		borderTop: '2px solid #ddd',
// 		borderBottom: '2px solid #ddd',
// 		paddingTop: '15px',
// 		textAlign: 'left',

// 	};



// // const FlatButtonExampleSimple = () => (

// //   <div style={style}>
// //     <FlatButton labelStyle = {{fontSize:'17px'}} label="My Jobs" primary={true} />
// //     <FlatButton labelStyle = {{fontSize:'17px'}} label="Job Requests" primary={true} />
// //     <FlatButton labelStyle = {{fontSize:'17px'}} label="Job History" primary={true} />
// //     <FlatButton labelStyle = {{fontSize:'17px'}} label="Search" primary={true} />
// //     <FlatButton labelStyle = {{fontSize:'17px'}} label="Profile" primary={true} />
// //     <br />
// //     <br />
// //   </div>


// // );

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import JobRequests from 'JobRequests.jsx'
import MyJobs from 'MyJobs.jsx'

	const style = {
		position: 'fixed',
		top: '80px',
		width: '100%',
		borderTop: '2px solid #ddd',
		borderBottom: '2px solid #ddd',
		textAlign: 'left',

	};

const BasicExample = () => (
  <Router>
    <div >

    <div style = {style}>
      <ul>
        <li><Link to="/">MyJobs</Link></li>
        <li><Link to="/about">JobRequests</Link></li>
      </ul>
    </div>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <MyJobs />
  </div>
)

const About = () => (
  <div>
    <JobRequests />
  </div>
)

// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           Rendering with React
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>
//           Components
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </Link>
//       </li>
//     </ul>

//     <Route path={`${match.url}/:topicId`} component={Topic}/>
//     <Route exact path={match.url} render={() => (
//       <h3>Please select a topic.</h3>
//     )}/>
//   </div>
// )

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// )

export default BasicExample;  

//export default FlatButtonExampleSimple;  