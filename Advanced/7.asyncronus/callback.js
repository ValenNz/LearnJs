/* Simpan kedalam xampps */
/* Syncronus Callback
    -   Function yang dijalankan setelah function lain dijalankan 
*/
// function halo(nama){ // function ini akan dikirimkan sebagai param di function lain
//     alert(`halo, ${nama}`)
// }

// function tampilPesan(Callback){ // akan menerima param berupa function
//     const nama = prompt('masukan nama anda') // propt() : meminta dari user
//     Callback(nama)  // Akan menjadikan sebuah param dari function call back(halo)
// }

// // tampilPesan(halo) // callback funtion
// tampilPesan(nama => alert(`Halo, ${nama}`)) // anonymus arrow function


/* Asyncronus Vanila JS*/

// /* Function get data mahasisswa with param url success(callback) error(callback) */
// function getDataMahasiswa(url, success, error){
//     let xhr = new XMLHttpRequest(); // make object ajax

//     xhr.onreadystatechange = function(){ // make var with functin to state
//         if (xhr.readyState === 4){ // jka redystate (ketika ingin melakukan req dng ajax) = 4
//             if (xhr.status === 200){    // jika status 200 (ok) bisa acc halaman
//                 success(xhr.response) // maka butuh respon (success)
//             } else if (xhr.status == 404){ // jika error
//                 error() // tampilkan error nya
//             }
//         }
//     }
//     xhr.open('get',url) // membuka url to acc halaman
//     xhr.send()  // Melakukan pengiriman
// }

// console.log('mulai')
// getDataMahasiswa('data/mahasiswa.json',results => {  // make callback anonymous function
//     const mhs = JSON.parse(results) // lakkakn parse ke JSON supaya jadi object
//     mhs.forEach(m => console.log(m.nama)) // perulangan untuk menampilkan nama
// }, () => {
// })
// console.log('selesai')

/* JQUERY */
console.log('mulai')
$.ajax({ // $ : jquery, call method ajax dng property
    url: 'data/mahasiswa.json', // urlnya meng acc file
    success: (mhs) => { // jika succes 
        mhs.forEach(m => console.log(m.nama)) // lakukan perulangan dan tampilkan namanya
    },
    error: (e) => { // return e:errror
        console.log(e.responseText)    // jika error tampilkan dalam bentuk teks
    }
})
console.log('selesai') // tes end

