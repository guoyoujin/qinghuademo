Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    };

    var errors = validatePost(post);
    if (errors.title || errors.url)
      return Session.set('postSubmitErrors', errors);
    
    Meteor.call('postInsert', post, function(error, result) {
      // 向用户显示错误信息并终止
      if (error)
        Errors.throw(error.reason);

      // 显示结果，跳转页面
      if (result.postExists)
        throwError('This link has already been posted');

      // Router.go('postPage', {_id: result._id});  
    });
    Router.go('home');  
  }
});

Template.postSubmit.created = function() {
  Session.set('postSubmitErrors', {});
}
Template.postSubmit.helpers({
  errorMessage: function(field) {
    return Session.get('postSubmitErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('postSubmitErrors')[field] ? 'has-error' : '';
  }
});