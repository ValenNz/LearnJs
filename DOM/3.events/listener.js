/* Create */
const p4 = document.querySelector('section#b p') // menangkap element
p4.addEventListener('click', function() {   // menambahkan aksi ketika function dibawah dijalankan
    const ul = document.querySelector('section#b ul')   // akses ul 
    const liBaru= document.createElement('li')          // create element li
    const textLiBaru = document.createTextNode(' Item Baru ')   // Mengisi element li

    liBaru.appendChild(textLiBaru)  // mrngirim isi text
    ul.appendChild(liBaru)  // Mengirim li di ul
})

// const p3 = document.querySelector('.p3') // menagkap element
/* Make function 
    -   Akan menimpa
*/
// p3.onclick = function() { // event ini akan tertimpa
//     p3.style.backgroundColor = 'lightblue' 
// }

// p3.onclick = function() { // enet ini akan menimpa envent 1
//     p3.style.color = 'red'
// }

/* Make Funtion
    -   akan di jalankan secara bersamaan
*/
// p3.addEventListener('click', function(){
//     p3.style.backgroundColor = 'lightblue'
// })

// p3.addEventListener('click', function(){
//     p3.style.color = 'red'
// })

// p3.addEventListener('dblick', function(){ // double click
//     p3.style.backgroundColor = 'lightblue'
// })

// p3.addEventListener('mouseenter', function(){ // ketika mouse masuk
//     p3.style.backgroundColor = 'lightblue'
// })
// p3.addEventListener('mouseleave', function(){ // ketika mouse keluar
//     p3.style.backgroundColor = 'red'
// })