---
title: Mengelola titik
description: Ganti nama, pindahkan, urutkan, dan hapus titik observasi, tampilkan di peta, dan cari kedalaman air.
tags: [lab, titik, ganti nama, koordinat, kedalaman, batimetri, hapus, urutan]
related: [lab/points, lab/points/process-points]
status: published
updated: 2026-10-02
---

Klik kanan sebuah titik di **Penjelajah Peta → Titik Observasi**, atau pakai tombol yang muncul saat kursor berada di atasnya.

## Menampilkan titik di peta

Pilih **Tampilkan di Peta**. Peta bergerak ke titik tersebut. Memilih titik juga menjadikannya titik yang ditampilkan di **Analisis & Validasi**, **Data**, dan **Analisis**.

## Mengganti nama titik

Pilih **Ganti Nama Titik…** lalu ketik nama baru. Nama wajib diisi.

## Mengubah koordinat

Pilih **Ubah Koordinat…** lalu ketik lintang dan bujur baru, atau seret titiknya di peta.

Jika titik sudah diproses, Lab meminta konfirmasi terlebih dahulu: data hasil pemrosesannya milik lokasi lama. Di lokasi baru titik tampil sebagai **Belum diproses** dan harus diproses lagi. Titik tidak bisa dipindahkan selama sedang diproses; batalkan prosesnya terlebih dahulu. Jika titik bagian dari proses rute, batalkan proses itu (semua titik di rute) sebelum memindahkannya.

## Mengurutkan titik

Gunakan **Pindah ke Atas** dan **Pindah ke Bawah**, atau **Urutkan Titik**. Urutan ini menjadi urutan rute untuk [analisis rute](../analysis/index.md#ekstrem-di-sepanjang-rute).

## Mencari kedalaman air

Jalankan **Konfersi: Cari Kedalaman Air** dengan titik terpilih. Lab menanyakan elevasi dasar laut di titik itu ke grid hasil pengukuran: GMRT (yang menggabungkan GEBCO dengan survei multibeam) terlebih dahulu, lalu GEBCO. Hasilnya tampil sebagai **Kedalaman … m**. Lab tidak pernah memperkirakan kedalaman: jika tidak ada sumber yang menjawab, muncul **Pencarian kedalaman gagal**; coba lagi nanti.

## Menghapus titik

Pilih **Hapus Titik** lalu konfirmasi. Titik keluar dari proyek. Data hasil pemrosesan untuk lokasinya tetap disimpan dan dipakai ulang jika titik ditambahkan lagi di tempat yang sama, sehingga tidak diunduh dua kali.

Titik tidak bisa dihapus selama sedang diproses. Batalkan prosesnya terlebih dahulu.
