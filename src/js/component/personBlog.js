import React from 'react';
import {Link} from 'react-router';

class PersonBlog extends React.Component {
    render() {
        const blog = this.props.blog.personBlog;
        console.log(blog);
        return <div>
            <div className="jumbotron">
                <h1>Welcome To Blog!</h1>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h3 className="person-title">My Blog</h3>
                </div>
                <div className="col-md-6">
                    <Link to='/writeBlog'><h3 className="person-title">Write Blog</h3></Link>
                </div>
            </div>
            <div>
                <ul>
                    <li><h4>Title</h4></li>
                    <hr/>
                    {blog.map((blog, index)=><li>
                        <div key={index}>
                            {blog.blogTitle}
                        </div>
                    </li>)}
                </ul>
            </div>
        </div>
    }
}

export default PersonBlog;