// function init() {
// //   let nama = "Brucel";
//   return function (nama) {
//     console.log(nama);
//   }
// }
// let panggilNama = init();
// panggilNama('brucel');
// panggilNama('vioo');




// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}. Semoga harimu menyenangkan!`);
//     }
// }

// let selamatPagi = ucapkanSalam('pagi')
// let selamatSiang = ucapkanSalam('siang')
// let selamatMalam = ucapkanSalam('malam')

// console.dir(selamatMalam('brucel'))


let add = (function() {
    let counter = 0;
    return function() {
        return ++counter;
    }
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());