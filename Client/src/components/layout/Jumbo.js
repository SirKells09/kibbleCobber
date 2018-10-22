import React from 'react';
import { Jumbotron,  Col } from 'reactstrap'


class Jumbo extends React.Component{

  render(){
  return (
    
    <div className="main">
      <Jumbotron className="jumbo">
        <Col>
        <h1 className="display-2">KibbleCobber!</h1>
        <p className="lead">Your Loyal Companion Deserves Wholesome And Nourshing Dishes.</p>
        <p>Become a member to share your own Recipes and Ideas with our community! </p>
        </Col>
      </Jumbotron>
    </div>
    
  );
};
}

export default Jumbo;