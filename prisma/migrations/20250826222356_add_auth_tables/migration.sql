-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role_id` INTEGER NULL,

    UNIQUE INDEX `Users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Akun` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `penggunaId` INTEGER NOT NULL,
    `jenis` VARCHAR(191) NOT NULL,
    `penyedia` VARCHAR(191) NOT NULL,
    `idAkunPenyedia` VARCHAR(191) NOT NULL,
    `token_refresh` TEXT NULL,
    `token_akses` TEXT NULL,
    `kadaluarsa` INTEGER NULL,
    `tipe_token` VARCHAR(191) NULL,
    `lingkup` VARCHAR(191) NULL,
    `token_id` TEXT NULL,
    `status_sesi` VARCHAR(191) NULL,

    UNIQUE INDEX `Akun_penyedia_idAkunPenyedia_key`(`penyedia`, `idAkunPenyedia`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sesi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `token_sesi` VARCHAR(191) NOT NULL,
    `penggunaId` INTEGER NOT NULL,
    `kadaluarsa` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Sesi_token_sesi_key`(`token_sesi`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TokenVerifikasi` (
    `identifier` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `kadaluarsa` DATETIME(3) NOT NULL,

    UNIQUE INDEX `TokenVerifikasi_token_key`(`token`),
    UNIQUE INDEX `TokenVerifikasi_identifier_token_key`(`identifier`, `token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Roles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Admin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NULL,
    `nama_lengkap` VARCHAR(191) NOT NULL,
    `no_hp` VARCHAR(191) NULL,
    `alamat` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RT` (
    `id_rt` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NULL,
    `nomor_rt` INTEGER NOT NULL,
    `nama_lengkap` VARCHAR(191) NOT NULL,
    `no_hp` VARCHAR(191) NULL,
    `alamat` VARCHAR(191) NULL,

    PRIMARY KEY (`id_rt`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `KK` (
    `id_kk` INTEGER NOT NULL AUTO_INCREMENT,
    `no_kk` VARCHAR(191) NOT NULL,
    `kepala_keluarga_id` INTEGER NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `rt` VARCHAR(191) NOT NULL,
    `rw` VARCHAR(191) NOT NULL,
    `kode_pos` VARCHAR(191) NULL,
    `desa_kelurahan` VARCHAR(191) NOT NULL,
    `kecamatan` VARCHAR(191) NOT NULL,
    `kabupaten_kota` VARCHAR(191) NOT NULL,
    `provinsi` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `KK_no_kk_key`(`no_kk`),
    UNIQUE INDEX `KK_kepala_keluarga_id_key`(`kepala_keluarga_id`),
    PRIMARY KEY (`id_kk`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Penduduk` (
    `id_penduduk` INTEGER NOT NULL AUTO_INCREMENT,
    `nik` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `jenis_kelamin` ENUM('laki_laki', 'perempuan') NOT NULL,
    `tanggal_lahir` DATETIME(3) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `no_rt` INTEGER NULL,
    `status_warga` ENUM('tetap', 'kontrak', 'kost', 'lainnya') NULL DEFAULT 'tetap',
    `id_kk` INTEGER NULL,
    `tempat_lahir` VARCHAR(191) NOT NULL,
    `agama` VARCHAR(191) NULL,
    `pekerjaan` VARCHAR(191) NULL,
    `pendidikan_terakhir` VARCHAR(191) NULL,
    `gol_darah` ENUM('A', 'B', 'AB', 'O', 'Tidak_Tahu') NULL,
    `status_perkawinan` ENUM('Belum_Kawin', 'Kawin', 'Cerai_Hidup', 'Cerai_Mati') NULL,
    `tanggal_perkawinan` DATETIME(3) NULL,
    `hubungan_dalam_keluarga` VARCHAR(191) NULL,
    `kewarganegaraan` VARCHAR(191) NULL DEFAULT 'WNI',
    `no_paspor` VARCHAR(191) NULL DEFAULT '-',
    `no_kitap` VARCHAR(191) NULL DEFAULT '-',
    `nama_ayah` VARCHAR(191) NULL,
    `nama_ibu` VARCHAR(191) NULL,

    UNIQUE INDEX `Penduduk_nik_key`(`nik`),
    PRIMARY KEY (`id_penduduk`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SuratPengajuan` (
    `id_surat` INTEGER NOT NULL AUTO_INCREMENT,
    `id_penduduk` INTEGER NOT NULL,
    `jenis_surat` ENUM('Surat_Pengantar', 'Surat_Domisili', 'Surat_Keterangan', 'Surat_Usaha', 'Surat_Pembuatan_KTP') NOT NULL,
    `keterangan` VARCHAR(191) NULL,
    `tanggal_pengajuan` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `tanggal_proses` DATETIME(3) NULL,
    `tanggal_pengambilan` DATETIME(3) NULL,
    `status` ENUM('Diajukan', 'Diproses', 'Selesai', 'Diambil') NULL DEFAULT 'Diajukan',

    PRIMARY KEY (`id_surat`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `Roles`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Akun` ADD CONSTRAINT `Akun_penggunaId_fkey` FOREIGN KEY (`penggunaId`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sesi` ADD CONSTRAINT `Sesi_penggunaId_fkey` FOREIGN KEY (`penggunaId`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Admin` ADD CONSTRAINT `Admin_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RT` ADD CONSTRAINT `RT_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `KK` ADD CONSTRAINT `KK_kepala_keluarga_id_fkey` FOREIGN KEY (`kepala_keluarga_id`) REFERENCES `Penduduk`(`id_penduduk`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Penduduk` ADD CONSTRAINT `Penduduk_no_rt_fkey` FOREIGN KEY (`no_rt`) REFERENCES `RT`(`id_rt`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Penduduk` ADD CONSTRAINT `Penduduk_id_kk_fkey` FOREIGN KEY (`id_kk`) REFERENCES `KK`(`id_kk`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SuratPengajuan` ADD CONSTRAINT `SuratPengajuan_id_penduduk_fkey` FOREIGN KEY (`id_penduduk`) REFERENCES `Penduduk`(`id_penduduk`) ON DELETE RESTRICT ON UPDATE CASCADE;
