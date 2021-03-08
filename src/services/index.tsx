import { Post } from 'types';

export const getPosts = async () => {
    const response = await fetch('/api/posts').then(data => data.json());
    return {
        total: response.posts.length,
        posts: response.posts,
    };
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