import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('posts', params.post_id);
  },
  actions : {
    savePost(post, params) {
      Object.keys(params).forEach(function(key){
        if(params[key] !==undefined) {
          post.set(key, params[key]);
        }
      });
      post.save();
      this.transitionTo('edit');
    },
    deletePost(post) {
      post.destroyRecord();
      this.transitionTo('manage-blog');
    }
  }
});
