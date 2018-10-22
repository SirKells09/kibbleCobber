import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Container } from 'reactstrap';

class EmailModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal2: false,
      backdrop: true,
      email: ''
    }
  }

  render() {
    return (

      <Container>

        <Modal isOpen={this.props.show} backdrop={true} onClick={this.props.onClick}>
          <form onSubmit={this.handleSubmit}>
            {this.props.head ? <ModalHeader>{this.props.head}</ModalHeader> : <div />}
            <ModalBody>
              <Label for="Email">Email</Label>
              <Input id="email" type="email" placeholder="Email" />
              <Label for="password" >Your Message</Label>
              <Input type="textarea" />
            </ModalBody>
            <ModalFooter>
              <Input type="submit" value="Submit" color="primary" className="btn btn-primary" />
              <Button color="danger" onClick={this.props.toggle}>Cancel</Button>
            </ModalFooter>
          </form>
        </Modal>
      </Container>
    );
  }
}
export default EmailModal