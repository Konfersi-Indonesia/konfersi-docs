---
title: Variabel & sumber
description: Setiap variabel metocean yang diambil Konfersi Lab untuk sebuah titik — penyedia, dataset, resolusi, dan periode — serta cara mengunduhnya sebagai NetCDF.
tags: [lab, variabel, sumber, cmems, era5, copernicus, angin, gelombang, arus, sst, salinitas, netcdf, resolusi]
related: [lab/data, using-konfersi/metocean-data-sources, lab/points/process-points]
status: published
updated: 2026-10-02
---

Memproses titik mengambil hingga delapan variabel. Pilih titik lalu buka **Konfersi Lab → Data** untuk melihat variabel yang sudah diakuisisi, sedang berjalan, atau belum diakuisisi, beserta waktu pembaruannya.

## Variabelnya

| Variabel | Penyedia | Dataset | Grid · langkah waktu | Periode |
|---|---|---|---|---|
| **Angin** (10 m, komponen timur dan utara) | Copernicus Marine | Angin laut global per jam, L4 reprocessed (`cmems_obs-wind_glo_phy_my_l4_0.125deg_PT1H`) | 0,125° · per jam | Jan 2007 – Nov 2025 |
| **Gelombang**: total, wind sea, dan dua sistem swell (tinggi, periode, arah) | Copernicus Marine | Reanalisis gelombang global (`cmems_mod_glo_wav_my_0.2deg_PT3H-i`) | 0,2° · per 3 jam | Jan 1980 – Jan 2026 |
| **Arus** (komponen timur dan utara, permukaan hingga 15 m) | Copernicus Marine | Arus global multi-observasi (`cmems_obs-mob_glo_phy-cur_my_0.25deg_PT1H-i`) | 0,25° · per jam | Jan 1993 – Jul 2025 |
| **Suhu permukaan laut** | Copernicus Marine | SST OSTIA reprocessed (`METOFFICE-GLO-SST-L4-REP-OBS-SST`) | 0,05° · harian | Okt 1981 – Des 2025 |
| **Salinitas** (permukaan laut) | Copernicus Marine | Salinitas permukaan multi-observasi (`cmems_obs-mob_glo_phy-sss_my_multi_P1D`) | harian | Jan 1993 – Des 2024 |
| **Presipitasi** | Copernicus CDS | Deret waktu titik ERA5 per jam | 0,25° · per jam | 2015 – 2025 |
| **Suhu udara** (2 m) | Copernicus CDS | Deret waktu titik ERA5 per jam | 0,25° · per jam | 2015 – 2025 |
| **Tekanan udara** (permukaan) | Copernicus CDS | Deret waktu titik ERA5 per jam | 0,25° · per jam | 2015 – 2025 |

Setiap periode adalah rentang yang diminta Lab; data yang Anda dapat bergantung pada ketersediaan di penyedia untuk lokasi tersebut. Variabel ERA5 memakai rentang sepuluh tahun agar permintaan tetap dalam batas penyedia.

**Muka air** berasal dari prediksi pasang surut (FES2022), bukan dari pemrosesan. Lihat [Cara data diproses](index.md#analisis-lokasi).

<scalar-callout type="info">Produk reanalisis dan satelit menggambarkan kondisi di satu sel grid, bukan di satu titik persis. Di dekat pantai, di pelabuhan, atau di dasar laut yang kompleks, kondisi bisa berbeda dari sel terdekat. Untuk desain teknik, validasi dengan pengukuran lokal.</scalar-callout>

## Memproses sebagian variabel saja

Gunakan **Proses Variabel Terpilih…** pada titik dan centang yang Anda perlukan, misalnya hanya gelombang dan angin untuk tinjauan cepat. Variabel lain bisa diproses nanti; tidak ada yang diunduh dua kali.

## Mengunduh data

1. Pilih titik yang sudah diproses.
2. Pilih **Unduh Data (NetCDF)…** (atau, di **Data**, **Unduh Data** pada sebuah variabel).
3. Centang variabelnya. Lab mengunduh satu berkas NetCDF per variabel.

Di browser berkas masuk ke folder unduhan; di desktop Anda memilih lokasi penyimpanannya. Buka berkasnya dengan alat seperti Python (`xarray`), MATLAB, Panoply, atau QGIS.

Jika titik belum memiliki data yang diunduh, Lab meminta Anda memprosesnya terlebih dahulu.

## Mencantumkan sumber data

Saat Anda memublikasikan hasil, cantumkan penyedianya. Lihat [Atribusi dan lisensi](../../using-konfersi/metocean-data-sources.md#atribusi-dan-lisensi).
