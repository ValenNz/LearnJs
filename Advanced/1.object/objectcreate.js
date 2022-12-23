/* Function Declaration */

const methodPelajar = {
     /* Maeke Object wiht Functiom param */ 
    makan : function (porsi){
        this.energy += porsi;
        console.log(`Halo ${this.nama}, Selamat makan!!`);
    },

    main : function (jam){
        this.energy -= jam;
        console.log(`Halo ${this.nama}, Selamat bermain!!`);
    },

    tidur : function (jam){
        this.energy += jam * 2
        console.log(`Halo ${this.nama}, Selamat tidur!!`);
    }
}

function Pelajar(nama,energy) {
    /* Deklarasi Object */
    let pelajar = Object.create(methodPelajar); // make object with save param to parent object with bring property function else
    pelajar.nama = nama; // isi object | nama_object.nama_object = param function
    pelajar.energy = energy;
    return pelajar
}

let valen = Pelajar('valen',100) // instisiasi object (mengisi object)
console.log(`${valen.tidur(5)}`)
console.log(`${valen}`)
let budi = Pelajar('budi',100)