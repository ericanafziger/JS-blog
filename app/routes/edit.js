import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('posts', params.post_id);
  },
  actions : {
    savePost(post, params) {
      Object.keys(params).forEach(function(key){
        debugger;
        if(params[key] !==undefined) {
          debugger;
          post.set(key, params[key]);
        }
      });
      post.save();
      this.transitionTo('edit');
    }
  }
});
