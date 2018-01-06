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


const CardExampleExpandable = () => (
  <Card style = {cardStyle}>
    <CardHeader
      title="Job 1"
      subtitle="Status: Cancelled - Operator Declined Job"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
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
    </CardText>


  </Card>
  
);

export default CardExampleExpandable;