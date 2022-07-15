//jshint esversion:6

//const fs = require("fs"); //using FileSystem Module
//fs.copyFileSync("file1.txt", "file2.txt");

const superheroes = require("superheroes");
var mySuperheroName = superheroes.all;
console.log(mySuperheroName);

const supervillains = require('supervillains'); 
var mySupervillainsoName = supervillains.random();
console.log(mySupervillainsoName);