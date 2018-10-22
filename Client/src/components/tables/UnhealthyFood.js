 import React from 'react';
 import {Container, Row, Col, Table,} from 'reactstrap'
 import APIURL from '../../helpers/environment'

class UnhealthyFood extends React.Component {
    constructor(props){
        super(props) 
            this.state={
                badFood: []
            }
        
    }
    componentDidMount() {
        this.fetchBadFoods();
      }


    fetchBadFoods = () => {
        fetch(`${APIURL}/unhealthy/getall`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": this.props.sessionToken
          }
        }
        )
          .then(response => response.json())
          .then((foodData) => {
            return this.setState({ badFood:foodData })
          })
      }
    render() {
        return(
        
<div>
          <h3> Unhealthy Choices for youe dog</h3>
          <Table striped hover>
          <thead>
         <tr>
          <th> # </th>
          <th> Unhelathy Food</th>
          <th> Reasoning </th>
         <th></th>
         </tr>
      </thead>
<tbody>{
    this.state.badFood.map((badFood, id)=> {
        return( 
             <tr key={id}>
            <th scope="row">{badFood.id}</th>
            <th >{badFood.badFood}</th>
            <th >{badFood.reason}</th>
           
                </tr>

        )
    })
}

</tbody>
</Table>
</div>

        )
}

 }
export default UnhealthyFood

