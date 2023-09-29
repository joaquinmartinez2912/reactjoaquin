import { Component } from "react"

export default class Boxapunte extends Component {
    /* Example usage
    <Box>Hola soy una caja</Box>
    <Box>Hola soy otra caja<b>Hola</b></Box>
    */
    render() {
        return (
            <div style={{ border: 'solid 1px #F00', padding: '10px', marginTop: 10 }}
            >
                {this.props.children}
            </div>
        )
    }
}
