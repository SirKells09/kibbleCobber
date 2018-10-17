import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Container } from 'reactstrap';

class AccModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      backdrop: true,
      firstName: '',
      lastName: '',
      email: '',
      password: ''

    }
  }

  render() {
    return (
      
      
      <Modal isOpen={this.props.show} backdrop={true} toggle={this.props.toggle} center>
      <Container>
        <form onSubmit={this.handleSubmit}>
          {this.props.head?<ModalHeader>{this.props.head}</ModalHeader>:<div />}
          <ModalBody>
            <center>
          <div className="row" >
            <div className="form-group col-md-8">
            <Label>First Name</Label>
            <Input type="text" value={this.firstName} onChange={this.handleChange} className="form-control" />
              </div>
              </div>
            <div className="row">
             <div className="form-group col-lg-8">
            <Label>Last Name</Label>
                <Input type="text" value={this.lastName} onChange={this.handleChange} className="form-control" />
               </div>
              </div>
            <div className="row"> 
             <div className="form-group col-lg-8">
              <Label>Email</Label>
                <Input type="text" value={this.email} onChange={this.handleChange} className="form-control" />
               </div>
               </div>
               <div className="row">
            
             <div className="form-group col-lg-8">
                 <Label>Password</Label>
                <Input type="text" value={this.password} onChange={this.handleChange} className="form-control" />
               </div>
              </div>
              </center>
          </ModalBody>
          <ModalFooter>
            <Input type="submit" value="Submit" color="primary" className="btn btn-primary" />
            <Button color="danger" onClick={this.props.toggle}>Cancel</Button>
          </ModalFooter>
          </form>
          </Container>
        </Modal>

    );
  }
}

export default AccModal