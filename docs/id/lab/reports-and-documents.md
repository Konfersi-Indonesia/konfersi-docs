---
title: Laporan & dokumen proyek
description: Isi detail proyek, brief, operasi, dan penilaian risiko di Konfersi Lab, lalu buat laporan Metocean Design Basis sebagai dokumen Word.
tags: [lab, laporan, docx, word, metocean design basis, brief, penilaian risiko, perencanaan, detail proyek, ai]
related: [lab/analysis, using-konfersi/mission-planning, legal/ai-and-metocean-disclaimer]
status: published
updated: 2026-10-09
---

## Detail Proyek

**Detail Proyek** berisi identitas proyek dan pengaturan yang dipakai analisis. Buka dari tampilan **Proyek**, menu di bilah status, atau **Konfersi: Buka Detail Proyek**.

| Tab | Yang diatur |
|---|---|
| **Ringkasan** | Paket, kuota, peran Anda, kolaborator, dan titik di Lab |
| **Identitas** | Nama perusahaan atau entitas, alamat, jenis proyek, lokasi, deskripsi, dan tag. Hanya pemilik proyek yang bisa mengubah identitas |
| **Pemangku Kepentingan** | **Kontak (PIC)**: orang yang bisa dihubungi di pihak klien, sesuai urutan prioritas |
| **Ambang Batas** | Metode nilai ekstrem (**Block Maxima (GEV)** dan/atau **Peaks Over Threshold (GPD)**) dan ambang POT untuk setiap parameter. **Isi Ambang Batas Saran** memberi nilai awal; nilai baru dipakai setelah disimpan |

Pilih **Simpan** (atau **Ctrl+S**/**Cmd+S**). **Buang** memuat ulang versi yang tersimpan. Lab menampilkan siapa yang terakhir memperbarui detail dan kapan.

## Dokumen Perencanaan & Risiko

Di **Konfersi Lab → Perencanaan & Risiko**:

| Dokumen | Isinya |
|---|---|
| **Brief proyek** | Identitas proyek, pemangku kepentingan, dan ambang desain |
| **Operasi & lingkungan** | Urutan operasi kelautan dan batas operabilitasnya, dipakai saat perencanaan |
| **Penilaian risiko** | Bahaya, pengendalian, dan risiko sisa |

Setiap dokumen terbuka di editor. Dokumen diperiksa terhadap skema saat Anda mengetik, jadi kesalahan diberi garis bawah. Simpan dengan **Ctrl+S** (**Cmd+S** di Mac) untuk menyimpannya ke Konfersi; dokumen yang bukan JSON valid tidak disimpan, dan Lab menjelaskan sebabnya.

**Jalankan perencanaan operabilitas** menyimulasikan jendela cuaca untuk operasi yang tersimpan di titik terpilih. Anda membutuhkan minimal satu lingkungan dan satu operasi terlebih dahulu. Untuk alur lengkapnya, lihat [Mission Planning](../using-konfersi/mission-planning.md).

## Membuat laporan

Lab menghasilkan laporan **Metocean Design Basis** sebagai dokumen Word (`.docx`) untuk satu titik observasi. Buka **Pembuatan Laporan** dari bilah aktivitas, daftar alat di menu Lab, atau **Buka Pembuatan Laporan** di Command Palette. Laporan terbuka sebagai tab editor.

1. Pilih **Titik observasi**. Jika proyek belum punya titik, tambahkan dulu di peta.
2. Di **Bagian**, pilih isi laporan. **Semua**, **Hanya yang siap**, dan **Tidak ada** memilih dengan cepat. Lab mengingat pilihan Anda untuk proyek ini.
   Setiap bagian menunjukkan statusnya:
   - **Data siap**, atau belum ada data analisis di titik ini. Proses titiknya terlebih dahulu.
   - **Teks AI siap**, atau teks AI belum disintesis.
   - **Teks standar** (teks tetap) atau **Grafik dari analisis**.
3. Opsional: pilih sebuah bagian lalu **Sintesis dengan AI** agar AI menulis teksnya dari analisis titik tersebut. Baca hasilnya di **Teks bagian**, atau pilih **Buka sebagai Markdown**. **Sintesis ulang** menulis ulang teksnya. Bagian yang belum disintesis tampil di laporan sebagai "Section Not Yet Ready".
4. Pilih **Buat laporan Word**. Progresnya ditampilkan dan Anda bisa **Batal**. Jika ada bagian yang belum punya data atau teks AI, Lab memberi tahu jumlahnya sebelum menandainya sebagai belum siap di laporan.
5. Setelah **Laporan … sudah siap**, pilih **Unduh** lalu simpan `.docx`-nya.

Laporan sebelumnya ada di **Laporan yang dibuat**; pilih **Unduh .docx** untuk mengunduhnya lagi.

Laporan berisi profil proyek, grafik dan tabel dari analisis, serta bagian standar seperti keterbatasan, ketergantungan, dan satuan. Sunting di Word sebelum dibagikan.

<scalar-callout type="warning">Teks yang ditulis AI harus diperiksa oleh orang yang kompeten sebelum diandalkan atau dibagikan. Lihat [penafian AI & metocean](../legal/ai-and-metocean-disclaimer.md).</scalar-callout>
