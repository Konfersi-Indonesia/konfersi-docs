---
title: Masuk & pembaruan
description: Hubungkan ekstensi desktop ke akun Konfersi, ganti proyek, jaga ekstensi tetap terbaru, dan atur pengaturannya.
tags: [lab, masuk, perangkat, pembaruan, pengaturan, vs code, antigravity]
related: [lab/desktop, lab/desktop/install-the-extension, account/security/connected-devices]
status: published
updated: 2026-10-02
---

## Masuk

Ekstensi masuk lewat browser, jadi kata sandi Anda tidak pernah diketik di editor.

1. Pilih **Masuk** di tampilan **Konfersi Lab**, atau jalankan **Konfersi: Masuk** dari Command Palette. Membuka proyek dari Console juga memulai langkah ini.
2. Browser membuka Konfersi Accounts. Masuk jika diminta.
3. Di halaman masuk Konfersi Lab, periksa alamat email lalu setujui perangkatnya.
4. Setelah perangkat dinyatakan sudah masuk, kembali ke editor. Proses masuk selesai dengan sendirinya.

<scalar-callout type="warning">Hanya setujui permintaan masuk perangkat yang Anda mulai sendiri. Jika bukan Anda yang memulainya, tutup tab tanpa menyetujui.</scalar-callout>

Editor itu lalu tercantum di [Perangkat terhubung](../../account/security/connected-devices.md). Jika Anda memutusnya di sana, editor menampilkan pesan bahwa editor telah diputus dari akun Konfersi Anda dan Anda perlu masuk lagi.

Untuk keluar, buka menu akun di tampilan **Proyek** (**Konfersi: Aksi Akun…**) lalu pilih **Keluar**.

## Membuka dan mengganti proyek

- Dari Console: buka proyek lalu pilih **VSCode** atau **Antigravity**. Jika proyek sudah terbuka, Lab menampilkan **Detail Proyek**-nya.
- Di editor: jalankan **Konfersi: Ganti Proyek…** (atau pilih proyek di bilah status) lalu pilih salah satu. Proyek dengan paket Gratis tercantum sebagai **Paket Gratis — tanpa Lab**; tingkatkan paketnya di Console terlebih dahulu.

Lab mengerjakan satu proyek dalam satu jendela editor.

## Pembaruan

Ekstensi memeriksa rilis baru saat editor dimulai dan setiap beberapa jam. Setelah versi baru terpasang, Lab meminta Anda memuat ulang editor. Pilih **Reload**.

Untuk memeriksa sekarang, jalankan **Konfersi: Periksa Pembaruan Konfersi Lab**. Setiap unduhan dicocokkan dengan ukuran dan checksum rilisnya sebelum dipasang.

## Pengaturan

Buka **Settings** lalu cari **Konfersi**:

| Pengaturan | Fungsinya |
|---|---|
| **Konfersi › Lab: Auto Update** | Memperbarui ekstensi secara otomatis. Matikan untuk memperbarui hanya saat Anda menjalankan perintah pembaruan |
| **Konfersi › Live Forecast: Direct** | Mengambil overlay prakiraan langsung dari Open-Meteo langsung dari komputer Anda, dengan kuota gratisnya sendiri, dan memakai server Konfersi hanya saat kuota itu habis. Lihat [Peta & lapisan](../map/index.md#prakiraan-langsung) |

Pengaturan Konfersi lainnya (alamat server dan peta dasar) sudah diatur oleh Konfersi; Anda tidak perlu mengubahnya.

## Kendala saat masuk

- **"Login link expired or already used"** atau **"Login timed out"**: jalankan **Konfersi: Masuk** lagi dan segera setujui permintaan barunya.
- Sesi Konfersi kedaluwarsa: pilih **Masuk**.
- Browser tidak terbuka: batalkan notifikasi masuk ke Konfersi, pastikan komputer Anda memiliki browser bawaan, lalu jalankan **Konfersi: Masuk** lagi.

Selengkapnya di [Pemecahan masalah](../troubleshooting.md).
