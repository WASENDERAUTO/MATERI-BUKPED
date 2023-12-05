var nilai = 75;

if (nilai >= 70) {
  console.log("Lulus");
} else {
  console.log("Tidak Lulus");
}

var skor = 85;

if (skor >= 90) {
  console.log("A");
} else if (skor >= 80) {
  console.log("B");
} else if (skor >= 70) {
  console.log("C");
} else {
  console.log("D");
}

var umur = 20;
var status = (umur >= 18) ? "Dewasa" : "Remaja";

console.log(status);

var hari = "Senin";
var aktivitas = "";

switch (hari) {
  case "Senin":
    aktivitas = "Meeting";
    break;
  case "Selasa":
    aktivitas = "Belanja";
    break;
  case "Rabu":
    aktivitas = "Olahraga";
    break;
  default:
    aktivitas = "Libur";
}

console.log("Hari " + hari + ": " + aktivitas);

var makanan = "Pizza";
var minuman = "Cola";

if (makanan === "Pizza" && minuman === "Cola") {
  console.log("Pesanan lengkap");
} else {
  console.log("Tidak ada pesanan");
}

var cuaca = "Cerah";

if (cuaca === "Cerah" || cuaca === "Cerah Berawan") {
  console.log("Cuaca bagus");
} else {
  console.log("Cuaca tidak bagus");
}

