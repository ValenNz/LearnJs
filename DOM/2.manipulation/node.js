/* Node Manipulation */

/* Create Element  */
const pBaru =document.createElement('p') // Membuat element baru
const textPBaru = document.createTextNode('paragraf baru') // Mengisi element baru 

/* Save */
pBaru.appendChild(textPBaru) // Mengirim data baru

/* Save pBaru di akhir section A */
const sectionA = document.getElementById('a')   // Mendapatkan id = a
sectionA.appendChild(pBaru) // Mengim data 

const liBaru = document.creaateElement('li') // Mendapatkan element li
const teksLiBaru = document.createTextNode(' Item Baru ')   // Mengisi element
liBaru.appendChild(teksLiBaru)  // Mengirim data baru
 
const ul = document.quierySelector('section#b ul') // Mendapatkan semua element ul
const li2 = ul.quierySelector('li:nth-child(2)') // cari section li yang dia anak ke2
ul.insertBefore(liBaru, li2) // Simpan didalam ul dengan elemen liBaru sebelum li2

const link = document.getElementsByTagName('a')[0] // menangkap element a pada [0] tag pertaman

sectionA.removeChild(link) // Cari section lalu hapus chilld link


const sectionB = document.getElementById('b')   // mendapatkan element by id
const p4 = sectionB.querySelector('p')  // menangkap element yang akan direplace

const h2Baru = document.createElement('h2') // Membuat element baru
const teksH2baru = document.createTextNode('Judul Baru')    // Menisi element

h2Baru.appendChild(teksH2baru)  // memasukan text ke h2Baru

sectionB.replaceChild(h2Baru, p4) // Melakukan replace dengan ambil parent lalau kita replace childe dengan menerima 2 param yaitu node baru yang akan meriplace p4
pBaru.style.backgroundColor = 'lightgreen'
liBaru.style.backgroundColor = 'lightgreen'
h2Baru.style.backgroundColor = 'lightgreen'