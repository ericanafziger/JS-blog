import Ember from 'ember';

export default Ember.Component.extend({
  showBlogForm: false,
  addImageInput: false,
  actions : {
    updatePost() {
      this.set('showBlogForm', true);
    },
    addImage() {
      $('form').append('<label>New Image</label><input class="newImage" type="new" placeholder="image URL">');
    },
    hideForm() {
      this.set('showBlogForm', false);
    },
    addImageInput() {
      this.set('addImageInput', true);
    },
    savePost(post) {
      debugger;
      var newImage = Ember.$('.newImage').map( function(){return Ember.$(this).val(); }).get();
      var imagesArray = this.get('post.images');
      newImage.forEach(function(photo){
        var object = {image: photo};
        imagesArray.push(object);
      });
      console.log(imagesArray);
      var params = {
        images: imagesArray,
        // newImage: document.getElementById('new').value, //not working
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
