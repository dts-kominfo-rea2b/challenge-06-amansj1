// TODO: import module bila dibutuhkan di sini
const fs = require("fs");
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  getCurFile((firstWord) => {
    getNextFile(firstWord, (secondWord) => {
      getLastFile(secondWord, (arr) => {
        fnCallback(null,arr);
      });
    })
  });
};

function kataB(kata) {
  var w = kata.split(" ");
  return w[w.length - 1];
}

function getCurFile(fl){
 fs.readFile(file1, (err,data) =>{
   if (err) throw err
   var data = JSON.parse(data);
   var kata = [];
   kata.push(kataB(data.message))
   fl(kata);
 });
}

function getNextFile(kata, fl){
  fs.readFile(file2,(err, data)=> {
    if (err) throw err
    var data = JSON.parse(data);
    kata.push(kataB(data[0].message));
    fl(kata);
  });
}

function getLastFile(kata, fl){
  fs.readFile(file3, (err,data)=>{
    if (err) throw err
    var data = JSON.parse(data);
    kata.push(kataB(data[0].data.message));
    fl(kata);
  });
}




// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
