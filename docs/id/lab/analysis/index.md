---
title: Analisis & grafik
description: Setiap analisis Konfersi Lab untuk sebuah titik — deret waktu, statistik, mawar, nilai ekstrem, pasang surut, siklon — dan cara membaca, mengekspor, dan menjelaskan grafiknya.
tags: [lab, analisis, grafik, statistik, mawar, nilai ekstrem, periode ulang, gev, pot, pasang surut, siklon, ekspor]
related: [lab/analysis/data-validation, lab/data, lab/reports-and-documents, legal/ai-and-metocean-disclaimer]
status: published
updated: 2026-10-09
---

Setelah titik [diproses](../points/process-points.md), analisisnya siap dibuka.

## Membuka analisis

- Di **Penjelajah Peta → Analisis & Validasi**, pilih **Pilih Titik** (atau **Ganti Titik**) lalu pilih titiknya. Analisisnya tercantum per variabel.
- Atau di **Konfersi Lab → Analisis**, yang menampilkan **Analisis titik** dan **Analisis lokasi** untuk titik terpilih.

Pilih sebuah analisis, dan grafiknya terbuka di panel **Analitik Data**. Gunakan **Analisis sebelumnya** dan **Analisis berikutnya** untuk berpindah. **Konfersi: Buka Analisis untuk Kondisi…** membuka analisis untuk **Semua kondisi**, **Hanya siklonik**, atau **Hanya non-siklonik**.

Analisis bertanda **Siap · analisis lama** dibuat oleh versi analisis sebelumnya; proses ulang titiknya untuk memperbarui. **Tidak tersedia di titik ini** berarti variabel tersebut tidak memiliki data di sana.

## Analisis titik

Untuk setiap variabel yang sudah diproses (angin, gelombang, arus, suhu permukaan laut, salinitas, presipitasi, suhu udara, tekanan udara):

| Kelompok | Analisis |
|---|---|
| **Deret waktu** | Deret waktu harian, bulanan, tahunan, dan musiman; klimatologi bulanan |
| **Statistik** | Statistik keseluruhan, bulanan, dan musiman |
| **Mawar** | Mawar angin, mawar gelombang, mawar arus: seberapa sering setiap arah dan kekuatan terjadi |
| **Distribusi gabungan** | Distribusi gabungan keseluruhan dan musiman, termasuk tinggi gelombang terhadap periode (Hs–Tm, Hs–Tp) |
| **Nilai ekstrem** | Tingkat ulang untuk periode ulang yang dipilih, dengan pita kepercayaan 90%, memakai **Block Maxima (GEV)** atau **Peaks Over Threshold (GPD)** |
| **Lonjakan monsun** | Kejadian lonjakan yang terkait monsun, bila relevan |

Pengaturan nilai ekstrem, seperti metode dan ambang batas untuk Peaks Over Threshold, diambil dari **Detail Proyek → Ambang Batas**. Gunakan **Isi Ambang Batas Saran** sebagai titik awal, lalu simpan. Jika pencocokan model tidak konvergen untuk datanya, grafik akan memberi tahu.

### Siklon tropis pada deret harian

Grafik **Deret waktu harian** untuk **Angin**, **Gelombang (total)**, dan **Arus** memberi arsiran pada hari-hari ketika siklon tropis berada dalam **500 km** dari titik, berdasarkan catatan IBTrACS. Setiap pita merah muda membentang dari hari pertama hingga hari terakhir badai berada dalam jarak itu, sehingga Anda bisa membedakan puncak akibat badai dari kondisi biasa. Tidak ada yang perlu diaktifkan, dan radiusnya tetap. Jika catatan siklon tidak bisa diakses, grafik tampil tanpa pita.

