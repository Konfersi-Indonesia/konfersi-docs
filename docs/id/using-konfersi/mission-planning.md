---
title: Perencanaan Misi
description: Perkirakan berapa lama rangkaian operasi laut berlangsung setelah cuaca diperhitungkan, dan kapan sebaiknya dimulai, di Konfersi Lab.
tags: [mission-planning, downtime, operations, metocean, weather-window]
related: [using-konfersi/console-projects, using-konfersi/lab-workspace, using-konfersi/metocean-data-sources, using-konfersi/risk-assessment, legal/ai-and-metocean-disclaimer]
status: published
updated: 2026-10-02
---

Perencanaan Misi memperkirakan seberapa jauh cuaca memperpanjang operasi laut. Anda menjelaskan **di mana** pekerjaan dilakukan, **batas** kondisi yang masih bisa dikerjakan kapal dan kru, lalu **urutan** pekerjaannya. Konfersi menjalankan ulang urutan itu terhadap data metocean per jam selama puluhan tahun, dari setiap tanggal mulai yang mungkin. Hasilnya menunjukkan berapa lama operasi kemungkinan berlangsung, bulan mana yang terbaik, dan batas mana yang menyebabkan waktu tunggu.

<scalar-callout type="info">Perencanaan Misi adalah aktivitas di **Konfersi Lab**. Buka proyek Anda dari Console, lalu pilih **Perencanaan Misi** di bilah aktivitas sebelah kiri.</scalar-callout>

## Letak fitur

| Tempat | Isinya |
|---|---|
| **Bilah aktivitas › Perencanaan Misi** (kiri) | Rencana dalam bentuk pohon: lingkungan, operasi › trip › tugas › aktivitas beserta jamnya, masalah, dan **run** sebelumnya |
| **Tab Perencanaan Misi** (area utama) | **Pengaturan** (lingkungan dan pengaturan run) · **Urutan** (operasi, linimasa, tabel tugas) · **Hasil** · **Laporan** |
| **Kontrol › Perencanaan Misi** (bilah samping kanan) | Status rencana, tombol **Jalankan** beserta alasan jika nonaktif, kesiapan data, sisa jam CPU, dan inspektur untuk item yang dipilih di pohon |
| **Peta Proyek** | Lingkungan yang memiliki lokasi tampil sebagai lencana ungu |

Semua perubahan tersimpan otomatis. Jika rekan tim menyimpan rencana yang sama saat Anda sedang menyunting, Anda akan diminta memilih **Muat milik mereka**, **Bandingkan**, atau **Timpa dengan milik saya**, sehingga tidak ada pekerjaan yang hilang.

## 1. Atur lingkungan

**Lingkungan** adalah sekumpulan batas operabilitas di suatu lokasi, misalnya *Pelabuhan*, *Transit*, atau *Lapangan*. Aktivitas hanya dikerjakan selama setiap batas yang aktif terpenuhi.

1. Di **Pengaturan**, tambahkan lingkungan satu per satu, atau gunakan **Buat dari titik observasi** untuk membuat satu lingkungan per titik di proyek Anda. Anda juga bisa **Mulai dari templat** atau **Impor dari CSV**.
2. Pilih **lokasi** untuk setiap lingkungan: titik observasi, koordinat khusus, atau tidak ada. Jika tidak ada, titik peta yang terpilih dipakai saat run.
3. Aktifkan batas yang relevan dan isi nilainya:

| Batas | Arti |
|---|---|
| Tinggi gelombang (Hs), Periode gelombang (Tp) | Batas atas, dalam m dan s |
| Kecepatan angin, Kecepatan arus | Batas atas, dalam m/s |
| Arah gelombang / angin / arus | Sektor yang masih bisa dikerjakan, searah jarum jam dari utara (mis. 300°–60°). Kompas kecil menunjukkan sektornya. |
| Ketinggian angin | Ketinggian tempat batas angin berlaku (mis. ujung crane di 100 m). Angin 10 m diskalakan dengan hukum pangkat 1/7. |
| Jam kerja | Jam per hari pekerjaan diizinkan, berpusat pada tengah hari setempat (24 = sepanjang hari). |

Kolom **Data** menunjukkan apakah data angin, gelombang, dan arus sudah diakuisisi di lokasi tiap lingkungan. Jika ada yang belum, pilih **Akuisisi** untuk memulainya dari titik observasi yang sesuai.

## 2. Susun urutan

Di **Urutan** (atau langsung di pohon), susun **operasi › trip › tugas › aktivitas**:

- **Pengulangan trip**: berapa kali trip dilakukan. Aktifkan *Ulangi sebagai satu kampanye berkelanjutan* jika semua pengulangan harus berlangsung berturut-turut.
- **Aktivitas**: lingkungannya, durasi (jam), dan kontingensi (% tambahan dari durasi). Aktifkan *Harus berjalan tanpa jeda* jika aktivitas memerlukan satu jendela cuaca tanpa putus.
- Di pohon, Anda bisa **menyeret** item untuk mengubah urutan atau memindahkannya ke induk lain, **menduplikasi**, dan **menambah di dalam**.

Di bawah editor, **linimasa dasar** menampilkan seluruh urutan dari awal sampai akhir dalam cuaca sempurna, diwarnai menurut lingkungan. **Tabel tugas** menampilkan perhitungan penuh setiap aktivitas, mis. `3x [12 + (1.2)] = 39.6H`.

## 3. Jalankan

Pilih **Jalankan perencanaan** di tab atau di Kontrol. Tombol ini nonaktif, dengan alasan yang ditampilkan, jika:

