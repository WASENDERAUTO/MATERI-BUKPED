var x = true;
var y = false;

console.log(x && y); // Output: false

var a = true;
var b = false;

console.log(a || b); // Output: true

var c = true;

console.log(!c); // Output: false

var usia = 25;
var pekerjaan = "Developer";

if (usia > 18 && pekerjaan === "Developer") {
  console.log("Selamat datang!");
} else {
  console.log("Maaf, tidak memenuhi syarat");
}

var p = true;
var q = false;

var xorResult = (p || q) && !(p && q);
console.log(xorResult); // Output: true

var nilai = 75;

if (nilai >= 80 && nilai <= 100) {
  console.log("Nilai A");
} else if (nilai >= 70 && nilai < 80) {
  console.log("Nilai B");
} else {
  console.log("Nilai C");
}

var nilaiUjian = 85;
var nilaiAbsen = 90;

var lulusUjian = nilaiUjian >= 70;
var lulusAbsen = nilaiAbsen >= 75;

var lulus = lulusUjian && lulusAbsen;

console.log("Status Kelulusan: " + (lulus ? "Lulus" : "Tidak Lulus"));

