---
title: Memproses titik
description: Unduh dan analisis data metocean titik observasi, pantau kemajuannya di Proses dan Log, serta batalkan, mulai ulang, atau proses ulang.
tags: [lab, proses, akuisisi, unduh, analisis, proses, log, proses ulang, batal]
related: [lab/data, lab/data/variables-and-sources, lab/points, lab/troubleshooting]
status: published
updated: 2026-10-02
---

Memproses titik berarti mengunduh data metoceannya dari penyedia lalu menganalisisnya. Setelah selesai, semua analisis untuk titik itu siap dibuka. Lihat [Cara data diproses](../data/index.md) untuk apa yang terjadi di balik layar.

## Memproses titik

Di **Penjelajah Peta → Titik Observasi**, pilih salah satu aksi berikut pada sebuah titik:

| Aksi | Fungsinya |
|---|---|
| **Proses Titik** | Mengambil dan menganalisis setiap variabel yang belum dimiliki titik |
| **Proses Variabel Terpilih…** | Memilih variabel yang akan diambil, misalnya hanya angin dan gelombang |
| **Proses Ulang (Unduh dan Analisis Lagi)…** | Mengunduh dan menganalisis semua variabel lagi, menggantikan hasil yang ada |
| **Proses Semua Titik yang Belum Diproses** | Memproses semua titik yang belum diproses |

Variabel yang sudah diproses dipakai ulang, tidak diunduh lagi.

Pemrosesan biasanya memakan waktu beberapa menit per titik, dan bisa lebih lama saat penyedia sedang sibuk. Permintaan ERA5 khususnya menunggu di antrean Copernicus. Anda boleh menutup Lab selama proses berjalan: pemrosesan berlanjut di server Konfersi, dan hasilnya sudah ada saat Anda kembali.

## Status titik

Setiap titik menunjukkan posisinya:

| Status | Arti |
|---|---|
| **Belum diproses** | Belum ada yang diunduh |
| **Memproses…** | Ada proses yang berjalan untuknya |
| **Sebagian diproses 3/8** | Sebagian variabel sudah siap, sebagian belum |
| **Sudah diproses** | Semua variabel sudah siap |
| **Pemrosesan gagal** | Proses terakhir gagal; lihat [Pemecahan masalah](../troubleshooting.md) |

## Memantau kemajuan

Panel **Proses** menampilkan setiap proses beserta status langsung untuk setiap variabel:

| Status | Arti |
|---|---|
| **Dalam antrean** · **Menunggu worker kosong** | Menunggu kapasitas pemrosesan |
| **Permintaan dikirim ke …** · **… di penyedia** | Menunggu Copernicus Marine atau Copernicus CDS menyiapkan data |
| **Mengunduh** | Mengunduh data |
| Menganalisis | Menjalankan analisis |
| **Menyimpan hasil** | Menyimpan hasil |
| **Selesai** | Rampung |
| **Sudah diproses · dipakai ulang** | Sudah pernah diproses untuk lokasi ini; hasil tersimpan dipakai dan tidak ada yang diunduh |
| **dibagi** | Proses lain sedang menghasilkan data yang sama untuk lokasi yang sama, jadi proses ini ikut memakai hasilnya |
| **Gagal** · **Dibatalkan** · **Dihentikan** | Berakhir tanpa selesai |

Pilih **Tampilkan Log** pada sebuah proses, atau buka panel **Log**, untuk melihat setiap baris log. Saring berdasarkan **Galat**, **Peringatan**, atau **Info**, cari teksnya, dan aktifkan **Ikuti baris baru**. Bilah status juga menampilkan jumlah proses yang sedang berjalan.

## Membatalkan, memulai ulang, atau menjalankan lagi

- **Batalkan Proses** menghentikannya. Variabel yang belum dimulai dibatalkan; variabel yang sedang diunduh berhenti setelah langkah yang sedang berjalan. Data yang sudah diunduh tetap disimpan.
- **Mulai Ulang** membatalkan proses yang berjalan lalu memulainya lagi dengan variabel yang sama, memakai ulang data yang sudah diunduh. Gunakan saat proses menampilkan **Tidak merespons**.
- **Proses Lagi** menjalankan ulang proses yang gagal atau sudah selesai. Analisis dijalankan lagi; data yang sudah diunduh dipakai ulang.
- **Bersihkan Proses Selesai** merapikan panel.

Jika sebuah proses lama tidak mengirim pembaruan, muncul **Tidak merespons · tidak ada pembaruan selama … menit**. Setelah 10 menit tanpa pembaruan, proses ditandai gagal. Proses itu mungkin masih menunggu data, jadi **Mulai Ulang** saja.

## Hasil dibagi per lokasi

Data hasil pemrosesan milik lokasi, bukan milik titik. Jika ada titik di Konfersi yang sudah diproses di lokasi yang sama, titik Anda langsung memakai hasil tersebut. Jika dua proses membutuhkan data yang sama pada waktu yang sama, keduanya berbagi satu proses. Memproses ulang suatu lokasi menggantikan hasilnya untuk semua orang yang memakai lokasi itu.

## Kuota yang terpakai

- Kuota **komputasi** untuk waktu pemrosesan.
- Kuota **penyimpanan** untuk data yang diunduh.

Lihat [Kuota](../get-started.md#kuota).

## Mengunduh data mentah

Untuk mengolah data sendiri, pilih **Unduh Data (NetCDF)…** pada titik yang sudah diproses lalu pilih variabelnya. Setiap variabel menjadi satu berkas NetCDF. Di browser berkas diunduh; di desktop Anda memilih lokasi penyimpanannya. Lihat [Variabel & sumber](../data/variables-and-sources.md).
