import React from 'react'
import { Container,Row,ButtonGroup,Button,Col } from 'reactstrap'


class Footer extends React.Component {
    render(){
        return(
<div className='footer'>
<Container >
        <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
                <footer>
                    <ButtonGroup >
                     <Button className='navButton' onClick={()=>this.props.clickLogout()}>Logout</Button>
                     <Button className='navButton'>Need Help?</Button>
                     </ButtonGroup>
                     </footer>
                
            </Col>
          </Row>
</Container>
</div>
           

        )
    }
}
export default Footer