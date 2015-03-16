if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'guoyoujin',
    url: 'http://www.baidu.com'
  });

  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  });

  Posts.insert({
  title: 'Meteor Docs',
  author: 'Tom Coleman', 
  url: 'http://docs.meteor.com'
  });
}