---
title: Batas proyek
description: Unggah GeoJSON, KML, KMZ, atau Shapefile dalam ZIP untuk menampilkan area proyek di peta Lab, serta atur warna dan visibilitasnya.
tags: [lab, batas, geojson, kml, kmz, shapefile, peta, area]
related: [lab/map, lab/points]
status: published
updated: 2026-10-02
---

Batas proyek adalah area, seperti konsesi, blok, atau area studi, yang digambar di [peta proyek](index.md). Batas dibagikan ke semua orang yang mengerjakan proyek dan tercantum di **Penjelajah Peta → Batas Proyek**.

## Mengunggah batas

1. Pilih **Unggah Batas** (atau jalankan **Konfersi: Unggah Batas…**) lalu pilih berkasnya.
2. Lab menampilkan langkahnya: **Menerima berkas**, **Membaca dan mengonversi ke WGS 84**, **Menyimpan batas**.
3. Batas muncul di daftar beserta jumlah fiturnya, dan di peta.

Berkas yang didukung, masing-masing hingga **10 MB**:

- GeoJSON (`.geojson`, `.json`)
- KML (`.kml`) dan KMZ (`.kmz`)
- Shapefile dalam ZIP (`.zip` berisi minimal `.shp`, `.shx`, dan `.dbf`, sebaiknya juga `.prj`)

Lab mengonversi koordinat ke WGS 84. Buat batas tetap sederhana: beberapa poligon atau garis, bukan satu dataset lengkap.

## Mengelola batas

Klik kanan sebuah batas, atau pakai tombolnya:

| Aksi | Fungsinya |
|---|---|
| **Ganti Nama Batas…** | Mengubah nama di daftar dan legenda |
| **Ubah Warna…** | Biru, Oranye, Hijau, Merah muda, Ungu, Merah, Sian, atau Kuning |
| **Tampilkan di Peta** / **Sembunyikan dari Peta** | Menampilkan atau menyembunyikan tanpa menghapus |
| **Perbesar ke Batas** | Menyesuaikan peta ke batas tersebut |
| **Hapus Batas** | Menghapusnya. Berkas yang diunggah ikut terhapus untuk semua orang di proyek |

Batas tidak memengaruhi pemrosesan; batas hanya untuk orientasi. Untuk menganalisis lokasi di dalam area, tambahkan [titik observasi](../points/index.md) di sana.
