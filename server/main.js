var testDB = Test.find().fetch();

if (testDB.length === 0) {
  for (var i = 0; i < 10000; i++) {
    Test.insert({
      createdAt: new Date(),
      no: i,
      dbName: "testDB",
      calc: i*12345
    });
  }
}

//weifjweifj


//admin account
var user = MyUser.find({
  name: 'admin'
}).fetch();


if (user.length === 0) {
  MyUser.insert(
    {
      name: 'admin',
      id: 'admin',
      pw: 'admin123',
      email: 'admin@gmail.com',
      phone: '010-xxx-xxxx'
    }
  );
}
