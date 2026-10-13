---
title: Validasi data
description: Jalankan kontrol kualitas otomatis pada data titik — rentang fisik, lonjakan, nilai datar, celah, dan kelengkapan — dan baca hasilnya.
tags: [lab, validasi, qc, kontrol kualitas, lonjakan, celah, kelengkapan]
related: [lab/analysis, lab/data/variables-and-sources]
status: published
updated: 2026-10-12
---

Validasi menjalankan kontrol kualitas (QC) otomatis pada data yang diambil untuk sebuah titik, sehingga Anda tahu seberapa jauh data itu bisa dipercaya sebelum memakai analisisnya.

## Menjalankan validasi

1. Pilih titik yang sudah diproses.
2. Di **Penjelajah Peta → Analisis & Validasi**, pilih **Jalankan QC untuk titik ini**, atau di **Konfersi Lab → Validasi**, pilih **Jalankan Validasi Data**.
3. Hasilnya tampil di bawah, per variabel, beserta waktu pemeriksaan dan jumlah sampel yang diuji.

Jika belum ada data yang diambil, Lab memberi tahu bahwa tidak ada data untuk divalidasi. Proses titiknya terlebih dahulu.

## Pemeriksaannya

Setiap pemeriksaan melaporkan **pass** (lulus), **warn** (peringatan), atau **fail** (gagal), beserta nilai yang diukur:

| Pemeriksaan | Yang dicari |
|---|---|
| **Physical range limits** | Nilai di luar batas fisik, misalnya angin 0–75 m/s, tinggi gelombang 0–30 m, arus 0–5 m/s, suhu permukaan laut −2,5–40 °C, salinitas 0–42 PSU |
| **Gradient & spike filter** | Lompatan antarnilai berurutan yang jauh lebih besar dari biasanya untuk deret tersebut |
| **Signal flatline test** | Nilai yang sama berulang selama 24 jam atau lebih, tanda sensor macet atau data yang diisi |
| **Completeness & gaps** | Proporsi langkah waktu yang memiliki data, dan periode kosong yang lebih panjang dari tiga kali langkah waktu normal |
| **Satellite altimetry collocation** | Perbandingan dengan pengukuran satelit di sepanjang lintasannya |

**Satellite altimetry collocation** membutuhkan data lintasan yang belum diambil Lab, jadi ditampilkan sebagai tidak tersedia, tidak pernah sebagai lulus. Pemeriksaan juga tidak tersedia jika deret datanya terlalu pendek untuk diuji.


## Pemeriksaan kualitas setelah pemrosesan

Setiap variabel juga diperiksa saat titik diproses. Buka **Data Analytics → Ketersediaan Data**, lalu **Pemeriksaan kualitas** di bawah sebuah variabel. Setiap pemeriksaan punya status dan satu kalimat berisi angka yang ditemukannya:

| Pemeriksaan | Isi kalimatnya |
|---|---|
| **Batas rentang fisik** | Berapa sampel di luar batas fisik variabel, dari berapa sampel |
| **Lonjakan terisolasi** | Lonjakan satu langkah di atas batas ukuran, dengan beberapa tanggal dan nilai pertama. Tidak diperiksa jika puncak satu langkah memang nyata |
| **Lonjakan terisolasi dihapus** (gelombang) | Berapa lonjakan satu langkah terisolasi yang dihapus sebelum analisis, dengan contohnya, misalnya "15 lonjakan satu langkah terisolasi dihapus sebelum analisis: 2017-02-15 15:00 (2,91 m), … dan 10 lainnya" |
| **Uji sinyal datar** | Deretan nilai identik yang berlangsung beberapa jam atau lebih. Tidak diperiksa jika nilai datar yang panjang memang wajar |
| **Kelengkapan & celah** | Sampel yang diterima dibanding yang diharapkan, langkah waktu dan jendelanya, serta celah lebih dari tiga kali langkah waktu |
| **Sel grid di titik** | Sel grid terdekat yang punya data, jaraknya dari titik, dan seberapa lengkap catatannya |
| **Analisis yang dihasilkan** | Berapa analisis variabel yang dihasilkan, dan mana yang belum |
| **Kolokasi altimetri satelit** | Ditampilkan sebagai belum diambil |

Nama pemeriksaan dan kalimatnya mengikuti bahasa tampilan Lab (Inggris atau Indonesia), dengan angka dan desimal ditulis sesuai bahasa itu. Di ekstensi desktop, itu bahasa tampilan VS Code. Lab versi web menampilkannya dalam bahasa Inggris.

## Menyikapi peringatan dan kegagalan

- Sedikit lonjakan atau celah pendek wajar pada catatan panjang dan jarang mengubah statistik atau nilai ekstrem secara berarti.
- Banyak kegagalan, kelengkapan rendah, atau nilai datar yang panjang berarti sel grid terdekat mungkin kurang mewakili lokasi. Coba titik yang sedikit lebih jauh ke laut, bandingkan dengan variabel lain, atau validasi dengan pengukuran lokal.
- Proses ulang hanya membantu jika unduhan sempat terputus. Proses ulang tidak mengubah data dari penyedia.

<scalar-callout type="info">QC menandai kemungkinan masalah; QC tidak mengoreksi data. Analisis memakai data sebagaimana disediakan, kecuali lonjakan gelombang satu langkah yang terisolasi, yang dihapus lebih dulu (lihat **Lonjakan terisolasi dihapus** di atas).</scalar-callout>
