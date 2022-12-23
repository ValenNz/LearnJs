function init () {
    let nama = 'valen'
    let umur = 17
    // function tampilNama(){
    return function (nma){
        let nama = 'galih'
        console.log(nama);
        console.log(umur);
    }
    console.log(tampilNama())
    console.log(tampilNama)
    return tampilNama
}

init()

let panggilNama = init()
panggilNama('valen')




function ucapkanSalam(waktu){
    return function (nama){
        console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan`)
    }
}

let selamatPagi = ucapkanSalam('pagi')
let selamatSiang = ucapkanSalam('siang')
let selamatMalam = ucapkanSalam('malam')

selamatPagi('kakak')
selamatSiang('Ayang')
selamatMalam('mama')

console.dir(selamatMalam)
console.dir(selamatMalam('budi'))


let add = function (){
    let counter = 0
    return function(){
        return ++counter
}
}

counter = 100
console.log(add())
console.log(add())
console.log(add())