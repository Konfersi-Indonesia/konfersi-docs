---
title: Pemecahan masalah
description: Arti pesan galat Konfersi Lab dan cara mengatasinya — masuk, akses, kuota, kegagalan pemrosesan, impor, lapisan peta, analisis, dan pembaruan.
tags: [lab, pemecahan masalah, galat, gagal, kuota, pemrosesan, masuk, tidak merespons]
related: [lab/faq, lab/points/process-points, support/support-tickets]
status: published
updated: 2026-10-02
---

Sebagian besar masalah menampilkan pesan di notifikasi. Untuk detailnya, buka panel **Log** atau jalankan perintah untuk menampilkan log akuisisi. Jika butuh bantuan, [buat tiket dukungan](../support/support-tickets.md) dengan menyebutkan proyek, titik, dan pesannya.

Beberapa pesan dari server ditampilkan dalam bahasa Inggris; pesan tersebut dikutip apa adanya di bawah.

## Masuk dan akses

| Pesan | Yang perlu dilakukan |
|---|---|
| Tidak ada proyek yang terbuka | Buka proyek dari Console, atau jalankan **Konfersi: Ganti Proyek…** di desktop |
| Proyek memakai paket Gratis dan perlu ditingkatkan untuk memakai Lab | Tingkatkan paket proyek di Console melalui **Proyek Lab → Paket Proyek & Add-on** |
| **Project … was not found or you do not have access.** | Pastikan Anda masuk dengan akun yang benar dan Anda pemilik proyek, diundang, atau anggota organisasi tempat proyek dibagikan |
| Sesi Konfersi kedaluwarsa | Pilih **Masuk** |
| Editor diputus dari akun Konfersi | Seseorang memutusnya di [Perangkat terhubung](../account/security/connected-devices.md). Masuk lagi jika itu Anda |
| **Login link expired or already used** · **Login timed out** · **Sign-in was denied in the browser** | Jalankan **Konfersi: Masuk** lagi dan setujui permintaan barunya. Lihat [Masuk & pembaruan](desktop/sign-in-and-updates.md) |
| **Failed to load Konfersi Lab** (browser) | Pilih **Retry**. Jika berlanjut, periksa koneksi Anda |

## Kuota

