// 1. Ambil element button dan teks sapa
const namaSiswa = "Tunggarum";
const buttonSapa = document.getElementById("btn-sapa");
const pesanSapa = document.getElementById("pesan-sapa");

// 2. Pasang Event Click
buttonSapa.addEventListener("click", function () {
  pesanSapa.innerText = `Selamat Datang di Belajar Event ${namaSiswa}`;
});

// 2. Kotak Pengetik & Pengubah Warna
// A. Event Input (Langsung berubah saat diketik)
const inputText = document.getElementById("input-text");
const previewText = document.getElementById("preview-text");

inputText.addEventListener("input", function (e) {
  previewText.innerText = e.target.value;
});

// B. Event Mouse (Hover / Masuk ke area Kotak)
const boxCSS = document.getElementById("boxCSS");

boxCSS.addEventListener("mouseenter", function () {
  boxCSS.style.background = "salmon"; // menjadi warna orange salmon
  // style.background mengharapkan nilai CSS, bukan class Tailwind.
});

boxCSS.addEventListener("mouseleave", function () {
  boxCSS.style.background = "green";
});

// 3. Kotak Pengubah Warna Versi Tailwind
const boxTailwind = document.getElementById("boxTailwind");

boxTailwind.addEventListener("mouseenter", function () {
  boxTailwind.classList.add("bg-blue-500");
  // classList.add mengharapkan niali Tailwind
  boxTailwind.classList.remove("bg-sky-500");
});

boxTailwind.addEventListener("mouseleave", function () {
  boxTailwind.classList.remove("bg-blue-500");
  boxTailwind.classList.add("bg-sky-500");
});
