---
title: Pemberitahuan Cookie
description: Cookie dan penyimpanan peramban yang digunakan situs web dan aplikasi Konfersi, fungsi masing-masing, serta masa berlakunya.
tags: [legal, cookie, local-storage, privasi]
related: [legal/privacy, legal/terms, trust/security, support/contact-support]
status: draft
updated: 2026-09-27
review: [C1, C2, C3, C5, C6, P6]
---

<scalar-callout type="warning">**Rancangan yang sedang ditinjau.** Pemberitahuan Cookie ini masih berupa rancangan yang menunggu peninjauan oleh penasihat hukum dan persetujuan Direktur PT Konfersi Metocean Climate Consultant, dan belum berlaku. Tanggal mulai berlakunya akan diumumkan di halaman ini. Pemberitahuan ini dibuat dalam Bahasa Indonesia dan bahasa Inggris; apabila terdapat pertentangan, versi Bahasa Indonesia yang berlaku.</scalar-callout>

Pemberitahuan ini menjelaskan cara PT Konfersi Metocean Climate Consultant ("**Konfersi**" atau "**Kami**") menggunakan cookie dan penyimpanan peramban sejenis di konfersi.com, accounts.konfersi.com, app.konfersi.com (Console), dan lab.konfersi.com (Lab). Pemberitahuan ini melengkapi [Kebijakan Privasi](privacy.md) Kami.

## 1. Pengertian cookie dan penyimpanan peramban

1.1. **Cookie** adalah berkas teks kecil yang disimpan oleh situs web di peramban Anda dan dikirimkan kembali ke situs web tersebut pada kunjungan berikutnya.

1.2. **Local storage** dan **session storage** adalah fitur peramban serupa yang memungkinkan situs web menyimpan sejumlah kecil data di perangkat Anda. Session storage terhapus ketika Anda menutup tab peramban; local storage tetap tersimpan hingga Anda atau situs web tersebut menghapusnya.

## 2. Tujuan penggunaan

Kami hanya menggunakan cookie dan penyimpanan peramban dalam dua kategori:

- **Esensial**: diperlukan untuk memproses masuk, menjaga keamanan sesi Anda, dan memindahkan Anda antar-aplikasi Konfersi. Layanan tidak dapat berfungsi tanpanya.
- **Preferensi**: mengingat pilihan Anda, seperti bahasa serta tema terang atau gelap.

Saat ini Kami **tidak** menggunakan cookie analitik, periklanan, maupun pelacakan media sosial. Sebelum memperkenalkan cookie tersebut, Kami akan memperbarui pemberitahuan ini dan meminta persetujuan Anda apabila diwajibkan.

## 3. Cookie yang Kami tetapkan

Cookie yang ditandai "seluruh situs Konfersi" ditetapkan untuk domain `.konfersi.com` agar Anda tetap masuk di Accounts, Console, dan Lab. Cookie tersebut tidak dibagikan ke domain lain.

| Nama | Ditetapkan oleh | Tujuan | Masa berlaku | Kategori |
|---|---|---|---|---|
| `konfersi_session` | Layanan masuk Konfersi, seluruh situs Konfersi | Memastikan Anda dalam keadaan masuk ketika halaman dimuat. HttpOnly (tidak dapat dibaca oleh skrip halaman). | 15 menit | Esensial |
| `konfersi_refresh` | Layanan masuk Konfersi, seluruh situs Konfersi | Menjaga Anda tetap masuk dengan memperbarui sesi Anda. HttpOnly. | 30 hari, atau hingga Anda keluar | Esensial |
| `konfersi_token` | Layanan masuk Konfersi dan aplikasi Konfersi, seluruh situs Konfersi | Meneruskan token masuk berumur pendek antara Accounts, Console, dan Lab. | 15 menit, atau hingga peramban ditutup | Esensial |
| `oauth_state` | Layanan masuk Konfersi | Melindungi proses masuk melalui Google, GitHub, atau Microsoft dari pemalsuan permintaan lintas situs. HttpOnly. | 10 menit | Esensial |
| `oauth_link_user` | Layanan masuk Konfersi | Mengidentifikasi Akun Anda ketika Anda menautkan akun Google, GitHub, atau Microsoft. HttpOnly. | 10 menit | Esensial |
| `konfersi_lang` | Accounts dan Console, seluruh situs Konfersi | Mengingat bahasa pilihan Anda (bahasa Inggris atau Bahasa Indonesia). | 1 tahun | Preferensi |
| `konfersi_theme` | Accounts dan Console, seluruh situs Konfersi | Mengingat tema terang atau gelap pilihan Anda. | 1 tahun | Preferensi |

