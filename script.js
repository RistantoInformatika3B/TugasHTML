/* ======================================================
   === Fitur Interaktif: Warna Acak untuk Header & CTA ===
   Deskripsi:
   Script ini akan memberikan warna acak pada bagian
   header dan tombol CTA (Call To Action) setiap kali
   halaman direfresh. Warna diambil dari daftar warna
   yang sudah ditentukan sebelumnya.
====================================================== */

// Menunggu seluruh elemen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', () => {

  // === Mengambil elemen HTML yang akan diubah warnanya ===
  const header = document.querySelector('header');           // Elemen header utama
  const ctaButton = document.querySelector('.cta-button');   // Tombol CTA pada hero section

  /* === Daftar Warna untuk Header (nuansa wisata alami) ===
     Pilihan warna lembut bernuansa alam dan kehangatan,
     agar halaman terasa segar dan ramah pengunjung wisata.
  */
  const darkColors = [
        '#7FBFA7', // Hijau sage lembut — alami dan tenang 🌿
        '#E6A97D', // Peach hangat — nuansa matahari sore di pegunungan 🌅
        '#A9C58C', // Hijau zaitun muda — terasa alami & pedesaan 🌾
        '#E7B8B1'  // Pink pastel tua — hangat & harmonis 🍑
  ];

  /* === Daftar Warna Aksen untuk Tombol CTA ===
     Warna kontras namun tetap elegan untuk menarik perhatian
     pengguna agar mengklik tombol aksi.
  */
  const accentColors = [
    '#FF6F00', // Oranye — semangat & energi
    '#C2185B', // Marun — elegan & kuat
    '#FBC02D', // Kuning emas — optimis & cerah
    '#00ACC1'  // Biru cyan — segar & modern
  ];

  /* === Bagian 1: Mengubah warna header secara acak === */
  if (header) {
    // Memilih warna acak dari daftar darkColors
    const randomDarkColor = darkColors[Math.floor(Math.random() * darkColors.length)];
    // Menerapkan warna ke elemen header
    header.style.backgroundColor = randomDarkColor;
  }

  /* === Bagian 2: Mengubah warna tombol CTA secara acak === */
  if (ctaButton) {
    // Memilih warna acak dari daftar accentColors
    const randomAccentColor = accentColors[Math.floor(Math.random() * accentColors.length)];
    // Menerapkan warna ke tombol CTA
    ctaButton.style.backgroundColor = randomAccentColor;

    /* === Efek Hover (saat mouse diarahkan ke tombol) === */
    ctaButton.addEventListener('mouseover', () => {
      ctaButton.style.opacity = '0.85'; // Sedikit transparan
    });

    /* === Efek Mouse Out (saat mouse keluar dari tombol) === */
    ctaButton.addEventListener('mouseout', () => {
      ctaButton.style.opacity = '1'; // Kembali normal
    });

    /* === Efek Klik (interaktivitas sederhana) === */
    ctaButton.addEventListener('click', () => {
      alert('Selamat menjelajahi pesona Sumedang! 🌄');
    });
  }

});
