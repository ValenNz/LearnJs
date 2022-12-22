// /* Selector */

// /* document.querySelector() -> element */
// const p4 = document.querySelector('#b p') // carikan saya yang id = b dan paragraf
// p4.style.color = 'green'
// p4.style.fontSize = '30'

// const li2 = document.querySelector('selection#b ulli:nth-child(2)') // cari section id = b didalam ull li yang dia anak ke2
// li2.style.baclgroundColor = 'orange'

// /* document.querySelectorAll() */
// const p = document.querySelectorAll('p');   // Cari selection p
// for(let i = 0; i < p.length; i++){
//     p[i].style.baclgroundColor = 'lightblue'
// }

/* Changes Node root */
const sectionB = document.getElementById('b')
const p4 = sectionB.querySelector('p')
p4.style.backgroundColor = "orange"