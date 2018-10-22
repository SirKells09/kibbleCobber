import React from 'react';
import {Container, Button,ButtonToolbar,ButtonGroup, Col} from 'reactstrap'

import {
    Route,
    Link,
    Switch, }from 'react-router-dom'

   
import UnhealthyDog from "../tables/UnhealthyFood";
import UserSettings from '../auth/UserSettings';
import RecipeMain from '../recipeCrud/RecipeMain'
import {AuthContext} from '../auth/AuthContext'
import Auth from '../auth/Auth'

class Navibar extends React.Component{
        

    render(){
        return(
           

<div>
        <Container>
            <Col className="navbar">

       
            

    
    <Button className='navButton' color="warning" bsSize="lg"><Link to="/Auth">LOGIN/SIGNUP</Link></Button>

    <Button className='navButton' color="warning"><Link to="/RecipeMain">Recipes</Link></Button>
            
    
    <Button className='navButton' color="warning"><Link to="/UnhealthyDog">Unhealthy Choices</Link></Button>
   
    
    <Button className='navButton'  color="warning"><Link to="/UserSettings">User Settings</Link></Button>
   

            </Col>
        </Container>



<Container>
 
    <Switch>
        <Route path="/Auth" exact={true}><Auth/></Route>
        <Route path="/RecipeMain" ><RecipeMain /></Route>
        <Route path="/UserSettings" ><UserSettings /></Route>
        <Route path="/UnhealthyDog"><UnhealthyDog /></Route>
    </Switch>

  
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