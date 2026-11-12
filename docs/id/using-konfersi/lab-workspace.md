---
title: Ruang kerja Lab
description: Buka proyek Konfersi di Lab, ruang kerja metocean, di browser atau di VS Code dan Antigravity, dan temukan panduan Lab.
tags: [lab, ruang kerja, vs-code, antigravity, ekstensi]
related: [lab/get-started, lab/desktop, using-konfersi/console-projects, using-konfersi/metocean-data-sources]
status: published
updated: 2026-10-02
---

Lab adalah ruang kerja metocean untuk proyek yang sedang Anda buka. Anda mengelola proyek di Console dan mengerjakan analisisnya di Lab: menempatkan titik observasi, memprosesnya untuk mengunduh dan menganalisis data metocean, membaca grafik, memvalidasi data, merencanakan operasi, dan membuat laporan.

Lab berjalan di browser di [lab.konfersi.com](https://lab.konfersi.com), dan di VS Code atau Antigravity lewat ekstensi **Konfersi Lab**.

## Sebelum memulai

- Anda membutuhkan akun Konfersi. Lihat [Membuat akun](../getting-started/create-account.md).
- Anda membutuhkan proyek dengan paket berbayar. Pada paket Gratis, Console menampilkan **Tingkatkan paket untuk membuka Lab** alih-alih membuka Lab. Lihat [Paket & harga](../billing/plans-and-pricing.md).
- Anda harus menjadi pemilik proyek, asisten yang diundang, atau anggota organisasi tempat proyek dibagikan.

## Membuka proyek di Lab

1. Masuk ke Console di [app.konfersi.com](https://app.konfersi.com).
2. Buka **Proyek Lab → Proyek Saya**.
3. Klik dua kali proyeknya, atau buka proyek lalu pilih di **Buka proyek ini**:
   - **Konfersi Lab**, di tab ini atau tab baru, untuk memakai Lab di browser.
   - **VSCode** atau **Antigravity** untuk memakainya di editor desktop. Pasang ekstensinya terlebih dahulu lewat **Ekstensi Lab**; lihat [Memasang ekstensi](../lab/desktop/install-the-extension.md).

Di browser, Lab terbuka di alamat yang diakhiri `/project/` dan slug proyek, dan memakai login yang sama dengan Console. Jika Anda membuka [lab.konfersi.com](https://lab.konfersi.com) tanpa proyek di alamatnya, Anda diarahkan ke **Proyek Saya** di Console.

<scalar-callout type="info">Proyek dibuat, dibagikan, dan ditingkatkan paketnya di Console, bukan di Lab. Lab mengerjakan satu proyek dalam satu waktu.</scalar-callout>

## Mengenal tampilan Lab

Pilih ikon **Konfersi Lab** di bilah aktivitas untuk tampilan **Proyek**, **Titik**, **Data**, **Analisis**, **Validasi**, **Perencanaan & Risiko**, **Laporan**, dan **Dokumentasi**. **Penjelajah Peta** berisi peta, titik observasi, dan batas proyek; **Perencanaan Misi** memiliki aktivitasnya sendiri. Grafik terbuka di panel **Analitik Data**, dan pemrosesan tampil di **Proses** dan **Log**. Setiap aksi juga tersedia sebagai perintah **Konfersi** di Command Palette. Untuk tur lengkapnya, lihat [Mulai memakai Lab](../lab/get-started.md#mengenal-ruang-kerja).

## Panduan Lab

| Panduan | Isinya |
|---|---|
| [Mulai memakai Lab](../lab/get-started.md) | Tata letak ruang kerja, analisis pertama, dan kuota |
| [Editor desktop](../lab/desktop/index.md) | Memasang, masuk, dan memperbarui ekstensi di VS Code dan Antigravity |
| [Titik observasi](../lab/points/index.md) | Menambah, mengimpor, mengelola, dan memproses titik |
| [Peta & lapisan](../lab/map/index.md) | Peta dasar, overlay klimatologi, prakiraan langsung, lalu lintas kapal, lapisan referensi, dan batas proyek |
| [Cara data diproses](../lab/data/index.md) | Alur pemrosesan, variabel dan sumber, serta unduhan NetCDF |
| [Analisis & grafik](../lab/analysis/index.md) | Setiap analisis, grafik, penjelasan AI, dan validasi data |
| [Laporan & dokumen proyek](../lab/reports-and-documents.md) | Detail proyek, dokumen perencanaan dan risiko, serta laporan Word |
| [Mission Planning](mission-planning.md) | Perencanaan jendela cuaca dan downtime |
| [Pemecahan masalah](../lab/troubleshooting.md) dan [Pertanyaan umum Lab](../lab/faq.md) | Pesan galat dan pertanyaan umum |
