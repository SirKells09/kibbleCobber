import React from 'react';
import {Container, Row, Col, Button, Navbar,} from 'reactstrap'

import {
    Route,
    Link,
    Switch, }from 'react-router-dom'

   
import UnhealthyDog from "../tables/UnhealthyFood";
import DailyCalorie from "../tables/DailyCalorie";
import NewFood from "../tables/NewFood";
import UserSettings from '../auth/UserSettings';
import RecipeSearch from '../recipe/RecipeSearch'
import {AuthContext} from '../auth/AuthContext'

class Navibar extends React.Component{
    render(){
        return(

 

    <div >
 <Container className='navbar' color>
        
    <Row>
  <Navbar >
    <Button className='navButton' color=""><Link to="/RecipeSearch">Recipe Search</Link></Button>
    
    <Button className='navButton' color=""><Link to="/UnhealthyDog">Unhealthy Choices</Link></Button>
   
    <Button className='navButton'  color=""><Link to="/DailyCalorie">Daily Calorie Intake</Link></Button>
    
    <Button className='navButton'  color=""><Link to="/NewFood">Food Transition Chart</Link></Button>

    <Button className='navButton'  color=""><Link to="/UserSettings">User Settings</Link></Button>
    </Navbar>
    </Row>
      </Container>
      <Container>
    <div className="naviResults">
     <Col >
 <Row>
    <Switch>
        <Route path="/RecipeSearch" exact={true}><RecipeSearch /></Route>
        <Route path="/UserSettings" ><UserSettings /></Route>
        <Route path="/UnhealthyDog"><UnhealthyDog /></Route>
        <Route path="/DailyCalorie"><DailyCalorie /></Route>
        <Route path="/NewFood"><NewFood /></Route>
    </Switch>
    </Row>
    </Col>
    </div>
    </Container>
    </div>
             )
        }
            }

            export default props => (
                <AuthContext.Consumer>
                    {auth=> <Navibar {...props} auth={auth} />}
                </AuthContext.Consumer>
            )