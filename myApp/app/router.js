import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  //this.route('about', {path: 'about'});

  // if your path is going to match the string you passed it you dont need to specify path. can just do:

  this.route('about');
  this.route('services');
  this.route('contact');

  this.route('posts', function() {
    this.route('new');
    this.route('post', {path: 'post_id'});
  })

  this.route('events');
});

export default Router;
