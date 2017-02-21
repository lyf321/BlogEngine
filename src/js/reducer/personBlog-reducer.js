'use strict';

const initStore = [
    {
        name: 'lili',
        blogTitle: 'nihao',
        blogContent: 'nihao',
        nowtime: '2016-4-10'
    },
    {
        name: 'bob',
        blogTitle: '你好！',
        blogContent: '你好！',
        nowtime: '2016-5-15'
    }
];


export default function (state = initStore, action) {
    switch (action.type) {
        case 'ADD':
            console.log(state);
            state.push({
                name: action.blog.creator,
                blogTitle: action.blog.blogTitle,
                blogContent: action.blog.blogContent,
                nowTime: action.blog.nowtime
            });
            console.log(state);
            return state;
        case 'DELETE':
            return state;
        case 'UPDATE':
            return state;
        case 'SEARCH':
            return state;
        default:
            return state;

    }
}