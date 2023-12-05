// Menggunakan tanda kutip tunggal
var kata1 = 'Halo, dunia!';

// Menggunakan tanda kutip ganda
var kata2 = "Ini adalah contoh string.";

// Menggunakan tanda kutip khusus (backticks) untuk template literals (ES6)
var nama = "John";
var kalimat = `Halo, ${nama}!`;

// Menggunakan tanda kutip tunggal
var kata1 = 'Halo, dunia!';

// Menggunakan tanda kutip ganda
var kata2 = "Ini adalah contoh string.";

// Menggunakan tanda kutip khusus (backticks) untuk template literals (ES6)
var nama = "John";
var kalimat = `Halo, ${nama}!`;

var teks1 = "Halo, ";
var teks2 = "dunia!";

// Menggabungkan string (concatenation)
var hasilGabung = teks1 + teks2;
console.log(hasilGabung); // Output: Halo, dunia!

// Menggunakan metode concat
var hasilConcat = teks1.concat(teks2);
console.log(hasilConcat); // Output: Halo, dunia!

// Mengganti substring dalam string
var teksBaru = hasilGabung.replace("dunia", "semua");
console.log(teksBaru); // Output: Halo, semua!

var kalimat = "Belajar JavaScript sangat menyenangkan.";

// Panjang string
console.log(kalimat.length); // Output: 38

// Menemukan indeks pertama kemunculan suatu substring
console.log(kalimat.indexOf("JavaScript")); // Output: 8

// Memotong string
var potongan = kalimat.slice(8, 19);
console.log(potongan); // Output: JavaScript

var teksKecil = "TULISAN KECIL";
var teksBesar = "tulisan besar";

// Mengubah menjadi huruf kecil
console.log(teksKecil.toLowerCase()); // Output: tulisan kecil

// Mengubah menjadi huruf besar
console.log(teksBesar.toUpperCase()); // Output: TULISAN BESAR

