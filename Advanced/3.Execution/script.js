/* Variabel */
console.log(nama)   // akan undifined karna berum di deklarasi
var nama = 'valen'

/* Creation phase pada Global context 
    -   nama var    : undefined
    -   nama function : fn()
    -   hositing
    -   window  : global object
    -   this    : whindow 
*/

/* Execuition phase */
var nama = 'valen'
var username = '@nuevalen_nz'

function cetakURL(username){
    console.log(arguments[0])
    var instagramURL = 'https://www.instagram.com/'
    return instagramURL + username
}
console.log(cetakURL('@luthfiyah_meisya', '@valennz5'))





function satu() {
    var nama = 'valen'
    console.log(nama)
}

function dua() {
    var nama = ' meisya'
    console.log(nama)
}
console.log(nama)
var nama = 'budi';
satu()
dua('dody')
console.log(nama)



function a() {
    console.log('ini a')

    function b() {
        console.log('ini b')
        function c () {
            console.log('ini c')
        }
        c()
    }  
    b()
}
a()