/* Promise
    Object yang mepresentaiskan keberhasilan / kegagalan sebuah event yang asyncronus dimasa yang akan datang
    state (keadaan)
    terpenuhi (fulfilled)
    Tidak terpenuhi (rejected)
    process (pending)

    Function callback 
    resolve : ketika janji terpenuhi
    reject : ketika janji tidak terpenuhi
    finaly : waktu utngu tepenuhi baik dipenuhi mauoun tidak
    
    Aksi 
    then : janji terpenuhi
    catch : tidak terpenuhi
*/

// 7.36
/* Contoh 1 */
// let ditepati = false
// const janji1 = new Promise((resolve,reject)=> {
//     if(ditepati){
//         resolve('Janji telah ditepati')
//     } else {
//         reject('ingkar janji')
//     }
// })

// janji1
// .then(response => console.log('OK :' + response))
// .catch(response => console.log('NOT OK : ' + response)) 

/* Contoh 2 */
// let ditepati = true
// const janji2 = new Promise((resolve,reject) => {
//     if(ditepati){
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu')
//     }, 2000)
//     } else {
//         setTimeout(() => {
//             resolve('Tidak ditepati setelah beberapa waktu')
//     }, 2000)
//     }
// })

// console.log('mulai')
// // console.log(janji2.then(() => console.log(janji2))) //  jika ditepati dengan menjalankan then memeanggil callback function maka selesaikan promise
// janji2.finally(() => console.log('selesai menunggu')) // jalan finally baru then
//     .then(response => console.log('OK :' + response))
//     .catch(response => console.log('NOT OK : ' + response)) 
// console.log('selesai')

/* Promise.all() method all dijalankan sekaligus */
const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Avangers',
            sutradara: 'joko tingkir',
            pameran : 'yanro, jonro'
        }])
    }, 1000)
})

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Malang',
            temp: 23,
            pameran : 'Bledek Asyiapp'
        }])
    }, 500)
})

/* Menjalankan promise secara bersamaan */
Promise.all([film, cuaca]).then(response => console.log(response))
.them(response => {
    const[film, cuaca] = response // dipecah
    console.log(film)   // output
    console.log(cuaca)
})

