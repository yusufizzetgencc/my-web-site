/*
  Warnings:

  - You are about to alter the column `category` on the `Blog` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `Blog` MODIFY `category` ENUM('TECHNOLOGY', 'SOFTWARE', 'DESIGN', 'MARKETING', 'AI', 'FOOD', 'MUSIC', 'LIFESTYLE', 'TRAVEL', 'FINANCE', 'EDUCATION', 'HEALTH', 'SPORTS', 'ENTERTAINMENT', 'POLITICS', 'SCIENCE', 'ENVIRONMENT', 'FASHION', 'AUTOMOTIVE', 'REAL_ESTATE', 'PHOTOGRAPHY', 'BUSINESS', 'CULTURE', 'HISTORY', 'RELIGION', 'PHILOSOPHY', 'PARENTING', 'DIY', 'GAMING', 'BOOKS') NOT NULL;
