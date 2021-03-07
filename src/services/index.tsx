import { Post } from 'types';

export const getPosts = async () => {
    const response = await fetch('/api/posts').then(data => data.json());
    return {
        total: response.posts.length,
        posts: response.posts,
    }
}

export const getCategories = async () => {
    return await fetch('/api/categories')
    .then(data => data.json());
}

export const getPostsByCategory = (posts: Post[], filterCategory: string) => {
    if (filterCategory === 'All') {
        return posts;
    } else {
        const postsByCategory: Post[] = [];
        posts.forEach((post) => {
            post.categories.forEach((category) => {
                if (category.name === filterCategory) {
                    postsByCategory.push(post);
                }
            });
        });
        return postsByCategory;
    }
}

export const getPostsPerPage = async (page: number) => {
    return await fetch(`/api/posts/page/${page}`)
    .then(data => data.json())
}