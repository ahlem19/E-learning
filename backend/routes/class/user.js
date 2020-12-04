

/**
* Class: User
*/

const data= require("../../courses.json");
const sdata= require("../../authentification.json");
const fs = require('fs');


let books=[];
var user = function(){
    //Constructor

}

user.prototype = new user();
 /* Pour ne pas perdre la référence vers constructeur de User */
user.prototype.constructor = user;



user.prototype.getcourses = function(req, res){
    //TODO: Implement Me 
  console.log("***** User function getcourses ***** "); 
 
  console.log(data.data.listTuplesFilter.length);
  // let json=data.data.listTuplesFilter;
  let response ={};
  // json.forEach((item) => {
  // response.documentname =data.data.listTuplesFilter[0].documentname;
  // response.documentname =item.documentname;
  // response.date=item.date;
  // response.image=item.image;
  
  response=data.data.listTuplesFilter;
  res.end( JSON.stringify(response) );


};



user.prototype.getAuthentification = function(req, res){
  //TODO: Implement Me 

console.log("***** User function getAuthentification ***** "); 
// console.log(sdata.data.listTuplesFilter.length);
let response ={};
response=sdata.authentification.student;
res.end( JSON.stringify(response) );

};




user.prototype.deletedata = function(req, res , attributes){
  //TODO: Implement Me 
console.log("***** User function deletedata ***** "); 

fs.readFile('./authentification.json', 'utf8', function readFileCallback(err, data){
  if (err){
      console.log(err);
  } else {
    // const userId = 'tutorial_LSSCreen222.html';
    // let value=attributes;
    // console.log("value:" +value)
  obj = JSON.parse(data); //now it an object

  obj.authentification.student.forEach((user, index) => {
    if (user.documentname === attributes) {
      obj.authentification.student.splice(index, 1);
    }
  });

  // delete obj.data.listTuplesFilter.splice(0,1);
 
  fs.writeFile('./authentification.json', JSON.stringify(obj, null, 2), () => {
    res.status(200).send(`users id:${attributes} removed`)
    
    })
}});


data.data.listTuplesFilter.forEach((data, index) => {
  if (data.documentname === attributes) {
    data.isadd = 'false';
  }
});



// if you want to persist the data

fs.writeFileSync('./courses.json', JSON.stringify(data));

};

user.prototype.senddata = function(req, res){
  
console.log("***** User function senddata ***** "); 
 var newBook = req.body;
   books.push(newBook)
  let value = req.body;
  console.log('value in body: ' + value);
  
console.log(books)

fs.readFile('./authentification.json', 'utf8', function readFileCallback(err, data){
  if (err){
      console.log(err);
  } else {
  obj = JSON.parse(data); //now it an object
  console.log(req.body.documentname)
  obj.authentification.student.push(req.body); //add some data
  json = JSON.stringify(obj); //convert it back to json
  fs.writeFile('./authentification.json', json, 'utf8', function(err) {
    if (err) throw err;
    console.log('complete');
    }); // write it back 
}});

// data.data.listTuplesFilter.forEach((data, index) => {
//   if (data.documentname === req.body.documentname) {
//     data.isadd = 'true';
//   }
// });

// data.data.listTuplesFilter[0].isadd = 'true';

// if you want to persist the data

// fs.writeFileSync('./data.json', JSON.stringify(data));

};




/**
* @return {null}
*/



module.exports = {user:user};
