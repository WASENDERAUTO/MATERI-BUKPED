var angka1 = 5;
var angka2 = "5";
console.log(angka1 == angka2); // Output: true (meskipun tipe data berbeda, nilainya sama)

var x = 10;
var y = "10";
console.log(x != y); // Output: false (meskipun tipe data berbeda, nilainya sama)

var num1 = 5;
var num2 = "5";
console.log(num1 === num2); // Output: false (tipe data berbeda)

var a = 10;
var b = "10";
console.log(a !== b); // Output: true (tipe data berbeda)

var nilai1 = 8;
var nilai2 = 5;
console.log(nilai1 > nilai2); // Output: true

var p = 12;
var q = 15;
console.log(p < q); // Output: true

var m = 10;
var n = 10;
console.log(m >= n); // Output: true

var r = 8;
var s = 12;
console.log(r <= s); // Output: true

var nilai = 75;

if (nilai >= 80) {
  console.log("Nilai A");
} else if (nilai >= 70) {
  console.log("Nilai B");
} else {
  console.log("Nilai C");
}

var usia = 25;
var pekerjaan = "Developer";

if (usia > 18 && pekerjaan === "Developer") {
  console.log("Selamat datang!");
} else {
  console.log("Maaf, tidak memenuhi syarat");
}

