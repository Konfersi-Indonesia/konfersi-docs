---
title: Perencanaan Misi
description: Perkiraan downtime akibat cuaca untuk operasi lepas pantai atau pesisir di suatu lokasi dan periode, di dalam Konfersi Lab.
tags: [mission-planning, downtime, operations, metocean]
related: [using-konfersi/console-projects, using-konfersi/lab-workspace, using-konfersi/metocean-data-sources, legal/ai-and-metocean-disclaimer]
status: published
updated: 2026-10-01
---

Perencanaan Misi membantu Anda memahami seberapa sering kondisi metocean cenderung menghentikan operasi. Anda bekerja di **Konfersi Lab** (aktivitas Perencanaan Misi): atur lingkungan dan urutan operasi, jalankan simulasi jendela cuaca pada titik terpilih, lalu tinjau heatmap downtime dan laporan markdown yang diperkaya.

<scalar-callout type="info">Perencanaan Misi berjalan di Konfersi Lab pada backend produk (`/v1/metocean/planning/*`). Buka proyek di Lab, lalu pilih aktivitas Perencanaan Misi.</scalar-callout>

## Cara kerja

1. Buka proyek di Konfersi Lab.
2. Pilih titik observasi yang sudah memiliki data angin / gelombang / arus.
3. Di **Config** Perencanaan Misi, atur kondisi, periode ulang, lingkungan (batas), dan operasi (JSON Lanjutan untuk hierarki penuh). Simpan.
4. **Jalankan perencanaan**. Hasil menampilkan heatmap downtime lingkungan plus tabel trip / task / overall.
5. Buka tab **Report** untuk markdown yang dapat disesuaikan (salin atau unduh). Penyempurnaan AI laporan bersifat opsional nanti — simulasi inti bukan AI.

## Paket dan ekspor

Apa yang dapat Anda ekspor bergantung pada paket proyek. Periksa paket di Console.

## Metode dan data

Pendekatan ini mengacu pada praktik industri, seperti DNV-GL RP C205 dan panduan dari badan seperti ISO, WMO, dan IMO. Data metocean dijelaskan di [Sumber data metocean](metocean-data-sources.md).

<scalar-callout type="warning">Hasil Perencanaan Misi mendukung perencanaan. Ini bukan studi situs tersertifikasi dan tidak menggantikan penilaian profesional atau prosedur keselamatan Anda. Baca [disclaimer AI & metocean](../legal/ai-and-metocean-disclaimer.md).</scalar-callout>

## Bantuan

- Pertanyaan akses: [hubungi dukungan](../support/contact-support.md).
- Orientasi Lab: [Ruang kerja Lab](lab-workspace.md).
