/* Cpread Operator 
    -   Memecah iterables menjadi single elemnt
*/

const pljr = ['Nuevalen', 'Refitra']
console.log(...pljr[0]) 



/* Mengabungkan 2 array */
const mhs = ['Nuevalen', 'Refitra']
const gr = ['Ade', 'yanti' ]
// const orang = mhs.concat(dosen) // xama seperti spread operator

const orang = [...mhs, 'Aji', ...gr]
console.log(orang)



/* Copy array */

const a = ['valen', 'budo']
// const b = a
const b = [...a]
b[0] = 'yanto'
console.log(a) // array awal tidak akan berubah
console.log(b) // array copy akan berubah


const liMhs = document.querySelectorAll('li') // select semua element LI
const mhs2 = [...liMhs].map(m=>m.textContent) // tiap elemnt kita map persentasikan var m yang return m.text content 
console.log(mhs2)

const nama = document.querySelector('.nama') // ambil class nama
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('') // pecah tiap tiap huruf dng spreed dan textContentnya. lalu loop dngn map dipresentasikan var h yang return span h .join(') :jadi string aja
nama.innerHTML = huruf // setiap elemnt html ditimpa huruf
