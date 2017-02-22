import React from 'react';
import {browserHistory} from 'react-router'

class WriteBlog extends React.Component {
    getNowTime(){
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth()+1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        return `${year}年 ${month}月 ${day}日 ${hours}:${minutes}:${seconds}`;
    }

    addBlog(){
        const blogTitle = this.refs.title.value;
        const blogContent = this.refs.content.value;
        const creator = this.refs.creator.value;
        const nowTime = this.getNowTime();
        this.props.onAdd({
            blogTitle,
            blogContent,
            creator,
            nowTime
        });

        browserHistory.push('/');
    }

    render() {
        return <div>
                <div>
                    Title:<input type="text" ref="title"/>
                </div>
            <br/>
                <div>
                    Content:<input type="text" ref="content"/>
                </div>
            <br/>
                <div>
                    Creator:<input type="text" ref="creator"/>
                </div>
            <br/>
                <div>
                    <button onClick={this.addBlog.bind(this)}>Submit</button>
                </div>
        </div>
    }
}

export default WriteBlog;