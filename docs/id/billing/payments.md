---
title: Pembayaran
description: Cara membayar kursus Konfersi melalui Midtrans, mata uang dan pajak yang berlaku, metode pembayaran yang didukung, dan arti setiap status pembayaran.
tags: [tagihan, pembayaran, midtrans, qris, virtual-account, kartu, mata uang, pajak, ppn]
related: [billing/order-cart-and-transactions, using-konfersi/courses, support/contact-support]
status: published
updated: 2026-11-12
---

Konfersi menerima pembayaran melalui **Midtrans**, payment gateway asal Indonesia. Anda membayar di jendela pembayaran Midtrans, lalu Midtrans langsung memberi tahu Konfersi hasilnya. Halaman ini menjelaskan langkah-langkahnya, mata uang dan pajak, metode pembayaran, dan arti setiap status.

## Membayar kursus

1. Di Console, buka **Kursus → Marketplace**, buka sebuah kursus, pilih tiket, lalu pilih **Daftar**. Lihat [Kursus](../using-konfersi/courses.md).
2. Isi data peserta dan dokumen yang diminta kursus, jika ada.
3. Pilih metode pembayaran di **Pilih Metode Pembayaran**.
4. Periksa **Ringkasan**: harga tiket, pajak (PPN), dan **Total Keseluruhan**. Lalu pilih **Lanjut ke pembayaran**.
5. Konfersi membuat pesanan Anda dan membukanya di **Pembayaran & Tagihan → Transaksi**. Jendela pembayaran Midtrans terbuka di sana. Selesaikan pembayaran, misalnya dengan memindai kode QR atau membayar ke nomor virtual account dari bank Anda.
6. Setelah Midtrans mengonfirmasi pembayaran, pesanan Anda berstatus **Selesai**, pendaftaran Anda di **Kursus → Kursus Saya** berstatus **Terdaftar**, dan Anda menerima email konfirmasi.

Jika Anda menutup jendela pembayaran sebelum membayar, pesanan tetap berstatus **Menunggu Pembayaran**. Anda bisa membayarnya nanti dari halaman pesanan, dari **Transaksi** lewat **Lanjutkan Pembayaran**, atau lewat **Selesaikan pembayaran** di halaman kursus.

Untuk membayar beberapa tiket kursus dalam satu pembayaran, simpan tiket-tiket itu di Keranjang Pesanan lalu checkout dari sana. Lihat [Keranjang pesanan & transaksi](order-cart-and-transactions.md).

## Mata uang, pajak, dan harga terkini

**Harga terkini ditampilkan di Console**, yaitu di halaman kursus, halaman pendaftaran, dan saat checkout. Dokumentasi ini sengaja tidak mencantumkan angka karena harga dapat berubah.

### Mata uang tagihan Anda

- **Setiap akun memiliki satu mata uang tagihan**, yang ditetapkan otomatis saat Anda membuat akun berdasarkan negara yang Anda isi. Misalnya, Indonesia, Malaysia, dan Singapura ditagih dalam **Rupiah (IDR)**. Semua harga di Console tampil dalam mata uang tersebut, tanpa konversi dan tanpa pilihan untuk mengganti mata uang.
- Profil Anda menampilkannya sebagai **Mata uang tagihan**. Mengubah negara di profil kemudian **tidak** mengubahnya. Untuk menggantinya, [hubungi dukungan](../support/contact-support.md); setiap perubahan dicatat.
- Jika Anda mendaftar dengan Google, Microsoft, GitHub, atau login organisasi Anda dan belum mengisi negara, Console meminta Anda mengisi **Atur negara Anda** sebelum membayar. Pembayaran tidak dapat dilanjutkan tanpa negara.
- Akun yang dibuat sebelum mata uang per akun diberlakukan tetap memakai **IDR**, seperti yang ditagihkan sebelumnya.
- Saat **organisasi** membeli kursi kursus, harganya mengikuti mata uang tagihan pengelola tagihan organisasi. Lihat [Kursus bersama](../using-konfersi/organizations/shared-projects-and-courses.md).

### Harga dalam setiap mata uang

- Konfersi menetapkan harga setiap tiket kursus **secara terpisah untuk setiap mata uang**. Harga tidak dikonversi dari IDR dengan kurs, sehingga nominal yang Anda lihat adalah nominal yang ditagihkan.
- Jika suatu tiket tidak memiliki harga dalam mata uang Anda, yang tampil adalah harganya dalam mata uang utama Konfersi. Jika keduanya tidak ada, halaman kursus atau keranjang menampilkan **Tidak tersedia dalam mata uang tagihan Anda. Hubungi dukungan jika Anda membutuhkannya.** Anda dapat [menghubungi tim dukungan](../support/contact-support.md) untuk membelinya.
- Pesanan tetap memakai mata uang dan nominal saat pesanan dibuat, meskipun harga berubah kemudian. Satu pesanan atau checkout selalu dalam satu mata uang.

### Pembayaran dan pajak

