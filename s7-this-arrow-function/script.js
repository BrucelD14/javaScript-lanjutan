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


// let mahasiswa = ['brucel', 'vio', 'samudera'];

// let jumlahHuruf = mahasiswa.map(function(nama) {
//     return nama.length;
// })

// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => ({ nama, jlhHuruf: nama.length }))
// console.table(jumlahHuruf);




// KONSEP THIS PADA ARROW FUNCTION

// Constructor Function
// const Mahasiswa = function() {
//     this.nama = 'brucel',
//     this.umur = 33,
//     this.sayHello = function() {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// }

// const brucel = new Mahasiswa();



// Arrow Function
// const Mahasiswa = function() {
//     this.nama = 'brucel',
//     this.umur = 33,
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// }


// Object Literal
// const mhs1 = {
//     nama: 'brucel',
//     umur: 33,
//     sayHello: () => {
//         // console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//         console.log(this);
//     }
// }



// const Mahasiswa = function() {
//     this.nama = 'brucel',
//     this.umur = 20,
//     this.sayHello = function() {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }

//     setInterval(() => {

//         console.log(this.umur++);

//     }, 800)

// }

// const brucel = new Mahasiswa();



