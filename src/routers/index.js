import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Routers from './Routers'

const RouteWithSubRoutes = (route) => {
    return <Route path={route.path} render={props => (
       <route.component {...props} routes={route.routes} user={route.user}/>
    )} />
}

class RouterIndex extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    {Routers.map((route, index)=>(
                        <RouteWithSubRoutes key={index} {...route} />
                    ))}
                </Switch>    
            </Router>      
        )
    }
}

export default RouterIndex