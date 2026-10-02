---
title: Pembayaran
description: Cara membayar paket, add-on, dan kursus Konfersi melalui Midtrans, metode pembayaran yang didukung, dan arti setiap status pembayaran.
tags: [tagihan, pembayaran, midtrans, qris, virtual-account, kartu]
related: [billing/plans-and-pricing, billing/refunds-and-cancellation, support/contact-support]
status: published
updated: 2026-10-01
---

Konfersi menerima pembayaran melalui **Midtrans**, payment gateway asal Indonesia. Anda membayar di halaman pembayaran Midtrans, lalu Midtrans langsung memberi tahu Konfersi hasilnya. Halaman ini menjelaskan langkah-langkahnya, metode pembayaran, dan arti setiap status.

## Membayar paket atau add-on di Console

1. Di [Console](../using-konfersi/console-projects.md), buka **Proyek Lab → Paket Proyek & Add-on**, lalu pilih paket, atau sumber daya tambahan di bagian add-on. Anda juga dapat mengumpulkan beberapa pesanan di [Keranjang Pesanan](order-cart-and-transactions.md) terlebih dahulu.
2. Periksa rinciannya: harga paket, add-on (jika ada), subtotal, pajak (PPN), dan total akhir. Lihat [Paket & harga](plans-and-pricing.md) untuk penjelasan tentang harga dan mata uang.
3. Pilih metode pembayaran, lalu klik **Bayar Sekarang**.
4. Selesaikan pembayaran di jendela Midtrans, misalnya dengan memindai kode QR atau membayar ke nomor virtual account dari bank Anda.
5. Setelah Midtrans mengonfirmasi pembayaran, pesanan Anda berstatus **Selesai** dan sumber daya dari paket atau add-on otomatis diterapkan ke proyek Anda.

Pembayaran diproses dalam **Rupiah (IDR)**, meskipun Console menampilkan harga dalam USD.

## Metode pembayaran yang didukung

| Metode | Cara membayar |
|---|---|
| **Kartu kredit/debit** | Visa, Mastercard, JCB, atau American Express, dimasukkan di formulir kartu Midtrans |
| **ATM/transfer bank (Virtual Account)** | Bayar ke nomor virtual account melalui ATM, mobile banking, atau internet banking |
| **QRIS/e-wallet** | Pindai kode QRIS dengan GoPay atau aplikasi e-wallet/perbankan lain yang mendukung QRIS |

Beberapa hal yang perlu diketahui:

- Setiap metode memiliki batas minimum dan maksimum nominal transaksi. Jika nominal pesanan di luar batas suatu metode, pilih metode lain.
- Data kartu dimasukkan di Midtrans, bukan di Konfersi. Jika Anda menyimpan kartu untuk dipakai lagi, Konfersi hanya menyimpan token kartu dari Midtrans dan nomor kartu yang disamarkan, tidak pernah nomor kartu lengkap.
- Pembayaran yang tertunda akan kedaluwarsa jika tidak diselesaikan tepat waktu. Halaman **Transaksi** menampilkan hitung mundur untuk pesanan yang masih tertunda.

## Status pembayaran dan pesanan

Pantau pesanan Anda di **Pembayaran & Tagihan → Transaksi**. Status yang mungkin muncul:

| Status di Console | Artinya | Yang perlu dilakukan |
|---|---|---|
| **Dalam Proses** | Pesanan sudah dibuat dan menunggu pembayaran | Selesaikan pembayaran lewat **Lanjutkan Pembayaran** (atau, jika tersedia, ganti ke metode pembayaran lain) |
| **Selesai** | Midtrans telah mengonfirmasi pembayaran dan sumber daya sudah diterapkan | Tidak ada, semuanya beres |
| **Gagal** | Pembayaran ditolak atau gagal | Buat pesanan baru, bila perlu dengan metode lain |
| **Kedaluwarsa** | Batas waktu pembayaran habis sebelum Anda membayar | Buat pesanan baru |
| **Dibatalkan** | Pesanan dibatalkan sebelum dibayar | Buat pesanan baru jika Anda masih membutuhkannya |

Pesanan yang gagal, kedaluwarsa, atau dibatalkan tidak dapat dilanjutkan, dan Anda tidak dikenai biaya untuk pesanan tersebut. Silakan buat pesanan baru.

## Membayar kursus

Anda mendaftar kursus dari **Kursus → Marketplace** di Console (lihat [Kursus](../using-konfersi/courses.md)). Setiap kursus dibayar dalam checkout tersendiri, terpisah dari paket dan add-on, dan juga didukung Midtrans. Setelah Anda mengisi formulir pendaftaran, Anda akan diarahkan ke halaman pembayaran Midtrans. Metode yang tersedia di sana adalah metode yang diaktifkan Midtrans untuk checkout tersebut. Setelah pembayaran dikonfirmasi, tim kursus akan mengirimkan konfirmasi pendaftaran melalui email.

## Bagaimana hasil pembayaran sampai ke Konfersi

- Midtrans mengirimkan notifikasi pembayaran ke Konfersi setiap kali status berubah. Konfersi memeriksa tanda tangan kriptografis notifikasi tersebut sebelum memprosesnya, sehingga pesan "sudah dibayar" yang dipalsukan akan ditolak.
- Sumber daya hanya diterapkan setelah Midtrans melaporkan pembayaran berstatus settlement atau capture.
- Jika Anda menutup jendela pembayaran, pesanan mungkin tetap berstatus **Dalam Proses** sampai Midtrans mengirimkan hasil akhir. Periksa kembali halaman **Transaksi** beberapa menit kemudian.

## Faktur dan bukti pembayaran

Halaman **Transaksi** menjadi catatan setiap pesanan Anda, berisi ID pesanan, item, nominal, dan statusnya. Jika organisasi Anda membutuhkan faktur resmi atau dokumen perpajakan, kirim email ke [support@konfersi.com](mailto:support@konfersi.com) beserta ID pesanan Anda.

## Ada kendala?

Jika dana Anda sudah terpotong tetapi pesanan tidak berstatus **Selesai**, atau Anda melihat tagihan ganda, hubungi [support@konfersi.com](mailto:support@konfersi.com) dan sertakan:

- ID pesanan (diawali `ord_`, tercantum di halaman pembayaran dan di **Transaksi**)
- alamat email akun Konfersi Anda
- metode pembayaran serta tanggal dan jam pembayaran
- tangkapan layar konfirmasi dari bank atau e-wallet, jika ada

Untuk pengembalian dana, lihat [Pengembalian dana & pembatalan](refunds-and-cancellation.md).
