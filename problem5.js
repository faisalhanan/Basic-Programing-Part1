//----MENGHITUNG LUAS SEGITIGA
let jari = 4;
let tinggi = 5;

let luasAlas = jari * jari * 3.14;
let kelilingAlas = 2 * jari * 3.14;
let luasSelimut = kelilingAlas * tinggi;
let luasPermukaan = 2 * luasAlas + luasSelimut;

console.log("Luas permukaan tabung adalah: " + luasPermukaan);