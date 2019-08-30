import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/home'

@connect(state => state.home, { ...actions })

class HomeIndex extends Component{
    render(){
        console.log('home:', this.props.home)
        return(
            <div>
                首页
            </div>    
        )
    }
}

export default HomeIndex