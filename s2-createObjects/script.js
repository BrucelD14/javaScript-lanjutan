// cara membuat object pada JS
// 1. Object Literal
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
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`halo ${this.nama}, selamat maam`);
//   };

//   mahasiswa.main = function(jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat mainn`);
//   }

//   return mahasiswa;
// }

// let bucel = Mahasiswa("Brucel", 10);
// let vio = Mahasiswa("Violita", 18);

// 3. Constructor Function
// keyword new
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`halo ${this.nama}, selamat maam`);
  };

  this.main = function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat mainn`);
  };
}

let bucel = new Mahasiswa('Brucel', 17);

// 4. Object.create
