/* Cara membuat object  */

/* Object Literal 
    -   Tidak efektif untuk object yang banyak
*/
// const Pelajar = {
//     nama : 'valen',
//     energy : 20,
//     /* Make object whith function */
//     makan: function (porsi){
//         this.energy = this.energy + porsi   // this memanggil vr dalam satu scope
//         console.log(`Halo ${this.nama}, Selamat makan `) // fill function (assigment)
//     }
// }
// console.log(`${Pelajar.nama}`) // print program
// console.log(`${Pelajar.makan(10)}`)
// console.log(`${Pelajar.energy}`) // print program


// const Pelajar2 = {
//     nama : 'budi',
//     energy : 234,
//     /* Make object whith function */
//     makan: function (porsi){
//         this.energy = this.energy + porsi // this memanggil vr dalam satu scope
//         console.log(`Halo ${this.nama}, Selamat makan `) // fill function (assigment)
//     }
// }
// console.log(`${Pelajar.nama}`) // print program
// console.log(`${Pelajar.makan(10)}`)
// console.log(`${Pelajar.energy}`) // print program



/* Function Declaration */
// function Pelajar(nama,energy) {
//     /* Deklarasi Object */
//     let pelajar = {}; // make object
//     pelajar.nama = nama; // isi object | nama_object.nama_object = param function
//     pelajar.energy = energy;

//     /* Maeke Object wiht Functiom param */
//     pelajar.makan = function (porsi){
//         this.energy += porsi;
//         console.log(`Halo ${this.nama}, Selamat makan!!`);
//     }

//     pelajar.main = function (jam){
//         this.energy -= jam;
//         console.log(`Halo ${this.nama}, Selamat bermain!!`);
//     }
//     return pelajar
// }
// let valen = Pelajar('valen',100)
// console.log(`${valen.makan(3)}`)
// let budi = Pelajar('budi',100)


/* Constructoor Funcction */
function Pelajar(nama,energy) { // functoin param
    this.nama = nama;   // memanggil param dengan nama param = var nama
    this.energy = energy;

    this.makan = function (porsi){
        this.energy += porsi;
        console.log(`Halo ${this.nama}, selamat makan!!`)
    }

    this.main = function (jam){
        this.energy -= jam;
        console.log(`Halo ${this.nama}, selamat main!!`)
    }
}
let yanto = new Pelajar('yanto',100) // new : membuat object baru
