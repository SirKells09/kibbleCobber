import React from 'react';
import { Jumbotron, Button, Container, Row } from 'reactstrap';


class Jumbo extends React.Component{

  render(){
  return (
    
    <div className="main">
    <Container>
      <Jumbotron className="jumbo">
        <Row>
        <h1 className="display-2">KibbleCobber!</h1>
        <p className="lead">Your Loyal Companion Deserves Wholesome And Nourshing Dishes.</p>
        <p>Become a member, share your own Recipes and Ideas with out community! </p>
        {/* <hr className="my-2" /> */}
        </Row>
      </Jumbotron>
      </Container>
    </div>
    
  );
};
}

export default Jumbo;