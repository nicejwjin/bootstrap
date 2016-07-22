Template.body.events({
  'click #btn_write': function(evt, tmpl) {
    evt.preventDefault();

    var name = $("#writer").val();
    var article = $('#article').val();

    var obj = {};
    obj.name = name;
    obj.article = article;
    //Database.insert(obj);
    Meteor.call('insertData', obj, function(err, rslt) {
      if (err) alert(err);
      else alert(rslt);
    });
  },
  'click #btnRemove': function(evt, tmpl) {
    evt.preventDefault();

    //Database.remove({
    //  _id: this._id
    //});
    Meteor.call('removeData', this._id, function(err, rslt) {
      alert(rslt);
    });
  }

});

Template.body.helpers({
  lists: function() {
    //return Database.find().fetch();
    Meteor.call('readData', function(err, rslt){
      Session.set('lists', rslt);
    });
    return Session.get('lists');
  }
});