'use strict';

const initStore = [
    {
        name: 'lili',
        blogTitle: 'nihao',
        blogContent: 'nihao',
        nowTime: '2016-4-10'
    },
    {
        name: 'bob',
        blogTitle: '你好！',
        blogContent: '你好！',
        nowTime: '2016-5-15'
    }
];


export default function (state = initStore, action) {
    switch (action.type) {
        case 'ADD':
            state.push({
                name: action.blog.creator,
                blogTitle: action.blog.blogTitle,
                blogContent: action.blog.blogContent,
                nowTime: action.blog.nowTime
            });
            return state;
        case 'DELETE':
            state.splice(action.index,1);
            return [...state];
        case 'UPDATE':
            return state;
        case 'SEARCH':
            return state;
        default:
            return state;

    }
}