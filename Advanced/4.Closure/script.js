/* Lexical Scope */
function init () {
    /* Make local var  */
    let nama = 'valen'
    let umur = 17
    // function tampilNama(){
    return function (){  // inner function (closure)
        console.info(nama); // acc parent variable
        console.info(umur);
    }
    console.info(tampilNama())
    console.info(tampilNama)
    return tampilNama
}

let panggilNama = init() // jalankan function inir
panggilNama('valen')

/* Make Closire (factory function ) */
function ucapkanSalam(waktu){
    return function (nama){
        console.info(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan`)
    } 
}

/* Add value param */
let selamatPagi = ucapkanSalam('pagi')
let selamatSiang = ucapkanSalam('siang')
let selamatMalam = ucapkanSalam('malam')

/* Output program */
selamatPagi('kakak')
selamatSiang('Ayang')
selamatMalam('mama')

console.dir(selamatMalam) // melihat dari isi var selamatMalam
console.dir(selamatMalam('budi'))


/* Make function closure */
let add = function (){
    let counter = 0 // make var
    return function(){ // make closer
        return ++counter
}
}

counter = 100
console.info(add())
console.info(add())
console.info(add())