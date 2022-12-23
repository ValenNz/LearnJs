/* Property Object with method */
function Pelajar(nama,energy) {
    /* Deklarasi Object */
    /* js akan membuatkan object this */
    // let this = Object.create(Pelajar.prototype) // ada dibelakang layar | make object with save param to parent object with bring property function else
    this.nama = nama; // isi object | nama_object.nama_object = param function
    this.energy = energy;
    /* Js melakukan return this */
    // return this  // ada dibelakang layar
}

Pelajar.prototype.makan = function(porsi){
    this.energy += porsi
    return `Halo ${this.nama} , selamat makan`
}

Pelajar.prototype.main = function(porsi){
    this.energy += porsi
    return `Halo ${this.nama} , selamat main`
}

Pelajar.prototype.tidur = function(porsi){
    this.energy += porsi
    return `Halo ${this.nama} , selamat tidur`
}

let valen = new Pelajar('valen',100) // instisiasi object (mengisi object)
console.log(`${valen}`)
console.log(`${valen.makan(5)}`)
console.log(`${valen.energy}`)

/* Property Class */

class Pegawai {
    constructor(nama, energy){
    this.nama = nama;
    this.energy = energy;
    }

    makan(porsi){
        this.energy += porsi
        return `Halo ${this.nama} , selamat makan`
    }
    
    main(porsi){
        this.energy += porsi
        return `Halo ${this.nama} , selamat main`
    }
    
    tidur(porsi){
        this.energy += porsi
        return `Halo ${this.nama} , selamat tidur`
    }
}

let jamal = new Pegawai('jamal',100) // instisiasi object (mengisi object)
console.log(`${jamal}`)
console.log(`${jamal.makan(5)}`)
console.log(`${jamal.energy}`)

/* Prototype Array */
let angka =[2,1,3];
console.log(angka.reverse()) // reverse() mengembalikan isi array
console.log(angka.sort()) // sort() mengurutkan isi array
console.log(angka) // array akan mewarisi dari object array yang sudah ada di siapkan js
