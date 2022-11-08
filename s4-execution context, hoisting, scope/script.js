// execution context, hoisting & scope

// console.log(nama);
// var nama = "Brucel"; 

// creation phase pada global context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// execution phase


// var nama = 'Brucel';
// var umur = 20;
// console.log(sayHello());

// function sayHello() {
//     return(`halo nama saya ${nama}, saya ${umur} tahun`);
// }

// function membuat local execution context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting


var nama = 'Brucel D.';
var username = '_samudera';

function cetakURL(username) {
    var instagramURL = 'http://instagram.com/';
    return instagramURL + username;
}

console.log(cetakURL(username));