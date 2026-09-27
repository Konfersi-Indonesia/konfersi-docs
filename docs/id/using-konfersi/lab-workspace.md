---
title: Ruang kerja Lab
description: Buka proyek Konfersi di Lab, ruang kerja metocean berbasis browser, atau gunakan ekstensi Konfersi Lab di VS Code desktop.
tags: [lab, ruang-kerja, vs-code, ekstensi]
related: [using-konfersi/console-projects, getting-started/sign-in, billing/plans-and-pricing]
status: published
updated: 2026-09-27
---

Lab adalah ruang kerja metocean untuk proyek yang sedang Anda buka. Lab berjalan di browser di [lab.konfersi.com](https://lab.konfersi.com) dengan tampilan editor kode yang familier. Lab juga dapat digunakan di VS Code desktop melalui ekstensi **Konfersi Lab**. Proyek dikelola di Console, sedangkan pekerjaan teknisnya dilakukan di Lab.

<scalar-callout type="neutral">Saat ini tampilan Lab tersedia dalam bahasa Inggris. Karena itu, label tombol di halaman ini ditulis sesuai yang muncul di layar.</scalar-callout>

## Sebelum memulai

- Anda memerlukan akun Konfersi. Lihat [Membuat akun](../getting-started/create-account.md).
- Anda memerlukan proyek dengan paket berbayar. Pada paket uji coba gratis, Console menampilkan **Tingkatkan paket untuk akses Lab** dan Lab tidak dapat dibuka. Lihat [Paket & harga](../billing/plans-and-pricing.md).
- Anda harus menjadi pemilik proyek atau asisten yang diundang.

## Membuka proyek di Lab

1. Masuk ke Console di [app.konfersi.com](https://app.konfersi.com).
2. Buka **Manajemen Proyek**.
3. Buka Lab dengan salah satu cara berikut:
   - Klik ganda proyek.
   - Buka menu proyek, lalu pilih **Lab Platform**.
   - Buka proyek, lalu pilih **Lab Platform** di bagian **Akses Cepat Lab Platform**.

Lab terbuka di tab baru dengan alamat berakhiran `/project/` diikuti slug proyek. Anda tetap dalam keadaan masuk karena Lab memakai sesi yang sama dengan Console. Jika sesi Anda sudah berakhir, Anda akan diminta masuk lalu dikembalikan ke Lab.

### Membuka Lab tanpa proyek

Jika Anda langsung membuka [lab.konfersi.com](https://lab.konfersi.com), akan muncul **Select a project to open Lab**. Isi **Project slug** lalu pilih **Open in Lab**, atau pilih **Browse in Console** untuk memilih proyek dari daftar Anda. Slug proyek dapat dilihat di halaman detail proyek di Console.

## Mengenal tampilan Lab

Lab terbuka dengan tema editor gelap dan bilah aktivitas di samping. Pilih ikon **Konfersi Lab** di bilah aktivitas untuk membuka panel **Workspace**. Panel ini memiliki tiga bagian:

- **Account**: akun yang sedang masuk dan peran Anda di proyek ini.
- **Project**: nama, slug, dan paket proyek, lengkap dengan bilah kuota untuk pemakaian AI, penyimpanan, dan komputasi.
- **Console**: tombol **Browse projects in Console**, **Open Console**, dan **Open project in Console**.

Bilah status di bagian bawah juga menampilkan proyek yang sedang dibuka. Arahkan kursor ke sana untuk melihat pemakaian kuota dan pintasan kembali ke Console.

<scalar-callout type="info">Proyek dibuat, dibagikan, dan di-upgrade di Console, bukan di Lab. Lab selalu bekerja pada satu proyek. Untuk berpindah proyek, buka proyek lain dari Console.</scalar-callout>

## Menggunakan ekstensi Konfersi Lab di VS Code desktop

Ekstensi **Konfersi Lab** yang menjalankan ruang kerja di browser juga dapat berjalan di VS Code desktop. Setelah ekstensi terpasang, masuk dengan cara berikut:

1. Buka Command Palette, lalu jalankan **Konfersi Lab: Sign In**.
2. VS Code membuka tab browser di Accounts. Masuk jika diminta.
3. Di halaman **Masuk ke Konfersi Lab**, periksa alamat email, lalu pilih **Setujui perangkat**.
4. Saat muncul **Perangkat sudah masuk**, kembali ke VS Code. Proses masuk akan selesai dengan sendirinya.

Perintah lain yang dapat dijalankan dari Command Palette:

- **Konfersi Lab: Account**: membuka Console, menelusuri proyek, atau keluar.
- **Konfersi Lab: Open Console**
- **Konfersi Lab: Browse Projects in Console**
- **Konfersi Lab: Sign Out**

<scalar-callout type="warning">Setujui proses masuk perangkat hanya jika Anda sendiri yang memulainya. Jika tidak, tutup tab tersebut tanpa menyetujuinya.</scalar-callout>

## Pemecahan masalah

**"Project … was not found or you do not have access."**
Periksa slug proyek. Pastikan Anda masuk dengan akun pemilik proyek atau akun yang diundang, lalu buka proyek dari Console.

**"Failed to load Konfersi Lab."**
Pilih **Retry**. Jika masalah berlanjut, periksa koneksi Anda dan [hubungi tim bantuan](../support/contact-support.md).

**"Login link expired or already used."** atau **"Login timed out."** di VS Code
Jalankan **Konfersi Lab: Sign In** lagi dan segera setujui permintaan yang baru.

**Tombol Lab di Console tidak aktif.**
Proyek masih menggunakan paket uji coba gratis, atau paketnya sudah berakhir. Lihat [Console & proyek](console-projects.md).
