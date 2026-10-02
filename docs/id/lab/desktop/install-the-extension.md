---
title: Memasang ekstensi
description: Unduh ekstensi Konfersi Lab dari Console dan pasang di VS Code atau Antigravity.
tags: [lab, pasang, vsix, vs code, antigravity, ekstensi]
related: [lab/desktop, lab/desktop/sign-in-and-updates, lab/troubleshooting]
status: published
updated: 2026-10-02
---

Ekstensi Konfersi Lab tidak tersedia di marketplace ekstensi. Anda mengunduhnya sekali dari Console dan memasangnya dari berkas. Setelah itu ekstensi memperbarui dirinya sendiri.

## 1. Unduh berkas ekstensi

1. Di Console, buka **Proyek Lab → Proyek Saya** lalu buka sebuah proyek.
2. Pilih **Ekstensi Lab**.
3. Dialog menampilkan versi terbaru, ukuran, dan tanggal rilisnya. Pilih **Unduh ekstensi**.

Anda mendapat berkas bernama seperti `konfersi-lab-plugin-<versi>.vsix`.

## 2. Pasang ekstensinya

### VS Code

1. Buka tampilan **Extensions** (**Ctrl+Shift+X**, atau **Cmd+Shift+X** di Mac).
2. Buka menu **⋯** di bagian atas tampilan, lalu pilih **Install from VSIX…**.
3. Pilih berkas yang sudah diunduh.

Atau, lewat terminal:

```bash
code --install-extension konfersi-lab-plugin-<versi>.vsix
```

### Antigravity

1. Buka tampilan **Extensions**.
2. Buka menu **⋯** lalu pilih **Install from VSIX…**.
3. Pilih berkas yang sudah diunduh.

Setelah terpasang, ikon **Konfersi Lab** muncul di bilah aktivitas, bersama **Penjelajah Peta** dan **Perencanaan Misi**.

## 3. Buka proyek Anda

Kembali ke proyek di Console lalu pilih **VSCode** atau **Antigravity** di **Buka proyek ini**. Browser akan meminta izin membuka editor; izinkan. Editor akan meminta Anda masuk jika perlu, lalu membuka proyeknya. Lihat [Masuk & pembaruan](sign-in-and-updates.md).

## Persyaratan

- VS Code 1.90 atau lebih baru, atau Antigravity versi terkini.
- Koneksi internet: semua data dan pemrosesan ada di server Konfersi. Ekstensi tidak membutuhkan Python, GPU, atau data lokal.

## Mencopot ekstensi

Di tampilan **Extensions**, cari **Konfersi Lab**, buka menunya, lalu pilih **Uninstall**. Proyek, titik, dan hasil Anda tetap ada di akun Konfersi. Untuk sekaligus mencabut akses editor, putuskan di [Perangkat terhubung](../../account/security/connected-devices.md).
