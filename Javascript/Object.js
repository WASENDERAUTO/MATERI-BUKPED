// Membuat objek dengan sintaksis objek literal
var person = {
    nama: "John",
    usia: 30,
    pekerjaan: "Programmer"
  };
  
  // Mengakses properti objek
  console.log(person.nama); // Output: John
  console.log(person.usia); // Output: 30
  console.log(person.pekerjaan); // Output: Programmer
 
  // Menambah properti baru
person.alamat = "Jl. Contoh No. 123";

// Mengubah nilai properti
person.usia = 31;

console.log(person.alamat); // Output: Jl. Contoh No. 123
console.log(person.usia); // Output: 31

// Objek dalam objek
var student = {
    biodata: {
      nama: "Alice",
      usia: 22
    },
    jurusan: "Informatika",
    semester: 3
  };
  
  console.log(student.biodata.nama); // Output: Alice
  console.log(student.jurusan); // Output: Informatika

  // Membuat objek menggunakan constructor function
function Kendaraan(merk, tahun, warna) {
    this.merk = merk;
    this.tahun = tahun;
    this.warna = warna;
  }
  
  // Membuat instance objek kendaraan
  var mobil = new Kendaraan("Toyota", 2020, "Hitam");
  
  console.log(mobil.merk); // Output: Toyota
  console.log(mobil.tahun); // Output: 2020
  console.log(mobil.warna); // Output: Hitam

  // Iterasi properti objek menggunakan for...in
for (var key in person) {
    console.log(key + ": " + person[key]);
  }
  // Menambahkan metode dalam objek
var circle = {
    radius: 5,
    hitungLuas: function() {
      return Math.PI * this.radius ** 2;
    }
  };
  
  console.log(circle.hitungLuas()); // Output: 78.54
  
// Objek dengan properti fungsi (getter dan setter)
var temperature = {
    _celsius: 0,
    get celsius() {
      return this._celsius;
    },
    set celsius(value) {
      this._celsius = value;
    },
    get fahrenheit() {
      return this._celsius * 9/5 + 32;
    },
    set fahrenheit(value) {
      this._celsius = (value - 32) * 5/9;
    }
  };
  
  temperature.celsius = 25;
  console.log(temperature.fahrenheit); // Output: 77
  