- Pembayaran dalam **IDR** diproses melalui mitra pembayaran kami, Midtrans.
- **Pembayaran dalam mata uang lain, seperti USD, belum tersedia.** Jika mata uang tagihan Anda salah satunya, langkah pembayaran menampilkan **Pembayaran dalam USD belum tersedia. Hubungi dukungan untuk menyelesaikan pesanan ini.**, dan tidak ada yang ditagihkan. Hubungi kami dan kami akan mengatur pembelian Anda.
- Pajak Pertambahan Nilai (PPN) ditambahkan di atas harga. Halaman pendaftaran dan checkout menampilkan harga, pajak, dan total akhir sebelum Anda membayar. Angka ini masih perkiraan: nominal akhirnya ditetapkan saat pesanan dibuat dan ditampilkan di halaman pesanan.

## Metode pembayaran yang didukung

| Metode | Cara membayar |
|---|---|
| **Kartu kredit/debit** | Visa, Mastercard, JCB, atau American Express, dimasukkan di formulir kartu Midtrans |
| **ATM/transfer bank (Virtual Account)** | Bayar ke nomor virtual account melalui ATM, mobile banking, atau internet banking |
| **QRIS/e-wallet** | Pindai kode QRIS dengan GoPay atau aplikasi e-wallet/perbankan lain yang mendukung QRIS |

Beberapa hal yang perlu diketahui:

- Setiap metode memiliki batas minimum dan maksimum nominal transaksi. Metode yang tidak menerima nominal pesanan Anda menampilkan **Minimum** atau **Maksimum**-nya; pilih metode lain.
- **Pilih di jendela pembayaran** memungkinkan Anda memilih dari semua metode yang tersedia untuk nominal tersebut setelah jendela Midtrans terbuka.
- Data kartu dimasukkan di Midtrans, bukan di Konfersi. Jika Anda menyimpan kartu untuk dipakai lagi, Konfersi hanya menyimpan token kartu dari Midtrans dan nomor kartu yang disamarkan, tidak pernah nomor kartu lengkap.
- Pembayaran yang tertunda akan kedaluwarsa jika tidak diselesaikan tepat waktu. Halaman **Transaksi** menampilkan hitung mundur untuk pesanan yang masih tertunda.

## Status pembayaran dan pesanan

Pantau pesanan Anda di **Pembayaran & Tagihan → Transaksi**. Status yang mungkin muncul:

| Status di Console | Artinya | Yang perlu dilakukan |
|---|---|---|
| **Menunggu Pembayaran** | Pesanan sudah dibuat dan menunggu pembayaran | Selesaikan pembayaran lewat **Lanjutkan Pembayaran**. Di halaman pesanan, Anda juga bisa memilih **Ganti Metode Pembayaran** atau **Batalkan Pesanan** |
| **Selesai** | Midtrans telah mengonfirmasi pembayaran dan pembelian Anda sudah aktif | Tidak ada, semuanya beres |
| **Gagal** | Pembayaran ditolak atau gagal | Buat pesanan baru, bila perlu dengan metode lain |
| **Kedaluwarsa** | Batas waktu pembayaran habis sebelum Anda membayar | Buat pesanan baru |
| **Dibatalkan** | Pesanan dibatalkan sebelum dibayar | Buat pesanan baru jika Anda masih membutuhkannya |

Pesanan yang gagal, kedaluwarsa, atau dibatalkan tidak dapat dilanjutkan, dan Anda tidak dikenai biaya untuk pesanan tersebut. Silakan buat pesanan baru.

## Bagaimana hasil pembayaran sampai ke Konfersi

- Midtrans mengirimkan notifikasi pembayaran ke Konfersi setiap kali status berubah. Konfersi memeriksa tanda tangan kriptografis notifikasi tersebut sebelum memprosesnya, sehingga pesan "sudah dibayar" yang dipalsukan akan ditolak.
- Pesanan baru berstatus **Selesai** setelah Midtrans melaporkan pembayaran berstatus settlement atau capture.
- Jika Anda menutup jendela pembayaran, pesanan mungkin tetap berstatus **Menunggu Pembayaran** sampai Midtrans mengirimkan hasil akhir. Pilih **Perbarui status** di halaman pesanan, atau periksa kembali halaman **Transaksi** beberapa menit kemudian.

## Faktur dan bukti pembayaran

Halaman **Transaksi** menjadi catatan setiap pesanan Anda, berisi ID pesanan, item, nominal, dan statusnya. Pesanan yang sudah selesai memiliki tombol **Cetak bukti pembayaran**. Jika organisasi Anda membutuhkan faktur resmi atau dokumen perpajakan, kirim email ke [support@konfersi.com](mailto:support@konfersi.com) beserta ID pesanan Anda.

## Ada kendala?

Jika dana Anda sudah terpotong tetapi pesanan tidak berstatus **Selesai**, atau Anda melihat tagihan ganda, hubungi [support@konfersi.com](mailto:support@konfersi.com) dan sertakan:

- ID pesanan (diawali `ord_`, tercantum di halaman pesanan dan di **Transaksi**)
- alamat email akun Konfersi Anda
- metode pembayaran serta tanggal dan jam pembayaran
- tangkapan layar konfirmasi dari bank atau e-wallet, jika ada

Untuk pertanyaan seputar pengembalian dana, [hubungi tim bantuan](../support/contact-support.md) dengan menyertakan detail yang sama.
