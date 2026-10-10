---
title: API dan integrasi
description: Apa yang bisa Anda hubungkan ke Konfersi saat ini, termasuk asisten AI melalui MCP, serta apa yang akan ditawarkan API publik saat diluncurkan.
tags: [api, mcp, integrasi, agen, vscode]
related: [using-konfersi/ai-assistants-mcp, getting-started/products-and-surfaces, lab/desktop, account/security/connected-devices, trust/security]
status: published
updated: 2026-10-10
---

## Yang bisa dihubungkan saat ini

| Integrasi | Status | Caranya |
|---|---|---|
| **Ekstensi Konfersi Lab** (VS Code, Cursor, dan editor lain) | Tersedia | Pasang ekstensinya lalu masuk dengan akun Konfersi Anda. Lihat [Editor desktop](../lab/desktop/index.md) |
| **API publik** (kunci API untuk skrip Anda sendiri) | Belum tersedia | |
| **Server MCP** (hubungkan asisten AI Anda sendiri) | Tersedia | Buat token di Console lalu tambahkan Konfersi ke asisten Anda. Lihat [Gunakan Konfersi dengan asisten AI (MCP)](ai-assistants-mcp.md) |

## API publik

Situs-situs Konfersi (Console, Lab, Accounts) berkomunikasi dengan API Konfersi atas nama Anda, menggunakan sesi Anda yang sedang masuk. Belum ada kunci API untuk pelanggan, sehingga Anda belum bisa memanggil API dari skrip atau server Anda sendiri. Jangan menyalin token sesi dari peramban untuk keperluan ini: token tersebut cepat kedaluwarsa, memberi akses penuh ke akun Anda, dan membagikannya melanggar [panduan keamanan](../trust/security.md) kami.

Jika Anda perlu mengeluarkan data dari Konfersi sekarang, gunakan opsi ekspor di Lab, atau [hubungi dukungan](../support/contact-support.md) untuk memberi tahu kami apa yang ingin Anda otomatiskan.

## Server MCP

Asisten AI seperti Claude Code, Claude Desktop, dan Cursor bisa mencari di dokumentasi ini dan bekerja dengan proyek metocean Anda melalui server MCP Konfersi. Anda membuat token pribadi di Console, memilih apa yang boleh dilakukannya dan proyek mana yang dicakupnya, lalu bisa mencabutnya kapan saja. Pekerjaan yang dimulai asisten memakai kuota paket Anda, sama seperti di Lab. Lihat [Gunakan Konfersi dengan asisten AI (MCP)](ai-assistants-mcp.md).

## Data Anda dan alat yang terhubung

Setiap editor yang Anda gunakan untuk masuk ke Konfersi muncul di [Perangkat terhubung](../account/security/connected-devices.md), tempat Anda bisa memutuskannya kapan saja.
