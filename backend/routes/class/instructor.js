
/**
* Class: Instructor
*/


const sdata= require("../../authentification.json");
const fs = require('fs');


let books=[];
let course=[];
var instructor = function(){
    //Constructor

}

instructor.prototype = new instructor();
 /* Pour ne pas perdre la référence vers constructeur de User */
instructor.prototype.constructor = instructor;






instructor.prototype.getAuthentification = function(req, res){
  //TODO: Implement Me 

console.log("***** Instructor function getAuthentification ***** "); 
// console.log(sdata.data.listTuplesFilter.length);
let response ={};
response=sdata.authentification.instructor;
res.end( JSON.stringify(response) );

};





instructor.prototype.senddata = function(req, res){
  
console.log("***** Instructor function senddata ***** "); 
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
  obj.authentification.instructor.push(req.body); //add some data
  json = JSON.stringify(obj); //convert it back to json
  fs.writeFile('./authentification.json', json, 'utf8', function(err) {
    if (err) throw err;
    console.log('complete');
    }); // write it back 
}});



};



instructor.prototype.addCourse = function(req, res){
  
  console.log("***** Instructor function addCourse ***** "); 
   var newCourse = req.body;
     course.push(newCourse)
    let value = req.body;
    console.log('value in body: ' + value);
    
  console.log(course)
  
  fs.readFile('./courses.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
    obj = JSON.parse(data); //now it an object
    // console.log(req.body.documentname)
    obj.data.listTuplesFilter.push(req.body); //add some data
    json = JSON.stringify(obj); //convert it back to json
    fs.writeFile('./courses.json', json, 'utf8', function(err) {
      if (err) throw err;
      console.log('complete');
      }); // write it back 
  }});};


/**
* @return {null}
*/



module.exports = {instructor:instructor};