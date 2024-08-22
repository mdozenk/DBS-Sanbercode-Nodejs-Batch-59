let number = prompt("Masukkan sebuah angka:");
number = parseInt(number);

if (number % 2 === 0) {
    console.log(`${number} adalah angka genap.`);
} else {
    console.log(`${number} adalah angka ganjil.`);
}

let dayNumber = prompt("Masukkan nomor hari (1-7):");
dayNumber = parseInt(dayNumber);

switch (dayNumber) {
    case 1:
        console.log("Senin");
        break;
    case 2:
        console.log("Selasa");
        break;
    case 3:
        console.log("Rabu");
        break;
    case 4:
        console.log("Kamis");
        break;
    case 5:
        console.log("Jumat");
        break;
    case 6:
        console.log("Sabtu");
        break;
    case 7:
        console.log("Minggu");
        break;
    default:
        console.log("Nomor hari tidak valid.");
}
