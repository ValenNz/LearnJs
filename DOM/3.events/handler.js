const p3 = document.querySelector('.p3') // menangkap lement class p3

/* Function Events */
function ubahWarnaP3(){
    p3.style.backgroundColor = 'lightblue'
}   

function ubahWarnaP2(){
    p2.style.backgroundColor = 'lightblue'
}

const p2 = document.querySelector('.p2')   // Menangkap element class p2
p2.onclick = ubahWarnaP2    // ketika diklik maka berubah warna



