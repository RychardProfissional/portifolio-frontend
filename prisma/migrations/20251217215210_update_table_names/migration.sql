/*
  Warnings:

  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_projectId_fkey";

-- DropTable
DROP TABLE "Comment";

-- DropTable
DROP TABLE "Project";

-- CreateTable
CREATE TABLE "portifolio_project" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "longDescription" TEXT NOT NULL,
    "tags" TEXT[],
    "image" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "github" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "features" TEXT[],
    "challenges" TEXT NOT NULL,
    "technologies" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "portifolio_project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portifolio_comment" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 5,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "portifolio_comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "portifolio_project_slug_key" ON "portifolio_project"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "portifolio_comment_email_projectId_key" ON "portifolio_comment"("email", "projectId");

-- AddForeignKey
ALTER TABLE "portifolio_comment" ADD CONSTRAINT "portifolio_comment_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "portifolio_project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
