---
title: Gunakan Konfersi dengan asisten AI (MCP)
description: Hubungkan Claude Code, Claude Desktop, Cursor, dan asisten AI lain ke server MCP Konfersi untuk mencari di dokumentasi dan bekerja dengan proyek metocean Anda.
tags: [mcp, ai, agen, claude, cursor, api, integrasi]
related: [using-konfersi/api-and-integrations, using-konfersi/console-projects, lab/analysis, billing/plans-and-pricing]
status: published
updated: 2026-10-10
---

Asisten AI seperti Claude Code, Claude Desktop, dan Cursor bisa bekerja dengan Konfersi melalui **MCP** (Model Context Protocol). Anda memberi asisten alamat server Konfersi dan, untuk data Anda sendiri, sebuah token pribadi. Setelah itu asisten bisa mencari di dokumentasi, membaca proyek Anda, dan menjalankan analisis metocean untuk Anda, dalam batas yang Anda tentukan.

## Server MCP Konfersi

| Server | Yang bisa dilakukan asisten | Token |
|---|---|---|
| **Dokumentasi** | Mencari di dokumentasi ini dan membaca halaman mana pun, dalam bahasa Inggris atau Indonesia | Tidak perlu |
| **Metocean** | Membaca proyek, titik, kuota, dan ketersediaan data Anda; dengan akses tulis, menambah titik, mengambil data, serta menjalankan analisis, risiko, dan perencanaan | Perlu |
| **Pembuatan laporan** | Menyusun dan membuat laporan proyek | Segera hadir |
| **Pemantauan kuota** | Memeriksa pemakaian dan sisa kuota per proyek | Segera hadir |

Alamat server yang tepat untuk akun Anda ada di halaman **Asisten AI** di Console (**Profil & Pengaturan → Asisten AI**). Setiap alamat punya tombol salin.

## Membuat token

1. Di Console, buka **Profil & Pengaturan → Asisten AI** lalu pilih **Token baru**.
2. Beri token nama yang mudah Anda kenali nanti, misalnya asisten dan komputer tempat asisten berjalan ("Claude Code – laptop kantor").
3. Pilih apa yang boleh dilakukan token:
   - **Membaca data metocean**: melihat proyek, titik, kuota, ketersediaan data, pekerjaan, dan hasil.
   - **Meminta data metocean**: juga mengubah titik, mengambil data, serta menjalankan analisis, risiko, dan perencanaan. Ini memakai kuota paket Anda (lihat di bawah).
   - **Membuat laporan** dan **Melihat kuota**: untuk server laporan dan kuota, yang segera hadir.
4. Pilih **Semua proyek saya**, atau **Hanya proyek yang saya pilih** lalu centang proyeknya.
5. Di **Berakhir setelah**, pilih 7, 30, 90 (bawaan), atau 365 hari.
6. Pilih **Buat token**.

Token (diawali `kmcp_`) hanya **ditampilkan sekali**, bersama pengaturan siap tempel untuk asisten Anda. Salin token sebelum menutup jendela. Jika token hilang, cabut lalu buat yang baru.

## Menghubungkan asisten Anda

### Claude Code

Tempel perintah yang muncul setelah Anda membuat token ke terminal. Bentuknya seperti ini, dengan token Anda di tempat `<token>`:

```bash
claude mcp add --transport http konfersi-metocean <alamat server metocean> --header "Authorization: Bearer <token>"
```

Tambahkan server Dokumentasi dengan cara yang sama. Server ini bisa dipakai tanpa header, dan dengan token Anda mendapat batas laju yang lebih tinggi.

### Claude Desktop, Cursor, dan klien lain

Sebagian besar klien membaca pengaturan `mcpServers`. Tempel JSON yang muncul setelah Anda membuat token ke konfigurasi MCP klien Anda, misalnya `mcp.json` milik Cursor. Isinya satu entri per server, masing-masing dengan alamat dan token Anda.

Setelah terhubung, ajukan pertanyaan sederhana dulu ke asisten, misalnya "Tampilkan daftar proyek Konfersi saya", untuk memastikan semuanya berjalan.

## Biayanya

Asisten memakai kuota yang sama seperti saat Anda bekerja di Lab:

- Membaca (proyek, titik, kuota, ketersediaan, status pekerjaan) tidak memakai kuota.
- **Pengambilan data** serta **analisis nilai ekstrem, risiko, dan perencanaan** masing-masing mencadangkan 1 jam CPU. **Statistik deret waktu** dan **workability** memakai 0,25 jam CPU.
- **Penjelasan AI** memakai satu permintaan AI dan token AI saat selesai.

Saat kuota habis, asisten menerima penolakan yang jelas, bukan hasil, dan Anda bisa menambah kuota dari **Pembayaran & Tagihan** seperti biasa. Lihat [Paket dan harga](../billing/plans-and-pricing.md).

## Batas laju

- **Dokumentasi** tanpa token: 30 permintaan per menit per alamat.
- **Dokumentasi** dengan token yang valid, dan **Metocean**: 120 permintaan per menit per token.

## Menjaga keamanan token

- Perlakukan token seperti kata sandi: siapa pun yang memilikinya bisa melakukan apa yang diizinkan cakupannya, pada proyek yang dicakupnya.
- Beri setiap asisten dan komputer token sendiri, dengan cakupan dan proyek yang benar-benar diperlukan saja.
- Cabut token dari **Profil & Pengaturan → Asisten AI** begitu Anda tidak memakainya lagi, atau jika token mungkin bocor. Token langsung berhenti berfungsi.
- Halaman Asisten AI menampilkan kapan setiap token terakhir dipakai, sehingga Anda bisa menemukan token yang tidak diperlukan lagi.

## Terkait

- [API dan integrasi](api-and-integrations.md)
- [Proyek di Console](console-projects.md)
- [Analisis di Lab](../lab/analysis/index.md)
