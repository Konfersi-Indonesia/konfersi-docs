---
title: Ruang kerja Lab
description: Buka proyek Konfersi di Lab, ruang kerja metocean berbasis browser, atau gunakan ekstensi Konfersi Lab di VS Code desktop.
tags: [lab, ruang-kerja, vs-code, ekstensi]
related: [using-konfersi/console-projects, using-konfersi/metocean-data-sources, getting-started/sign-in, billing/plans-and-pricing]
status: published
updated: 2026-09-27
---

Lab adalah ruang kerja metocean untuk proyek yang sedang Anda buka. Lab berjalan di browser di [lab.konfersi.com](https://lab.konfersi.com) dengan tampilan editor kode yang familier. Lab juga dapat digunakan di VS Code desktop melalui ekstensi **Konfersi Lab**. Proyek dikelola di Console, sedangkan pekerjaan teknisnya dilakukan di Lab.

<scalar-callout type="neutral">Saat ini tampilan Lab tersedia dalam bahasa Inggris. Karena itu, label tombol di halaman ini ditulis sesuai yang muncul di layar.</scalar-callout>

## Sebelum memulai

- Anda memerlukan akun Konfersi. Lihat [Membuat akun](../getting-started/create-account.md).
- Anda memerlukan proyek dengan paket berbayar. Pada paket uji coba gratis, Console menampilkan **Tingkatkan paket untuk akses Lab** dan Lab tidak dapat dibuka. Lihat [Paket & harga](../billing/plans-and-pricing.md).
- Anda harus menjadi pemilik proyek atau asisten yang diundang.

## Membuka proyek di Lab

1. Masuk ke Console di [app.konfersi.com](https://app.konfersi.com).
2. Buka **Manajemen Proyek**.
3. Buka Lab dengan salah satu cara berikut:
   - Klik ganda proyek.
   - Buka menu proyek, lalu pilih **Lab Platform**.
   - Buka proyek, lalu pilih **Lab Platform** di bagian **Akses Cepat Lab Platform**.

Lab terbuka di tab baru dengan alamat berakhiran `/project/` diikuti slug proyek. Anda tetap dalam keadaan masuk karena Lab memakai sesi yang sama dengan Console. Jika sesi Anda sudah berakhir, Anda akan diminta masuk lalu dikembalikan ke Lab.

### Membuka Lab tanpa proyek

Jika Anda langsung membuka [lab.konfersi.com](https://lab.konfersi.com) tanpa proyek di alamatnya, Anda akan diarahkan ke **Manajemen Proyek** di Console. Pilih proyek di sana untuk membukanya di Lab.

## Mengenal tampilan Lab

Lab memakai tema Konfersi Anda, **Konfersi Light** atau **Konfersi Dark**, sama dengan yang Anda pakai di Console. Jika Anda menggantinya di Lab lewat **Preferences: Color Theme**, Console dan aplikasi Konfersi lainnya ikut berganti.

Pilih ikon **Konfersi Lab** di bilah aktivitas. Bilah samping menampilkan bagian-bagian berikut, dari atas ke bawah:

- **Project**: akun yang sedang masuk, proyek dan paketnya, serta pemakaian kuota AI, penyimpanan, dan komputasi.
- **Points**: titik observasi proyek. Pilih **Open Map** untuk melihatnya di peta dan menambah titik dengan mengeklik peta, atau tambahkan titik lewat koordinat maupun dari berkas CSV, Excel, atau KML.
- **Data**: variabel metocean yang sudah diunduh dan dianalisis untuk titik terpilih. Pilih **Fetch Data** untuk mengunduh variabel lain; kemajuannya tampil sebagai notifikasi, dan lognya di **Output › Konfersi Lab**.
- **Analysis**: semua analisis yang tersedia untuk sebuah titik, seperti deret waktu, statistik, diagram mawar, dan nilai ekstrem, ditambah analisis lokasi seperti pasang surut dan siklon tropis. Hasilnya terbuka di panel **Chart** di bagian bawah.
- **Validation**: pemeriksaan kualitas otomatis atas data yang sudah diunduh.
- **Planning & Risk**: brief proyek, operasi dan lingkungan, serta penilaian risiko. Masing-masing terbuka sebagai dokumen yang Anda ubah lalu simpan dengan **Ctrl+S** (**Cmd+S** di Mac).
- **Reports**: membuat laporan Metocean Design Basis sebagai dokumen Word, dan menulis bagian laporan satu per satu dengan AI.
- **Documentation**: dokumentasi ini, langsung di dalam Lab. Setiap bagian juga punya tombol **?** yang membuka halaman penjelasannya.

Bilah status di bagian bawah menampilkan proyek yang sedang dibuka. Pilih untuk membuka pintasan ke Console, dokumentasi, dan log.

<scalar-callout type="info">Proyek dibuat, dibagikan, dan di-upgrade di Console, bukan di Lab. Lab selalu bekerja pada satu proyek. Untuk berpindah proyek, buka proyek lain dari Console.</scalar-callout>

## Menggunakan ekstensi Konfersi Lab di VS Code desktop

Ekstensi **Konfersi Lab** yang menjalankan ruang kerja di browser juga dapat berjalan di VS Code desktop. Setelah ekstensi terpasang, masuk dengan cara berikut:

1. Buka Command Palette, lalu jalankan **Konfersi: Sign In**.
2. VS Code membuka tab browser di Accounts. Masuk jika diminta.
3. Di halaman **Masuk ke Konfersi Lab**, periksa alamat email, lalu pilih **Setujui perangkat**.
4. Saat muncul **Perangkat sudah masuk**, kembali ke VS Code. Proses masuk akan selesai dengan sendirinya.

Setiap aksi di Lab adalah sebuah perintah. Ketik **Konfersi** di Command Palette untuk melihat semuanya, misalnya:

- **Konfersi: Open Map**
- **Konfersi: Fetch Data…**
- **Konfersi: Search Documentation…**
- **Konfersi: Open Console**
- **Konfersi: Sign Out**

<scalar-callout type="warning">Setujui proses masuk perangkat hanya jika Anda sendiri yang memulainya. Jika tidak, tutup tab tersebut tanpa menyetujuinya.</scalar-callout>

## Pemecahan masalah

**"Project … was not found or you do not have access."**
Periksa slug proyek. Pastikan Anda masuk dengan akun pemilik proyek atau akun yang diundang, lalu buka proyek dari Console.

**"Failed to load Konfersi Lab."**
Pilih **Retry**. Jika masalah berlanjut, periksa koneksi Anda dan [hubungi tim bantuan](../support/contact-support.md).

**"Login link expired or already used."** atau **"Login timed out."** di VS Code
Jalankan **Konfersi: Sign In** lagi dan segera setujui permintaan yang baru.

**Sebuah bagian di bilah samping menyebut data atau lapisan peta belum tersedia.**
Data untuk titik tersebut belum diunduh. Pilih titiknya, lalu **Fetch Data** di bagian **Data**. Lihat [Sumber data metocean](metocean-data-sources.md).

**Tombol Lab di Console tidak aktif.**
Proyek masih menggunakan paket uji coba gratis, atau paketnya sudah berakhir. Lihat [Console & proyek](console-projects.md).