Untuk melihat lintasan badainya, gunakan [Lintasan siklon di sekitar titik](../map/index.md#lintasan-siklon-di-sekitar-titik) di peta.

## Analisis lokasi

| Analisis | Isinya |
|---|---|
| **Pasang surut** | Prediksi pasang surut untuk tahun yang Anda pilih, tingkat pasang surut (rata-rata air tinggi dan rendah purnama dan perbani, relatif terhadap muka laut rata-rata), dan konstituennya, dari model FES2022, dibandingkan dengan stasiun pasang surut UHSLC terdekat jika ada |
| **Siklon tropis per bulan** | Badai dalam radius pencarian pilihan Anda, per bulan dan kategori, dari IBTrACS |
| **Audit badai (500 km)** | Setiap siklon tropis yang melintas dalam radius 500 km |

## Ekstrem di sepanjang rute

Untuk rute pipa, kabel, atau pelayaran, jalankan **Konfersi: Analisis Ekstrem di Sepanjang Rute…**. Analisis ini membutuhkan minimal dua titik observasi, sesuai [urutan rute](../points/manage-points.md#mengurutkan-titik). Grafiknya menampilkan tingkat ulang di setiap titik sepanjang rute, kasus terburuk, dan titik yang tidak memiliki hasil.

## Bekerja dengan grafik

Di panel **Analitik Data**:

- **Sesuaikan grafik**: jenis grafik, skala (linear atau log), rentang, warna (termasuk palet yang aman bagi buta warna), tebal garis, penanda, ukuran teks, dan garis grid. Terapkan ke **Grafik ini** atau **Semua grafik**, atau **Atur ulang**.
- **Simpan gambar** (PNG) dan **Simpan CSV** untuk memakai datanya di tempat lain.
- **Ekspor semua** menyimpan setiap grafik di tampilan sebagai PNG dan setiap tabel sebagai CSV, dalam satu `.zip` yang dinamai sesuai tampilan.
- **Buka sebagai JSON** untuk memeriksa hasil lengkapnya.

## Hasil analisis tambahan

- **Distribusi gabungan**: frekuensi gabungan ditampilkan untuk **Semua musim** dan setiap musim (Des–Feb, Mar–Mei, Jun–Agu, Sep–Nov): mawar, peta panas kejadian menurut arah dan kelas, tabel frekuensi (%), dan statistik per arah.
- **Nilai ekstrem**: jika tersedia, **Grafik tingkat periode ulang**, **Grafik Q-Q**, dan **Densitas hasil fitting** untuk menilai kecocokan model.
- **Pasang surut**: tabel **Acuan stasiun** menyebutkan stasiun pasut dan sel model FES2022 beserta posisi dan jaraknya. Jika stasiun memvalidasi model: **Observasi vs prediksi**, **Residu (observasi − prediksi)**, dan sebaran **Observasi terhadap prediksi**.
- **Siklon tropis per bulan**: tabel **Kejadian bulanan per kategori**.

## Menjelaskan grafik dengan AI

Pilih **Jelaskan** agar Konfersi Agent membaca angka pada grafik dan menjelaskannya dalam bahasa sehari-hari. Tidak ada yang berjalan sampai Anda memilihnya. **Jelaskan lagi** meminta penjelasan baru.

- Setiap penjelasan adalah satu giliran Konfersi Agent dan memakai jatah AI proyek. Sebelum mulai, Lab menampilkan sisa jatah. Sesudahnya, Lab menampilkan berapa token yang terpakai. Jika jatah sudah habis, Lab menampilkan **Jatah AI sudah habis** dan penjelasan tidak dibuat.
- Hanya ringkasan singkat angka yang dikirim, bukan seluruh data Anda. Penjelasan mengikuti bahasa Lab Anda.
- Jika Konfersi Agent dinonaktifkan untuk Lab Anda, tombol ini menjelaskannya.

Tombol yang sama ada di hasil Perencanaan Misi sebagai **Jelaskan hasil**. Lihat [Perencanaan Misi](../../using-konfersi/mission-planning.md).

<scalar-callout type="warning">Penjelasan dibuat oleh AI. Periksa dengan datanya sebelum mengandalkannya. Lihat [penafian AI & metocean](../../legal/ai-and-metocean-disclaimer.md).</scalar-callout>

## Periksa datanya terlebih dahulu

Sebelum mengandalkan sebuah analisis, [validasi data titiknya](data-validation.md).
