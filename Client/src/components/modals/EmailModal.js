import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Container } from 'reactstrap';

class EmailModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false,
        backdrop: true,
        email: ''
      }
    }
  
    render() {
        return (
          
        <Container>

       <Modal isOpen={this.props.show} backdrop={true} onClick={this.props.click}>
          <form onSubmit={this.handleSubmit}>
            {this.props.head?<ModalHeader>{this.props.head}</ModalHeader>:<div />}
            <ModalBody>
                <div>

          <Input type='textarea' name='text' is='exampleText'></Input>
                </div>
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