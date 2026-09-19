# Browser Object Model (BOM)

Pada materi ini, kita akan mempelajari hal baru, yaitu Browser Object Model (BOM) dan Document Object Model (DOM). BOM dan DOM memiliki kemampuan mengubah laman web menjadi dinamis. Hal ini tidak dapat dicapai hanya dengan menggunakan HTML dan CSS saja.

## Cara JavaScript Mengontrol Website & Browser

“Bagaimana JavaScript mengontrol sebuah website atau browser?” Jawabannya ada dua, dan keduanya akan kita bahas di modul ini, yakni melalui Browser Object Model (BOM) dan Document Object Model (DOM).

Yang pertama adalah BOM. Dengan BOM, kita dapat memberikan perintah-perintah khusus ke browser, misalnya melalui sebuah ‘atribut’ khusus milik browser yakni ‘window’ (akan kita bahas di materi selanjutnya) sehingga kita bisa membuat browser menampilkan pesan pop-up. Caranya yakni menjalankan method alert() pada console milik browser.

```JavaScript
window.alert("Ini adalah Alert Browser Object Model");
```

Selain method alert(), objek window juga memiliki method-method lainnya, seperti prompt, console, dsb. Tenang, kita akan berjelajah lebih jauh pada modul-modul selanjutnya.

Cara kedua adalah DOM. DOM sama seperti BOM. Perbedaannya adalah kita menggunakan global objek bernama document. Melalui global objek ini, kita bisa menangkap seluruh elemen dalam dokumen HTML guna memanipulasi konten HTML melalui method getElementById(). Method ini akan menangkap elemen berdasarkan value dari atribut id. Sebagai contoh, kita mengubah konten elemen HTML berikut ini.

```JavaScript
document.getElementById('hello').innerHTML = "Ini adalah Document Object Model";
```

Pada contoh yang kita pelajari di atas merupakan contoh yang sangat sederhana. Kita dapat melakukan lebih banyak hal lainnya, seperti mengubah konten elemen, memberikan event tertentu pada elemen, dan sebagainya.

## Browser Environment

Selama belajar materi JavaScript yang dibahas di dalam kelas ini, apakah Anda menyadari semua kode JavaScript berjalan di perangkat browser dan tidak pada perangkat lainnya? Mengapa demikian? Karena kita menggunakan runtime environment milik browser alias semua kode JavaScript dijalankan di atas platform browser.

Pada awalnya Bahasa Pemrograman JavaScript didesain untuk berjalan di browser. Namun, seiring berjalannya waktu, kini banyak platform yang dapat menjalankan JavaScript di luar browser. Platform tersebut menggunakan runtime environment lain seperti Node JS.

Walaupun JavaScript dapat berjalan di luar browser, kita perlu tahu bahwa JavaScript yang berjalan di browser memiliki fungsionalitas khusus yang tidak bisa ditemukan di tempat lain. Hal tersebut karena ia dijalankan di dalam browser environment.

Apa istimewanya browser environment ini? Istimewanya terletak pada "peralatan-peralatan" khusus yang dapat digunakan oleh kode JavaScript untuk berinteraksi dengan browser maupun dengan dokumen HTML yang kita buat. Masih ingat dengan istilah Browser Object Model (BOM) dan Document Object Model (DOM)? Keduanya secara khusus hanya tersedia untuk JavaScript yang dijalankan dalam browser environment.

Pada gambar di bawah ini, kita melihat representasi dari objek window yang hanya bisa diakses oleh JavaScript dalam browser environment. Dengan melalui objek window, kita bisa mengakses DOM serta BOM.

Sehingga, jika kita menjalankan kode JavaScript yang berjalan di luar browser environment, maka browser object (window) dan document object (document) tidak akan tersedia dan menyebabkan error. Sebagai contoh, jika kita menjalankan method alert() di environment browser, alert dialog akan muncul

Namun, jika menggunakan glot.io, method tersebut akan melemparkan error karena pada situs tersebut (compiler online) kode JavaScript dijalankan di environment NodeJS, yang mana tidak tersedianya BOM maupun DOM.

