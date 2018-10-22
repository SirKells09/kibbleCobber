import React from 'react'
import { Table, Container} from 'reactstrap'

class NewFood extends React.Component {
    render(){
    return(
        <Container>
        <div className="table">
        
        <h1>Transitioning To New Dog Food?</h1>
        <Table striped hover>
        <thead>
          <th> # </th>
          <th> Unhelathy Choice</th>
          <th> Reasoning </th>
         
      </thead>
<tbody>
<tr>
    <th scope="row">1</th>
        <td></td>
        <td></td>
       
    </tr>
    <tr>
    <th scope="row">3</th>
        <td></td>
        <td></td>
    </tr>
    <tr>
    <th scope="row">4</th>
        <td></td>
        <td></td>
    </tr>
    <tr>
    <th scope="row">5</th>
        <td></td>
        <td></td>
    </tr>
    <tr>
    <th scope="row">6</th>
        <td></td>
        <td></td>
    </tr>
    <tr>
    <th scope="row">7</th>
        <td></td>
        <td></td>
    </tr>
    <tr>
    <th scope="row">8</th>
        <td></td>
        <td></td>
    </tr>
    <tr>
    <th scope="row">9</th>
        <td></td>
        <td></td>
    </tr>
    <tr>
    <th scope="row">10</th>
        <td></td>
        <td></td>
    </tr>
    <tr>
    <th scope="row">11</th>
        <td></td>
        <td></td>
    </tr>

</tbody>

     
      </Table>
    
        </div>
    
        </Container>
    )
}
    }

export default NewFood;