var fs = require('fs');
var nArgs = process.argv.length;
var files = [];

if(nArgs <= 2){
  console.log("You must specify at least one file to be created.");
} else {
  files = process.argv.slice(2);
}

files.forEach(function (val, index, array) {
  if(val.indexOf('/') > -1 || val.indexOf('\\') > -1){
    console.log("The file: " + val + " has illegal chars. It will not be created.");
  }else{
    fs.writeFile(val, "", function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file " + val +" was saved!");
});
  }
});
