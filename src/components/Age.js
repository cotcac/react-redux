import React, { Component } from 'react';
import {connect} from 'react-redux'
class Age extends Component {
    render() {
        return (
            <div>
                <div>
                    <span>Age:{this.props.age}</span>
                </div>
                <button onClick={this.props.onAgeUp}>Age Up</button>
                <button onClick={this.props.onAgeDown}>Age down</button>
            </div>
        );
    }
}
const mapStateToPros = (state) =>{
    return {
        age: state.age
    }
}
const mapDispatchToPros = (dispatch) =>{
  return {
      onAgeUp: () => dispatch({type:'AGE_UP', val:1}),
      onAgeDown:() => dispatch({type:'AGE_DOWN', val:2})
  }
}

export default connect(mapStateToPros,mapDispatchToPros)(Age);