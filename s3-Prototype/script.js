// cara membuat object pada JS
// 1. Object Literal
// TIDAK EFEKTIF UNTUK OBJECT YANG BANYAK
// let mahasiswa1 = {
//   nama: "Brucel",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan`);
//   },
// };

// let mahasiswa2 = {
//   nama: "Vioo",
//   energi: 18,
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan`);
//   },
// };

// 2. Function Declaration

// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`halo ${this.nama}, selamat maam`);
//   },
//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat mainn`);
//   },

//   tidur: function(jam) {
//     this.energi += jam * 2
//     console.log(`Halo ${this.nama}, selamat tidur`);
//   }
// };
// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }

// let bucel = Mahasiswa("Brucel", 10);
// let vio = Mahasiswa("Violita", 18);



// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(porsi) {
//   this.energi += porsi;
//   return `Halo ${this.nama}, selamat makan!`
// }

// Mahasiswa.prototype.main = function(jam) {
//   this.energi -= jam;
//   return `Halo ${this.nama}, selamat bermain!`
// }

// Mahasiswa.prototype.tidur = function(jam) {
//   this.energi += jam * 2;
//   return `Halo ${this.nama}, selamat turuu!`
// }

// let bucel = new Mahasiswa('Brucel', 10);


// versi Class
// class Mahasiswa {
//   constructor(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//   }

//   makan(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`
//   }
//   main(jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain!`
//   }
//   tidur(jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, selamat turuu!`
//   }
// }

// let bucel = new Mahasiswa('Brucel', 10)
// let vio = new Mahasiswa('Violita', 15)


let angka = 7;
// console.log(angka);







// 3. Constructor Function
// keyword new
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`halo ${this.nama}, selamat maam`);
//   };

//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat mainn`);
//   };
// }

// let bucel = new Mahasiswa('Brucel', 17);

// 4. Object.create
