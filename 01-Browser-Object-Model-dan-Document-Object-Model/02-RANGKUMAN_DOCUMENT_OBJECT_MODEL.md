# Document Object Model (DOM)

Sejauh ini kita sudah mempelajari bagaimana cara menggunakan JavaScript untuk memanipulasi browser object melalui objek window. Namun, bagaimana jika kita ingin memanipulasi atau mengatur elemen-elemen yang terdapat pada berkas HTML dengan JavaScript? Jawabannya adalah bisa! Yakni melalui Document Object Model.

Apa sih DOM itu? Pada lingkungan browser, DOM memberikan izin bagi kode JavaScript untuk mengakses dan memanipulasi konten pada dokumen melalui sebuah Application Programming Interface (API), yakni sesuatu yang memungkinkan JavaScript dan dokumen HTML untuk "berkomunikasi". Masih ingat Browser Object Model yang diwakilkan oleh objek window yang bisa kita masukkan ke kode JavaScript? Nah, DOM diwakilkan oleh global objek bernama document, yang mana dapat dimanfaatkan oleh JavaScript.

## Dom Tree (Pohon DOM)

“Apa hubungannya DOM dengan tree (pohon)?”. Tree yang dimaksud di sini adalah nama dari sebuah struktur data pada komputer yang secara visual mirip seperti sebuah pohon. Struktur data ini disebut tree, karena layaknya pohon terdapat satu batang induk tunggal yang kemudian bercabang menjadi batang-batang lainnya dan bisa saja bercabang kembali. Jika batang tersebut buntu, maka ujungnya terdapat daun (pada struktur data tree, daun disebut sebagai node).

Pada berkas HTML, batang induk tunggal adalah elemen <html>, sedangkan cabang-cabangnya adalah elemen-elemen yang terdapat di dalamnya.

```HTML
<!DOCTYPE html>
<html>
<head>
  <title>DOM Tree</title>
</head>
<body>
  <h1>Hello Developer Front-End Web!</h1>
  <p>Belajar Membuat Front-End Web untuk Pemula</p>
</body>
</html>
```

Jika kita buat berkas HTML di atas menjadi dalam bentuk DOM, strukturnya akan menjadi seperti berikut.
<img src="/Images/DOM-Tree.png" alt="DOM Tree">

## Mencari DOM (Mendapatkan DOM)

Untuk mengakses sebuah elemen HTML melalui DOM, kita gunakan objek yang bernama document. Objek ini berisi semua elemen yang berada pada HTML atau keseluruhan halaman yang terlihat pada jendela browser saat itu. Kita bisa mencoba mengakses nilai dari global obyek document pada console browser.

Cukup dengan objek document, kita dapat mengakses keseluruhan konten pada HTML yang terdapat root element <html>. Sehingga, jika dicermati kembali di dalamnya terdapat elemen lainnya seperti <head> dan <body>.

Secara sekilas isi dari objek document hanyalah terlihat seperti isi dari sebuah berkas HTML saja. Namun, layaknya sebuah objek JavaScript, objek document memiliki beberapa properti dan method yang bisa kita gunakan untuk mengakses koleksi elemen maupun elemen tertentu. Misalnya, mendapatkan konten-konten pada elemen dengan tag <head> melalui objek document

```JavaScript
const head = document.head;
console.log(head);
// mendapatkan konten pada elemen dengan tag <head> melalui objek document
```

```JavaScript
const body = document.body;
console.log(body);
// mendapatkan konten pada elemen dengan tag <body> melalui objek document
```

Kedua properti yakni head dan body akan mengembalikan elemen yang sama seperti document yakni sebuah objek.

Bagaimana jika kita ingin lebih spesifik lagi? Misalnya sebuah elemen tunggal? Kita bisa menggunakan method-method yang tersedia oleh objek document. Salah satu method yang bisa kita gunakan adalah getElementById(). Method tersebut berfungsi untuk mendapatkan elemen berdasarkan nilai id-nya. Pada contoh di atas, elemen gambar memiliki id "gambarUtama". Jika kita ingin mengakses elemen tersebut, caranya sebagai berikut:

Objek document juga memiliki banyak sekali method yang tersedia, berikut beberapa method yang umum digunakan serta fungsinya:

| Method                     | Contoh                                      | Fungsi                                                                                            |
| :------------------------- | :------------------------------------------ | :------------------------------------------------------------------------------------------------ |
| `getElementById()`         | `document.getElementById('display');`       | Mengembalikan satu elemen yang memiliki nilai id "display".                                       |
| `getElementsByName()`      | `document.getElementsByName('button')`      | Mengembalikan banyak elemen (HTMLCollection) yang memiliki attribute name dengan nilai "button".  |
| `getElementsByClassName()` | `document.getElementsByClassName('button')` | Mengembalikan banyak elemen (HTMLCollection) yang memiliki attribute class dengan nilai "button". |
| `getElementsByTagName()`   | `document.getElementsByTagName('div')`      | Mengembalikan banyak elemen (HTMLCollection) yang merupakan <div> element.                        |
| `querySelector()`          | `document.querySelector('.button')`         | Mengembalikan elemen pertama (node) yang menerapkan class "button".                               |
| `querySelectorAll()`       | `document.querySelectorAll('.button')`      | Mengembalikan banyak Node dalam bentuk NodeList yang menerapkan class "button".                   |

