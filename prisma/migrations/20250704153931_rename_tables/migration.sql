/*
  Warnings:

  - You are about to drop the `Blog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Blog` DROP FOREIGN KEY `Blog_userId_fkey`;

-- DropTable
DROP TABLE `Blog`;

-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `BlogUser` (
    `id` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `BlogUser_username_key`(`username`),
    UNIQUE INDEX `BlogUser_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BlogPost` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `category` ENUM('TECHNOLOGY', 'SOFTWARE', 'DESIGN', 'MARKETING', 'AI', 'FOOD', 'MUSIC', 'LIFESTYLE', 'TRAVEL', 'FINANCE', 'EDUCATION', 'HEALTH', 'SPORTS', 'ENTERTAINMENT', 'POLITICS', 'SCIENCE', 'ENVIRONMENT', 'FASHION', 'AUTOMOTIVE', 'REAL_ESTATE', 'PHOTOGRAPHY', 'BUSINESS', 'CULTURE', 'HISTORY', 'RELIGION', 'PHILOSOPHY', 'PARENTING', 'DIY', 'GAMING', 'BOOKS', 'SELF_IMPROVEMENT', 'CAREER', 'NEWS', 'SOFTWARE_ENGINEERING', 'DEVOPS', 'BACKEND', 'FRONTEND', 'MACHINE_LEARNING', 'DEEP_LEARNING', 'ELECTRONICS', 'ROBOTICS', 'EMBEDDED', 'NEURAL_NETWORKS', 'HEALTH_TECH') NOT NULL,
    `content` LONGTEXT NOT NULL,
    `thumbnail` LONGTEXT NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `BlogPost_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BlogPost` ADD CONSTRAINT `BlogPost_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `BlogUser`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
