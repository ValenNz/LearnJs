/* Asyncronus function
    -   Sebuah fn yang bekerja secara asyncronus (melalui event loop), yang menghasilkan (implisit) promise sebagai erturn value, tapi cara penulisan codenya menggunakan penulisan yang syncronus (standard)
    -   dapat memiliki key await di dalam untuk memberhentikan sementara eksekusi sambil menunggu promise selesai

*/

// const coba = new Promise((resolve, reject) => {
//     const waktu = 3000
//     if( waktu < 5000){
//     setTimeout(() => {
//         resolve('selesai')
//     }, waktu)
// } else {
//     reject('kesuwen')
// }
// })
// console.log(coba)
// coba
//     .then(() => console.log(coba))
//     .catch(() => console.log(coba))


// function cobaPromise() {
//     return new Promise(resolve => {
//         setTimeout(()=> {
//             resolve('selesai')
//         }, 2000)
//     })
// }

// // const tes = cobaPromise();
// // coba.then(() => console.log(coba))

async function cobaAsync() { // js didalam scipt ada async
    /* Coba error handling */
    try {
        const coba = await cobaPromise() // sebelum dijalankan menunggu hingga promise selesai baru tampilkan
        console.log(coba) // tampilkan 
    } catch (err){ // jika error 
        console.error(err) // tampilkan pesan
    }
}

cobaAsync();