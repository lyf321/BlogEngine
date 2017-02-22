import React from 'react';
import {Link} from 'react-router';

class PersonBlog extends React.Component {
    deleteBlog(index){
        this.props.onDelete(index);
    }

    render() {
        const blog = this.props.blog.personBlog;
        console.log("blog1:",blog);
        return <div>
            <div className="jumbotron">
                <h1>Welcome To Blog!</h1>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h3 className="person-title">
                        <span>My Blog</span>
                    </h3>
                </div>
                <div className="col-md-6">
                    <Link to='/writeBlog'><h3 className="person-title"><span className="icon iconfont icon-icon-test4"></span>Write Blog</h3></Link>
                </div>
            </div>
            <hr/>
            <div>
                <ul>
                    {blog.map((blog, index)=>
                        <div key={index}>
                            <div className="row">
                                <div className="col-md-4">
                                    <h5><span className="icon iconfont icon-icon-test4"></span>{blog.blogTitle}</h5>
                                </div>
                                <div className="col-md-4">
                                    <h5>{blog.nowTime}</h5>
                                </div>
                                <div className="col-md-4">
                                    <button onClick={this.deleteBlog.bind(this,index)}>X</button>
                                </div>
                            </div>
                        </div>)}
                </ul>
            </div>
        </div>
    }
}

export default PersonBlog;