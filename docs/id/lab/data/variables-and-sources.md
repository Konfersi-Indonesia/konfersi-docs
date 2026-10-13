---
title: Variabel & sumber
description: Setiap variabel metocean yang diambil Konfersi Lab untuk sebuah titik — penyedia, dataset, resolusi, dan periode — serta cara mengunduhnya sebagai NetCDF.
tags: [lab, variabel, sumber, cmems, era5, copernicus, fes2022, angin, gelombang, wind sea, swell, arus, tinggi muka laut, sst, salinitas, muka air, muka air total, netcdf, resolusi, catatan]
related: [lab/data, lab/analysis/reading-results, using-konfersi/metocean-data-sources, lab/points/process-points]
status: published
updated: 2026-10-13
---

Memproses titik mengambil hingga sepuluh variabel. Pilih titik lalu buka **Konfersi Lab → Data** untuk melihat variabel yang sudah diakuisisi, sedang berjalan, atau belum diakuisisi, beserta waktu pembaruannya.

## Variabelnya

| Variabel | Penyedia | Dataset | Grid · langkah waktu | Periode |
|---|---|---|---|---|
| **Angin** (10 m, komponen timur dan utara) | Copernicus Marine | Angin laut global per jam, L4 reprocessed (`cmems_obs-wind_glo_phy_my_l4_0.125deg_PT1H`) | 0,125° · per jam | Jan 2007 – Nov 2025 |
| **Gelombang**: total, wind sea, dan dua sistem swell (tinggi, periode, arah) | Copernicus Marine | Reanalisis gelombang global (`cmems_mod_glo_wav_my_0.2deg_PT3H-i`) | 0,2° · per 3 jam | Jan 1980 – Jan 2026 |
| **Arus** (komponen timur dan utara, permukaan, residual) | Copernicus Marine | Reanalisis laut GLORYS12, rata-rata harian (`cmems_mod_glo_phy_my_0.083deg_P1D-m`) | 1/12° (0,083°) · harian | Jan 1993 – Des 2025 |
| **Tinggi muka laut** (non-pasang surut, di atas geoid) | Copernicus Marine | Reanalisis laut GLORYS12, rata-rata harian (`cmems_mod_glo_phy_my_0.083deg_P1D-m`) | 1/12° (0,083°) · harian | Jan 1993 – Des 2025 |
| **Suhu permukaan laut** | Copernicus Marine | SST OSTIA reprocessed (`METOFFICE-GLO-SST-L4-REP-OBS-SST`) | harian | Okt 1981 – Des 2025 |
| **Salinitas** (permukaan laut) | Copernicus Marine | Salinitas permukaan multi-observasi (`cmems_obs-mob_glo_phy-sss_my_multi_P1D`) | harian | Jan 1993 – Des 2024 |
| **Presipitasi** | Copernicus CDS | Deret waktu titik ERA5 per jam | 0,25° · per jam | 2015 – 2025 |
| **Suhu udara** (2 m) | Copernicus CDS | Deret waktu titik ERA5 per jam | 0,25° · per jam | 2015 – 2025 |
| **Tekanan udara** (permukaan) | Copernicus CDS | Deret waktu titik ERA5 per jam | 0,25° · per jam | 2015 – 2025 |
| **Muka air** (pasang surut astronomis) | AVISO | Model pasang surut FES2022b, 34 konstituen | prediksi per jam | Jan 1993 – Des 2025 |
| **Muka air total** (pasang surut ditambah muka laut non-pasang surut, dihitung) | AVISO + Copernicus Marine | Pasang surut FES2022b ditambah tinggi muka laut GLORYS12 (`cmems_mod_glo_phy_my_0.083deg_P1D-m`) | per jam | Jan 1993 – Des 2025 |

Setiap periode adalah rentang yang diminta Lab; data yang Anda dapat bergantung pada ketersediaan di penyedia untuk lokasi tersebut. Variabel ERA5 memakai rentang sepuluh tahun agar permintaan tetap dalam batas penyedia.

**Muka air** adalah pasang surut yang diprediksi di titik dari konstituen FES2022b, bukan hasil pengukuran. Analisis titiknya adalah [datum pasang surut](../analysis/reading-results.md#datum-pasang-surut), dan pasang surut per jam untuk periode pilihan Anda dibuat saat Anda memintanya. Analisis lokasi **Pasang surut** membandingkan model dengan stasiun pasang surut terdekat; lihat [Cara data diproses](index.md#analisis-lokasi).

**Muka air total** dihitung, bukan diunduh: pasang surut FES2022b per jam ditambah muka laut non-pasang surut hari itu, yaitu tinggi muka laut GLORYS12 dikurangi rata-ratanya selama 1993–2025. Muka air total dianalisis dari unduhan tinggi muka laut, jadi memproses tinggi muka laut juga menghasilkan muka air total. Analisisnya sama dengan variabel bernilai tunggal lainnya: deret waktu, statistik, klimatologi, dan [nilai ekstrem](../analysis/reading-results.md#muka-air-total). Variabel ini tidak punya berkas NetCDF sendiri: unduh tinggi muka laut sebagai gantinya.

**Gelombang (wind sea)** dan **Gelombang (swell)** dianalisis dari unduhan gelombang, sehingga ikut bersamanya. Wind sea memakai partisi wind sea (`VHM0_WW`, `VMDR_WW`, `VTM01_WW`) dan swell memakai sistem swell utama (`VHM0_SW1`, `VMDR_SW1`, `VTM01_SW1`); sistem swell kedua tidak dianalisis tersendiri. Keduanya punya analisis yang sama dengan gelombang total, termasuk mawarnya sendiri. Setiap hasil menyebut dataset, versinya, dan variabel-variabel ini.

## Baca catatannya

Beberapa variabel membawa catatan yang ditampilkan Lab bersama setiap hasilnya:

| Variabel | Catatan |
|---|---|
| **Arus** | Arus residual (non-pasang surut): kecepatan permukaan rata-rata harian dari reanalisis GLORYS12. **Arus pasang surut tidak termasuk**, sehingga arus puncak di paparan yang dipengaruhi pasang surut lebih tinggi daripada nilai ini. Jangan dipakai sendirian untuk desain. |
| **Tinggi muka laut** | Tinggi di atas geoid (rata-rata harian non-pasang surut), bukan anomali terhadap muka laut rata-rata. Jangan langsung ditambahkan ke pasang surut astronomis: kurangi dulu rata-rata jangka panjangnya. |
| **Muka air** | Hanya pasang surut astronomis: tidak termasuk siklus muka laut rata-rata musiman dan gelombang badai (storm surge). Muka air total yang teramati bisa sekitar 0,25 m lebih tinggi. Jangan dipakai sendirian sebagai muka air desain. |
| **Muka air total** | Pasang surut astronomis ditambah muka laut non-pasang surut rata-rata harian dari reanalisis laut (siklus muka laut rata-rata musiman dan wind set-up yang lambat). Storm surge singkat (hitungan jam) dan wave set-up tidak termasuk, sehingga puncaknya lebih rendah daripada storm tide yang teramati: jangan dipakai sendirian sebagai muka air storm tide desain. |
| **Presipitasi, suhu udara, tekanan udara** | Rentang 2015–2025 lebih pendek dari 20 tahun yang dibutuhkan metode nilai ekstrem, sehingga nilai ekstremnya ditandai kepercayaan rendah. |

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
