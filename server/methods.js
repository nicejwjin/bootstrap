//SELECT * from DB where 1000 <= no <= 10000

cl = console.log;

var standard = Test.findOne(
  {
    _id: 'o5szgNdo8qKZuyPKo'
  }
);

//cl(Test.find({
//  createdAt: {$lt: standard.createdAt}
//}).fetch().length);

var obj = {};
obj.key = 'val';
obj.key2 = 'val2';
obj.key3 = 10;
cl(obj);
var arr = [];
arr.push('val1');
arr.push('val2');
cl(arr);
arr.pop();
cl(arr);
cl(arr.length);


//$gte $gt $lte $lt $eq $ne

//var tmp = Test.find({no: 9938}).fetch();
//var tmp = Test.find({
//  no: {$gte: 9938, $lt: 10000},
//  calc: {$in: [122684610, 123437655]}
//}).fetch();
//
//cl(tmp);