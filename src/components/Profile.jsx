import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

  var cardStyle = {
    display: 'block',
    width: '70%',
    transitionDuration: '0.3s',
    height: '50%',
    marginLeft: '10%',
    marginTop: '5%'
};


function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

const TabsExampleSimple = () => (
  <Tabs style = {cardStyle}>
    <Tab label="Account" >
      <div>
        <h2 style={styles.headline}>Create New Account</h2>
        <p>
          This is an example tab.
        </p>
        <p>
          You can put any sort of HTML or react component in here. It even keeps the component state!
        </p>
        <Slider name="slider0" defaultValue={0.5} />
      </div>
    </Tab>
    <Tab label="Basic" >
      <div>
        <h2 style={styles.headline}>Basic Details</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
    <Tab label="Portfolio" >
      <div>
        <h2 style={styles.headline}>Past Projects</h2>
        <p>
          Upload Images Below
        </p>
      </div>
    </Tab>
    <Tab label="Admin" >
      <div>
        <h2 style={styles.headline}>Bank Details</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
    <Tab label="T&Cs" >
      <div>
        <h2 style={styles.headline}>Terms and Conditions</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>

  </Tabs>
);

export default TabsExampleSimple;