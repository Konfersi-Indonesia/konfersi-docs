---
title: Pengaturan organisasi
description: Untuk pemilik — ubah profil organisasi, verifikasi domain email, atur cara orang bergabung, setujui permintaan, siapkan single sign-on, dan tinjau aktivitas.
tags: [organisasi, pemilik, pengaturan, domain, dns, sso, openid connect, permintaan bergabung, audit]
related: [using-konfersi/organizations, using-konfersi/organizations/members-and-invitations, account/profile]
status: published
updated: 2026-10-01
---

Hanya pemilik yang melihat **Pengaturan** dan **Aktivitas** pada [organisasi](index.md).

## Profil organisasi

Di **Pengaturan → Profil**, pemilik mengubah **Nama**, **Situs web**, **Jenis**, **Sektor**, **Ukuran**, **Lokasi**, dan **Deskripsi** organisasi, lalu memilih **Simpan**. Di bagian atas halaman organisasi, pemilik juga bisa menambah atau mengganti logo dan gambar header.

Detail ini ditampilkan kepada anggota dan di undangan. Nama, situs web, jenis, sektor, ukuran, dan lokasi juga tampil di profil setiap anggota yang memakai detail organisasi, dan ikut diperbarui saat Anda menyimpan. Lihat [Profil Anda](../../account/profile.md#informasi-organisasi).

## Domain email dan aturan bergabung

Memverifikasi domain email kantor, misalnya `example.com`, memungkinkan Anda menentukan cara orang dengan email tersebut bergabung, dan wajib dilakukan sebelum single sign-on bisa diaktifkan.

### Memverifikasi domain

1. Di **Domain email**, pilih **Tambah domain** lalu masukkan domainnya.
2. Tambahkan record TXT yang ditampilkan (**Nama** dan **Nilai**-nya) di penyedia DNS Anda. Jika DNS Anda di Cloudflare, Console menyediakan pintasan untuk menambahkan record di sana.
3. Pilih **Verifikasi sekarang**. Perubahan DNS bisa butuh beberapa menit; pilih **Periksa lagi** jika pemeriksaan pertama belum menemukan record-nya.

Domain memiliki salah satu status berikut:

| Status | Arti |
|---|---|
| **Belum terverifikasi** | Record TXT belum ditemukan |
| **Terverifikasi** | Record ditemukan, atau Konfersi memverifikasi domain untuk Anda |
| **Kedaluwarsa** | Record hilang. Konfersi memeriksa ulang domain terverifikasi setiap hari dan menandainya kedaluwarsa setelah tiga kali gagal. Pasang kembali record-nya lalu verifikasi lagi |

Satu domain hanya bisa diverifikasi oleh satu organisasi. Domain email publik, seperti gmail.com atau outlook.com, tidak bisa ditambahkan.

### Memilih cara bergabung

Setiap domain terverifikasi memiliki aturan bergabungnya sendiri:

| Aturan | Yang terjadi |
|---|---|
| **Hanya undangan** | Hanya orang yang diundang pemilik yang bisa bergabung |
| **Minta persetujuan pemilik** | Siapa pun dengan email terverifikasi di domain itu bisa meminta bergabung; pemilik menyetujui atau menolak setiap permintaan |
| **Bergabung otomatis** | Siapa pun dengan email terverifikasi di domain itu langsung bergabung sebagai kontributor begitu masuk |

Orang yang pernah dikeluarkan pemilik tidak bisa bergabung lagi secara otomatis atau lewat permintaan; pemilik harus mengundangnya kembali.

Menghapus domain menghentikan orang baru bergabung lewat domain itu dan membuat single sign-on tidak lagi menerimanya. Anggota yang sudah ada tetap menjadi anggota.

## Permintaan bergabung

Jika domain memakai **Minta persetujuan pemilik**, permintaan tampil di **Permintaan bergabung**, beserta cara orang tersebut masuk (single sign-on, email terverifikasi, atau login sosial).

- **Setujui** menambahkannya sebagai kontributor.
- **Tolak** memberi tahu bahwa permintaannya tidak disetujui, dengan alasan opsional. Mereka tidak bisa meminta lagi selama 30 hari, tetapi Anda tetap bisa mengundangnya.

Orang bisa membatalkan permintaannya sendiri dari **Organisasi → Undangan dan permintaan Anda**.

## Single sign-on

Single sign-on memungkinkan orang di domain terverifikasi Anda masuk ke Konfersi dengan penyedia OpenID Connect perusahaan.

1. Verifikasi minimal satu domain email terlebih dahulu.
2. Di **Single sign-on**, pilih **Salin redirect URI** lalu daftarkan di penyedia identitas Anda.
3. Masukkan **Issuer URL** penyedia, lalu pilih **Ambil konfigurasi** untuk mengisi endpoint secara otomatis, atau isi sendiri authorization, token, dan userinfo endpoint.
4. Masukkan **Client ID** dan **Client secret** dari penyedia Anda. Sesuaikan scope jika perlu.
5. Centang **Tawarkan single sign-on di halaman masuk Konfersi**, lalu simpan.

Setelah itu, orang yang memasukkan email dengan domain terverifikasi di halaman masuk Konfersi akan ditawari login organisasi Anda. Siapa yang boleh memakainya mengikuti aturan bergabung domain tersebut: dengan **Hanya undangan**, hanya anggota dan orang yang diundang yang bisa masuk.

Client secret yang tersimpan tidak pernah ditampilkan lagi. Biarkan kolomnya tidak berubah untuk tetap memakainya. Memilih **Hapus** mematikan single sign-on: anggota kembali masuk dengan cara Konfersi seperti biasa.

## Aktivitas

**Aktivitas** adalah catatan permanen perubahan pada organisasi: anggota diundang, bergabung, keluar, atau berganti peran; domain ditambahkan, diverifikasi, atau kedaluwarsa; perubahan dan login single sign-on; proyek dibagikan atau berhenti dibagikan; serta perubahan profil. Saring berdasarkan **Anggota**, **Domain**, **Login**, **Proyek**, atau **Organisasi**, dan muat lebih banyak untuk melihat yang lebih lama. Perubahan otomatis ditampilkan sebagai dilakukan oleh Konfersi.
