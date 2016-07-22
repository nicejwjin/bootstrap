Meteor.methods({
  'insertData': function(obj) {
    //validation
    Database.insert(obj);
    return "글이 작성되었습니다";
  },
  'readData': function() {
    var lists = Database.find().fetch();
    return lists;
  },
  'removeData': function(_id) {
    Database.remove({_id: _id});
    return "삭제 되었습니다";
  }
});