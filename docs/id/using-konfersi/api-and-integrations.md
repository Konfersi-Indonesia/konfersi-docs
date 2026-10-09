---
title: API dan integrasi
description: Apa yang bisa Anda hubungkan ke Konfersi saat ini, serta apa yang akan ditawarkan API publik dan server MCP saat diluncurkan.
tags: [api, mcp, integrasi, agen, vscode]
related: [getting-started/products-and-surfaces, lab/desktop, account/security/connected-devices, trust/security]
status: published
updated: 2026-10-09
---

## Yang bisa dihubungkan saat ini

| Integrasi | Status | Caranya |
|---|---|---|
| **Ekstensi Konfersi Lab** (VS Code, Cursor, dan editor lain) | Tersedia | Pasang ekstensinya lalu masuk dengan akun Konfersi Anda. Lihat [Editor desktop](../lab/desktop/index.md) |
| **API publik** (kunci API untuk skrip Anda sendiri) | Belum tersedia | |
| **Server MCP** (hubungkan agen AI Anda sendiri) | Belum tersedia | |

## API publik

Situs-situs Konfersi (Console, Lab, Accounts) berkomunikasi dengan API Konfersi atas nama Anda, menggunakan sesi Anda yang sedang masuk. Belum ada kunci API untuk pelanggan, sehingga Anda belum bisa memanggil API dari skrip atau server Anda sendiri. Jangan menyalin token sesi dari peramban untuk keperluan ini: token tersebut cepat kedaluwarsa, memberi akses penuh ke akun Anda, dan membagikannya melanggar [panduan keamanan](../trust/security.md) kami.

Jika Anda perlu mengeluarkan data dari Konfersi sekarang, gunakan opsi ekspor di Lab, atau [hubungi dukungan](../support/contact-support.md) untuk memberi tahu kami apa yang ingin Anda otomatiskan.

## Server MCP

Server MCP Konfersi akan memungkinkan agen AI di komputer Anda bekerja dengan proyek Lab dan dataset Konfersi. Server ini belum tersedia. Sebelum peluncuran, kami masih perlu memutuskan:

- alat apa saja yang boleh digunakan agen Anda
- cara agen masuk
- bagaimana penggunaannya dihitung terhadap paket Anda

Halaman ini akan diperbarui saat server MCP diluncurkan.

## Data Anda dan alat yang terhubung

Setiap editor yang Anda gunakan untuk masuk ke Konfersi muncul di [Perangkat terhubung](../account/security/connected-devices.md), tempat Anda bisa memutuskannya kapan saja.
