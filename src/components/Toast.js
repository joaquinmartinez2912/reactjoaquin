import { Component } from "react";

class Toast extends Component {
    constructor(props){
        super(props)
        this.state = {
            visible: true
        }

        setTimeout(()=>{
            this.setState({visible:false})
        },props.tiempo *1000)
    }

    render(){
        if (! this.state.visible) return null;
        return(
            <div style={{
                background: "#048",
                position: "absolute",
                top: 10,
                right: 10,
                padding:8,
                borderRadius: 8,
                color: "#FFF"
            }}>
                {this.props.mensaje}
            </div>
        )
    }
}

Toast.defaultProps = {
    mensaje: "Falta el mensaje",
    tiempo: 5
    }
    
export default Toast

