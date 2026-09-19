// mengambil id gambar menggunakan getElementById
const imageCube = document.getElementById("gambar");
// Memanipulasi Atribut melalui setAttribute
imageCube.setAttribute("width", 300);
imageCube.setAttribute("height", 215);

// mengambil semua class buttons menggunakan querySeelectorAll
const buttons = document.querySelectorAll(".button");
const playButton = buttons[3]; // tombol yang kita tuju adalah tombol ke-4 (pada array buttons terletak pada indeks ke-3)
/*
Kita baru hanya mendapatkan elemen <div>, sedangkan kita hanya ingin mengakses elemen button. 
Lantas bagaimana caranya? Kita bisa menggunakan properti children 
yang akan mengembalikan semua child element yang terdapat di dalam tag <div> 
dalam bentuk HTMLCollection. Karena elemen tersebut hanya memiliki satu child element,
kita bisa memanggilnya dengan indeks 0.
*/
const playButtonElement = playButton.children[0];
// Di sini kita akan mengubah type dari tombol yang ber-caption "Play (Coming Soon)" menjadi disabled.
playButtonElement.setAttribute("disabled", true);