| Pesan | Yang perlu dilakukan |
|---|---|
| Kuota **is used up**, atau **No … quota on this project** | Beli add-on atau tingkatkan paket di Console. Lihat [Kuota](get-started.md#kuota) |
| Penambahan titik gagal karena kuota titik | Hapus titik yang tidak diperlukan, atau naikkan kuota titik |

## Pemrosesan

| Status atau pesan | Penyebab | Yang perlu dilakukan |
|---|---|---|
| **Gagal · penyedia data tidak dapat dihubungi** | Copernicus tidak merespons | Tunggu beberapa menit, lalu jalankan lagi |
| **Gagal · penyedia data menolak kredensial** | Ada masalah pada akun penyedia milik Konfersi | Coba lagi nanti; jika berulang, hubungi support |
| **Gagal · data sumber tidak ada** | Penyedia tidak memiliki data di area sekitar titik, misalnya di daratan atau di luar cakupan dataset | Pastikan titik berada di laut. Geser sedikit ke arah laut lalu proses lagi. Variabel lain mungkin tetap berhasil |
| **Terputus · proses lagi** | Proses berhenti tanpa diduga | **Proses Lagi**. Data yang sudah diunduh dipakai ulang |
| **Tidak merespons · tidak ada pembaruan selama … menit** | Tidak ada laporan kemajuan untuk beberapa waktu, sering saat menunggu Copernicus | Tunggu, atau **Mulai Ulang**. Setelah 10 menit, proses ditandai gagal |
| Lama menunggu Copernicus CDS | Antrean ERA5 sedang ramai | Tidak perlu apa-apa; proses berlanjut saat berkasnya siap, meski Lab ditutup |
| Titik sudah sedang diproses | Sudah ada proses yang berjalan untuknya | Pantau di **Proses** |
| Titik tidak bisa dihapus atau dipindahkan karena sedang diproses | Titik tidak bisa diubah di tengah proses | **Batalkan Proses** terlebih dahulu |
| **Sebagian diproses** | Sebagian variabel gagal atau belum berjalan | **Proses Titik** hanya mengambil yang belum ada |

Teks status di atas mengikuti bahasa tampilan editor. Di editor berbahasa Inggris, statusnya antara lain **Failed · could not reach the data provider**, **Failed · source data missing**, dan **Interrupted · process it again**.

## Titik dan batas

| Pesan | Yang perlu dilakukan |
|---|---|
| Format koordinat tidak valid | Ketik derajat desimal dengan koma di antaranya, misalnya `-6.1, 106.8`. Lintang −90 sampai 90, bujur −180 sampai 180 |
| **Required columns 'Lat' and 'Lon' not found.** | Beri nama kolom `Lat` dan `Lon` (atau `Latitude`, `Longitude`). Lihat [Mengimpor titik](points/index.md#mengimpor-titik-dari-berkas) |
| **No point features found in the file.** | Berkas hanya berisi garis atau poligon. Unggah sebagai [batas](map/project-boundaries.md), atau tambahkan titik |
| Unggah batas gagal | Pastikan berkasnya GeoJSON, KML, KMZ, atau Shapefile dalam ZIP di bawah 10 MB |
| **Pencarian kedalaman gagal** | Sumber batimetri tidak menjawab. Coba lagi nanti |

## Peta

| Pesan | Yang perlu dilakukan |
|---|---|
| Overlay belum tersedia | Konfersi belum menyiapkan overlay klimatologi itu. Pilih overlay lain |
| **Snapshot tersimpan: data langsung melewati batas permintaan atau tidak terjangkau** | Batas gratis Open-Meteo tercapai. Snapshot menampilkan data terakhir; coba lagi nanti. Di desktop, lihat pengaturan **Live Forecast: Direct** |
| **Perbesar untuk melihat data langsung di sini** | Perbesar peta |
| Lalu lintas kapal atau lapisan referensi tidak tersedia | Coba lagi nanti |

## Analisis dan grafik

| Pesan | Yang perlu dilakukan |
|---|---|
| **Proses titik ini terlebih dahulu** · **belum diakuisisi** | [Proses titiknya](points/process-points.md) |
| **Tidak tersedia di titik ini** | Variabel tidak memiliki data di sana, misalnya arus yang terlalu dekat pantai |
| Analisis nilai ekstrem tidak konvergen | Coba metode lain atau ubah ambang POT di **Detail Proyek → Ambang Batas** |
| Prediksi pasang surut belum tersedia | Model pasang surut belum terpasang di server; coba lagi nanti |
| Hasil tidak memiliki grafik atau tabel | Pilih **Buka sebagai JSON** untuk melihat hasilnya |
| Penjelasan hanya untuk analisis titik | **Jelaskan** hanya bekerja pada analisis titik, bukan analisis lokasi |

## Dokumen dan laporan

| Pesan | Yang perlu dilakukan |
|---|---|
| Dokumen tidak disimpan karena bukan JSON yang valid | Perbaiki kesalahan yang digarisbawahi, lalu simpan lagi |
| Perencanaan membutuhkan minimal satu lingkungan dan satu operasi | Isi **Operasi & lingkungan** lalu simpan |
| Pembuatan laporan gagal | Pastikan titik sudah diproses dan kuota AI masih ada, lalu coba lagi |

## Pembaruan desktop

| Pesan | Yang perlu dilakukan |
|---|---|
| Versi baru sudah terpasang dan perlu dimuat ulang | Pilih **Reload** |
| Paket unduhan tidak cocok dengan rilisnya | Unduhan rusak. Jalankan **Konfersi: Periksa Pembaruan Konfersi Lab** lagi |
| Tidak dapat memeriksa pembaruan | Periksa koneksi, atau pasang ulang dari Console. Lihat [Memasang ekstensi](desktop/install-the-extension.md) |
