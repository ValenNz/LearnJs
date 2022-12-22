/* Event Handling */
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function(){
//     card.style.display = 'none';
// })

/* DOM TRAVERSAL */
const close = document.querySelectorAll('.close') // menangkap class close

// for(let i = 0; i < close.length; i++){
//     close[i].addEventListener('click', function(e){
//         // close[i].parentElement.style.display = 'none'
//         e.target.parentElement.style.display = 'none'
//     })
// }

/* Melakukan perulangan untuk mendapatkan semua */
close.forEach(function(el) {
    el.addEventListener('click', function(e){ // ketika di click maka jalankan function
        e.target.parentElement.style.display = 'none' // target parent element (apm .close) di click maka hilangkan targrt
    })
});

const nama = document.querySelector('.nama') // output element class nama

console.log(nama.parentElement) //  menampilkan element (card)
console.log(nama.parentElement.parentElement) // menampilkan element container
console.log(nama.nextSibling) // Menampika element setelahnya sama sama parent class
console.log(nama.nextElementSibling) // Akan mengabaikan enter dan langung mengambil lement selanjutnya
console.log(nama.previousElementSibling) // karena img tidak memiliki saudara (element kembar dalam satu parent)
