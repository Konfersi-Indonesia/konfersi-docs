---
title: Peta & lapisan
description: Pakai peta proyek di Lab — peta dasar, overlay, prakiraan langsung, lalu lintas kapal, batas, lintasan siklon, stasiun pasut, dan ekspor PNG.
tags: [lab, peta, lapisan, overlay, peta dasar, klimatologi, prakiraan, open-meteo, ais, kapal, zee, batas, siklon, ibtracs, stasiun pasut, uhslc, ekspor, png]
related: [lab/map/project-boundaries, lab/points, lab/data/variables-and-sources]
status: published
updated: 2026-10-09
---

**Peta proyek** menampilkan titik observasi dan batas proyek di atas peta dasar, dengan overlay data opsional. Buka dari **Penjelajah Peta** atau dengan **Konfersi: Buka Peta**.

Selama peta terbuka, tampilan **Kontrol** di bilah samping sekunder berisi kontrol peta. Bilah status menampilkan lintang dan bujur penunjuk; pilih **Salin koordinat** di kotak penunjuk untuk menyalinnya.

## Peta dasar

Pilih latar peta di **Peta dasar** pada **Kontrol**, atau jalankan **Konfersi: Pilih Peta Dasar…**. Setiap peta dasar menampilkan pratinjau setelah pertama kali dilihat; gunakan **Cari basemap** untuk menemukannya. Pilih **Hanya peta dasar** untuk menyembunyikan overlay.

## Overlay

Overlay menampilkan data di atas peta dasar. Tambahkan di **Overlay → Tambah overlay** pada **Kontrol**.

- Daftar menampilkan apa saja yang ada di peta. **Yang teratas digambar paling atas.** Seret untuk mengubah urutan, atau gunakan **Alt+↑/↓**.
- **Tampilkan**, **Sembunyikan**, atau **Hapus dari peta** setiap overlay, dan atur **Opasitas** di **Pengaturan overlay**.
- Legenda setiap overlay ada di bagian bawah tengah peta; perkecil atau perbesar sesuai kebutuhan.

Ada empat jenis overlay.

### Overlay spasial (klimatologi)

Peta rata-rata bulanan dari **ERA5, 1992–2020**, untuk melihat kondisi tipikal di suatu wilayah:

| Overlay | Satuan |
|---|---|
| Kecepatan angin 10 m | m/s |
| Suhu udara 2 m | °C |
| Tekanan permukaan laut rata-rata | hPa |
| Total presipitasi | mm/hari |
| Suhu permukaan laut | °C |
| Tinggi gelombang signifikan | m |

Pilih bulannya dengan **Bulan sebelumnya** dan **Bulan berikutnya**, atau jalankan **Konfersi: Pilih Bulan Overlay…**. Ini rata-rata jangka panjang, bukan kondisi pada hari tertentu. Beberapa overlay mungkin belum tersedia selama Konfersi menyiapkannya.

### Prakiraan langsung

