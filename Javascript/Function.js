// Mendefinisikan fungsi tanpa parameter
function sapaHalo() {
    console.log("Halo!");
  }
  
  // Memanggil fungsi
  sapaHalo();
  
  // Mendefinisikan fungsi dengan parameter
function sapaNama(nama) {
    console.log("Halo, " + nama + "!");
  }
  
  // Memanggil fungsi dengan argumen
  sapaNama("John");
  
  // Mendefinisikan fungsi dengan nilai kembali
function tambahkan(angka1, angka2) {
    return angka1 + angka2;
  }
  
  // Memanggil fungsi dan menyimpan hasilnya
  var hasilPenambahan = tambahkan(5, 3);
  console.log("Hasil penambahan: " + hasilPenambahan);

  // Mendefinisikan fungsi sebagai variabel
var perkalian = function(angka1, angka2) {
    return angka1 * angka2;
  };
  
  // Memanggil fungsi yang disimpan dalam variabel
  var hasilPerkalian = perkalian(4, 6);
  console.log("Hasil perkalian: " + hasilPerkalian);

  // Fungsi anonim
var sapa = function(nama) {
    console.log("Halo, " + nama + "!");
  };
  
  // Fungsi lain yang menerima fungsi sebagai argumen
  function jalankanSapaan(fungsiSapa, nama) {
    fungsiSapa(nama);
  }
  
  // Memanggil fungsi dengan argumen fungsi dan nilai
  jalankanSapaan(sapa, "Alice");

  // Fungsi rekursif untuk menghitung faktorial
function hitungFaktorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * hitungFaktorial(n - 1);
    }
  }
  
  // Memanggil fungsi rekursif
  var hasilFaktorial = hitungFaktorial(5);
  console.log("Hasil faktorial: " + hasilFaktorial);

  