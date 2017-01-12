import Ember from 'ember';

export default Ember.Component.extend({
  showBlogForm: false,
  actions : {
    updatePost() {
      this.set('showBlogForm', true);
    },
    hideForm() {
      this.set('showBlogForm', false);
    },
    savePost(post) {
      debugger;
      var params = {
        images: this.get('post.images'),
        place: this.get('post.place'),
        title: this.get('post.title'),
        type: this.get('post.type'),
        date: this.get('post.date'),
        text: this.get('post.text'),
      };
      this.set('showBlogForm', false);
      this.sendAction('savePost', post, params);
    },
    deletePost(post) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.sendAction('deletePost', post);
      }
    }
  }
});
