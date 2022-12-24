/* Make array */
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9]

/* Mencari angka >= 3 */

/* Filter */
const newAngka = angka.filter(a => a >= 3) // function a => jik a >= 3 print bawah
console.log(newAngka)

/* Map 
    -   Memetakan fungsi fungsi setiap elemtn
    -   contoh mengalikan setiap angka dengan 2
*/

const newAngka1 = angka.map(a=> a * 2)
console.log(newAngka1)

/* Reduce 
    -    Melakukan terhadap semua elemnt array 
*/
const newAngka2 = angka.reduce((accumulator,currentValue) => accumulator + currentValue) // param accumalator : hasil dari proses | currentValue element yang dioperasikan
console.log(newAngka2);

/* Method chaining 
    -   bisa menggabungkan order dalam satu hire function (method berantai)
    -  cth cari angka > 5 => kaklikan 3 => jumlahkan semua
*/
const hasil = angka.filter(a => a >= 5 ) // filter(a) | filter ellemnt array nya 8,9,9
    .map(a => a * 3)  // 24, 27 , 27
    .reduce((acc, cur) => acc + cur) // 78
console.log(hasil) 