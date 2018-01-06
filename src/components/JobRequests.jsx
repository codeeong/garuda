import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

 var cardStyle = {
    display: 'block',
    width: '70%',
    transitionDuration: '0.3s',
    height: '50%',
    margin: '7%'
}


const JobRequest = () => (

	  <Card style = {cardStyle}>
	    <CardHeader
	      title="Job 1"
	      subtitle="Status: Pending Acceptance"
	    />
	    <CardTitle title="Mary Tan" subtitle="91234567" />


	    <CardText>
	    Email: marytan@gmail.com
	    </CardText>
	    <CardText>
	    Date Requested: 12/04/2018
	    </CardText>
	    <CardText>
	    Job Requested : Building Inspection
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

export default JobRequest;