Prakiraan untuk **3 hari** ke depan dari [Open-Meteo](https://open-meteo.com) (paket gratis):

| Cuaca | Laut |
|---|---|
| Kecepatan angin (m/s), aliran angin (animasi), hembusan angin | Tinggi gelombang (m), arah gelombang (animasi), periode gelombang (s) |
| Suhu udara (°C), presipitasi (mm/jam) | Tinggi swell (m) |
| Tekanan permukaan laut (hPa) | Kecepatan arus laut (m/s), arus laut (animasi) |
| Tutupan awan, kelembapan relatif (%) | Suhu permukaan laut (°C) |

- **Putar prakiraan** untuk melangkah menurut waktu; gunakan **Waktu sebelumnya**, **Waktu berikutnya**, dan **Sekarang**, atau **Tampilkan linimasa prakiraan**.
- Pada overlay animasi, partikel bergerak mengikuti aliran; makin terang makin kuat.
- Perbesar peta jika muncul **Perbesar untuk melihat data langsung di sini**.

Open-Meteo membatasi frekuensi pemakaian paket gratisnya. Saat batas tercapai atau layanan tidak terjangkau, Lab menampilkan **Snapshot tersimpan** sebagai pengganti data langsung. Di editor desktop, pengaturan **Konfersi › Live Forecast: Direct** membuat komputer Anda mengambil prakiraan sendiri dengan kuotanya sendiri; legenda menunjukkan apakah data berasal dari **Komputer ini**, **Lewat Konfersi**, atau keduanya. Lihat [Masuk & pembaruan](../desktop/sign-in-and-updates.md#pengaturan).

<scalar-callout type="warning">Prakiraan langsung hanya untuk orientasi. Gunakan prakiraan resmi dan prosedur Anda sendiri untuk keputusan operasional.</scalar-callout>

### Lalu lintas kapal

Posisi kapal AIS per sel peta, dalam skala logaritmik, dari IMF World Seaborne Trade Monitoring System melalui Bank Dunia (CC BY 4.0), periode Januari 2015 hingga Februari 2021. Saring menurut **Jenis kapal**: **Semua kapal**, **Komersial**, **Penangkapan ikan**, **Penumpang**, **Minyak & gas**, atau **Rekreasi**. Overlay ini menunjukkan jalur yang biasa dilalui kapal, bukan posisi kapal saat ini.

### Lapisan referensi

Label dan batas untuk orientasi:

| Lapisan | Menampilkan | Sumber |
|---|---|---|
| **Label** | Nama negara, provinsi, kota, laut, dan ZEE | Natural Earth |
| **Batas negara** | Batas internasional; yang disengketakan bergaris putus-putus | Natural Earth |
| **Provinsi & kab/kota** | Provinsi dan kabupaten/kota di Indonesia; pembagian tingkat pertama di negara lain | Badan Informasi Geospasial; Natural Earth |
| **ZEE (200 mil laut)** | Zona ekonomi eksklusif; batas yang belum disepakati bergaris putus-putus | Marine Regions (CC BY 4.0) |
| **Laut teritorial (12 mil laut)** | Laut teritorial dari garis pangkal | Marine Regions |
| **Zona tambahan (24 mil laut)** | Zona tambahan, 12–24 mil laut dari garis pangkal | Marine Regions |
| **Perairan kepulauan** | Perairan kepulauan dan perairan pedalaman | Marine Regions |

<scalar-callout type="warning">Lapisan referensi hanya untuk referensi. Lapisan ini tidak untuk keperluan hukum atau navigasi.</scalar-callout>

## Lintasan siklon di sekitar titik

Lihat siklon tropis mana saja yang pernah melintas dekat sebuah titik observasi:

1. Di **Penjelajah Peta → Titik Observasi**, klik kanan titiknya lalu pilih **Tampilkan Lintasan Siklon di Peta**. Anda juga bisa menjalankan **Konfersi: Tampilkan Lintasan Siklon di Peta** untuk titik yang dipilih.
2. Di **Radius pencarian**, pilih **250 km**, **500 km**, atau **1000 km**.
3. Setiap badai yang melintas dalam jarak itu digambar sebagai garis, dan peta diperbesar agar lintasan dan titiknya terlihat. Pilih sebuah lintasan untuk melihat nama dan tahun badainya, misalnya *HAIYAN 2013*.

Lintasan berasal dari catatan best-track **IBTrACS**, seluruh catatan tanpa filter tanggal. Badai yang lebih lemah dari badai tropis (di bawah 34 knot) tidak ditampilkan. Warna setiap lintasan menunjukkan kategori Saffir-Simpson terkuat yang dicapai badai selama berada di dalam radius pencarian:

| Warna | Kategori |
|---|---|
| Sian | Badai tropis (TS) |
| Kuning | Kategori 1 |
| Oranye | Kategori 2 |
| Merah | Kategori 3 |
| Magenta | Kategori 4 |
| Ungu | Kategori 5 |

Jika tidak ada badai yang cukup dekat, Lab memberi tahu: *Tidak ada siklon tropis yang melintas dalam 500 km dari (titik) dalam catatan IBTrACS.*

## Stasiun pasut di sekitar titik

Klik kanan sebuah titik lalu pilih **Tampilkan Stasiun Pasut di Peta** (atau jalankan **Konfersi: Tampilkan Stasiun Pasut di Peta**). Lab menandai stasiun pasut **UHSLC** yang dipakai analisis pasut untuk titik ini dengan titik hijau, lalu memperbesar peta agar keduanya terlihat. Pilih titik hijau itu untuk melihat nama stasiunnya.

Jika tidak ada stasiun di dekatnya, Lab memberi tahu bahwa pasut di sana berasal dari model **FES2022**, dan tidak ada yang ditandai. Lihat [Cara data diproses](../data/index.md) untuk cara pasut dimodelkan dan divalidasi.

**Hapus Anotasi Peta**, di bilah judul peta, menghapus lintasan siklon dan stasiun pasut. Menampilkan salah satunya akan menggantikan yang lain.

## Mengekspor peta sebagai PNG

Saat peta terbuka, pilih **Ekspor Peta sebagai PNG** di bilah judul peta, atau jalankan **Konfersi: Ekspor Peta sebagai PNG**.

- Di browser, gambar langsung terunduh. Di editor desktop, pilih lokasi penyimpanannya.
- Nama berkasnya `konfersi-map-YYYYMMDDHHMM.png` (waktu UTC).
- Gambarnya adalah peta seperti yang Anda lihat: peta dasar, overlay, batas, lintasan siklon, dan stasiun pasut. Penanda titik observasi, legenda, popup, dan kontrol peta tidak ikut.

Jika peta belum terbuka, Lab meminta Anda: *Buka peta terlebih dahulu, lalu ekspor.*

## Pengaturan Anda diingat

Peta dasar, overlay, urutan, dan opasitasnya disimpan di akun Anda dan kembali saat Anda membuka peta lagi, di browser maupun desktop.

## Batas proyek

Untuk menampilkan area proyek, unggah berkas batas. Lihat [Batas proyek](project-boundaries.md).
