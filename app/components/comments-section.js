import Ember from 'ember';

export default Ember.Component.extend({
  actions : {
    submitComment(post) {
      debugger;
      var userComment = Ember.$('#comment').val();
      var userName = Ember.$('#name').val();
      var object = {comment: userComment, name: userName};
      var params = {
        comments: object
      };
      this.sendAction('submitComment', post, params);
    }
  }
});
