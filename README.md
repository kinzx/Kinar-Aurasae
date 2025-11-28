# Dashboard Admin Mahasiswa

Dashboard Admin Mahasiswa adalah aplikasi web sederhana untuk mengelola data mahasiswa di sebuah kampus. Aplikasi ini menyediakan antarmuka yang intuitif untuk melakukan operasi CRUD (Create, Read, Update, Delete) pada data mahasiswa, dengan fokus pada kemudahan penggunaan dan desain yang responsif.

## Fitur Utama

- **Overview Dashboard**: Menampilkan statistik jumlah mahasiswa dan program studi yang tersedia.
- **Manajemen Data Mahasiswa**: 
  - Tambah mahasiswa baru
  - Edit data mahasiswa yang sudah ada
  - Hapus data mahasiswa
  - Tampilkan daftar mahasiswa dalam tabel
- **Validasi Data**: 
  - NIM harus terdiri dari 10 digit angka
  - NIM harus unik (tidak boleh duplikat)
- **Penyimpanan Lokal**: Data disimpan di localStorage browser, sehingga data tetap tersimpan selama browser tidak dihapus cache-nya.
- **Desain Responsif**: Menggunakan Bootstrap untuk tampilan yang adaptif di berbagai perangkat.
- **Navigasi Sidebar**: Sidebar yang dapat di-toggle untuk navigasi mudah.

## Teknologi yang Digunakan

- **HTML5**: Struktur dasar aplikasi
- **CSS3**: Styling dengan Bootstrap dan custom CSS
- **JavaScript**: Logika aplikasi menggunakan jQuery
- **Bootstrap 5**: Framework CSS untuk komponen UI dan responsivitas
- **jQuery**: Manipulasi DOM dan event handling
- **LocalStorage**: Penyimpanan data sisi klien

## Struktur File

```
Kinar-Aurasae/
├── index.html      # File utama HTML
├── style.css       # Styling kustom
├── script.js       # Logika JavaScript
└── README.md       # Dokumentasi proyek
```

## Cara Menjalankan

1. **Clone atau Download**: Unduh semua file proyek ke direktori lokal Anda.

2. **Buka di Browser**: 
   - Buka file `index.html` langsung di browser web modern (Chrome, Firefox, Safari, dll.).
   - Aplikasi akan berjalan secara offline tanpa perlu server.

3. **Penggunaan**:
   - Klik tombol "Tambah" untuk menambah mahasiswa baru.
   - Isi formulir dengan NIM (10 digit), Nama Lengkap, dan Jurusan.
   - Klik "Simpan" untuk menyimpan data.
   - Gunakan tombol edit (ikon pensil) untuk mengubah data mahasiswa.
   - Gunakan tombol hapus (ikon sampah) untuk menghapus data mahasiswa.
   - Data akan otomatis tersimpan dan ditampilkan di tabel.

## Program Studi yang Tersedia

- Teknik Informatika
- Sistem Informasi
- Desain Komunikasi Visual
- Manajemen Bisnis

## Catatan Penggunaan

- Data disimpan secara lokal di browser. Jika Anda membersihkan cache browser, data akan hilang.
- Untuk penyimpanan permanen, pertimbangkan integrasi dengan database backend di masa depan.
- Aplikasi ini dirancang untuk tujuan demonstrasi dan pembelajaran.

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini:

1. Fork repositori ini
2. Buat branch fitur baru (`git checkout -b fitur-baru`)
3. Commit perubahan Anda (`git commit -am 'Tambah fitur baru'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat Pull Request

## Lisensi

Proyek ini menggunakan lisensi MIT. Lihat file `LICENSE` untuk detail lebih lanjut.

## Kontak

Untuk pertanyaan atau dukungan, silakan hubungi pengembang proyek.

