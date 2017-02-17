'use strict';
import Hello from '../component/hello.js';
import {connect} from 'react-redux';
import * as action from '../action/hello.js';

function mapStateToProps(state) {
    return {
        fruit: state.fruit
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onDeleteFruit: (name) => dispatch(action.deleteFruit(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
