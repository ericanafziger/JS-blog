import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('post', {path: '/post/:post_id'});
  this.route('blog');
  this.route('admin');
  this.route('about');
  this.route('contact');
  this.route('user');
  this.route('manage-blog');
  this.route('edit', {path: '/edit/:post_id'});
  this.route('create');
});

export default Router;
