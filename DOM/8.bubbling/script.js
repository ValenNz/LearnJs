/** ketika memiliki event yang ditombol close maka card nya akan dijalankan dengan sistem katas sampai tidak ada element pembungku  */

/* DOM TRAVERSAL */
const close = document.querySelectorAll('.close')

close.forEach(function(el) {
    el.addEventListener('click', function(e){ // setiap tombol close sudah ditempel tombl click
        e.target.parentElement.style.display = 'none' // menghide hasi
        e.preventDefault();
        e.stopPropagation(); // memberhentikan event
    })
});

const cards = document.querySelectorAll('.card')
cards.forEach(function(card){
    card.addEventListener('click', function(e){
        alert(ok)
    })
})

const container = document.querySelector('.container') 

container.addEventListener('click', function(e){
    if(e.target.className == 'close') {
        e.target.parentElement.style.display = 'none' // ambil target. ambil parent. ubah stylw
        e.preventDefault()
    }
})