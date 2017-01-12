import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions : {
    submitComment(post, params) {
      Object.keys(params).forEach(function(key){
        if(params[key] !==undefined) {
          post.set(key, params[key]);
        }
      });
      post.save();
      this.transitionTo('post');
    }
  }
  // model(params) {
  //   return Ember.RSVP.hash({
  //     posts: this.store.findRecord('post', params.post_id),
  //     comments: this.store.findAll('comment')
  //   });
  // }
});
