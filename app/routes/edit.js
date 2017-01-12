import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions : {
    savePost(post, params) {
      Object.keys(params).forEach(function(key){
        if(params[key] !==undefined) {
          post.set(key, params[key]);
        }
      });
      post.save();
      this.transitionTo('manage-blog');
    },
    deletePost(post) {
      post.destroyRecord();
      this.transitionTo('manage-blog');
    },
    deleteImage(photo) {
      alert("delete functionality not currently working");
      // this.store.findRecord('posts', { title: "Kortney" }).then(function(response) {
      //   response.destroyRecord();
      // });
      // this.store.query('posts', { filter: { "images": photo  }}).then(function(image) {
      //   debugger;
      //   image.deleteRecord();
      //   image.get('isDeleted');
      //   image.save();
      // });
      this.transitionTo('manage-blog');
    }
  }
});
