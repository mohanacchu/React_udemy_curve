/* eslint-disable no-unreachable */
import React, { Component } from "react";

class welcome extends Component {
    render() {
       return (<div>
        <h1>Statefull Class Component</h1>
        {this.props.name} A.K.A {this.props.superName}
        {this.props.children}
    </div>)
    }
}

export default welcome;