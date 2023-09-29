import { Component } from "react";
import './Box.css'

class Box extends Component {
    constructor(props){
        super(props)
        this.state = {
            active: props.active
        } 
    }
    
    render(){

        return(
            <div className={'cr_box'}>
                {this.props.children}
            </div>
        )
    }
}

export default Box