// Membuat array angka
var angka = [1, 2, 3, 4, 5];

// Membuat array string
var buah = ["Apel", "Jeruk", "Mangga"];

// Mengakses elemen array
console.log(angka[2]); // Output: 3
console.log(buah[1]); // Output: Jeruk

// Mengubah nilai elemen array
angka[0] = 10;
console.log(angka); // Output: [10, 2, 3, 4, 5]

// Panjang array
console.log(buah.length); // Output: 3

// Menambahkan elemen ke akhir array
buah.push("Pisang");

// Menghapus elemen dari akhir array
buah.pop();

// Menambahkan elemen ke awal array
buah.unshift("Anggur");

// Menghapus elemen dari awal array
buah.shift();

// Menggabungkan dua array
var buah2 = ["Durian", "Semangka"];
var semuaBuah = buah.concat(buah2);

// Mengurutkan array
buah.sort();

// Membalik urutan array
buah.reverse();

// Menggunakan for loop
for (var i = 0; i < angka.length; i++) {
    console.log(angka[i]);
  }
  
  // Menggunakan forEach
  buah.forEach(function(item) {
    console.log(item);
  });
  
  // Menggunakan map
  var angkaKuadrat = angka.map(function(item) {
    return item * item;
  });
  console.log(angkaKuadrat);

  // Menggunakan filter untuk memilih elemen tertentu
var angkaGenap = angka.filter(function(item) {
    return item % 2 === 0;
  });
  console.log(angkaGenap);
  
  // Menggunakan reduce untuk menghitung nilai akumulasi
  var totalAngka = angka.reduce(function(akumulator, nilai) {
    return akumulator + nilai;
  }, 0);
  console.log(totalAngka);

  // Array dua dimensi
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log(matrix[1][2]); // Output: 6

  