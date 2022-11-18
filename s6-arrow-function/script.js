// function expression

// const tampilNama = function (nama) {
//   return `Halo, ${nama}`;
// };

// console.log(tampilNama('brucel'));


// const tampilNama = (nama) => {return `Halo, ${nama}`};
// console.log(tampilNama('violita'));

// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`
// }
// console.log(tampilNama('samudera', 'malam'));

// const tampilNama = nama => `Halo, ${nama}`;
// console.log(tampilNama('violita'));

// const tampilNama = () => `Hello World`;
// console.log(tampilNama());


let mahasiswa = ['brucel', 'vio', 'samudera'];

// let jumlahHuruf = mahasiswa.map(function(nama) {
//     return nama.length;
// })

// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

let jumlahHuruf = mahasiswa.map(nama => ({ nama, jlhHuruf: nama.length }))
console.table(jumlahHuruf);