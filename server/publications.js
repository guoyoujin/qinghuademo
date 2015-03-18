Meteor.publish('posts', function(options) {
  check(options, {
    sort: Object,
    limit: Number
  });
  return Posts.find({}, options);
});


Meteor.publish('comments', function(postId) {
  check(postId, String);
  return Comments.find({postId: postId});
});

Meteor.publish('notifications', function() {
  return Notifications.find();
});

Meteor.publish('singlePost', function(id) {
  check(id, String)
  return Posts.find(id);
});


Meteor.publish('newPosts', function(limit) {
  return Posts.find({}, {sort: {submitted: -1}, limit: limit});
});

Meteor.publish('bestPosts', function(limit) {
  return Posts.find({}, {sort: {votes: -1, submitted: -1}, limit: limit});
});