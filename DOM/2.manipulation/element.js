/* Inner Html (memasukan element ) */

// const judul = document.getElementById('judul')
// judul.innerHTML = '<em>Nuevalen Refitra Alswando'

// const sectionA = document.querySelector('section#a')
// sectionA.innerHTML = '<div><p>paragraf1</p></div> '

/* CSS */
// const judul = document.querySelector('#judul')
// judul.style.color = 'lightblue'
// judul.style.backgroundColor = 'salmon'


/* Atribute */
// const judul = document.getElementsByTagName('h1')[0]; // h1 ambil id ke 0
// /* Tulis Di inspex */
// // judul.setAttribute('name', 'valen') //  menambahkan atribute name
// // judul.getAttribute('id')
// // a.removeAttribute('href)

// const a = document.querySelector('section#a a') // Menyeleksi a yang ada pada section id a

// const p2 = document.querySelector('.p2') // menangkap elemen clasnn p2
// p2.setAttribute('class', 'label')   // Add class label

/* Class */
const p2 = document.querySelector('.p2') // menangkap elemen clasnn p2
p2.classList.list()                     // menampilakn semua class
p2.classList.add('label')               // menambahkan class label
p2.classList.remove('label')            // akan hapus class label
p2.classList.toggle('label')            // akan check apakah p2 punya label atau tidak jika sudah hapus  
p2.classList.item('label')              // Mwngwtahui namaclass
p2.classList.contains('dua')            // apakah ada nama class 2
p2.classList.replace('tiga','empat')    // replace tiga jadi empat

