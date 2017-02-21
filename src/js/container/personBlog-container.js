'use strict';

import {connect} from 'react-redux';
import personBlog from '../component/personBlog';

function mapStateToProps(state) {
    return {
        blog:state
    }
}

export default connect(mapStateToProps,()=>{return{}})(personBlog);