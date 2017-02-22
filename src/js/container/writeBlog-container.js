'use strict';

import {connect} from 'react-redux';
import writeBlog from '../component/writeBlog';
import action from '../action/personBlog-action';

/*function mapStateToProps(state) {
    return {
        blog: state
    }
}*/

function mapDispatchToProps(dispatch) {
    return {
        onAdd: (blog)=> {
            dispatch(action.addBlog(blog))
        }
    }
}

export default connect(()=>{return{}}, mapDispatchToProps)(writeBlog);