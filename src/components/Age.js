import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionCreator from '../store/actions/actions';
import logo from '../logo.svg'
class Age extends Component {
    render() {
        return (
            <div>
                <div>
                    <span>Age:{this.props.age}</span>
                </div>
                <button onClick={this.props.onAgeUp}>Age Up</button>
                <button onClick={this.props.onAgeDown}>Age down</button> <br/>
                {this.props.loading && <span>loading...</span>}
            </div>
        );
    }
}
const mapStateToPros = (state) =>{
    return {
        age: state.age,
        loading:state.loading
    }
}
const mapDispatchToPros = (dispatch) =>{
  return {
      onAgeUp: () => dispatch(actionCreator.ageUp(1)),
      onAgeDown:() => dispatch(actionCreator.ageDown(2))
  }
}

export default connect(mapStateToPros,mapDispatchToPros)(Age);