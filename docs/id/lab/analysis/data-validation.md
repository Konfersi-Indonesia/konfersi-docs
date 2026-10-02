---
title: Validasi data
description: Jalankan kontrol kualitas otomatis pada data titik — rentang fisik, lonjakan, nilai datar, celah, dan kelengkapan — dan baca hasilnya.
tags: [lab, validasi, qc, kontrol kualitas, lonjakan, celah, kelengkapan]
related: [lab/analysis, lab/data/variables-and-sources]
status: published
updated: 2026-10-02
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

Nama pemeriksaan dan hasilnya saat ini tampil dalam bahasa Inggris di Lab.

## Menyikapi peringatan dan kegagalan

- Sedikit lonjakan atau celah pendek wajar pada catatan panjang dan jarang mengubah statistik atau nilai ekstrem secara berarti.
- Banyak kegagalan, kelengkapan rendah, atau nilai datar yang panjang berarti sel grid terdekat mungkin kurang mewakili lokasi. Coba titik yang sedikit lebih jauh ke laut, bandingkan dengan variabel lain, atau validasi dengan pengukuran lokal.
- Proses ulang hanya membantu jika unduhan sempat terputus. Proses ulang tidak mengubah data dari penyedia.

<scalar-callout type="info">QC menandai kemungkinan masalah; QC tidak mengoreksi data. Analisis selalu memakai data sebagaimana disediakan.</scalar-callout>
