'use strict';

import {connect} from 'react-redux';
import personBlog from '../component/personBlog';
import action from '../action/personBlog-action'

function mapStateToProps(state) {
    return {
        blog:state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onDelete: (index)=> {
            dispatch(action.deleteBlog(index))
        },
        onUpdate: (index)=> {
            dispatch(action.updateBlog(index))
        },
        onSearch: (name)=> {
            dispatch(action.searchBlog(name))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(personBlog);