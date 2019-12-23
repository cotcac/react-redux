import React, { Component } from 'react'
import {connect} from 'react-redux';
class Age1 extends Component {
    render() {
        return (
            <div>
                <h1>Age 1</h1>
                <span>Age:{this.props.age}</span>
            </div>
        )
    }
}
const mapStateToPros = (state) =>{
    return {
        age: state.age,
        loading:state.loading
    }
}
export default connect(mapStateToPros)(Age1);