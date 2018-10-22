import React from 'react';
import { Alert } from 'reactstrap';

class LittleAlert extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }
  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
  return ( 
    <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss} >
     Welcome to KibbleCobber!
     <br/>
     Please add your recipes by clicking on the button above.

    </Alert>
  );
}
}

export default LittleAlert;