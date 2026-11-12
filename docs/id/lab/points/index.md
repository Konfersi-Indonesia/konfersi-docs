---
title: Titik observasi
description: Tambahkan titik observasi ke proyek di Konfersi Lab — di peta, dengan koordinat, atau dari berkas CSV, Excel, KML, KMZ, GeoJSON, atau Shapefile.
tags: [lab, titik, titik observasi, koordinat, impor, csv, excel, kml, geojson, shapefile]
related: [lab/points/manage-points, lab/points/process-points, lab/map]
status: published
updated: 2026-10-02
---

Titik observasi adalah lokasi, dalam lintang dan bujur, tempat Lab mengunduh dan menganalisis data metocean. Setiap analisis, validasi, perencanaan, dan laporan dibuat untuk satu titik, atau untuk beberapa titik di sepanjang rute.

Titik adalah milik proyek, jadi semua orang yang mengerjakan proyek melihat titik yang sama. Anda menemukannya di **Penjelajah Peta → Titik Observasi** (dan **Konfersi Lab → Titik**).

Menambah titik belum mengunduh apa pun. Titik hanya diproses saat Anda menjalankan **Proses**. Lihat [Memproses titik](process-points.md).

<scalar-callout type="info">Setiap titik dihitung dalam kuota titik proyek. Jika penambahan titik melebihi kuota, titik tidak ditambahkan. Hapus titik yang tidak dipakai, atau naikkan kuotanya di Console.</scalar-callout>

## Menambah titik di peta

1. Buka **Penjelajah Peta** lalu pilih **Tambah Titik di Peta** (atau jalankan **Konfersi: Tambah Titik di Peta**).
2. Klik peta di setiap lokasi yang diinginkan. Titik diberi nama otomatis; Anda bisa menggantinya nanti.
3. Tekan **Enter** atau **Esc** untuk selesai. **Ctrl+Z** (**Cmd+Z** di Mac) menghapus titik terakhir yang ditambahkan.

Titik yang ditambahkan berurutan disimpan sesuai urutan itu, yang penting untuk [analisis rute](../analysis/index.md#ekstrem-di-sepanjang-rute).

## Menambah titik dengan koordinat

1. Pilih **Tambah dengan Koordinat** (atau jalankan **Konfersi: Tambah Titik dengan Koordinat…**).
2. Ketik lintang dan bujur dalam derajat desimal, dipisahkan koma, misalnya `-6.1, 106.8`. Lintang harus antara −90 dan 90, bujur antara −180 dan 180.
3. Beri nama titiknya.

## Mengimpor titik dari berkas

1. Pilih **Impor dari Berkas** (atau jalankan **Konfersi: Impor Titik dari Berkas…**) lalu pilih berkasnya.
2. Lab membaca berkas dan menampilkan titik yang ditemukan, semuanya tercentang. Hapus centang yang tidak diperlukan.
3. Konfirmasi. Lab memberi tahu jumlah titik yang diimpor.

Berkas yang didukung:

| Berkas | Yang dibaca Lab |
|---|---|
| CSV (`.csv`), Excel (`.xlsx`, `.xls`) | Satu titik per baris. Membutuhkan kolom lintang dan kolom bujur; kolom nama opsional |
| KML, KMZ (`.kml`, `.kmz`) | Titik placemark, diberi nama sesuai placemark |
| GeoJSON (`.geojson`, `.json`) | Fitur titik, diberi nama dari properti `name` |
| Shapefile dalam ZIP (`.zip`) | Fitur titik |

Untuk CSV dan Excel, judul kolom dicocokkan secara longgar dan tanpa memperhatikan huruf besar-kecil:

- **Lintang**: judul yang mengandung `lat`, misalnya `Lat` atau `Latitude`.
- **Bujur**: judul yang mengandung `lon` atau `lng`, misalnya `Lon`, `Long`, atau `Longitude`.
- **Nama** (opsional): judul yang mengandung `name` atau `label`. Baris tanpa nama diberi nama **Point 1**, **Point 2**, dan seterusnya.

Koordinat harus dalam derajat desimal WGS 84. Contoh CSV:

```csv
Name,Lat,Lon
Dermaga A,-6.105,106.812
Buoy 2,-5.980,106.700
```

Jika Lab tidak menemukan kolomnya, muncul pesan **Required columns 'Lat' and 'Lon' not found.** Untuk berkas peta tanpa fitur titik, muncul **No point features found in the file.**

## Selanjutnya

- [Mengelola titik](manage-points.md): ganti nama, pindahkan, urutkan, cari kedalaman air, hapus.
- [Memproses titik](process-points.md): unduh dan analisis datanya.
