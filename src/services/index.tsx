import { Post } from 'types';

export const getPosts = async () => {
    return await fetch('/api/posts')
    .then(data => data.json())
    .then(data => ({
        total: data.posts.length,
        posts: data.posts,
    }));
}

/* Fetches all categories */
export const getCategories = async () => {
    return await fetch('/api/categories')
    .then(data => data.json());
}

/* Fetches all posts from a specific category */
export const getPostsByCategory = async (filterCategory: string) => {
    const postsByCategory : Post[] = [];
    const data = await getPosts();
    data.posts.forEach((post: Post) => {
        post.categories.forEach((category) => {
            if (category.name === filterCategory) {
                postsByCategory.push(post);
            }
        });
    });
    return {
        category: filterCategory,
        posts: postsByCategory,
        total: postsByCategory.length,
    }
}

/* Fetches post by id */
export const getPostById = async (id: string) => {
    const data = await getPosts();
    return data.posts.find((post: Post) => post.id === id);
}