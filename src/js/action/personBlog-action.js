const addBlog = (blog) => {
    return {
        type: 'ADD',
        blog
    }
};

const deleteBlog = (index) => {
    return {
        type: 'DELETE',
        index
    }
};

const updateBlog = (index) => {
    return {
        type: 'UPDATE',
        index
    }
};

const searchBlog = (name) => {
    return {
        type: 'SEARCH',
        name
    }
};

module.exports = {
    addBlog,
    deleteBlog,
    updateBlog,
    searchBlog
};
