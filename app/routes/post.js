import Ember from 'ember';

export default Ember.Route.extend({
  // model(params) {
  //   return this.store.findRecord('post', params.post_id);
  // },
  model(params) {
    return Ember.RSVP.hash({
      posts: this.store.findRecord('post', params.post_id),
      comments: this.store.findAll('comment')
    });
  }
  // model() {
  //   return this.store.findAll('comment')
  // }
});
