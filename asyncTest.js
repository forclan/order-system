
setTimeout(function(){
    console.log(2);
},0);
setImmediate(function(){
    console.log(1);
},0);
new Promise(function(resolve){
    console.log(3);
    resolve();
    console.log(4);
}).then(function(){
    console.log(5);
}).then(()=> console.log(99))
  .then(() => console.log(100));
console.log(6);
process.nextTick(function(){
    console.log(7);
});
console.log(8);
