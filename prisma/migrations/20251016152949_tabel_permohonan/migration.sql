-- CreateTable
CREATE TABLE `Users` (
    `id` VARCHAR(191) NOT NULL,
    `nik` VARCHAR(16) NOT NULL,
    `nama` VARCHAR(191) NULL,
    `peran` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `images` VARCHAR(191) NULL,

    UNIQUE INDEX `Users_nik_key`(`nik`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sesi` (
    `id` VARCHAR(191) NOT NULL,
    `token_sesi` VARCHAR(191) NOT NULL,
    `penggunaId` VARCHAR(191) NOT NULL,
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
CREATE TABLE `Account` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `providerAccountId` VARCHAR(191) NOT NULL,
    `access_token` VARCHAR(191) NULL,
    `refresh_token` VARCHAR(191) NULL,
    `expires_at` INTEGER NULL,

    UNIQUE INDEX `Account_provider_providerAccountId_key`(`provider`, `providerAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RT` (
    `id_rt` INTEGER NOT NULL AUTO_INCREMENT,
    `nomor_rt` VARCHAR(6) NOT NULL,
    `nama_lengkap` VARCHAR(191) NOT NULL,
    `no_hp` VARCHAR(13) NULL,
    `alamat` VARCHAR(191) NULL,
    `nik` VARCHAR(16) NULL,

    UNIQUE INDEX `RT_id_rt_key`(`id_rt`),
    UNIQUE INDEX `RT_nomor_rt_key`(`nomor_rt`),
    UNIQUE INDEX `RT_nik_key`(`nik`),
    PRIMARY KEY (`id_rt`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `KK` (
    `id_kk` INTEGER NOT NULL AUTO_INCREMENT,
    `no_kk` VARCHAR(16) NOT NULL,
    `alamat` VARCHAR(191) NULL,
    `nomor_rt` VARCHAR(6) NULL,
    `kode_pos` VARCHAR(191) NULL,
    `desa_kelurahan` VARCHAR(191) NULL,
    `kecamatan` VARCHAR(191) NULL,
    `kabupaten_kota` VARCHAR(191) NULL,
    `provinsi` VARCHAR(191) NULL,

    UNIQUE INDEX `KartuKeluarga_id_kk_key`(`id_kk`),
    UNIQUE INDEX `KartuKeluarga_no_kk_key`(`no_kk`),
    INDEX `KartuKeluarga_nomor_rt_fkey`(`nomor_rt`),
    PRIMARY KEY (`no_kk`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SuratPengajuan` (
    `id_surat` INTEGER NOT NULL AUTO_INCREMENT,
    `nik` VARCHAR(16) NULL,
    `jenis_surat` ENUM('Surat_Pengantar', 'Surat_Domisili', 'Surat_Keterangan', 'Surat_Usaha', 'Surat_Pembuatan_KTP') NOT NULL,
    `keterangan` VARCHAR(191) NULL,
    `tanggal_pengajuan` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `tanggal_proses` DATETIME(3) NULL,
    `tanggal_pengambilan` DATETIME(3) NULL,
    `status` ENUM('Diajukan', 'Diproses', 'Selesai', 'Diambil') NULL DEFAULT 'Diajukan',
    `id_permohonan` INTEGER NULL,

    INDEX `SuratPengajuan_nik_fkey`(`nik`),
    PRIMARY KEY (`id_surat`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Penduduk` (
    `id_penduduk` INTEGER NOT NULL AUTO_INCREMENT,
    `nik` VARCHAR(16) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `jenis_kelamin` ENUM('laki_laki', 'perempuan') NOT NULL,
    `tempat_lahir` VARCHAR(191) NOT NULL,
    `tanggal_lahir` DATE NOT NULL,
    `agama` ENUM('Islam', 'Kristen', 'Katolik', 'Hindu', 'Buddha', 'Konghucu', 'Kepercayaan') NOT NULL,
    `pendidikan` ENUM('Tidak_Sekolah', 'SD', 'SMP', 'SMA', 'Diploma', 'S1', 'S2', 'S3') NOT NULL,
    `pekerjaan` VARCHAR(191) NOT NULL,
    `golongan_darah` ENUM('A', 'B', 'AB', 'O', 'Tidak_Tahu') NOT NULL,
    `status_perkawinan` ENUM('Belum_Kawin', 'Kawin', 'Cerai_Hidup', 'Cerai_Mati') NOT NULL,
    `kewarganegaraan` ENUM('WNI', 'WNA') NOT NULL,
    `status_hubungan` ENUM('Kepala_Keluarga', 'Istri', 'Anak', 'Orang_Tua', 'Lainnya') NOT NULL,
    `no_kk` VARCHAR(16) NULL,

    UNIQUE INDEX `Penduduk_id_penduduk_key`(`id_penduduk`),
    UNIQUE INDEX `Penduduk_nik_key`(`nik`),
    INDEX `Penduduk_no_kk_fkey`(`no_kk`),
    PRIMARY KEY (`nik`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Permohonan` (
    `id_permohonan` INTEGER NOT NULL AUTO_INCREMENT,
    `nik` VARCHAR(16) NOT NULL,
    `tujuan` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Permohonan_nik_index`(`nik`),
    PRIMARY KEY (`id_permohonan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Riwayat` (
    `id_riwayat` INTEGER NOT NULL AUTO_INCREMENT,
    `id_permohonan` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `changeAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Riwayat_id_permohonan_idx`(`id_permohonan`),
    PRIMARY KEY (`id_riwayat`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FileUploads` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_surat` INTEGER NOT NULL,
    `id_rt` INTEGER NULL,
    `jenis_file` ENUM('KTP', 'KK', 'SURAT', 'LAINNYA') NOT NULL,
    `path` VARCHAR(191) NOT NULL,
    `uploaded_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `nik` VARCHAR(16) NULL,

    INDEX `FileUploads_id_rt_fkey`(`id_rt`),
    INDEX `FileUploads_id_surat_fkey`(`id_surat`),
    INDEX `FileUploads_nik_fkey`(`nik`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_nik_fkey` FOREIGN KEY (`nik`) REFERENCES `Penduduk`(`nik`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sesi` ADD CONSTRAINT `Sesi_penggunaId_fkey` FOREIGN KEY (`penggunaId`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Account` ADD CONSTRAINT `Account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RT` ADD CONSTRAINT `RT_nik_fkey` FOREIGN KEY (`nik`) REFERENCES `Penduduk`(`nik`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `KK` ADD CONSTRAINT `KartuKeluarga_nomor_rt_fkey` FOREIGN KEY (`nomor_rt`) REFERENCES `RT`(`nomor_rt`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SuratPengajuan` ADD CONSTRAINT `SuratPengajuan_nik_fkey` FOREIGN KEY (`nik`) REFERENCES `Penduduk`(`nik`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SuratPengajuan` ADD CONSTRAINT `SuratPengajuan_id_permohonan_fkey` FOREIGN KEY (`id_permohonan`) REFERENCES `Permohonan`(`id_permohonan`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Penduduk` ADD CONSTRAINT `Penduduk_no_kk_fkey` FOREIGN KEY (`no_kk`) REFERENCES `KK`(`no_kk`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Permohonan` ADD CONSTRAINT `Permohonan_nik_fkey` FOREIGN KEY (`nik`) REFERENCES `Penduduk`(`nik`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Riwayat` ADD CONSTRAINT `Riwayat_id_permohonan_fkey` FOREIGN KEY (`id_permohonan`) REFERENCES `Permohonan`(`id_permohonan`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FileUploads` ADD CONSTRAINT `FileUploads_id_rt_fkey` FOREIGN KEY (`id_rt`) REFERENCES `RT`(`id_rt`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FileUploads` ADD CONSTRAINT `FileUploads_id_surat_fkey` FOREIGN KEY (`id_surat`) REFERENCES `SuratPengajuan`(`id_surat`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FileUploads` ADD CONSTRAINT `FileUploads_nik_fkey` FOREIGN KEY (`nik`) REFERENCES `Penduduk`(`nik`) ON DELETE SET NULL ON UPDATE CASCADE;