## Browser Object Model (BOM)

Setiap browser menyediakan apa yang disebut Browser Object Model atau BOM yang bisa kita gunakan dalam kode JavaScript kita. Dalam browser, BOM ini diwakilkan oleh sebuah objek bernama window. Mari kita ketik window pada console browser dan lihat method dan method apa saja yang tersedia

Melalui objek window inilah kode JavaScript kita bisa mengakses berbagai method dan atribut yang bisa membantu kita membuat halaman web menjadi lebih interaktif. Kemungkinan Anda akan tertegun melihat begitu banyak method serta atribut. Akan tetapi,

Anda tidak diharapkan untuk menghafal semuanya karena pada materi berikutnya kita cukup membahas 3 method paling dasar yakni alert(), prompt(), dan objek console.

## Anggota BOM: Method alert

Method alert() merupakan salah satu method BOM yang menerima satu parameter opsional berupa data string yang akan ditampilkan melalui sebuah pop-up browser.

```JavaScript
const username = "Arum";
alert(`Halo ${username} selamat datang di Materi BOM & DOM`);
```

## Anggota BOM: Method prompt

Nah, selain menampilkan pesan, kita juga akan belajar cara mengambil data input dari user melalui dialog browser, yaitu prompt(). Method ini akan menampilkan sebuah dialog browser yang meminta user untuk mengisi kolom inputnya. Karena bisa menangkap input dari user, method ini memiliki lebih banyak fungsionalitas ketimbang alert()

Jika kita lihat, sebenarnya method alert() mengembalikan sebuah value berupa undefined. Namun, prompt() akan mengembalikan sebuah nilai sesuai dengan inputan user.

```JavaScript
// Method prompt()
let pesanInput = prompt("Masukkan Hobi Kamu:");
```

## Anggota BOM: Method console

Akhirnya kita sampai pada pembahasan objek console . Objek ini merupakan peralatan yang wajib diketahui oleh semua Front-End Web Developer. Mengapa demikian? Hal ini karena objek console memberikan kita akses ke fitur debugging alias peralatan-peralatan yang bisa membantu menghilangkan bug yang bersembunyi di dalam kode JavaScript.

```JavaScript
console.log("Menampilkan pesan ke console browser");
console.info("Menampilkan pesan yang berisi informasi penting ke browser");
console.warn("Menampilkan pesan dalam bentuk peringatan");
console.error("Menampilkan pesan dalam bentuk error");
```

## Cara Memanggil Anggota BOM Browser Object Model

Ketika kalian ingat akan peraturan sintaks JavaScript, bukankah memanggil properti atau sebuah method dari suatu objek perlu menyertakan nama objek dan diikuti oleh nama properti atau functionnya? Hal ini benar dan berlaku untuk BOM yang diwakili oleh object window pada environment browser.

```JavaScript
// Cara pertama
window.alert('Hello World');

// Cara kedua
alert('Hello World');
```

Kedua cara di atas tidak memiliki perbedaan dan valid, yang mana cara pertama secara eksplisit memerintah kode JavaScript untuk memanggil method alert() milik objek window. Namun, cara yang kedua tidak menyebutkan objek window untuk menampilkan alert. Lalu, mengapa cara kedua tetap bisa dilakukan? Hal ini karena properti dan method yang dimiliki window bersifat global.

Walau cara kedua terkesan lebih singkat, kita harus tetap hati-hati karena jika pada scope sebuah berkas .js terdapat nama fungsi yang sama, maka pesan pada pop-up tidak akan muncul.

```JavaScript
function alert(nama) {
  console.log('Hati-hati, ' + nama);
}

alert('Chewbacca'); // Output: Hati-hati, Chewbacca
// Output di atas akan tercetak ke console browser

window.alert('Chewbacca'); // Output: Hati-hati, Chewbacca
// Output di atas akan tetap tercetak pada console browser
```
