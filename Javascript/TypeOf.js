var angka = 10;
var teks = "Hello";
var array = [1, 2, 3];
var objek = { nama: "John", umur: 25 };
var bool = true;
var kosong = null;
var tidakTerdefinisi;

console.log(typeof angka);         // Output: number
console.log(typeof teks);          // Output: string
console.log(typeof array);         // Output: object
console.log(typeof objek); 

function myFunction() {
    console.log("Hello, World!");
  }
  
  console.log(typeof myFunction); // Output: function

  var data = null;

if (data === null) {
  console.log("Variabel data bernilai null");
} else {
  console.log("Variabel data bukan null");
}

var buku = { judul: "JavaScript 101", halaman: 200 };

if (typeof buku === 'object' && buku !== null) {
  console.log("Variabel buku adalah objek yang tidak bernilai null");
} else {
  console.log("Variabel buku bukan objek atau bernilai null");
}

var nilai = 5;

if (typeof nilai === 'number') {
  console.log("Variabel nilai adalah tipe data number");
} else {
  console.log("Variabel nilai bukan tipe data number");
}

