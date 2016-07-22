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
  },
  'login': function(obj) {
    var id = obj.name;
    var pw = obj.article;
    var user = MyUser.findOne({id: id});
    if(user) {
      //id가 있는 상태
      if(user.pw === pw) {
        return '로그인 되었습니다';
      }
      else {
        return '비밀번호가 다릅니다';
      }

    }
    else {
      //id가 없는 상태
      return '일치하는 사용자가 없습니다';
    }
  }
});