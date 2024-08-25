const readFile = require('./readFile');
const startServer = require('./server');
const sum = require('./modules/sum');

// Menjalankan fungsi membaca file
readFile();

// Menjalankan server HTTP
startServer();

// Menggunakan fungsi penjumlahan dari modul
const result = sum(5, 3);
console.log(`Hasil penjumlahan: ${result}`);