Staf Konfersi yang masuk ke perangkat administrasi internal Kami juga menerima cookie terpisah `konfersi_admin_session` (1 jam, esensial). Cookie tersebut tidak ditetapkan bagi pelanggan.

## 4. Penyimpanan peramban yang Kami gunakan

| Kunci | Situs | Jenis | Tujuan | Masa berlaku | Kategori |
|---|---|---|---|---|---|
| `konfersi-theme` | konfersi.com | Local storage | Mengingat tema terang atau gelap pilihan Anda. | Hingga dihapus | Preferensi |
| `i18nextLng` | konfersi.com | Local storage | Mengingat bahasa situs web pilihan Anda. | Hingga dihapus | Preferensi |
| `lang` | konfersi.com | Local storage | Mengingat bahasa Anda pada beberapa halaman informasi. | Hingga dihapus | Preferensi |
| Entri *cache* blog | konfersi.com | Session storage | Menyimpan sementara daftar dan artikel blog agar halaman dimuat lebih cepat. Tidak memuat Data Pribadi. | Paling lama 10 menit, terhapus ketika tab ditutup | Esensial |
| `konfersi_lang`, `konfersi_theme` (serta kunci lama `lang`, `preferredLanguage`, `app_lang`, `theme`) | Accounts, Console | Local storage | Salinan pilihan bahasa dan tema Anda, digunakan apabila cookie diblokir. | Hingga dihapus | Preferensi |
| `konfersi_return_to` | Accounts | Session storage | Mengingat halaman Konfersi tujuan Anda setelah masuk atau mendaftar. | Paling lama 30 menit, terhapus ketika tab ditutup | Esensial |
| `konfersi_register_draft:<user code>` | Accounts | Session storage | Menyimpan jawaban yang telah Anda isi pada formulir pendaftaran apabila halaman dimuat ulang. Dihapus setelah pendaftaran selesai. | Hingga pendaftaran selesai atau tab ditutup | Esensial |
| `konfersi_view_mode` | Console | Local storage | Mengingat apakah Anda melihat proyek dalam bentuk daftar atau kisi. | Hingga dihapus | Preferensi |
| `konfersi_onboarding_completed_<user code>` | Console | Local storage | Mengingat bahwa Anda telah menyelesaikan atau menutup pengenalan Console. | Hingga dihapus | Preferensi |

## 5. Layanan pihak ketiga

Ketika Anda melakukan pembayaran di Console, jendela pembayaran dari penyedia gerbang pembayaran Kami, Midtrans, dimuat dari server milik Midtrans. Midtrans dapat menggunakan cookie atau penyimpanan perambannya sendiri untuk memproses pembayaran secara aman dan mencegah kecurangan; hal tersebut tunduk pada kebijakan Midtrans.

Apabila Anda memilih masuk menggunakan Google, GitHub, atau Microsoft, Anda akan dialihkan sementara ke penyedia tersebut, yang dapat menetapkan cookie-nya sendiri berdasarkan kebijakannya.

## 6. Pilihan Anda

6.1. Karena saat ini Kami hanya menggunakan cookie dan penyimpanan yang bersifat esensial dan preferensi, Kami tidak menampilkan spanduk persetujuan cookie. Apabila Kami memperkenalkan cookie analitik atau cookie nonesensial lainnya, Kami akan terlebih dahulu memperbarui pemberitahuan ini dan menyediakan cara bagi Anda untuk menerima atau menolaknya, serta menarik kembali pilihan Anda di kemudian hari.

6.2. Anda dapat memblokir atau menghapus cookie dan penyimpanan peramban melalui pengaturan peramban Anda. Apabila Anda memblokir cookie esensial, Anda tidak akan dapat masuk. Apabila Anda menghapus item preferensi, bahasa dan tema Anda akan kembali ke pengaturan bawaan.

## 7. Perubahan dan kontak

Kami akan memperbarui pemberitahuan ini setiap kali Kami menambah, mengubah, atau menghapus cookie atau item penyimpanan. Tanggal di bagian atas halaman ini menunjukkan pembaruan terakhir. Untuk pertanyaan, hubungi support@konfersi.com atau lihat [Hubungi tim bantuan](../support/contact-support.md).
