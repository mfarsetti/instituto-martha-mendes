-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "hotmartUrl" TEXT;

-- CreateTable
CREATE TABLE "CourseLead" (
    "id" TEXT NOT NULL,
    "courseId" TEXT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CourseLead_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CourseLead_courseId_idx" ON "CourseLead"("courseId");

-- CreateIndex
CREATE INDEX "CourseLead_email_idx" ON "CourseLead"("email");

-- CreateIndex
CREATE INDEX "CourseLead_createdAt_idx" ON "CourseLead"("createdAt" DESC);

-- AddForeignKey
ALTER TABLE "CourseLead" ADD CONSTRAINT "CourseLead_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;

