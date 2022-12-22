/* Dom Selection */

/* document.getElementById : Mengambil sebuah element tang memiliki id x */
const judul = document.getElementById('judul') // cari id nya judul
judul.style.color = 'red';
judul.style.backgroundColor = '#ffcc'
judul.innerHTML = "Nuevalen Refitra Alswando"

/* document.getElementByTagName() -> HTML Collections */
const p = document.getElementsByTagName('p')
for (let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0]
h1.style.fontsize = '50px';

/* document.getElementsByClassName() -> HTML Collection*/
const p1 = document.getElementsByClassName('p1')[
    p1.innerHTML = 'Ini diubah dari js'
]
