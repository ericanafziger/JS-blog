import Ember from 'ember';

export default Ember.Route.extend({
  model(params, transition) {
    return this.store.findRecord('posts', params.post_id);
  }
});
