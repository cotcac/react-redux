import React, { Component } from 'react';
import {connect} from 'react-redux'
class Age extends Component {
    render() {
        return (
            <div>
                <div>
                    <span>A:{this.props.a}</span>
                    <span>B:{this.props.b}</span>
                </div>
                <button onClick={()=>{this.props.update_a(this.props.b)}}>Update A</button>
                <button onClick={()=>{this.props.update_b(this.props.a)}}>Update B</button>
            </div>
        );
    }
}
const mapStoreToPros = (store) =>{
    return {
        a: store.rA.a,
        b: store.rB.b
    }
}
const mapDispatchToPros = (dispatch) =>{
  return {
      update_a: (b) => dispatch({type:'UPDATE_A', b:b}),
      update_b:(a) => dispatch({type:'UPDATE_B', a:a})
  }
}

export default connect(mapStoreToPros,mapDispatchToPros)(Age);