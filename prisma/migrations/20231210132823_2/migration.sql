-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "avatar" TEXT,
ADD COLUMN     "followers" INTEGER,
ADD COLUMN     "posts" JSONB;
