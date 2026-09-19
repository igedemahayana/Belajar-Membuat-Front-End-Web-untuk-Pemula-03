// 1. Browser Object Model (BOM)

const { createElement } = require("react");

// Method alert()
const username = "Arum";
alert(`Halo ${username} selamat datang di Materi BOM & DOM`);
// Method alert() merupakan salah satu method BOM yg menerima 1 parameter opsional
// berupa data string yang akan ditampilkan melalui sebuah pop-up browser.

// Method prompt()
let pesanInput = prompt("Masukkan Hobi Kamu:");

// Method console()
console.log("Menampilkan pesan ke console browser");
console.info("Menampilkan pesan yang berisi informasi penting ke browser");
console.warn("Menampilkan pesan dalam bentuk peringatan");
console.error("Menampilkan pesan dalam bentuk error");

// 2. Document Object Model (DOM)
const head = document.head;
console.log(head);
// mendapatkan konten-konten pada elemen dengan tag <head> melalui objek document

const body = document.body;
console.log(body);
// mendapatkan konten-konten pada elemen dengan tag <body> melalui objek document

// document.getElementById("buttonBlue");
// document.getElementsByName();
// document.getElementsByClassName();
// document.getElementsByTagName();
// document.querySelector("#buttonBlue");
// document.querySelectorAll("#buttonBlue");

// 3. Membuat Element HTML
// membuat element p dengan createElement
const newElementParagraf = document.createElement("p");
// memberikan teks pada element p
newElementParagraf.innerText = "Halo aku Mahayana";

// membuat element gambar dengan createElement
const newImage = document.createElement("img");
// berhasil dibuat tapi kita belum memberikan tag atribut src pada img
// kita bisa memberikan function bernama setAttribute()
newImage.setAttribute("src", "https://picsum.photos/200/300");
// Function ini menerima 2 parameter, yaitu nama atribut yg ingin ditambahkan
// dan nilai yang ingin diberikan dalam artribut tersebut.

// Output: ini tidak akan muncul dihalaman setelah kita membuatnya karena kita belum mesematkan ke berkas HTML
