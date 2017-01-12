import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },
  actions: {
    addImage() {
      Ember.$('form').append('<label>New Image</label><input class="newImage" type="new" placeholder="image URL">');
    },
    createPost() {
      var newImage = Ember.$('.newImage').map( function(){return Ember.$(this).val(); }).get();
      var imagesArray = [];
      newImage.forEach(function(photo){
        var object = {image: photo};
        imagesArray.push(object);
      });
      var params = {
        images: imagesArray,
        title: Ember.$('#title').val(),
        place: Ember.$('#place').val(),
        date: Ember.$('#date').val(),
        type: Ember.$('#type').val(),
        text: Ember.$('#text').val(),
        cover: Ember.$('#cover').val(),
      };
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('manage-blog');
    }
  }
});
