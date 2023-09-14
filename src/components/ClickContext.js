import { Component } from "react";

class ClickContext extends Component {

    constructor(props){
        super(props)
        this.state= {
            x: 0,
            y:0
        }

        this.handleMouseMove = this.handleMouseMove.bind(this)
    }

    handleMouseMove(e){
        const {clientX, clientY} = e
        this.setState({
            x : clientX,
            y: clientY
        })
    }

    render() {
        const {x,y} = this.state
        return(
            <>
                <p> X:{x}, Y:{y}  </p>
                <div style={{
                    width: 300,
                    height: 150,
                    border: "solid lpx #222"
                }}
                    onMouseMove={this.handleMouseMove}> </div>
            </>
        )
    }
}

export default ClickContext