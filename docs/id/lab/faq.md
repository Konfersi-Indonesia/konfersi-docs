---
title: Pertanyaan umum Lab
description: Jawaban atas pertanyaan umum tentang Konfersi Lab — akses, editor desktop, titik, lama pemrosesan, sumber data, akurasi, kuota, dan berbagi.
tags: [lab, faq, pertanyaan]
related: [lab/get-started, lab/troubleshooting, support/faq]
status: published
updated: 2026-10-02
---

## Akses dan penyiapan

### Apakah saya perlu memasang sesuatu?

Tidak. Lab berjalan di browser. Pasang ekstensi hanya jika Anda lebih suka bekerja di VS Code atau Antigravity. Lihat [Editor desktop](desktop/index.md).

### Mengapa saya tidak bisa membuka Lab untuk proyek saya?

Lab membutuhkan paket berbayar. Proyek dengan paket Gratis menampilkan **Tingkatkan paket untuk membuka Lab**. Lihat [Paket & harga](../billing/plans-and-pricing.md).

### Apakah ekstensinya ada di VS Code Marketplace?

Tidak. Unduh dari proyek Anda di Console (**Ekstensi Lab**) lalu pasang dari berkasnya. Setelah itu ekstensi memperbarui dirinya sendiri. Lihat [Memasang ekstensi](desktop/install-the-extension.md).

### Apakah bisa dipakai di Cursor atau editor lain?

Ekstensi dibuat untuk VS Code dan Antigravity. Editor lain berbasis VS Code 1.90 atau lebih baru biasanya juga bisa memasangnya dari berkas `.vsix`.

### Bisakah beberapa orang mengerjakan proyek yang sama?

Bisa. Pemilik, asisten yang diundang, dan anggota organisasi tempat proyek dibagikan melihat titik, batas, hasil, dan dokumen yang sama.

## Titik dan pemrosesan

### Berapa banyak titik yang bisa saya tambahkan?

Sebanyak kuota titik paket Anda. Tampilan **Proyek** menunjukkan berapa yang sudah terpakai.

### Berapa lama pemrosesannya?

Biasanya beberapa menit per titik. Variabel ERA5 (presipitasi, suhu udara, tekanan udara) bisa menunggu lebih lama di antrean Copernicus. Anda boleh menutup Lab selama menunggu; pemrosesan tetap berjalan di server.

### Mengapa titik saya langsung selesai diproses?

Data untuk lokasi itu sudah pernah diproses, jadi hasil yang tersimpan dipakai ulang. Tidak ada yang diunduh lagi.

### Apakah memproses ulang memakai kuota lagi?

Proses ulang mengunduh dan menganalisis semuanya lagi, jadi memakai kuota komputasi dan penyimpanan lagi. **Proses Titik** hanya melengkapi variabel yang belum ada.

### Apa yang terjadi pada data jika saya menghapus titik?

Titik keluar dari proyek, tetapi data hasil pemrosesan untuk lokasinya tetap disimpan dan dipakai ulang jika Anda menambahkan titik di sana lagi.

### Bisakah saya memproses titik di daratan?

Variabel laut membutuhkan lokasi di laut. Di daratan atau terlalu dekat pantai, penyedia mungkin tidak memiliki data (**data sumber tidak ada**). Letakkan titik di laut, sedikit ke arah lepas pantai jika perlu.

## Data dan hasil

### Dari mana datanya berasal?

Copernicus Marine (angin, gelombang, arus, suhu permukaan laut, salinitas) dan ERA5 dari Copernicus Climate Data Store (presipitasi, suhu udara, tekanan udara). Pasang surut dari FES2022, siklon tropis dari IBTrACS, dan kedalaman air dari GMRT dan GEBCO. Lihat [Variabel & sumber](data/variables-and-sources.md).

### Periode apa yang dicakup datanya?

Tergantung variabelnya, dari 1980 untuk gelombang hingga sepuluh tahun terakhir untuk variabel ERA5. Lihat tabel di [Variabel & sumber](data/variables-and-sources.md#variabelnya).

### Seberapa akurat hasilnya?

Seakurat dataset global di baliknya. Dataset ini tervalidasi dengan baik, tetapi menggambarkan satu sel grid, bukan satu titik persis. Jalankan [validasi data](analysis/data-validation.md), dan untuk desain teknik bandingkan dengan pengukuran lokal.

### Bisakah saya mendapatkan data mentahnya?

Bisa. **Unduh Data (NetCDF)…** pada titik yang sudah diproses memberikan satu berkas NetCDF per variabel. Lihat [Mengunduh data](data/variables-and-sources.md#mengunduh-data).

### Bisakah saya mengekspor grafik?

Bisa. Di **Analitik Data**, gunakan **Simpan gambar** (PNG), **Simpan CSV**, atau **Buka sebagai JSON**.

### Apakah penjelasan AI bisa diandalkan?

Anggap sebagai titik awal. Penjelasan dibuat dari hasil analisis dan bisa keliru. Periksa dengan datanya. Lihat [penafian AI & metocean](../legal/ai-and-metocean-disclaimer.md).

### Apakah prakiraan langsung di peta cocok untuk operasi?

Tidak. Prakiraan itu untuk orientasi. Gunakan prakiraan resmi untuk keputusan operasional.

## Kuota dan tagihan

### Apa saja yang memakai kuota?

Titik (setiap titik observasi), komputasi (waktu pemrosesan dan perencanaan), penyimpanan (data yang diunduh), dan AI (penjelasan, pembuatan laporan, dan sintesis bagian). Lihat [Kuota](get-started.md#kuota).

### Apa yang terjadi jika kuota habis?

Aksi yang membutuhkannya berhenti dengan pesan; fitur lain tetap berjalan. Beli add-on atau tingkatkan paket di Console. Lihat [Keranjang pesanan & transaksi](../billing/order-cart-and-transactions.md).

## Bantuan lainnya

- [Pemecahan masalah](troubleshooting.md)
- [Tanya jawab member](../using-konfersi/community.md#tanya-jawab-member) untuk bertanya ke member lain
- [Tiket dukungan](../support/support-tickets.md) untuk bantuan pribadi
