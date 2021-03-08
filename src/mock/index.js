import { createServer } from 'miragejs';

import data from './data.json';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/posts', () => {
      return data;
    });

    /* Adding new route to fetch a post by id */
    this.get('/posts/:id', (schema, request) => {
      const { id } = request.params;
      return data.posts.find(post => post.id === id);
    });

    /* Adding new route to fetch all unique categories from posts */
    this.get('/categories', () => {
      let { posts } = data;
      let categories = [];
      posts.forEach(post => {
        post.categories.forEach(category => {
          if(!categories.includes(category.name)) {
            categories.push(category.name);
          }
        });
      });
      return categories;
    });
  },
});
