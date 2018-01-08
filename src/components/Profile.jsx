import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
    color: '#ffffff'
  },
  checkbox: {
    marginBottom: 16,
  },
};


  var cardStyle = {
    display: 'block',
    width: '70%',
    transitionDuration: '0.3s',
    height: '50%',
    marginLeft: '10%',
    marginTop: '5%',
    backgroundColor: '#383838',
};

var textStyle = {
  marginLeft: '3%',
  marginRight: '3%'
}

var textColor = {
  color: '#d3d3d3'
}


const TabsExampleSimple = () => (
  <Tabs style ={cardStyle}>
    <Tab label="Account">
      <div style ={textStyle}>
        <h2 style={styles.headline}>Create New Account</h2>
        <p style = {textColor}>
          Email:
        </p>
        <TextField
          hintText="Email"
        /><br />
        <p style = {textColor}>
          Password:
        </p>
        <TextField
          hintText="Password"
        /><br />
        <p style = {textColor}>
          Confirm Password:
        </p>
        <TextField
          hintText="Re-Enter Password"
        /><br />
      </div>
    </Tab>
    <Tab label="Basic" >
      <div style ={textStyle}>
        <h2 style={styles.headline}>Basic Details</h2>
        <p style = {textColor}>
          Company Name:
        </p>
        <TextField
          hintText="Company Name"
        /><br />
        <p style = {textColor}>
          License Number:
        </p>
        <TextField
          hintText="License Number"
        /><br />
        <p style = {textColor}>
          Services Provided:
        </p>
        <Checkbox
          label="Media Production"
          style={styles.checkbox}
        />
        <Checkbox
          label="Mapping"
          style={styles.checkbox}
        />
        <Checkbox
          label="Inspection"
          style={styles.checkbox}
        />
        <Checkbox
          label="Others"
          style={styles.checkbox}
        />
        <TextField
          hintText="Input Other Services Here"
        /><br />

        <p style = {textColor}>
          About Us:
        </p>
        <TextField
          hintText="Name"
        /><br />
      </div>
    </Tab>
    <Tab label="Portfolio" >
      <div style ={textStyle}>
        <h2 style={styles.headline}>Past Projects</h2>
        <p>
          Upload Images Below
        </p>
      </div>
    </Tab>
    <Tab label="Admin" >
      <div style ={textStyle}>
        <h2 style={styles.headline}>Bank Details</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
    <Tab label="T&Cs" >
      <div style ={textStyle}>
        <h2 style={styles.headline}>Terms and Conditions</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
    
  </Tabs>
);

export default TabsExampleSimple;