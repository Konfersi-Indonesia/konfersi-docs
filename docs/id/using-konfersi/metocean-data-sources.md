---
title: Sumber data metocean
description: Dataset global yang menjadi acuan kalibrasi dan validasi Konfersi, yaitu ERA5, CMEMS, FES2022, dan CMIP6, serta cara mencantumkan sumbernya.
tags: [data, era5, cmems, fes2022, cmip6, atribusi]
related: [using-konfersi/mission-planning, legal/ai-and-metocean-disclaimer, billing/plans-and-pricing]
status: published
updated: 2026-09-27
---

Konfersi mengkalibrasi dan memvalidasi model serta analisisnya terhadap dataset global berstandar industri. Halaman ini menjelaskan dataset utama yang kami gunakan sebagai acuan, apa isinya, dan hal-hal yang perlu diperhatikan saat Anda memakai hasil yang bersumber darinya.

## Dataset utama

| Dataset | Penjelasan | Pemakaian umum di Konfersi |
|---|---|---|
| **ERA5** | Reanalisis atmosfer generasi kelima dari ECMWF (European Centre for Medium-Range Weather Forecasts), didistribusikan melalui Copernicus Climate Data Store | Riwayat per jam (hindcast) untuk angin, tekanan, suhu, dan gelombang laut |
| **CMEMS** | Copernicus Marine Service, penyedia produk kelautan berbasis satelit dan model | Arus, salinitas, kondisi laut, dan biogeokimia |
| **FES2022** | Model pasang surut laut global | Konstituen dan elevasi pasang surut |
| **CMIP6** | Coupled Model Intercomparison Project Fase 6: rangkaian eksperimen model iklim global yang terkoordinasi | Skenario iklim masa depan, misalnya jalur SSP, untuk kajian risiko iklim |

### ERA5

ERA5 menggabungkan data model dengan observasi dari seluruh dunia. Hasilnya adalah rekaman atmosfer dan gelombang laut per jam yang konsisten, mundur hingga beberapa dekade. ERA5 umum dipakai sebagai acuan statistik angin dan gelombang, batas operasional, dan periode ulang.

### CMEMS

Copernicus Marine Service menerbitkan analisis, prakiraan, dan reanalisis kelautan. Konfersi memanfaatkan produk CMEMS untuk parameter kondisi laut seperti arus dan salinitas.

### FES2022

FES2022 adalah model pasang surut global. Model ini dipakai untuk menggambarkan pasang surut di lokasi yang belum memiliki data pengukuran lokal jangka panjang.

### CMIP6

CMIP6 menghimpun proyeksi iklim dari banyak pusat pemodelan dengan skenario yang seragam. Konfersi memakai proyeksi CMIP6 untuk analisis iklim dan kajian risiko iklim, dan juga menjadikannya salah satu topik kursus.

## Acuan lainnya

Untuk keperluan validasi, terutama dalam studi konsultasi, Konfersi juga dapat membandingkan hasil dengan sumber lain. Sumber tersebut antara lain altimetri satelit, pelampung gelombang tertambat, pengukuran in-situ seperti profil ADCP dan menara meteorologi pesisir, serta model dan arsip global seperti HYCOM dan data NOAA. Sumber yang dipakai bergantung pada studi atau modulnya.

## Unduhan dan paket

Akses unduhan data, misalnya unduhan hindcast ERA5, bergantung pada paket Anda. Lihat [Paket & harga](../billing/plans-and-pricing.md).

## Atribusi dan lisensi

Setiap dataset diterbitkan oleh penyedianya masing-masing dengan lisensi dan ketentuan penggunaannya sendiri. Banyak di antaranya, termasuk layanan Copernicus, mewajibkan pencantuman sumber saat hasilnya dipublikasikan atau dibagikan.

Saat Anda memakai hasil Konfersi dalam laporan atau publikasi:

- Cantumkan dataset yang mendasarinya, misalnya ERA5 atau CMEMS, selain Konfersi.
- Ikuti ketentuan lisensi terbaru di situs web masing-masing penyedia. Ketentuan tersebut berlaku di atas ringkasan ini.
- Patuhi batasan tambahan yang berlaku dalam paket atau kontrak Konfersi Anda. Lihat [Syarat & Ketentuan](../legal/terms.md) dan [Kebijakan Penggunaan yang Wajar](../legal/acceptable-use.md).

## Keterbatasan

Dataset global memiliki resolusi terbatas dan bias yang sudah diketahui, terutama di dekat pantai dan di wilayah dengan topografi kompleks. Kalibrasi Konfersi mengurangi galat tersebut, tetapi tidak menghilangkannya sepenuhnya.

<scalar-callout type="warning">Hasil yang bersumber dari dataset ini bukan studi tapak yang tersertifikasi, dan tidak didukung secara resmi oleh penyedia data maupun lembaga pemerintah mana pun. Baca [Penafian AI & metocean](../legal/ai-and-metocean-disclaimer.md).</scalar-callout>

Ada pertanyaan tentang dataset atau hasil analisis? [Hubungi tim bantuan](../support/contact-support.md).
