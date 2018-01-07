import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

 var cardStyle = {
    display: 'block',
    width: '70%',
    transitionDuration: '0.3s',
    height: '50%',
    marginLeft: '10%',
    marginTop: '5%'
}


const MyJobs = () => (


	  <Card style = {cardStyle}>
	    <CardHeader
	      title="Job 1"
	      subtitle="Status: Applying for CAAS Permit"
	      //avatar="images/download.jpg"
	    />
	    <CardTitle title="John Tan" subtitle="91234567" />


	    <CardText>
	    Email: johntan@gmail.com
	    </CardText>
	    <CardText>
	    Date Requested: 12/04/2018
	    </CardText>
	    <CardText>
	    Job Requested : 3D Map of Building
	    </CardText>
	    <CardText>
	    See Map (map beside)
	    </CardText>



	    <CardActions>
	      <FlatButton label="Accept" />
	      <FlatButton label="Decline" />
	    </CardActions>
	  </Card>

);

export default MyJobs;