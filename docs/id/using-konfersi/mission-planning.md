---
title: Mission Planning
description: Perkirakan downtime akibat cuaca untuk operasi lepas pantai atau pesisir pada lokasi dan periode tertentu, di dalam proyek Konfersi.
tags: [mission-planning, downtime, operasi, metocean]
related: [using-konfersi/console-projects, using-konfersi/metocean-data-sources, legal/ai-and-metocean-disclaimer]
status: published
updated: 2026-09-27
---

Mission Planning membantu Anda memahami seberapa sering kondisi metocean berpotensi menghentikan sebuah operasi. Anda menentukan lokasi, periode, dan bila perlu rincian perjalanan (trip) serta tugas (task) dalam operasi tersebut. Mission Planning lalu memperkirakan downtime yang mungkin terjadi dan merangkumnya dalam sebuah laporan.

<scalar-callout type="info">Mission Planning mulai diluncurkan akhir Oktober 2026, setelah uji coba internal. Ini adalah modul analisis Konfersi pertama yang dirilis untuk pelanggan. Detail di halaman ini dapat berubah sebelum maupun selama masa peluncuran.</scalar-callout>

## Cara kerjanya

Mission Planning berjalan di dalam proyek Console, jadi Anda perlu memiliki proyek terlebih dahulu. Lihat [Console & proyek](console-projects.md).

Alur kerjanya terdiri dari empat bagian:

1. **Tentukan konteks analisis.** Pilih lokasi dan periode yang ingin dianalisis. Jika perlu, rinci operasinya menjadi trip dan task.
2. **Jalankan analisis.**
3. **Tinjau downtime.** Hasil ditampilkan dalam tabel dan grafik untuk beberapa tingkat:
   - downtime lingkungan
   - downtime per trip
   - downtime per task
   - downtime keseluruhan
4. **Dapatkan laporan.** Mission Planning menyusun laporan dari analisis tersebut.

## Paket dan ekspor

Kemampuan ekspor dapat bergantung pada paket proyek Anda dan pada status uji coba proyek tersebut. Periksa paket proyek di Console, lalu lihat [Paket & harga](../billing/plans-and-pricing.md).

## Metode dan data

Pendekatannya mengacu pada praktik industri, seperti DNV-GL RP C205, serta panduan dari lembaga seperti ISO, WMO, dan IMO. Data metocean yang digunakan dijelaskan di [Sumber data metocean](metocean-data-sources.md).

<scalar-callout type="warning">Hasil Mission Planning adalah alat bantu perencanaan. Hasil ini bukan studi tapak yang tersertifikasi dan tidak menggantikan penilaian profesional maupun prosedur keselamatan Anda sendiri. Baca [Penafian AI & metocean](../legal/ai-and-metocean-disclaimer.md).</scalar-callout>

## Bantuan

- Pertanyaan seputar peluncuran atau akses: [hubungi tim bantuan](../support/contact-support.md).
- Butuh studi tapak yang lengkap? Tim konsultasi Konfersi siap membantu. Lihat [Apa itu Konfersi?](../getting-started/what-is-konfersi.md).
