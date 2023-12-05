CREATE TABLE pesanan (
  id INT PRIMARY KEY,
  produk_id INT,
  FOREIGN KEY (produk_id) REFERENCES produk(id)
);
