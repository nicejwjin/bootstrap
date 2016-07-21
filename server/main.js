//admin account
user = MyUser.find({
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