- rencana memiliki galat (tercantum di **Masalah rencana**; pilih salah satu untuk melompat ke sana),
- sebuah lingkungan belum memiliki data di lokasinya,
- proyek tidak memiliki sisa jam CPU, atau menggunakan paket Free.

Setiap run memakai jam CPU proyek sesuai lama run berjalan; sisa jam diperbarui saat run selesai. Menjalankan rencana lagi tanpa perubahan apa pun (rencana, data, dan versi perencanaan sama) langsung menampilkan hasil sebelumnya tanpa biaya; pilih **Tetap jalankan lagi** untuk menghitungnya sekali lagi. Menyunting rencana, melihat hasil, mengekspor, dan laporan selalu tersedia.

**Pengaturan run**:

- **Persistensi jendela cuaca**: berapa jam cuaca layak kerja berturut-turut yang dibutuhkan sebelum aktivitas bisa dimulai (bawaan 24).
- **Lanjutan › Kondisi cuaca**: semua cuaca (bawaan), hanya periode siklon, atau di luar periode siklon.
- **Lanjutan › Estimasi downtime**: *Rata-rata (diharapkan)* secara bawaan. *Konservatif, 1-dalam-N* menaikkan setiap nilai downtime ke batas atas kepercayaannya pada 1 − 1/N. Gunakan untuk perencanaan yang berhati-hati; pilihan ini dicantumkan di setiap hasil.

## 4. Baca hasil

- **Dasar data**: periode data per jam yang dimiliki setiap lingkungan (mis. 2007–2025, 18,5 tahun). Jika kurang dari 10 tahun, peringatan menyebutkan bahwa sebaran antartahun dan tanggal mulai terbaik kurang pasti.
- **Seluruh misi**: durasi P10, P50, P80, dan P90 dalam hari (mis. P50 berarti separuh dari semua tanggal mulai selesai dalam waktu itu), serta durasi minimum dalam cuaca sempurna.
- **Tanggal mulai terbaik**, serta bulan terbaik dan terburuk untuk memulai.
- **Heatmap** untuk seluruh misi, tiap trip, tiap tugas, dan downtime tiap lingkungan. Pilih statistik (rata-rata, P50, P80), variabilitas (*dalam bulan* atau *antartahun*), dan periode (harian, mingguan, setengah bulanan). *Dalam bulan* menggabungkan setiap tanggal mulai pada hari kalender itu dari semua tahun; *antartahun* lebih dulu merata-ratakan tanggal mulai tiap tahun, lalu menunjukkan sebaran angka tahunan itu, sehingga terlihat seberapa besar perbedaan satu tahun dengan tahun lain. Nilai mingguan (hari 1–7, 8–14, 15–21, 22–28, 29–31) dan setengah bulanan (1–15, 16–31) adalah rata-rata nilai harian pada hari-hari tersebut. **Tampilkan sebagai tabel** menyajikan angka yang sama dalam tabel.
- **Penyebab downtime**: per lingkungan, porsi jam terhambat ketika tiap batas terlampaui.
- **Bandingkan dengan** run lain untuk melihat heatmap selisih. Biru berarti run ini lebih baik, merah berarti lebih buruk.
- **Ekspor CSV** atau **Ekspor PNG** untuk setiap heatmap.

Hasil tetap tersedia setelah Lab ditutup. Run sebelumnya, milik Anda dan rekan tim, ada di **Run** pada pohon. Setiap proyek menyimpan hasil lengkap (heatmap) dari 50 run terbarunya; run yang lebih lama menyimpan ringkasannya, dan Anda dapat menjalankan rencana lagi untuk melihat heatmap-nya. Sebuah spanduk memberi tahu jika rencana telah berubah sejak hasil dihitung.

## 5. Laporan

**Laporan** menampilkan ringkasan run yang sedang Anda lihat, langsung di layar. Anda bisa melihat sumber Markdown-nya, **Salin**, atau **Unduh .md**. Opsi untuk menjelaskan hasil dengan AI sedang direncanakan; perencanaannya sendiri tidak memakai AI.

## Templat dan CSV

- **Rencana Baru dari Templat…** dimulai dari contoh lengkap: instalasi turbin angin lepas pantai dengan kapal jack-up (2 turbin), dengan lingkungan pelabuhan, transit, pemuatan, instalasi, dan jacking.
- **Ekspor Rencana sebagai CSV** menyimpan dua berkas: `environments.csv` (satu baris per lingkungan) dan `sequence.csv` (satu baris per aktivitas). Sunting di spreadsheet, lalu **Impor Rencana dari CSV…**. Pemisah koma maupun titik koma, serta koma desimal, sama-sama diterima. Anda melihat ringkasan dan masalah sebelum ada yang berubah, dan impor bisa dibatalkan.

## Metode dan data

Pendekatannya mengikuti praktik industri seperti DNV-GL RP C205, dengan panduan dari badan seperti ISO, WMO, dan IMO. Data metocean dijelaskan di [Sumber data metocean](metocean-data-sources.md).

<scalar-callout type="warning">Hasil Perencanaan Misi mendukung perencanaan. Hasil ini bukan studi bersertifikat untuk lokasi tertentu dan tidak menggantikan penilaian profesional maupun prosedur keselamatan Anda. Baca [penafian AI & metocean](../legal/ai-and-metocean-disclaimer.md).</scalar-callout>

## Bantuan

- Pertanyaan tentang akses atau jam CPU: [hubungi dukungan](../support/contact-support.md).
- Orientasi Lab: [Ruang kerja Lab](lab-workspace.md).
