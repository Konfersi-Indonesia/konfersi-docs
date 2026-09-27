---
title: Keamanan
description: Cara Konfersi melindungi akun, sesi, data proyek, dan pembayaran Anda, serta cara melaporkan celah keamanan.
tags: [keamanan, kepercayaan, autentikasi, enkripsi, pelaporan]
related: [legal/privacy, support/contact-support, getting-started/sign-in, billing/payments]
status: published
updated: 2026-09-27
---

Halaman ini menjelaskan langkah-langkah keamanan yang saat ini diterapkan di platform Konfersi (Accounts, Console, Lab, dan API di baliknya), serta cara melaporkan celah keamanan. Untuk cara kami menangani data pribadi, lihat [Kebijakan Privasi](../legal/privacy.md).

## Infrastruktur dan enkripsi

- **Berjalan di Cloudflare.** API Konfersi berjalan di Cloudflare Workers. Data aplikasi disimpan di basis data Cloudflare D1, sedangkan berkas disimpan di penyimpanan objek Cloudflare R2.
- **Enkripsi saat transmisi.** Seluruh situs Konfersi dan API hanya dapat diakses melalui HTTPS (TLS).
- **Enkripsi saat penyimpanan.** Cloudflare mengenkripsi data yang tersimpan di D1 dan R2.
- **Lingkungan terpisah.** Data pelanggan hanya berada di lingkungan produksi. Lingkungan pengujian internal kami terpisah dan tidak digunakan untuk pelanggan.

## Masuk ke akun

Semua aplikasi Konfersi menggunakan satu halaman masuk terpusat di accounts.konfersi.com. Lihat [Masuk](../getting-started/sign-in.md).

- **Kata sandi tidak pernah disimpan dalam bentuk teks asli.** Kata sandi di-hash dengan PBKDF2-SHA-256, menggunakan salt acak yang unik untuk setiap kata sandi dan 100.000 iterasi.
- **Masuk dengan akun sosial** menggunakan standar OAuth 2.0/OpenID Connect dengan penyedia seperti Google, GitHub, dan Microsoft (jika diaktifkan). Setiap percobaan masuk membawa nilai state sekali pakai untuk mencegah pemalsuan permintaan lintas situs (CSRF) selama pengalihan.
- **Reset kata sandi** menggunakan tautan yang dikirim ke alamat email terdaftar Anda. Setiap tautan hanya berlaku sekali dan memiliki masa kedaluwarsa, dan Konfersi hanya menyimpan hash-nya. **Verifikasi email** memastikan bahwa alamat yang Anda daftarkan memang milik Anda.

## Sesi

- **Token bertanda tangan.** Setelah Anda masuk, sesi Anda direpresentasikan oleh access token yang ditandatangani dengan RS256, algoritma asimetris. API memverifikasi tanda tangan, penerbit, dan jenis token pada setiap permintaan.
- **Akses berumur pendek.** Access token kedaluwarsa setelah 15 menit. Refresh token terpisah menjaga Anda tetap masuk hingga 30 hari.
- **Rotasi refresh token.** Setiap refresh token hanya dapat dipakai sekali. Saat digunakan, token lama dicabut dan diganti dengan yang baru. Konfersi hanya menyimpan hash refresh token, tidak pernah tokennya sendiri.
- **Cookie yang terlindungi.** Di lingkungan produksi, cookie sesi dan refresh diatur dengan `HttpOnly` (tidak dapat dibaca skrip halaman), `Secure` (hanya dikirim melalui HTTPS), dan `SameSite=Lax`.
- **Keluar (sign out)** akan menghapus cookie sesi Anda.

## Kontrol akses

- **Proyek Anda bersifat privat secara bawaan.** Hanya pemilik proyek dan kolaborator yang diundangnya yang dapat melihat proyek tersebut. Hanya pemilik yang dapat mengundang atau menghapus kolaborator. Lihat [Console & proyek](../using-konfersi/console-projects.md).
- **Akses staf Konfersi** ke alat internal memerlukan single sign-on terpisah melalui penyedia identitas kami (Authentik, dengan OpenID Connect) dan sesi staf tersendiri. Hak akses staf diberikan melalui sistem izin berbasis peran, dengan grup, akses tingkat halaman dan workspace, serta hak buat/baca/ubah/hapus.

## Pembayaran

- Pembayaran ditangani oleh **Midtrans**, payment gateway kami. Data kartu Anda masukkan di Midtrans, bukan di Konfersi. Konfersi hanya menyimpan token kartu dari Midtrans dan nomor kartu yang disamarkan, tidak pernah nomor kartu lengkap.
- Setiap notifikasi pembayaran dari Midtrans membawa tanda tangan kriptografis. Konfersi memverifikasinya sebelum memperbarui pesanan, sehingga konfirmasi pembayaran palsu akan ditolak.

Selengkapnya di [Pembayaran](../billing/payments.md).

## Pemantauan dan pencatatan log

- Setiap permintaan ke API mendapat **request ID** unik yang dikembalikan di header respons dan disertakan dalam respons galat. Jika Anda menghubungi tim bantuan tentang suatu galat, sertakan ID ini agar kami dapat menelusuri permintaan yang tepat.
- API mencatat log terstruktur untuk setiap permintaan dan respons, termasuk metode, path, status, dan durasi. Log ini kami gunakan untuk menyelidiki insiden dan menangani permintaan bantuan.

## Melaporkan celah keamanan

Kami menyambut laporan dari peneliti keamanan maupun pengguna. Jika Anda yakin menemukan celah keamanan di layanan Konfersi mana pun:

1. **Kirim email ke [support@konfersi.com](mailto:support@konfersi.com) dengan subjek "Security".**
2. Sertakan:
   - situs atau API yang terdampak (misalnya app.konfersi.com)
   - deskripsi masalah dan potensi dampaknya
   - langkah-langkah yang jelas untuk mereproduksinya, disertai tangkapan layar atau proof of concept jika memungkinkan
   - cara kami menghubungi Anda untuk tindak lanjut
3. Mohon beri kami waktu yang wajar untuk menyelidiki dan memperbaikinya sebelum Anda mengungkapkannya ke publik.

Selama pengujian, mohon:

- hanya gunakan akun dan data milik Anda sendiri
- jangan mengakses, mengubah, atau menghapus data pengguna lain
- jangan mengganggu layanan (tanpa denial-of-service atau pengujian otomatis bervolume tinggi)
- jangan melakukan rekayasa sosial atau phishing terhadap staf maupun pengguna Konfersi
- jangan membagikan detailnya ke publik, termasuk di Discord, sampai kami mengonfirmasi perbaikannya

Kami akan mengonfirmasi penerimaan laporan Anda, memberi kabar selama penyelidikan, dan memberi tahu Anda setelah masalahnya selesai. Pengujian juga harus mematuhi [Kebijakan Penggunaan yang Wajar](../legal/acceptable-use.md).

## Peran Anda dalam menjaga keamanan akun

- Gunakan kata sandi yang kuat dan unik, atau masuk dengan akun sosial yang Anda lindungi dengan autentikasi dua faktor.
- Jangan pernah membagikan kata sandi, token sesi, atau kredensial API, termasuk kepada siapa pun yang mengaku sebagai staf Konfersi. Kami tidak akan pernah meminta kata sandi Anda.
- Keluar dari akun saat menggunakan komputer bersama.
- Segera beri tahu kami di [support@konfersi.com](mailto:support@konfersi.com) jika Anda melihat aktivitas mencurigakan di akun Anda.
