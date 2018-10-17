import React from 'react';
import {Container, Row, Col, Table, } from 'reactstrap'

class DailyCalorie extends React.Component {
    render(){
    return (
// set up in multiple divs active dogs/moderatley active/not
        <Container>
        <h1>Daily Calorie Intake</h1>
        <Table striped hover>
      <thead>

    <th>Daily Calorie Intake</th>
    <th>Reasoning</th>
    <th></th>
      </thead>
<tbody>
<tr>
    <th scope="row">1</th>
        <td></td>
        <td></td>
       
    </tr>
<tr>
    <th scope="row">2</th>
        <td></td>
        <td></td>
       
    </tr>
<tr>
    <th scope="row">3</th>
        <td></td>
        <td></td>
       
    </tr>
<tr>
    <th scope="row">1</th>
        <td></td>
        <td></td>
       
    </tr>
<tr>
    <th scope="row">1</th>
        <td></td>
        <td></td>
       
    </tr>

</tbody>

      </Table >
       </Container>
    )
}
}

export default DailyCalorie;