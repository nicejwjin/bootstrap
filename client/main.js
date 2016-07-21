Template.body.events({
    'click #btn_write': function(evt, tmpl) {
        evt.preventDefault();

        var name = $("#writer").val();
        var article = $('#article').val();

        var obj = {};
        obj.name = name;
        obj.article = article;
        Database.insert(obj);
    },
    'click #btnRemove': function(evt, tmpl) {
            evt.preventDefault();

            Database.remove({
                _id: this._id
            });

    }

});

Template.body.helpers({
    lists: function() {
        return Database.find().fetch();
    }
});