Pada methods di atas, ada yang mengembalikan nilai HTML elemen tunggal dan ada juga yang mengembalikan banyak elemen, seperti HTMLCollection dan NodeList. Karena methods di atas dimiliki oleh objek document, jangan lupa mengawali semua pemanggilannya dengan sintaks document.<nama_method>, ya.

Sedangkan, untuk mendapatkan semua elemen yang nilai atribut class-nya "button", gunakan method querySelectorAll('.button'). Method tersebut akan mengembalikan semua elemen yang sesuai dalam bentuk NodeList.

Ada fakta menarik tentang NodeList, yakni memiliki karakteristik yang mirip dengan array. Contohnya, kita bisa menggunakan properti length untuk mendapatkan jumlah elemen yang terdapat di dalamnya. Selain itu, kita bisa mengakses nilai individual elemennya menggunakan indexing.

Karena NodeList memiliki karakteristik yang mirip dengan array, maka kita juga bisa melakukan looping terhadap elemen-elemennya, yakni melalui sintaks looping for of.

```JavaScript
for (let item of buttons) {
  console.log(item);
}
```

#### Cara Menggunakan DOM Berdasarkan class & id

```JavaScript
document.querySelectorAll('.button'); // mendapatkan elemen berdasarkan atribut class
document.querySelectorAll('#button'); // mendapatkan element berdasarkan atribut id
```

Sesuai dengan namanya, method querySelector() dan querySelectorAll() membutuhkan query khusus sebagai parameternya. Jika tujuan kita adalah mendapatkan elemen berdasarkan atribut class, parameternya harus diawali dengan tanda titik ("."), sedangkan jika berdasarkan atribut id, kita harus mengawali nilai parameternya dengan tanda pagar ("#"). Hal ini sama seperti ketika kita bekerja dengan selector di CSS.

## Membuat Elemen HTML

Manipulasi DOM memberikan kemampuan bagi kita untuk membuat elemen-elemen HTML melalui kode JavaScript. Selain itu, melalui DOM kita mampu membuat konten HTML.

Sekarang mari kita mulai dengan membahas method createElement(). Dengan method tersebut, kita bisa membuat sebuah elemen HTML yang benar-benar baru tanpa memanipulasi isi konten berkas HTML.

Contohnya, jika kita ingin membuat sebuah elemen HTML dengan tag <p>,

```JavaScript
const newElementParagraf = document.createElement('p');
```

Namun, tidak cukup jika hanya membuat elemen baru. Bagaimana jika kita menambahkan teks? Caranya adalah kita berikan nilai string yang baru dan berikan pada properti innerText .

```JavaScript
// membuat element p dengan createElement
const newElementParagraf = document.createElement("p");
// memberikan teks pada element p
newElementParagraf.innerText = "Halo aku Mahayana";
```

Membuat element gambar juga bisa loh

```JavaScript
const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200/300");
```

Berhasil! Namun, masih ada hal yang menjanggal. Apa gunanya tag <img> jika tidak memiliki atribut src? Untuk memberikan atribut src pada elemen <img>, kita bisa memanggil function setAttribute(). Function ini menerima dua parameter, yaitu nama atribut yang ingin ditambahkan dan nilai yang ingin diberikan dalam artribut tersebut.

Selama kita mengerjakan praktik di atas, pasti Anda menyadari bahwa elemen HTML tidak muncul ketika kita membuatnya. Mengapa demikian? Karena elemen-elemen tersebut belum kita sematkan ke berkas HTML.

Sama halnya jika Anda menyiapkan berbagai bumbu pada piring terpisah. Hidangan tidak akan berubah (menjadi enak) sebelum menuangkan bumbu-bumbu tersebut. Kita akan mempelajari lebih lanjut tentang menambahkan elemen ke dokumen HTML pada materi "Menambahkan Elemen HTML ke DOM".

Jika belum begitu paham kegunaan dari innerHTML, innerText, dan setAttribute(),

## Memanipulasi Atribut Melalui setAttribute

Kita bisa memanipulasi elemen HTML yang kita tangkap melalui DOM. Salah satunya adalah atribut. Method yang digunakan untuknya adalah setAttribute()

```JavaScript
element.setAttribute('nama_atribut_sasaran', 'nilai_atribut_sasaran');
```

```JavaScript
// mengambil id gambar menggunakan getElementById
const imageCube = document.getElementById("gambar");
// Memanipulasi Atribut melalui setAttribute
imageCube.setAttribute("width", 300);
imageCube.setAttribute("height", 215);
```
