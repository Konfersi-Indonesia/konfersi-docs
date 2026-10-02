---
title: Penilaian Risiko
description: Susun register bahaya untuk operasi laut Anda di Konfersi Lab — beri skor risiko, pilih dan tolak kontrol, dan tunjukkan ALARP.
tags: [risk-assessment, hazid, alarp, mae, controls]
related: [using-konfersi/mission-planning, using-konfersi/lab-workspace, legal/ai-and-metocean-disclaimer]
status: published
updated: 2026-10-02
---

Penilaian Risiko adalah **register risiko** proyek Anda. Untuk setiap bahaya Anda mencatat apa yang bisa terjadi, seberapa mungkin dan seberapa parah, kontrol yang dipilih (dan yang ditolak beserta alasannya), serta apakah risiko yang tersisa sudah serendah yang dapat dipraktikkan (ALARP). Strukturnya mengikuti guidance note NOPSEMA tentang identifikasi bahaya, penilaian risiko, ALARP, dan langkah kontrol.

<scalar-callout type="info">Penilaian Risiko adalah aktivitas di **Konfersi Lab**. Buka proyek dari Console, lalu pilih **Penilaian Risiko** di bilah aktivitas. Paling baik dipakai setelah [Perencanaan Misi](mission-planning.md) disiapkan: operasi, trip, tugas, dan aktivitasnya menjadi daftar yang perlu dinilai.</scalar-callout>

## Letak fitur

| Tempat | Isinya |
|---|---|
| **Bilah aktivitas › Penilaian Risiko** | Status, **Cakupan** urutan Perencanaan Misi (pilih aktivitas untuk menilainya), **Register** menurut peringkat, pustaka **Kontrol**, dan bahaya yang dihapus |
| **Tab Penilaian Risiko** | **Ringkasan** · **Register** (dengan editor bahaya) · **Kontrol** · **Bukti** · **Papan ALARP** · **Laporan** |
| **Kontrol › Penilaian Risiko** | Daftar periksa Fase 1, bahaya yang dipilih, dan tindakan cepat |

## 1. Identifikasi bahaya

Tambahkan bahaya dari Register, dari aktivitas di Cakupan, atau dari **Saran pustaka** (kecocokan dari pustaka bahaya organisasi Anda — bukan AI; Anda mengonfirmasi dan melengkapinya). Pustaka **Kontrol** adalah daftar milik register Anda: awalnya salinan pustaka kontrol organisasi, dan **Tambah dari pustaka organisasi** menawarkan kontrol yang ditambahkan di sana sesudahnya. Untuk setiap bahaya catat:

- **Lingkup penerapan** — proyek, atau operasi, trip, tugas, atau aktivitas dalam rencana.
- **Bahaya, penyebab, dan kejadian berbahaya**, lalu **konsekuensinya**.
- **Kejadian kecelakaan besar (MAE)?** — Ya, Potensial, atau Tidak. Untuk Ya atau Potensial, tambahkan alasan penyaringan dan catatan eskalasi.

## 2. Beri skor risiko

Risiko adalah **Probabilitas × Frekuensi × Keparahan**, masing-masing 1 sampai 5 (skor hingga 125): sampai 15 Rendah, sampai 40 Sedang, sampai 75 Tinggi, di atasnya Kritis.

- **Risiko inheren** dinilai dari bahayanya sendiri. Kontrol yang ada atau direncanakan hanya mengubah risiko **residual**.
- Catat **dasar, asumsi, ketidakpastian, dan tingkat keyakinan** skor Anda. Jika ketidakpastian Tinggi, tambahkan justifikasi sebelum mengklaim ALARP.

## 3. Kontrol

Untuk setiap bahaya, **pilih** kontrol yang diandalkan dan simpan **opsi yang ditolak** beserta alasannya. Setiap kontrol punya tempat dalam hierarki — **eliminasi, substitusi, rekayasa, administratif, APD**. Konfersi memberi peringatan jika opsi yang lebih efektif ditolak sementara hanya opsi yang kurang efektif yang dipilih.

Tandai kontrol sebagai **kritis** untuk memberinya standar kinerja (tujuan, fungsionalitas, ketersediaan, keandalan, ketahanan, ketergantungan, kompatibilitas) di tab **Kontrol**. Kontrol yang **direncanakan** memerlukan komitmen implementasi sebelum risiko residual dapat diklaim.

## 4. Risiko residual dan ALARP

Beri skor risiko residual, lalu atur status ALARP: **Terbuka**, **ALARP diklaim**, atau **Bukan ALARP**, beserta opsi yang dipertimbangkan dan pernyataan ALARP. Konfersi menolak klaim yang melewati langkah wajib dan menyebutkan langkahnya:

- MAE memerlukan alasan, catatan eskalasi, dan opsi yang ditolak atau pernyataan "tidak ada opsi praktis lain";
- ketidakpastian Tinggi memerlukan justifikasi;
- kontrol yang direncanakan memerlukan komitmen implementasi.

Bahaya tidak pernah dihapus diam-diam: menghapus bahaya meminta alasan dan menyimpannya di log penghapusan.

## 5. Bukti dari Perencanaan Misi

Tab **Bukti** menampilkan penyaringan metocean dari run Perencanaan Misi terbaru (seberapa sering cuaca menghentikan pekerjaan di lokasi Anda) dan memungkinkan Anda melampirkannya ke bahaya. **Penyaringan bahaya cuaca** memberi skor bahaya cuaca per lingkungan dan menyarankan opsi kontrol risiko (memakai jam CPU). Probabilitas (P) berasal dari downtime tiap musim. Konsekuensi (C) membandingkan nilai angin dan gelombang tiap musim pada periode ulang yang dipilih, dari analisis nilai ekstrem di lokasi, dengan batas lingkungan tersebut: dalam batas bernilai 1, hingga 1,5 kali batas bernilai 3, di atasnya 5. Lingkungan tanpa data metocean atau tanpa analisis nilai ekstrem di lokasinya diberi tanda: skornya memakai nilai sementara, jadi akuisisi atau analisis datanya lalu jalankan penyaringan lagi. Ini adalah **bukti** untuk register — bukan demonstrasi FSA atau NOPSEMA lengkap dengan sendirinya.

## 6. Daftar periksa dan tinjauan

**Ringkasan** menampilkan cakupan rencana dan daftar periksa Fase 1 (semua aktivitas dinilai, rantai bahaya lengkap, skor, kontrol, penyaringan MAE, saran yang dikonfirmasi, tidak ada masalah aturan). Jika semua cek hijau, seseorang mencatat **tinjauan** (peran dan catatannya). Perubahan berikutnya menghapus tinjauan itu, sehingga status tinjauan selalu sesuai dengan yang ditinjau.

## 7. Laporan

**Laporan** menampilkan register, papan ALARP, opsi yang ditolak, dan daftar periksa. Salin, unduh sebagai Markdown, atau **Ekspor CSV register** untuk spreadsheet. Rekan tim dalam proyek mengerjakan register yang sama; jika dua orang mengubah pengaturan dokumen bersamaan, Anda diminta memuat ulang atau menimpa.

<scalar-callout type="warning">Penilaian Risiko mendukung proses keselamatan Anda; tidak menggantikan penilaian profesional, studi bersertifikat untuk lokasi tertentu, atau tinjauan regulator. Guidance note NOPSEMA tetap otoritatif. Baca [penafian AI & metocean](../legal/ai-and-metocean-disclaimer.md).</scalar-callout>
