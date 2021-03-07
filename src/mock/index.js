import { createServer } from 'miragejs';

import data from './data.json';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/posts', () => {
      return data;
    });

    this.get('/posts/:id', (schema, request) => {
      const { id } = request.params;
      return data.posts.find(post => post.id === id);
    });

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
