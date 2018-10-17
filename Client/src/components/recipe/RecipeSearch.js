import React from 'react';
import { Input, Button, Table, Container, Col, Row, Form } from 'reactstrap';


class RecipeSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <Container>

                <div >
                    <Col sm="6" md={{ size: 8, offset: 2 }}>

                        <h1 className="title">RECIPES</h1>

                    </Col >
                 
                    <br />
                    <Row>
                        <Col>
                            <Button size="lg">SHARE YOUR RECIPE HERE</Button>
                        </Col>
                    </Row>
                    {/* { this.state.results.map(results => <li key={this.state.results.id}>{ results }</li> *//* )} */}
                    <ul>
                    </ul>

                </div>


            </Container>


        )
    }
}

export default RecipeSearch
